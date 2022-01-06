import React from 'react';
import SideNav from '../nav/side_nav'
import Top from '../nav/top'
import Body from './body'

export default function Dashboard() {
    return (
        <>
            <div className="row container-fluid">
                <div className="col-md-2 bg-dark">
                    <div size="60" className="justify-content-between py-3 text-light align-center text-uppercase text-center ">
                        kudipot
                    </div>

                    <div>
                        <SideNav />
                    </div>
                </div>
                <div className="col-md-10">
                    <Top />
                    <Body />
                </div>
            </div>
        </>
    )
}
