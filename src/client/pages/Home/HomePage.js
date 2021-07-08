import React, { useCallback, useState } from 'react';
import { connect } from 'react-redux';
import { Menu } from '../../components/Menu/Menu';
import { MenuPreview } from '../../components/MenuPreview/MenuPreview';

const Home = (menus) => {
    const [initState, setState] = useState(null);
    const handleGetSelectedMenu = useCallback((menu) => {
        setState(menu);
    }, []);
    return (
        <div className="wrapper">
            <div className="menu-summary">
                <div className="container">
                    <div className="row">
                        <div className="col-6 menu-summary-left">
                            <span>{menus.totalSelected} items</span>
                        </div>
                        <div className="col-6 menu-summary-right">
                            {menus.newCountDietryUI?.ve} <span className="dietary">ve</span>
                            {menus.newCountDietryUI?.v} <span className="dietary">v</span>
                            {menus.newCountDietryUI?.n} <span className="dietary">n!</span>
                            {menus.newCountDietryUI?.df} <span className="dietary">df</span>
                            {menus.newCountDietryUI?.gf} <span className="dietary">gf</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container menu-builder">
                <div className="row">
                    <div className="col-4">
                        <Menu menuList={menus} getSelectedMenu={(menu) => handleGetSelectedMenu(menu)}></Menu>
                    </div>
                    <div className="col-8">
                        <h2>Menu preview</h2>
                        <MenuPreview previews={menus.menuPreviews}></MenuPreview>

                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    menus: state.menus,
    menuPreviews: state.menuPreviews,
    totalSelected: state.count,
    newCountDietryUI: state.newCountDietry
})

const HomePage = connect(mapStateToProps, null)(Home)
export default HomePage;
