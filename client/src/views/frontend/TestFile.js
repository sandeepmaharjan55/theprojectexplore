//second

import React, { Component } from "react";

const publisherImageCss = {
    "min-width": "70px",
    filter: "saturate(0%) brightness(61%) contrast(380%) contrast(50%) brightness(208%)",
    "max-height": "18px",
    "object-fit": "contain",
    margin: "7px",
    "margin-top": "14px",
    "margin-bottom": "14px",
    "vertical-align": "middle"
};
const TopBarSearchContainer = {
    display: "inline-block",
    width: "25vw",
    margin: "0",
    "vertical-align": "top",
    "margin-left": "28px",
    "margin-right": "14px",
    "margin-top": "7px",
    "margin-top": "8px",
    width: "calc(50% - 4em - 14px - 7px)",
    width: "calc(50% - 71px)",
    "max-width": "300px",
    float: "left",
};
export class Apsp extends Component {
    render() {
        return (
            <div>
                <div className="ios-footer"><a href="/" className="tab-link active"><i className="icon f7-icons ios-only">world<span
                    className="badge color-red">5</span></i><i className="icon icon-fill f7-icons ios-only">world_fill</i><span
                        className="tabbar-label">Cities</span></a><a href="/trips" className="tab-link"><i
                            className="icon f7-icons ios-only">paper_plane<span className="badge color-red">5</span></i><i
                                className="icon icon-fill f7-icons ios-only">paper_plane_fill<span className="badge color-red">5</span></i><span
                                    className="tabbar-label">Trips</span></a><a href="/chat" className="tab-link"><i
                                        className="icon f7-icons ios-only">chat<span className="badge color-red">42</span></i><i
                                            className="icon icon-fill f7-icons ios-only">chat_fill<span className="badge color-red">42</span></i><span
                                                className="tabbar-label">Chat</span></a></div>
                {/* top bar for search options */}
                <div className="top-bar" id="top-bar">
                    <div className="container">
                        <div className="brand tooltip-set" title="">
                            <svg xmlns="http://www.w3.org/2000/svg" className="logo"
                                viewBox="0 0 908 907">
                                <path fill="var(--brand-color)"
                                    d="M47 487.46C47.36 484.84 47.9 482.14 47.99 479.52C48.71 455.15 51.78 431.05 57.47 407.4C86.9 285.91 156.49 195.1 266.25 135.53C314.99 108.99 367.43 94.19 422.67 89.95C443.16 88.41 463.83 89.14 484.41 89.68C506.34 90.22 528.01 93.92 549.31 99.07C644.44 121.99 722.25 172.09 781.91 249.53C832.64 315.51 859.99 390.52 865.22 473.47C866.76 498.02 866.04 522.66 862.88 547.22C860.17 568.34 856.2 589.19 850.33 609.59C827.31 689.47 784.17 756.62 720.62 810.06C649.5 869.9 567.27 901.95 474.3 906.01C472.13 906.1 469.88 906.64 467.71 907C460.49 907 453.27 907 446.05 907C443.97 906.64 441.99 906.1 439.91 906.01C411.12 905.19 382.86 900.95 355.06 893.73C220.21 858.98 113.34 759.51 68.75 627.73C56.39 591.08 49.35 553.53 47.99 514.81C47.9 512.28 47.36 509.85 47 507.32C47 500.73 47 494.05 47 487.46ZM259.66 714.02C259.66 724.04 264.8 731.44 274.37 734.15C285.02 737.13 294.77 734.42 303.7 728.01C334.03 706.35 364.45 684.87 394.78 663.11C397.94 660.86 400.01 660.68 403.35 662.93C436.39 685.5 469.61 707.7 502.73 730.18C508.87 734.33 515.64 736.68 522.68 734.6C528.91 732.79 535.32 730.27 540.55 726.66C562.58 711.49 584.24 695.79 606.08 680.26C619.44 670.78 632.8 661.31 645.98 651.56C652.66 646.59 655.73 639.91 655.73 631.34C655.64 511.47 655.64 391.6 655.64 271.74C655.64 261.72 650.31 254.41 640.65 251.79C629.91 248.9 620.25 251.7 611.32 258.02C581.17 279.5 551.02 300.89 520.97 322.37C517.99 324.54 515.91 324.72 512.75 322.55C480.8 300.8 448.76 279.23 416.71 257.66C402.27 247.91 388.82 248.09 374.56 258.2C361.56 267.4 348.57 276.7 335.57 285.91C314.72 300.71 293.96 315.51 273.11 330.32C264.08 336.73 259.39 344.94 259.48 356.58C259.84 415.52 259.66 474.46 259.66 533.5L259.66 714.02Z">
                                </path>
                                <path className="snow" fill="#fff"
                                    d="M259.48 356.58C259.39 345.03 264.08 336.73 273.11 330.32C293.96 315.51 314.72 300.71 335.57 285.91C348.57 276.7 361.47 267.4 374.56 258.2C388.82 248.09 402.36 247.91 416.71 257.66C448.76 279.23 480.8 300.8 512.75 322.55C515.91 324.72 517.99 324.54 520.97 322.37C551.02 300.8 581.17 279.41 611.32 258.02C620.25 251.7 629.91 248.81 640.65 251.79C650.31 254.41 655.64 261.72 655.64 271.74C655.64 391.6 655.64 511.47 655.73 631.34C655.73 639.91 652.66 646.59 645.98 651.56C632.8 661.31 619.44 670.78 606.08 680.26C584.33 695.79 562.67 711.49 540.55 726.66C535.23 730.27 528.91 732.79 522.68 734.6C515.55 736.68 508.87 734.33 502.73 730.18C469.61 707.7 436.39 685.5 403.35 662.93C400.01 660.68 397.94 660.86 394.78 663.11C364.45 684.87 334.03 706.44 303.7 728.01C294.77 734.33 285.02 737.13 274.37 734.15C264.71 731.44 259.66 724.04 259.66 714.02C259.66 653.82 259.66 593.61 259.66 533.5C259.66 474.56 259.84 415.61 259.48 356.58ZM517.81 678.82C517.81 581.33 517.81 483.85 517.9 386.37C517.9 383.66 517.08 381.95 514.83 380.41C477.28 355.14 439.73 329.87 402.27 304.59C401.46 304.05 400.56 303.87 399.38 303.33L399.38 306.04C399.38 403.97 399.38 501.9 399.29 599.84C399.29 602.91 400.56 604.35 402.9 605.89C432.87 626.01 462.75 646.23 492.62 666.36C500.66 671.87 508.78 677.28 517.63 683.24C517.72 681.07 517.81 679.9 517.81 678.82Z">
                                </path>
                                <path fill="var(--brand-color)"
                                    d="M517.63 683.24C508.78 677.28 500.66 671.87 492.62 666.36C462.75 646.14 432.78 626.01 402.9 605.89C400.65 604.35 399.29 602.91 399.29 599.84C399.38 501.9 399.38 403.97 399.38 306.04C399.38 305.31 399.38 304.59 399.38 303.33C400.56 303.87 401.55 304.14 402.27 304.59C439.82 329.87 477.28 355.23 514.83 380.41C517.08 381.95 517.9 383.66 517.9 386.37C517.81 483.85 517.81 581.33 517.81 678.82C517.81 679.99 517.72 681.16 517.63 683.24L517.63 683.24Z">
                                </path>
                                <path fill="#eee"
                                    d="M47.03 349.62C47.03 355.41 77.95 366.76 83.54 368.91C83.61 368.93 87.15 370.04 87.7 369.48C91.47 365.65 97.02 364.05 101.35 360.59C109.5 354.08 119.69 325.19 118.39 313.25C118.05 310.12 117.78 306.55 116.6 303.63C115.98 302.1 113.38 297.95 114.58 299.09C131.76 315.5 180.96 302.04 195.82 287.27C200.7 282.42 207.1 256.84 204.23 248.3C202.2 242.25 198.51 238.92 195.79 233.52C195.06 232.06 192.13 229.89 193.59 229.16C198.3 226.78 206.22 230.46 211.52 228.52C223.58 224.12 231.71 213.35 239.91 204.14C246.03 197.26 245.5 187.29 245.5 178.43C245.5 178.24 245.38 176.52 245.5 176.46C246.63 175.88 248.5 178.04 248.71 178.17C257.88 183.62 268.53 186.7 278.2 191.16C303.96 203.07 333.7 203.85 361.64 203.85C364.91 203.85 396.13 198.21 396.13 193.03C396.13 191.87 395.81 195.67 396.64 196.48C397.88 197.69 399.26 198.73 400.58 199.85C404.12 202.86 407.56 206.01 411.38 208.66C420.57 215.03 433.08 218.51 443.89 220.73C461.08 224.25 485.56 226.7 502.95 219.51C506.36 218.1 517.57 213.84 517.57 208.68C517.57 206.95 517.34 212.15 517.57 213.86C518.21 218.64 520.07 222.3 524.01 225.19C530.69 230.08 546.08 228.82 553.55 226.73C567.03 222.95 578.69 211.63 583.28 198.54C585.21 193.03 585.78 188.76 585.78 182.95C585.78 180.89 584.24 175.42 585.78 176.78C604.26 193.02 626.74 195.75 650.43 195.75C656.9 195.75 664.74 196.44 670.86 193.44C673.04 192.37 674.55 190.8 676.23 189.09C677.05 188.27 677.78 184.83 677.78 185.98C677.78 227.43 708.43 234.02 745.8 229.94C752.19 229.24 753.95 218.3 759.73 218.07C763 217.94 758.18 224.45 757.53 227.66C756.26 233.99 756.85 243.79 757.53 250.01C759.48 267.71 767.12 287.6 773.79 304.05C780.4 320.34 792.8 336.2 807.94 345.2C810.97 347 818.52 349 820.6 351.25C823.62 354.52 820.37 362.26 823.05 364.9C830.28 372.01 839.64 384.84 847.93 394.55C852.11 399.45 877.36 412.53 881.83 407.84C893.33 395.77 889.36 385.02 908 376.94C908.25 376.83 908 373.73 908 373.27C908 369.92 902.62 369.18 899.59 367.73C895.81 365.92 892.6 358.13 888.4 355.35C884.27 352.62 875.01 356.49 871.71 353.3C869.26 350.93 875.53 347.51 876.43 344.23C878.78 335.61 878.93 327.9 878.93 318.92C878.93 293.24 868.1 273.9 845.63 263.02C845.45 262.93 845.6 260.21 845.63 260.06C847.52 250.57 848.89 241.27 849.27 231.51C850.07 210.47 852.7 173.82 832.31 159.8C821.08 152.07 812.46 151.23 799.91 149.92C799.51 149.88 796.52 149.59 796.15 148.88C792.41 141.68 796.79 113.46 789.39 97.92C778.84 75.77 754.92 71.3 735.61 61.5C729.37 58.33 728.3 36.49 715.83 28.98C694.17 15.93 664.66 29.38 641.63 26.92C627.32 25.4 596.1 24.81 583.74 32.2C570.8 39.94 564.48 23.91 555.69 22.54C530.55 18.61 506.4 29.14 481.36 29.14C456.42 29.14 434.63 6.61 407.55 15.18C401.5 17.09 399.57 26.28 393.69 28.89C379.9 35 352.61 8.8 333.81 15.99C322.66 20.26 315.77 36.64 293.66 42.54C283.35 45.29 275.99 40.27 266.49 37.44C247.43 31.75 218.37 29.74 202.75 44.02C196.04 50.16 198.95 55.6 195.98 61.83C195.52 62.8 182.18 62.29 176.15 61.83C161.9 60.73 141.43 54.93 126.95 58.75C121.87 60.09 114.34 88.43 114.34 96.94C114.34 97.2 114.52 102.96 113.81 103.3C94.97 112.5 80.31 118.03 70.69 138.6C66.78 146.96 58.44 169.52 64.16 178.9C69.61 187.82 79.76 190.85 86.62 197.98C87 198.38 87.64 200.54 87.09 200.92C68.45 214.05 52.6 225.68 51.39 250.15C50.71 263.93 52.32 269.13 61.61 278.57C62.51 279.49 62.48 281.49 61.61 282.44C54.64 290.05 47.29 298.92 42.48 308.54C35.02 323.44 29.55 350.43 39.09 365.27C42.22 370.12 64.41 389.44 64.41 375.28">
                                </path>
                            </svg>
                            <h2 className="h"> <a className="no-border" href="/">Nomad&nbsp;</a>&nbsp;<a href="/">List</a>&nbsp;</h2>
                            <div className="slogan"><a className="no-border" href="/">Find <span className="link action-open-intro">your
                                place</span></a>&nbsp;</div><span className="top-bar-dropdown-toggle"></span>
                        </div>
                        <div className="search-container" style={TopBarSearchContainer}>
                            <img alt="Clear search" className="action-clear-search"
                            src="/assets/times-circle.svg" />
                            <label htmlFor="search" style={{ display: "none" }}>Search: </label><input
                                id="search" autoComplete="off" type="text" className="search" placeholder="Search" value="" />
                                </div>
                                <span
                                    className="top-bar-user-avatar-position-for-sign-up"></span>
                        <div className="button reverse red action-sign-up show-before-800px">Sign up</div>
                        <div className="button reverse red action-sign-up hide-before-800px">Join Nomad List</div><a rel="noopener"
                            target="_blank" href="https://remoteok.com/" title="Remote Jobs" alt="Remote Jobs" className="nav-item"
                            style={{ "font-weight": "var(--bold)" }}>Remote Jobs <span className="badge tooltip-set" title="">6</span></a>&nbsp; <a
                                rel="noopener follow" href="https://www.safetywing.com/?referenceID=24730000&amp;ref=nomadlist"
                                className="nav-item">Nomad Insurance</a>&nbsp; <a href="/chat" className="nav-item" rel="noopener">Chat</a>&nbsp; <a
                                    href="/meetups" title="Remote Worker Meetups" className="nav-item">Meetups</a>&nbsp; <a rel="follow noopener"
                                        href="https://rebase.to/?ref=nomadlist" title="Rebase Visas &amp; Residency" className="nav-item">Visas &amp;
                            Residency <span className="badge">New</span></a>&nbsp; <a href="/climate-finder" title="Remote Worker Meetups"
                                className="nav-item">Climate Finder</a>&nbsp; <a href="/forum" className="nav-item" rel="noopener">Forum</a>&nbsp; <a
                                    href="/faq" className="nav-item" rel="noopener">FAQ</a>&nbsp; <a href="/dating" title="Digital Nomad Dating"
                                        className="nav-item">Dating <span className="badge">New</span></a>&nbsp; <a href="/community"
                                            title="Remote Work Community" className="nav-item">Members</a>&nbsp; <a rel="noopener" target="_blank"
                                                href="https://remoteok.com/hire-remotely" title="Hire Remotely" alt="Hire Remotely" className="nav-item">Hire
                            Remotely</a>&nbsp; <img alt="Open menu" src="/assets/three-dots.svg" className="top-bar-three-dots" />
                    </div>
                </div>
                <div className="head-image new-user-hero" style={{ backgroundColor: '#3b4a2b', backgroundSize: 'cover', backgroundImage: 'url("https://videodelivery.net/ed83ec0012330711ea783fabd47efdff/thumbnails/thumbnail.jpg?width=600")' }}>
                    <div className="text">
                        <h1 className="action-sign-up">
                            🌍 Go nomad
                        </h1>
                        <p className="action-sign-up">
                            Join a community of 31,105 remote workers living around the world
                        </p>
                        <br />
                        <div style={{ height: '7px' }} />
                        <div className="modal-pay-avatar-a action-sign-up" style={{ textDecoration: 'none', display: 'inline-block' }}>
                            <img alt="Nomad List member" width={40} src="./assets/pixel.gif" height={40} className="avatar lazyload" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=cover,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/fce764f96abbe5fc05c58bd39066c3bf.jpg?1530971598" style={{ zIndex: 112, cursor: 'pointer', backgroundPosition: 'center' }} />
                        </div>
                        <div className="modal-pay-avatar-a action-sign-up" style={{ textDecoration: 'none', display: 'inline-block' }}>
                            <img alt="Nomad List member" width={40} src="./assets/pixel.gif" height={40} className="avatar lazyload" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=cover,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/6fb7e87d5afc810a905f5114d3d751c7.jpg?1606502039" style={{ zIndex: 111, cursor: 'pointer', backgroundPosition: 'center' }} />
                        </div>
                        <div className="modal-pay-avatar-a action-sign-up" style={{ textDecoration: 'none', display: 'inline-block' }}>
                            <img alt="Nomad List member" width={40} src="./assets/pixel.gif" height={40} className="avatar lazyload" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=cover,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/8b6a946e761840d27e84cf6918086c6c.jpg?1594840226" style={{ zIndex: 110, cursor: 'pointer', backgroundPosition: 'center' }} />
                        </div>
                        <div className="modal-pay-avatar-a action-sign-up" style={{ textDecoration: 'none', display: 'inline-block' }}>
                            <img alt="Nomad List member" width={40} src="./assets/pixel.gif" height={40} className="avatar lazyload" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=cover,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/ffcf5e78f2ffb7061c6a91f73ec6d39f.jpg?1608225077" style={{ zIndex: 109, cursor: 'pointer', backgroundPosition: 'center' }} />
                        </div>
                        <div className="modal-pay-avatar-a action-sign-up" style={{ textDecoration: 'none', display: 'inline-block' }}>
                            <img alt="Nomad List member" width={40} src="./assets/pixel.gif" height={40} className="avatar lazyload" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=cover,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/e09f010242dade543effd0943f43c99f.jpg?1540345510" style={{ zIndex: 108, cursor: 'pointer', backgroundPosition: 'center' }} />
                        </div>
                        <div className="modal-pay-avatar-a action-sign-up" style={{ textDecoration: 'none', display: 'inline-block' }}>
                            <img alt="Nomad List member" width={40} src="./assets/pixel.gif" height={40} className="avatar lazyload" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=cover,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/825e27bce3dfa88e317a6155d98219df.jpg?1579812745" style={{ zIndex: 107, cursor: 'pointer', backgroundPosition: 'center' }} />
                        </div>
                        <div className="modal-pay-avatar-a action-sign-up" style={{ textDecoration: 'none', display: 'inline-block' }}>
                            <img alt="Nomad List member" width={40} src="./assets/pixel.gif" height={40} className="avatar lazyload" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=cover,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/edc6e792bc10280f0fc529255fcff680.jpg?1627186954" style={{ zIndex: 106, cursor: 'pointer', backgroundPosition: 'center' }} />
                        </div>
                        <div className="modal-pay-avatar-a action-sign-up" style={{ textDecoration: 'none', display: 'inline-block' }}>
                            <img alt="Nomad List member" width={40} src="./assets/pixel.gif" height={40} className="avatar lazyload" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=cover,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/9e5befd2f1a22c62bab83827a512751c.jpg?1556700869" style={{ zIndex: 105, cursor: 'pointer', backgroundPosition: 'center' }} />
                        </div>
                        <div className="modal-pay-avatar-a action-sign-up" style={{ textDecoration: 'none', display: 'inline-block' }}>
                            <img alt="Nomad List member" width={40} src="./assets/pixel.gif" height={40} className="avatar lazyload" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=cover,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/0b509d0b532c94ae0eb4afb04f4d674b.jpg?1556694102" style={{ zIndex: 104, cursor: 'pointer', backgroundPosition: 'center' }} />
                        </div>
                        <div className="modal-pay-avatar-a action-sign-up" style={{ textDecoration: 'none', display: 'inline-block' }}>
                            <img alt="Nomad List member" width={40} src="./assets/pixel.gif" height={40} className="avatar lazyload" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=cover,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/5b92a4fb8b3a01c1053a8f14e63e2b27.jpg?1606066205" style={{ zIndex: 103, cursor: 'pointer', backgroundPosition: 'center' }} />
                        </div>
                        <div className="modal-pay-avatar-a action-sign-up" style={{ textDecoration: 'none', display: 'inline-block' }}>
                            <img alt="Nomad List member" width={40} src="./assets/pixel.gif" height={40} className="avatar lazyload" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=cover,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/f446647d82b438795b91e7b504eb36e5.jpg?1595341221" style={{ zIndex: 102, cursor: 'pointer', backgroundPosition: 'center' }} />
                        </div>
                        <div className="box">
                            <div className="action-sign-up intro-video-box">
                                <img alt="Explore the world" className="lazyload" src="https://videodelivery.net/ed83ec0012330711ea783fabd47efdff/thumbnails/thumbnail.jpg?width=300" data-src="https://videodelivery.net/ed83ec0012330711ea783fabd47efdff/thumbnails/thumbnail.jpg?width=600" />
                            </div>
                            <input type="email" className="email" placeholder="Type your email..." />
                            <br />
                            <div className="red button reverse action-sign-up action-sign-up-via-new-user-hero">
                                Join Nomad List
                            </div>
                            <br />
                            <span className="members-joined-today" target="_new" style={{ display: 'block', verticalAlign: 'middle', margin: '3px', fontSize: '12px', color: '#ff4742', fontWeight: 'var(--bold)', borderRadius: '6px', paddingLeft: '7px', paddingRight: '7px', paddingTop: '3.5px', paddingBottom: '3.5px', marginBottom: '-14px', textShadow: 'none' }}>
                                <span style={{ fontWeight: 400, color: 'initial' }}>
                                    Already a member?
                                </span>
                                <span style={{ fontWeight: 400 }}>
                                    <a href="javascript:" className="action-open-login-modal">
                                        Log in
                                    </a>
                                </span>
                            </span>
                        </div>
                    </div>
                    <svg viewBox="0 0 1440 120" className="wave">
                        <path d="M1440,21.2101911 L1440,120 L0,120 L0,21.2101911 C120,35.0700637 240,42 360,42 C480,42 600,35.0700637 720,21.2101911 C808.32779,12.416393 874.573633,6.87702029 918.737528,4.59207306 C972.491685,1.8109458 1026.24584,0.420382166 1080,0.420382166 C1200,0.420382166 1320,7.35031847 1440,21.2101911 Z" />
                    </svg>
                </div>
                <div className="backdrop backdrop-intro-video-player" />
                {/* <div className="new-user-hero-press-featured action-sign-up">
                    <p style={{ fontSize: '10px', opacity: '0.5', margin: 0, marginRight: '7px', display: 'inline-block', verticalAlign: 'middle' }}>
                        as seen in
                    </p>
                    <img height={30} alt="New York Times" src="./assets/pixel.gif" className="lazyload" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=cover,height=60,quality=25/https://nomadlist.com/assets/featured/nyt-wide.png?6" />
                    <img height={30} alt="BBC" src="./assets/pixel.gif" className="lazyload" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=cover,height=60,quality=25/https://nomadlist.com/assets/featured/bbc.png?7" />
                    <img height={30} alt="CNN" src="./assets/pixel.gif" className="lazyload" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=cover,height=60,quality=25/https://nomadlist.com/assets/featured/cnn.png?7" />
                    <img height={30} alt="USA Today" src="./assets/pixel.gif" className="lazyload" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=cover,height=60,quality=25/https://nomadlist.com/assets/featured/usa-today.png?7" />
                    <img height={30} alt="CNBC" src="./assets/pixel.gif" className="lazyload" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=cover,height=60,quality=25/https://nomadlist.com/assets/featured/cnbc.png?9" />
                    <img height={30} alt="Guardian" src="./assets/pixel.gif" className="lazyload" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=cover,height=60,quality=25/https://nomadlist.com/assets/featured/guardian.png?7" />
                </div> */}
                <div className="new-user-hero-press-featured action-sign-up">
                    <p style={{
                        "font-size": "10px",
                        opacity: "0.5",
                        margin: "0",
                        "margin-right": "7px",
                        display: "inline-block",
                        "vertical-align": "middle"
                    }}>as seen in</p>
                    <img height={30} style={publisherImageCss} alt="New York Times" src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=cover,height=60,quality=25/https://nomadlist.com/assets/featured/nyt-wide.png?6" className="lazyloaded" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=cover,height=60,quality=25/https://nomadlist.com/assets/featured/nyt-wide.png?6" />
                    <img height={30} style={publisherImageCss} alt="BBC" src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=cover,height=60,quality=25/https://nomadlist.com/assets/featured/bbc.png?7" className="lazyloaded" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=cover,height=60,quality=25/https://nomadlist.com/assets/featured/bbc.png?7" />
                    <img height={30} style={publisherImageCss} alt="CNN" src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=cover,height=60,quality=25/https://nomadlist.com/assets/featured/cnn.png?7" className="lazyloaded" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=cover,height=60,quality=25/https://nomadlist.com/assets/featured/cnn.png?7" />
                    <img height={30} style={publisherImageCss} alt="USA Today" src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=cover,height=60,quality=25/https://nomadlist.com/assets/featured/usa-today.png?7" className="lazyloaded" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=cover,height=60,quality=25/https://nomadlist.com/assets/featured/usa-today.png?7" />
                    <img height={30} style={publisherImageCss} alt="CNBC" src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=cover,height=60,quality=25/https://nomadlist.com/assets/featured/cnbc.png?9" className="lazyloaded" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=cover,height=60,quality=25/https://nomadlist.com/assets/featured/cnbc.png?9" />
                    <img height={30} style={publisherImageCss} alt="Guardian" src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=cover,height=60,quality=25/https://nomadlist.com/assets/featured/guardian.png?7" className="lazyloaded" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=cover,height=60,quality=25/https://nomadlist.com/assets/featured/guardian.png?7" />

                </div>
                <div className="view-container">
                    <div className="map-zoom-buttons">
                        <div className="action-zoom-in">+</div>
                        <div className="action-zoom-out">-</div>
                    </div>
                    {/* <div className="filter-actions">
                        <div className="brand tooltip" title="Click to open nav, double click to go home">
                            <svg alt="Nomad List" className="logo" enableBackground="new 0 0 907.3 906.4" viewBox="0 0 907.3 906.4" xmlns="http://www.w3.org/2000/svg">
                                <path d="m0 463.4c0-7.3 0-14.7 0-22 .4-2.9 1-5.9 1.1-8.8.8-27 4.2-53.7 10.5-79.9 32.6-134.6 109.7-235.2 231.3-301.2 54-29.4 112.1-45.8 173.3-50.5 22.7-1.7 45.6-.9 68.4-.3 24.3.6 48.3 4.7 71.9 10.4 105.4 25.4 191.6 80.9 257.7 166.7 56.2 73.1 86.5 156.2 92.3 248.1 1.7 27.2.9 54.5-2.6 81.7-3 23.4-7.4 46.5-13.9 69.1-25.5 88.5-73.3 162.9-143.7 222.1-78.8 66.3-169.9 101.8-272.9 106.3-2.4.1-4.9.7-7.3 1.1-8 0-16 0-24 0-2.3-.4-4.5-1-6.8-1.1-31.9-.9-63.2-5.6-94-13.6-149.4-38.5-267.8-148.7-317.2-294.7-13.7-40.6-21.5-82.2-23-125.1-.1-2.8-.7-5.5-1.1-8.3zm235.6 29v200c0 11.1 5.7 19.3 16.3 22.3 11.8 3.3 22.6.3 32.5-6.8 33.6-24 67.3-47.8 100.9-71.9 3.5-2.5 5.8-2.7 9.5-.2 36.6 25 73.4 49.6 110.1 74.5 6.8 4.6 14.3 7.2 22.1 4.9 6.9-2 14-4.8 19.8-8.8 24.4-16.8 48.4-34.2 72.6-51.4 14.8-10.5 29.6-21 44.2-31.8 7.4-5.5 10.8-12.9 10.8-22.4-.1-132.8-.1-265.6-.1-398.4 0-11.1-5.9-19.2-16.6-22.1-11.9-3.2-22.6-.1-32.5 6.9-33.4 23.8-66.8 47.5-100.1 71.3-3.3 2.4-5.6 2.6-9.1.2-35.4-24.1-70.9-48-106.4-71.9-16-10.8-30.9-10.6-46.7.6-14.4 10.2-28.8 20.5-43.2 30.7-23.1 16.4-46.1 32.8-69.2 49.2-10 7.1-15.2 16.2-15.1 29.1.4 65.3.2 130.6.2 196z" fill="var(--brand-color)" />
                                <path d="m235.6 492.4c0-65.3.2-130.6-.2-196-.1-12.8 5.1-22 15.1-29.1 23.1-16.4 46.1-32.8 69.2-49.2 14.4-10.2 28.7-20.5 43.2-30.7 15.8-11.2 30.8-11.4 46.7-.6 35.5 23.9 71 47.8 106.4 71.9 3.5 2.4 5.8 2.2 9.1-.2 33.3-23.9 66.7-47.6 100.1-71.3 9.9-7 20.6-10.2 32.5-6.9 10.7 2.9 16.6 11 16.6 22.1 0 132.8 0 265.6.1 398.4 0 9.5-3.4 16.9-10.8 22.4-14.6 10.8-29.4 21.3-44.2 31.8-24.1 17.2-48.1 34.6-72.6 51.4-5.9 4-12.9 6.8-19.8 8.8-7.9 2.3-15.3-.3-22.1-4.9-36.7-24.9-73.5-49.5-110.1-74.5-3.7-2.5-6-2.3-9.5.2-33.6 24.1-67.3 48-100.9 71.9-9.9 7-20.7 10.1-32.5 6.8-10.7-3-16.3-11.2-16.3-22.3 0-66.7 0-133.4 0-200zm285.8 165.9c.1-2.4.2-3.7.2-4.9 0-108 0-216 .1-324 0-3-.9-4.9-3.4-6.6-41.6-28-83.2-56-124.7-84-.9-.6-1.9-.8-3.2-1.4v3c0 108.5 0 217-.1 325.5 0 3.4 1.4 5 4 6.7 33.2 22.3 66.3 44.7 99.4 67 8.9 6.1 17.9 12.1 27.7 18.7z" fillOpacity={0} fill="#000" />
                                <path d="m521.4 658.3c-9.8-6.6-18.8-12.6-27.7-18.7-33.1-22.4-66.3-44.7-99.4-67-2.5-1.7-4-3.3-4-6.7.1-108.5.1-217 .1-325.5 0-.8 0-1.6 0-3 1.3.6 2.4.9 3.2 1.4 41.6 28 83.1 56.1 124.7 84 2.5 1.7 3.4 3.6 3.4 6.6-.1 108-.1 216-.1 324 0 1.3-.1 2.6-.2 4.9z" fill="var(--brand-color)" />
                            </svg>
                            <span className="top-bar-dropdown-toggle" />
                        </div>
                        <div className="button action-toggle-filters">
                            <span className="action-toggle-filters-toggle-filters">
                                <span className="open">All&nbsp;</span>
                                <span className="close">Close&nbsp;</span>filters
                            </span>
                            <span className="action-toggle-filters-show-cities">
                                Show results
                            </span>
                        </div>
                        <div className="input-search-filters-container">
                            <input autoComplete="google_chrome_fix" type="text" className="input-search-filters" placeholder="Search or filter" />
                            <div className="input-search-filters-plus-icon-circle">
                                <div className="input-search-filters-plus-icon" />
                            </div>
                        </div>
                        <div className="search-filters-results" style={{ display: 'none' }} />
                        <div className="filter-actions-mobile-float-clearer" comment="need to clear the float or it doesn't look good on Safari responsive mode" />
                        <div className="option sort-by tooltip" title="Sort results by any attribute you like" id="sort-by" name="sort-by">
                            <label htmlFor="sort-by" style={{ display: 'none' }}>
                                Sort by:{'{'}" "{'}'}
                            </label>
                            <select className="active">
                                <optgroup>
                                    <option className="total_score" selected data-sort="total_score" data-type="score" data-order="desc">
                                        Total score
                                    </option>
                                    <option className="nomad_score" data-sort="nomad_score" data-type="score" data-order="desc">
                                        Nomad score
                                    </option>
                                    <option className="life_score" data-sort="family_score" data-type="score" data-order="desc">
                                        Family score
                                    </option>
                                    <option data-sort="life_score" data-type="score" data-order="desc" data-emoji="🏡">
                                        Quality of life score
                                    </option>
                                    <option data-type="score" data-order="desc" data-sort="personal_score" data-emoji="✨️">
                                        Your Score
                                    </option>
                                    <option data-type="value" data-good="low" data-tab="cost-of-living" data-sort="cost_for_nomad_in_usd" data-prefix="$" data-postfix="/mo" data-order="asc">
                                        Cost for nomad
                                    </option>
                                    <option data-sort="internet_speed" data-postfix="Mbps" data-order="desc" data-good="high">
                                        Internet speed
                                    </option>
                                    <option data-sort="leisure_quality" data-type="score" data-order="desc">
                                        Fun
                                    </option>
                                    <option data-desc="safest" data-asc="unsafest" data-sort="safety_level" data-type="score" data-order="desc">
                                        Safety
                                    </option>
                                    <option data-desc="warmest" data-asc="coldest" className="metric" data-type="value" data-tab="nomad-guide" data-sort="temperatureC" data-postfix="°C" data-order="desc" data-emoji="☀️">
                                        Temperature (now)
                                    </option>
                                    <option className="metric" data-type="value" data-tab="nomad-guide" data-sort="temperatureC_annual_median" data-postfix="°C" data-order="desc" data-asc="low" data-desc="high" data-emoji="☀️">
                                        Temperature (annual avg)
                                    </option>
                                    <option data-type="value" data-good="low" data-sort="air_quality_now" data-postfix=" US AQI" data-order="asc">
                                        Air quality (now)
                                    </option>
                                    <option data-type="value" data-tab="nomad-guide" data-sort="air_quality_annual_or_now" data-postfix=" US AQI" data-order="asc" data-asc="good" data-desc="bad" data-emoji="💨">
                                        Air quality (annual avg)
                                    </option>
                                    <option className="humidity" data-type="value" data-tab="nomad-guide" data-sort="humidity" data-postfix="%" data-order="desc">
                                        Humidity (now)
                                    </option>
                                </optgroup>
                                <optgroup label="Social">
                                    <option className="users_count" data-order="desc" data-type="value" data-good="high" data-tab="people" data-sort="users_now_count_est" data-emoji="📍">
                                        Nomads there now
                                    </option>
                                    <option data-type="ratio" data-tab="reviews" data-sort="likes_ratio" data-postfix=" 👍/👎" data-order="desc" data-emoji>
                                        Members rating
                                    </option>
                                    <option data-type="value" data-tab="people" data-sort="users_now_count_male_est" data-order="desc" data-asc="few" data-desc="many" data-emoji="📍">
                                        Men nomads there now
                                    </option>
                                    <option data-type="value" data-tab="people" data-sort="users_now_count_female_est" data-order="desc" data-asc="few" data-desc="many" data-emoji="📍">
                                        Women nomads there now
                                    </option>
                                    <option data-type="ratio" data-order="desc" data-good="high" data-tab="people" data-sort="nomads_percentage_of_population" data-decimals={3} data-postfix="%" data-emoji="📍">
                                        Nomads % of population
                                    </option>
                                    <option data-type="ratio" data-order="desc" data-good="high" data-tab="people" data-sort="nomads_percentage_of_tourists" data-decimals={2} data-postfix="%" data-emoji="📍">
                                        Nomads % of tourists
                                    </option>
                                    <option data-type="value" data-tab="people" data-sort="users_been_count_est" data-order="desc" data-asc="few" data-desc="many" data-emoji="📍">
                                        Nomads have been
                                    </option>
                                    <option data-type="value" data-tab="reviews" data-sort="review_count" data-order="desc" data-asc="few" data-desc="many" data-emoji="📍">
                                        Number of reviews
                                    </option>
                                    <option data-type="value" data-tab="people" data-sort="trip_length_median" data-postfix=" days" data-order="desc" data-asc="short" data-desc="long" data-emoji="📅">
                                        Trip duration (median)
                                    </option>
                                    <option data-type="value" data-tab="reviews" data-sort="pageviews_30d" data-postfix="/mo" data-order="desc" data-asc="few" data-desc="many" data-emoji="📍">
                                        Pageviews
                                    </option>
                                    <option data-type="value" data-tab="reviews" data-sort="pageviews_growth_30d" data-postfix="% / mo" data-order="desc" data-asc="few" data-desc="many" data-emoji="📍">
                                        Pageviews growth
                                    </option>
                                    <option data-type="ratio" data-tab="people" data-sort="users_been_count_gender_ratio_female" data-postfix="👩 / 100 👨" data-order="desc" data-asc="few" data-desc="many" data-emoji="📍">
                                        Nomads gender ratio
                                    </option>
                                    <option data-type="ratio" data-tab="people" data-sort="nomad_vs_local_gender_ratio" data-order="desc" data-asc="few" data-desc="many" data-emoji="📍">
                                        Nomad vs. local gender ratio
                                    </option>
                                    <option data-type="value" data-tab="reviews" data-sort="chat_messages_count" data-postfix=" in last 90d" data-order="desc" data-emoji>
                                        Nomad List Chat messages
                                    </option>
                                    <option data-type="value" data-tab="reviews" data-sort="likes" data-postfix=" likes" data-order="desc" data-emoji>
                                        Likes from members
                                    </option>
                                    <option data-type="value" data-tab="reviews" data-sort="dislikes" data-postfix=" dislikes" data-order="desc" data-emoji>
                                        Dislikes from members
                                    </option>
                                    <option data-type="ratio" data-tab="reviews" data-sort="likes_ratio" data-postfix=" 👍/👎" data-order="desc" data-emoji>
                                        Like/dislike ratio
                                    </option>
                                    <option data-type="percentage" data-tab="reviews" data-sort="likes_percentage" data-postfix="%" data-order="desc" data-emoji>
                                        Liked percentage
                                    </option>
                                    <option data-type="ratio" data-tab="reviews" data-sort="likes_male_ratio" data-postfix=" 👍/👎" data-order="desc" data-emoji>
                                        Like/dislike ratio by men
                                    </option>
                                    <option data-type="ratio" data-tab="reviews" data-sort="likes_female_ratio" data-postfix=" 👍/👎" data-order="desc" data-emoji>
                                        Like/dislike ratio by women
                                    </option>
                                </optgroup>
                                <optgroup label="Generational">
                                    <option data-type="value" data-tab="people" data-sort="users_been_count_gen_z" data-order="desc" data-asc="few" data-desc="many" data-emoji="📍">
                                        Gen Z nomads have been
                                    </option>
                                    <option data-type="value" data-tab="people" data-sort="users_been_count_gen_y" data-order="desc" data-asc="few" data-desc="many" data-emoji="📍">
                                        Millennial nomads have been
                                    </option>
                                    <option data-type="value" data-tab="people" data-sort="users_been_count_gen_x" data-order="desc" data-asc="few" data-desc="many" data-emoji="📍">
                                        Gen X nomads have been
                                    </option>
                                    <option data-type="value" data-tab="people" data-sort="users_been_count_boomer" data-order="desc" data-asc="few" data-desc="many" data-emoji="📍">
                                        Boomer nomads have been
                                    </option>
                                </optgroup>
                                <optgroup label="Cost">
                                    <option data-type="value" data-tab="cost-of-living" data-sort="cost_for_nomad_in_usd" data-prefix="$" data-postfix="/mo" data-order="asc" data-asc="low" data-desc="high" data-emoji="💵">
                                        Cost for nomad
                                    </option>
                                    <option data-type="value" data-tab="cost-of-living" data-sort="local_cost_in_usd" data-prefix="$" data-postfix="/mo" data-order="asc" data-asc="low" data-desc="high" data-emoji="💵">
                                        Cost for local
                                    </option>
                                    <option data-type="value" data-tab="cost-of-living" data-sort="long_term_cost_in_usd" data-prefix="$" data-postfix="/mo" data-order="asc" data-asc="low" data-desc="high" data-emoji="💵">
                                        Cost for expat
                                    </option>
                                </optgroup>
                                <optgroup label="Travel">
                                    <option data-sort="last_5_year_growth" data-order="desc" data-postfix="% / year" data-type="percentage">
                                        Trips growth last 5Y
                                    </option>
                                    <option data-sort="last_2_year_growth" data-order="desc" data-postfix="% / year" data-type="percentage">
                                        Trips growth last 2Y
                                    </option>
                                    <option data-sort="tourist_visitors_2020_growth" data-order="desc" data-postfix="% / year" data-type="percentage">
                                        Tourism growth 2020
                                    </option>
                                    <option data-sort="tourist_visitors_2017" data-order="desc" data-type="value" data-postfix=" / year">
                                        Tourists per year
                                    </option>
                                    <option data-sort="tourists_per_capita" data-order="desc" data-type="value" data-postfix=" / capita / year" data-emoji="📸">
                                        Tourists per capita
                                    </option>
                                    <option data-type="value" data-tab="scores" data-sort="return_rate" data-order="desc" data-emoji="♻️" data-postfix="%">
                                        Return rate for nomads
                                    </option>
                                </optgroup>
                                <optgroup label="Geo">
                                    <option data-type="value" data-good="low" data-sort="distance" data-postfix=" km" data-order="asc" data-emoji="🗺">
                                        Distance
                                    </option>
                                    <option data-type="value" data-good="low" data-sort="flight_time" data-postfix=" hours" data-order="asc" data-emoji>
                                        Flight time
                                    </option>
                                    <option data-type="value" data-tab="nomad-guide" data-sort="altitude" data-prefix data-postfix="m" data-good="high" data-order="desc" data-decimals={0}>
                                        Altitude
                                    </option>
                                    <option data-type="value" data-tab="nomad-guide" data-sort="climate_koppen_name" data-order="asc">
                                        Climate
                                    </option>
                                </optgroup>
                                <optgroup label="Housing">
                                    <option data-type="value" data-tab="cost-of-living" data-sort="hotel_price_in_usd" data-prefix="$" data-postfix="/d" data-order="asc" data-asc="low" data-desc="high" data-emoji="🏨">
                                        Hotel price
                                    </option>
                                    <option data-type="value" data-tab="cost-of-living" data-sort="airbnb_median_price_in_usd" data-prefix="$" data-postfix="/d" data-order="asc" data-asc="low" data-desc="high" data-emoji="🏩">
                                        Airbnb price
                                    </option>
                                    <option data-type="value" data-tab="cost-of-living" data-sort="apartment_cost_in_usd" data-prefix="$" data-postfix="/mo" data-order="asc" data-asc="low" data-desc="high" data-emoji="🏠">
                                        Rent price 1br
                                    </option>
                                    <option data-type="ratio" data-tab="cost-of-living" data-sort="airbnb_vs_apartment_ratio" data-good="high" data-prefix data-postfix=" to 1" data-order="desc" data-asc="low" data-desc="high" data-emoji="🏩">
                                        Airbnb price vs. rent price
                                    </option>
                                    <option data-type="value" data-tab="cost-of-living" data-sort="housing_price_in_usd" data-prefix="$" data-order="asc" data-asc="low" data-desc="high" data-emoji="🏠">
                                        House price 1br
                                    </option>
                                    <option data-type="value" data-decimals={2} data-tab="cost-of-living" data-sort="beer_in_cafe_in_usd" data-prefix="$" data-order="asc" data-asc="low" data-desc="high" data-emoji="🍺">
                                        Beer price
                                    </option>
                                </optgroup>
                                <optgroup label="Environment">
                                    <option data-type="value" data-tab="nomad-guide" data-sort="air_quality_now" data-postfix=" US AQI" data-order="asc" data-asc="good" data-desc="bad" data-emoji="💨">
                                        Air quality (now)
                                    </option>
                                    <option data-type="value" data-tab="nomad-guide" data-sort="air_quality_annual_or_now" data-postfix=" US AQI" data-order="asc" data-asc="good" data-desc="bad" data-emoji="💨">
                                        Air quality (annual avg)
                                    </option>
                                    <option data-type="value" data-tab="nomad-guide" data-sort="environmental_score" data-order="desc">
                                        Sustainability (EPI)
                                    </option>
                                    <option data-type="value" data-tab="nomad-guide" data-sort="co2_emissions_in_kt" data-postfix=" kt/year" data-order="asc">
                                        CO2 emissions
                                    </option>
                                    <option data-type="value" data-tab="nomad-guide" data-sort="co2_emissions_per_capita" data-postfix=" t/year" data-order="asc">
                                        CO2 per capita
                                    </option>
                                    <option data-type="value" data-tab="nomad-guide" data-sort="noise_decibel" data-postfix=" dB" data-order="asc">
                                        Noise pollution
                                    </option>
                                    <option data-type="value" data-tab="nomad-guide" data-sort="light_pollution" data-postfix=" lumen/m2" data-order="asc">
                                        Light pollution
                                    </option>
                                    <option data-type="value" data-tab="nomad-guide" data-sort="uv_index" data-order="asc" data-asc="low" data-desc="high" data-emoji="🔥">
                                        UV index
                                    </option>
                                    <option data-type="value" data-tab="nomad-guide" data-sort="clean" data-order="desc" data-asc="low" data-desc="high" data-emoji>
                                        Clean city
                                    </option>
                                    <option data-sort="nightlife" data-type="score" data-order="desc">
                                        Nightlife
                                    </option>
                                    <option data-sort="adult_nightlife" data-type="score" data-order="desc">
                                        Adult nightlife
                                    </option>
                                </optgroup>
                                <optgroup label="Society">
                                    <option data-sort="female_friendly" data-type="score" data-order="desc" data-emoji="👩">
                                        Female safety
                                    </option>
                                    <option data-sort="friendliness_to_foreigners" data-type="score" data-order="desc">
                                        Foreigner friendliness
                                    </option>
                                    <option data-sort="racial_tolerance" data-type="score" data-order="desc" data-emoji="🎨">
                                        Racial tolerance
                                    </option>
                                    <option data-sort="press_freedom_score" data-type="score" data-order="desc" data-emoji="💬">
                                        Freedom of speech
                                    </option>
                                    <option data-sort="democracy_score" data-type="score" data-order="desc" data-emoji="🏛">
                                        Democracy
                                    </option>
                                    <option data-sort="human_development_index" data-type="score" data-order="desc" data-emoji="💬">
                                        Human Development Index
                                    </option>
                                    <option data-sort="education_index_score" data-type="score" data-order="desc" data-emoji="🎓">
                                        Education
                                    </option>
                                    <option data-sort="religious" data-postfix="%" data-type="value" data-order="asc" data-emoji="🙏">
                                        Religious
                                    </option>
                                    <option data-sort="islamic" data-type="value" data-order="desc" data-emoji="🙏">
                                        Islamic
                                    </option>
                                    <option data-type="value" data-tab="nomad-guide" data-sort="population" data-order="desc" data-asc="low" data-desc="high" data-emoji="👤">
                                        Population
                                    </option>
                                    <option data-type="value" data-tab="nomad-guide" data-postfix=" ppl/km²" data-sort="population_density" data-order="desc" data-asc="low" data-desc="high" data-emoji="🚩">
                                        Population density
                                    </option>
                                    <option data-sort="happiness_score" data-type="score" data-order="desc" data-emoji="😊">
                                        Happiness
                                    </option>
                                    <option data-sort="lgbt_friendly" data-type="score" data-order="desc" data-emoji="🌈">
                                        LGBTQ+ friendliness
                                    </option>
                                    <option data-type="value" data-decimals={4} data-sort="refugees_per_1000" data-order="desc" data-emoji="🌍">
                                        Refugees per 1,000 ppl
                                    </option>
                                    <option data-type="value" data-decimals={4} data-sort="refugees_by_country_of_origin" data-order="desc" data-emoji="🌍">
                                        Refugees by country of origin
                                    </option>
                                    <option data-type="value" data-tab="nomad-guide" data-postfix=" ppl/km²" data-sort="population_density" data-order="desc" data-asc="low" data-desc="high" data-emoji="🚩">
                                        Density of people
                                    </option>
                                    <option data-type="value" data-tab="nomad-guide" data-postfix=" years" data-sort="legal_drinking_age" data-order="desc" data-asc="low" data-desc="high" data-emoji="🚩">
                                        Legal drinking age
                                    </option>
                                    <option data-type="value" data-tab="nomad-guide" data-postfix=" partners/lifetime" data-sort="sexual_partners" data-order="desc" data-asc="low" data-desc="high" data-emoji="🚩">
                                        Sexual partners avg
                                    </option>
                                    <option data-sort="racism" data-type="score" data-order="desc" data-emoji="🎨">
                                        Racial tolerance
                                    </option>
                                </optgroup>
                                <optgroup label="Economics">
                                    <option data-type="value" data-tab="cost-of-living" data-sort="gdp_per_capita_in_usd" data-prefix="$" data-postfix="/year" data-order="desc" data-emoji="💵">
                                        Income / GDP per capita
                                    </option>
                                    <option data-type="value" data-tab="cost-of-living" data-sort="gdp_growth_rate" data-postfix="%" data-order="desc" data-emoji="📈">
                                        Growth rate economy (GDP)
                                    </option>
                                    <option data-type="value" data-tab="cost-of-living" data-sort="income_inequality" data-postfix="% Gini coefficient" data-order="asc" data-emoji="⚖️">
                                        Income inequality
                                    </option>
                                    <option data-type="value" data-tab="cost-of-living" data-sort="labor_productivity" data-prefix="$" data-postfix="/worker" data-order="desc" data-emoji="💪">
                                        Labor productivity
                                    </option>
                                    <option data-type="value" data-tab="nomad-guide" data-sort="gender_equality" data-postfix="/5" data-order="desc">
                                        Gender equality
                                    </option>
                                    <option data-type="value" data-tab="nomad-guide" data-sort="gender_pay_gap" data-postfix="%" data-order="desc">
                                        Gender pay gap
                                    </option>
                                    <option data-type="value" data-tab="nomad-guide" data-sort="venture_capital_per_year_in_usd" data-prefix="$" data-postfix=" / year" data-order="desc" data-emoji="💰">
                                        Venture capital
                                    </option>
                                    <option data-type="value" data-tab="nomad-guide" data-sort="venture_capital_per_year_per_capita" data-prefix="$" data-postfix=" / year / capita" data-order="desc" data-emoji="💰">
                                        Venture capital per capita
                                    </option>
                                    <option data-type="value" data-tab="cost-of-living" data-sort="tax_to_gdp_ratio" data-postfix="% to GDP" data-order="desc" data-emoji="🎟">
                                        Tax rate (% of GDP)
                                    </option>
                                    <option data-type="value" data-tab="cost-of-living" data-sort="gdp_per_capita_after_tax_in_usd" data-prefix="$" data-postfix="/year" data-order="desc" data-emoji="💵">
                                        GDP per capita after tax
                                    </option>
                                    <option data-type="ratio" data-tab="cost-of-living" data-sort="short_term_cost_of_living_vs_gdp_per_capita_ratio" data-postfix="x" data-order="asc" data-asc="low" data-desc="high" data-emoji="💵">
                                        Cost-to-income ratio
                                    </option>
                                    <option data-type="value" data-tab="cost-of-living" data-sort="tax_per_capita_in_usd" data-prefix="$" data-postfix="/year" data-order="desc" data-emoji="🎟">
                                        Tax per capita
                                    </option>
                                    <option data-type="value" data-tab="cost-of-living" data-sort="product_quality_index" data-order="desc" data-emoji="📦">
                                        Product quality
                                    </option>
                                </optgroup>
                                <optgroup label="Health">
                                    <option data-type="ratio" data-tab="nomad-guide" data-sort="birth_rate" data-decimals={2} data-postfix=" / 👩" data-order="asc" data-emoji="👶">
                                        Birth rate
                                    </option>
                                    <option data-type="value" data-tab="nomad-guide" data-decimals={0} data-sort="homelessness_per_100k" data-postfix=" / 100K people" data-order="asc">
                                        Homelessness
                                    </option>
                                    <option data-type="value" data-tab="nomad-guide" data-sort="gender_ratio_male" data-asc="men" data-desc="women" data-decimals={2} data-postfix="👨 / 100 👩" data-order="desc" data-emoji="👨">
                                        Gender ratio
                                    </option>
                                    <option data-type="value" data-tab="nomad-guide" data-sort="gender_ratio_female" data-asc="men" data-desc="women" data-decimals={2} data-postfix="👩 / 100 👨" data-order="desc" data-emoji="👩">
                                        Gender ratio (inv)
                                    </option>
                                    <option data-type="value" data-tab="nomad-guide" data-sort="average_height" data-order="desc" data-asc="low" data-desc="high" data-emoji="📐">
                                        Height
                                    </option>
                                    <option data-type="value" data-tab="nomad-guide" data-sort="average_height_male" data-order="desc" data-asc="low" data-postfix="cm" data-desc="high" data-emoji="📐👨">
                                        Height men
                                    </option>
                                    <option data-type="value" data-tab="nomad-guide" data-sort="average_height_female" data-order="desc" data-postfix="cm" data-asc="low" data-desc="high" data-emoji="📐👨">
                                        Height women
                                    </option>
                                    <option data-type="value" data-tab="nomad-guide" data-postfix="%" data-sort="overweight_rate" data-order="asc" data-emoji="⚖️">
                                        Overweight rate (BMI&gt;25)
                                    </option>
                                    <option data-type="value" data-tab="nomad-guide" data-postfix="%" data-sort="obesity_rate" data-order="asc" data-emoji="⚖️">
                                        Obesity rate (BMI&gt;30)
                                    </option>
                                    <option data-type="value" data-tab="nomad-guide" data-sort="bmi_male" data-order="asc" data-emoji="🏋">
                                        Body mass index men
                                    </option>
                                    <option data-type="value" data-tab="nomad-guide" data-sort="bmi_female" data-order="asc" data-emoji="🏋️‍♀️">
                                        Body mass index women
                                    </option>
                                    <option data-type="value" data-tab="nomad-guide" data-sort="plastic_surgery_per_year_per_100k" data-postfix=" / 100K people " data-order="asc" data-emoji="💉">
                                        Plastic surgery
                                    </option>
                                    <option data-sort="diabetes_prevalence" data-postfix="%" data-asc="best" data-desc="worst" data-order="asc" data-emoji="🚬">
                                        Diabetes prevalence
                                    </option>
                                    <option data-sort="smoking_prevalence" data-postfix="% smoke" data-asc="best" data-desc="worst" data-order="asc" data-emoji="🚬">
                                        Smoking % / pop
                                    </option>
                                    <option data-sort="smoking_packs_per_year" data-postfix=" packs" data-asc="best" data-desc="worst" data-order="asc" data-emoji="🚬">
                                        Smoking packs / year
                                    </option>
                                    <option data-tab="nomad-guide" data-sort="alcohol_consumption_per_capita" data-postfix=" liter/year per person" data-order="asc" data-emoji="🍺">
                                        Alcohol consumption
                                    </option>
                                    <option data-tab="nomad-guide" data-sort="calories_per_capita" data-postfix=" cal/day per person" data-order="desc">
                                        Calorie consumption
                                    </option>
                                    <option data-tab="nomad-guide" data-sort="carb_to_protein_ratio" data-order="desc">
                                        Carb to protein consumption ratio
                                    </option>
                                    <option data-tab="nomad-guide" data-sort="carbs_percentage_per_capita" data-postfix=" % of diet" data-order="desc">
                                        Carbs consumption %
                                    </option>
                                    <option data-tab="nomad-guide" data-sort="protein_percentage_per_capita" data-postfix=" % of diet" data-order="desc">
                                        Protein consumption %
                                    </option>
                                    <option data-tab="nomad-guide" data-sort="fats_percentage_per_capita" data-postfix=" % of diet" data-order="desc">
                                        Fats consumption %
                                    </option>
                                    <option data-tab="nomad-guide" data-sort="sugar_consumption_per_capita" data-postfix=" kg/year per person" data-order="asc" data-emoji="🍭">
                                        Sugar consumption
                                    </option>
                                    <option data-tab="nomad-guide" data-sort="fat_consumption_per_capita" data-postfix=" kg/year per person" data-order="asc" data-emoji="🐷">
                                        Fat consumption
                                    </option>
                                    <option data-tab="nomad-guide" data-sort="protein_consumption_per_capita" data-postfix=" kg/year per person" data-order="desc" data-emoji="🐔">
                                        Protein consumption
                                    </option>
                                    <option data-tab="nomad-guide" data-sort="coronary_heart_disease_death_rate" data-postfix=" / 100,000" data-order="asc" data-emoji="❤️">
                                        Heart disease death rate
                                    </option>
                                    <option data-tab="nomad-guide" data-sort="cancer_rate" data-postfix=" / 100,000" data-order="asc" data-emoji="🕷">
                                        Cancer rate
                                    </option>
                                    <option data-tab="nomad-guide" data-sort="life_expectancy" data-postfix=" years" data-order="desc" data-emoji="🏥">
                                        Life expectancy
                                    </option>
                                    <option data-sort="median_age" data-order="desc" data-type="value" data-emoji="👴">
                                        Median age
                                    </option>
                                    <option data-sort="healthcare_score" data-type="score" data-order="desc" data-emoji="🏥">
                                        Healthcare
                                    </option>
                                    <option data-sort="hospital_score" data-type="score" data-order="desc" data-emoji="🏥">
                                        Hospital ranking
                                    </option>
                                    <option data-type="value" data-sort="suicide_rate" data-postfix=" / 100k" data-desc="high" data-asc="low" data-order="asc" data-emoji="☠️">
                                        Suicide rate
                                    </option>
                                    <option data-type="value" data-sort="crossfit_gyms" data-order="desc">
                                        Crossfit gyms
                                    </option>
                                </optgroup>
                                <optgroup label="COVID (Corona)">
                                    <option data-type="value" data-sort="corona_cases" data-order="desc">
                                        COVID cases
                                    </option>
                                    <option data-type="value" data-sort="corona_cases_per_million" data-order="desc">
                                        COVID cases per 1M inhabitants
                                    </option>
                                    <option data-type="value" data-sort="corona_deaths" data-order="desc">
                                        COVID deaths
                                    </option>
                                    <option data-type="value" data-sort="corona_deaths_per_million" data-order="desc">
                                        COVID deaths per 1M inhabitants
                                    </option>
                                    <option data-type="value" data-sort="corona_tests" data-order="desc">
                                        COVID tests
                                    </option>
                                    <option data-type="value" data-sort="corona_tests_per_million" data-order="desc">
                                        COVID tests per 1M inhabitants
                                    </option>
                                    <option data-type="value" data-sort="corona_cases_per_tests_percentage" data-order="desc" data-postfix="%">
                                        COVID cases/tests
                                    </option>
                                    <option data-type="value" data-sort="corona_death_rate" data-postfix="%" data-order="desc">
                                        COVID case fatality rate
                                    </option>
                                </optgroup>
                                <optgroup label="Safety">
                                    <option data-type="value" data-sort="guns_per_capita" data-postfix=" / 100" data-desc="high" data-asc="low" data-order="asc" data-emoji="🔫">
                                        Guns per capita
                                    </option>
                                    <option data-type="value" data-asc="good" data-desc="bad" data-sort="homicide_rate" data-postfix=" / 100k" data-order="asc" data-emoji="🔫">
                                        Murder rate
                                    </option>
                                    <option data-type="value" data-asc="good" data-desc="bad" data-sort="suicide_rate" data-postfix=" / 100k" data-order="asc" data-emoji="☠️">
                                        Suicide rate
                                    </option>
                                    <option data-type="value" data-asc="good" data-desc="bad" data-sort="natural_disaster_risk" data-postfix="%" data-order="asc" data-emoji="☠🌪">
                                        Natural disaster risk
                                    </option>
                                    <option data-sort="female_friendly" data-asc="bad" data-desc="good" data-type="score" data-order="desc" data-emoji="👩">
                                        Female safety
                                    </option>
                                    <option data-sort="lgbt_friendly" data-asc="bad" data-desc="good" data-type="score" data-order="desc" data-emoji="🌈">
                                        LGBT safety
                                    </option>
                                    <option data-desc="safest" data-asc="bad" data-sort="safety_level" data-type="score" data-order="desc">
                                        Safety
                                    </option>
                                    <option data-desc="safest" data-asc="unsafest" data-sort="road_traffic_score" data-type="score" data-order="desc">
                                        Traffic safety
                                    </option>
                                </optgroup>
                                <optgroup label="Culture (Hofstede)">
                                    <option data-type="value" data-sort="hofstede_hierarchical" data-order="asc" data-emoji>
                                        Hierarchical
                                    </option>
                                    <option data-type="value" data-sort="hofstede_masculinity" data-order="asc" data-emoji="💪">
                                        Masculinity
                                    </option>
                                    <option data-type="value" data-sort="hofstede_uncertainty_avoidance" data-order="asc" data-emoji="😳">
                                        Risk avoidance
                                    </option>
                                    <option data-type="value" data-sort="hofstede_individualism" data-order="desc" data-emoji="👦">
                                        Individualism
                                    </option>
                                </optgroup>
                                <optgroup label="History">
                                    <option data-type="value" data-sort="ex_colony" data-order="desc" data-emoji="👦">
                                        Ex-colony
                                    </option>
                                    <option data-type="value" data-sort="ex_colony_non_native_independent" data-order="desc" data-emoji="👦">
                                        Ex-colony (now non native pop)
                                    </option>
                                    <option data-type="value" data-sort="ex_colony_returned_to_natives" data-order="desc" data-emoji="👦">
                                        Ex-colony (now native pop)
                                    </option>
                                </optgroup>
                                <optgroup label="Hoodmaps.com">
                                    <option data-sort="hoodmaps_tag_count" data-order="desc" data-type="value">
                                        Tag count
                                    </option>
                                    <option data-sort="hoodmaps_hipsters" data-order="desc" data-type="value" data-emoji="🎅">
                                        Hipsters
                                    </option>
                                    <option data-sort="hoodmaps_suits" data-order="desc" data-type="value" data-emoji="👨‍👔">
                                        Suits
                                    </option>
                                    <option data-sort="hoodmaps_normies" data-order="desc" data-type="value" data-emoji="🏡">
                                        Normies
                                    </option>
                                    <option data-sort="hoodmaps_tourists" data-order="desc" data-type="value" data-emoji="📸">
                                        Tourists
                                    </option>
                                    <option data-sort="hoodmaps_uni" data-order="desc" data-type="value" data-emoji="🎓">
                                        Students
                                    </option>
                                    <option data-sort="hoodmaps_rich" data-order="desc" data-type="value" data-emoji="🤑">
                                        Rich
                                    </option>
                                </optgroup>
                                <optgroup label="Monthly temperature">
                                    <option data-type="value" data-sort="climate_temperatureC_month_01" data-order="desc" data-postfix="°C">
                                        Temperature January
                                    </option>
                                    <option data-type="value" data-sort="climate_temperatureC_month_02" data-order="desc" data-postfix="°C">
                                        Temperature February
                                    </option>
                                    <option data-type="value" data-sort="climate_temperatureC_month_03" data-order="desc" data-postfix="°C">
                                        Temperature March
                                    </option>
                                    <option data-type="value" data-sort="climate_temperatureC_month_04" data-order="desc" data-postfix="°C">
                                        Temperature April
                                    </option>
                                    <option data-type="value" data-sort="climate_temperatureC_month_05" data-order="desc" data-postfix="°C">
                                        Temperature May
                                    </option>
                                    <option data-type="value" data-sort="climate_temperatureC_month_06" data-order="desc" data-postfix="°C">
                                        Temperature June
                                    </option>
                                    <option data-type="value" data-sort="climate_temperatureC_month_07" data-order="desc" data-postfix="°C">
                                        Temperature July
                                    </option>
                                    <option data-type="value" data-sort="climate_temperatureC_month_08" data-order="desc" data-postfix="°C">
                                        Temperature August
                                    </option>
                                    <option data-type="value" data-sort="climate_temperatureC_month_09" data-order="desc" data-postfix="°C">
                                        Temperature September
                                    </option>
                                    <option data-type="value" data-sort="climate_temperatureC_month_10" data-order="desc" data-postfix="°C">
                                        Temperature October
                                    </option>
                                    <option data-type="value" data-sort="climate_temperatureC_month_11" data-order="desc" data-postfix="°C">
                                        Temperature November
                                    </option>
                                    <option data-type="value" data-sort="climate_temperatureC_month_12" data-order="desc" data-postfix="°C">
                                        Temperature December
                                    </option>
                                </optgroup>
                                <optgroup label="Monthly UV index">
                                    <option data-type="value" data-sort="climate_uv_index_month_01" data-order="desc">
                                        UV index January
                                    </option>
                                    <option data-type="value" data-sort="climate_uv_index_month_02" data-order="desc">
                                        UV index February
                                    </option>
                                    <option data-type="value" data-sort="climate_uv_index_month_03" data-order="desc">
                                        UV index March
                                    </option>
                                    <option data-type="value" data-sort="climate_uv_index_month_04" data-order="desc">
                                        UV index April
                                    </option>
                                    <option data-type="value" data-sort="climate_uv_index_month_05" data-order="desc">
                                        UV index May
                                    </option>
                                    <option data-type="value" data-sort="climate_uv_index_month_06" data-order="desc">
                                        UV index June
                                    </option>
                                    <option data-type="value" data-sort="climate_uv_index_month_07" data-order="desc">
                                        UV index July
                                    </option>
                                    <option data-type="value" data-sort="climate_uv_index_month_08" data-order="desc">
                                        UV index August
                                    </option>
                                    <option data-type="value" data-sort="climate_uv_index_month_09" data-order="desc">
                                        UV index September
                                    </option>
                                    <option data-type="value" data-sort="climate_uv_index_month_10" data-order="desc">
                                        UV index October
                                    </option>
                                    <option data-type="value" data-sort="climate_uv_index_month_11" data-order="desc">
                                        UV index November
                                    </option>
                                    <option data-type="value" data-sort="climate_uv_index_month_12" data-order="desc">
                                        UV index December
                                    </option>
                                </optgroup>
                                <optgroup label="Monthly humidity">
                                    <option data-type="value" data-sort="climate_humidity_month_01" data-order="desc" data-postfix="%">
                                        Humidity January
                                    </option>
                                    <option data-type="value" data-sort="climate_humidity_month_02" data-order="desc" data-postfix="%">
                                        Humidity February
                                    </option>
                                    <option data-type="value" data-sort="climate_humidity_month_03" data-order="desc" data-postfix="%">
                                        Humidity March
                                    </option>
                                    <option data-type="value" data-sort="climate_humidity_month_04" data-order="desc" data-postfix="%">
                                        Humidity April
                                    </option>
                                    <option data-type="value" data-sort="climate_humidity_month_05" data-order="desc" data-postfix="%">
                                        Humidity May
                                    </option>
                                    <option data-type="value" data-sort="climate_humidity_month_06" data-order="desc" data-postfix="%">
                                        Humidity June
                                    </option>
                                    <option data-type="value" data-sort="climate_humidity_month_07" data-order="desc" data-postfix="%">
                                        Humidity July
                                    </option>
                                    <option data-type="value" data-sort="climate_humidity_month_08" data-order="desc" data-postfix="%">
                                        Humidity August
                                    </option>
                                    <option data-type="value" data-sort="climate_humidity_month_09" data-order="desc" data-postfix="%">
                                        Humidity September
                                    </option>
                                    <option data-type="value" data-sort="climate_humidity_month_10" data-order="desc" data-postfix="%">
                                        Humidity October
                                    </option>
                                    <option data-type="value" data-sort="climate_humidity_month_11" data-order="desc" data-postfix="%">
                                        Humidity November
                                    </option>
                                    <option data-type="value" data-sort="climate_humidity_month_12" data-order="desc" data-postfix="%">
                                        Humidity December
                                    </option>
                                </optgroup>
                                <optgroup label="Monthly nomads there">
                                    <option data-type="value" data-sort="user_count_month_01_est" data-order="desc">
                                        Nomads there in January
                                    </option>
                                    <option data-type="value" data-sort="user_count_month_02_est" data-order="desc">
                                        Nomads there in February
                                    </option>
                                    <option data-type="value" data-sort="user_count_month_03_est" data-order="desc">
                                        Nomads there in March
                                    </option>
                                    <option data-type="value" data-sort="user_count_month_04_est" data-order="desc">
                                        Nomads there in April
                                    </option>
                                    <option data-type="value" data-sort="user_count_month_05_est" data-order="desc">
                                        Nomads there in May
                                    </option>
                                    <option data-type="value" data-sort="user_count_month_06_est" data-order="desc">
                                        Nomads there in June
                                    </option>
                                    <option data-type="value" data-sort="user_count_month_07_est" data-order="desc">
                                        Nomads there in July
                                    </option>
                                    <option data-type="value" data-sort="user_count_month_08_est" data-order="desc">
                                        Nomads there in August
                                    </option>
                                    <option data-type="value" data-sort="user_count_month_09_est" data-order="desc">
                                        Nomads there in September
                                    </option>
                                    <option data-type="value" data-sort="user_count_month_10_est" data-order="desc">
                                        Nomads there in October
                                    </option>
                                    <option data-type="value" data-sort="user_count_month_11_est" data-order="desc">
                                        Nomads there in November
                                    </option>
                                    <option data-type="value" data-sort="user_count_month_12_est" data-order="desc">
                                        Nomads there in December
                                    </option>
                                </optgroup>
                                <optgroup label="Geo">
                                    <option data-type="value" data-tab="nomad-guide" data-sort="latitude" data-order="desc" data-decimals={0} data-asc="low" data-desc="high" data-emoji="🗺">
                                        Latitude (N to S)
                                    </option>
                                    <option data-type="value" data-tab="nomad-guide" data-sort="longitude" data-order="desc" data-decimals={0} data-asc="low" data-desc="high" data-emoji="🗺">
                                        Longitude (E to W)
                                    </option>
                                </optgroup>
                            </select>
                            <div className="action-select-sort-order">
                                <div className="asc" data-order="asc">
                                    <span className="tooltip" title="Sorting lowest first (asc)" />
                                </div>
                                <div className="desc active" data-order="desc">
                                    <span className="tooltip" title="Sorting highest first (desc)" />
                                </div>
                            </div>
                        </div>
                        <label htmlFor="action-change-view" style={{ display: 'none' }}>
                            Change view:{'{'}" "{'}'}
                        </label>
                        <select id="action-change-view" className="action-change-view tooltip" title="Change the current view to see places in another format">
                            <option value="grid" selected>
                                Grid
                            </option>
                            <option value="map">Map</option>
                        </select>
                        <div style={{ clear: 'both' }} />
                        <div className="active-filters-box" />
                    </div> */}
                    <div className="filter-actions">
                        <div className="brand tooltip-set" title="">
                            <svg alt="Nomad List" className="logo" enable-background="new 0 0 907.3 906.4"
                                viewBox="0 0 907.3 906.4" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="m0 463.4c0-7.3 0-14.7 0-22 .4-2.9 1-5.9 1.1-8.8.8-27 4.2-53.7 10.5-79.9 32.6-134.6 109.7-235.2 231.3-301.2 54-29.4 112.1-45.8 173.3-50.5 22.7-1.7 45.6-.9 68.4-.3 24.3.6 48.3 4.7 71.9 10.4 105.4 25.4 191.6 80.9 257.7 166.7 56.2 73.1 86.5 156.2 92.3 248.1 1.7 27.2.9 54.5-2.6 81.7-3 23.4-7.4 46.5-13.9 69.1-25.5 88.5-73.3 162.9-143.7 222.1-78.8 66.3-169.9 101.8-272.9 106.3-2.4.1-4.9.7-7.3 1.1-8 0-16 0-24 0-2.3-.4-4.5-1-6.8-1.1-31.9-.9-63.2-5.6-94-13.6-149.4-38.5-267.8-148.7-317.2-294.7-13.7-40.6-21.5-82.2-23-125.1-.1-2.8-.7-5.5-1.1-8.3zm235.6 29v200c0 11.1 5.7 19.3 16.3 22.3 11.8 3.3 22.6.3 32.5-6.8 33.6-24 67.3-47.8 100.9-71.9 3.5-2.5 5.8-2.7 9.5-.2 36.6 25 73.4 49.6 110.1 74.5 6.8 4.6 14.3 7.2 22.1 4.9 6.9-2 14-4.8 19.8-8.8 24.4-16.8 48.4-34.2 72.6-51.4 14.8-10.5 29.6-21 44.2-31.8 7.4-5.5 10.8-12.9 10.8-22.4-.1-132.8-.1-265.6-.1-398.4 0-11.1-5.9-19.2-16.6-22.1-11.9-3.2-22.6-.1-32.5 6.9-33.4 23.8-66.8 47.5-100.1 71.3-3.3 2.4-5.6 2.6-9.1.2-35.4-24.1-70.9-48-106.4-71.9-16-10.8-30.9-10.6-46.7.6-14.4 10.2-28.8 20.5-43.2 30.7-23.1 16.4-46.1 32.8-69.2 49.2-10 7.1-15.2 16.2-15.1 29.1.4 65.3.2 130.6.2 196z"
                                    fill="var(--brand-color)"></path>
                                <path
                                    d="m235.6 492.4c0-65.3.2-130.6-.2-196-.1-12.8 5.1-22 15.1-29.1 23.1-16.4 46.1-32.8 69.2-49.2 14.4-10.2 28.7-20.5 43.2-30.7 15.8-11.2 30.8-11.4 46.7-.6 35.5 23.9 71 47.8 106.4 71.9 3.5 2.4 5.8 2.2 9.1-.2 33.3-23.9 66.7-47.6 100.1-71.3 9.9-7 20.6-10.2 32.5-6.9 10.7 2.9 16.6 11 16.6 22.1 0 132.8 0 265.6.1 398.4 0 9.5-3.4 16.9-10.8 22.4-14.6 10.8-29.4 21.3-44.2 31.8-24.1 17.2-48.1 34.6-72.6 51.4-5.9 4-12.9 6.8-19.8 8.8-7.9 2.3-15.3-.3-22.1-4.9-36.7-24.9-73.5-49.5-110.1-74.5-3.7-2.5-6-2.3-9.5.2-33.6 24.1-67.3 48-100.9 71.9-9.9 7-20.7 10.1-32.5 6.8-10.7-3-16.3-11.2-16.3-22.3 0-66.7 0-133.4 0-200zm285.8 165.9c.1-2.4.2-3.7.2-4.9 0-108 0-216 .1-324 0-3-.9-4.9-3.4-6.6-41.6-28-83.2-56-124.7-84-.9-.6-1.9-.8-3.2-1.4v3c0 108.5 0 217-.1 325.5 0 3.4 1.4 5 4 6.7 33.2 22.3 66.3 44.7 99.4 67 8.9 6.1 17.9 12.1 27.7 18.7z"
                                    fillOpacity="0" fill="#000"></path>
                                <path
                                    d="m521.4 658.3c-9.8-6.6-18.8-12.6-27.7-18.7-33.1-22.4-66.3-44.7-99.4-67-2.5-1.7-4-3.3-4-6.7.1-108.5.1-217 .1-325.5 0-.8 0-1.6 0-3 1.3.6 2.4.9 3.2 1.4 41.6 28 83.1 56.1 124.7 84 2.5 1.7 3.4 3.6 3.4 6.6-.1 108-.1 216-.1 324 0 1.3-.1 2.6-.2 4.9z"
                                    fill="var(--brand-color)"></path>
                            </svg><span className="top-bar-dropdown-toggle"></span></div>
                        <div className="button action-toggle-filters"><span className="action-toggle-filters-toggle-filters"><span
                            className="open">All&nbsp;</span><span className="close">Close&nbsp;</span>filters</span><span
                                className="action-toggle-filters-show-cities">Show results</span></div>
                        <div className="input-search-filters-container"><input autoComplete="google_chrome_fix" type="text"
                            className="input-search-filters" placeholder="Search or filter" />
                            <div className="input-search-filters-plus-icon-circle">
                                <div className="input-search-filters-plus-icon"></div>
                            </div>
                        </div>
                        <div className="search-filters-results" style={{ display: "none" }}></div>
                        <div className="filter-actions-mobile-float-clearer"
                            comment="need to clear the float or it doesn't look good on Safari responsive mode"></div>
                        <div className="option sort-by tooltip-set" title="" id="sort-by" name="sort-by"><label htmlFor="sort-by"
                            style={{ display: "none" }}>Sort by: </label><select className="active">
                                <optgroup>
                                    <option className="total_score" selected="selected" data-sort="total_score" data-type="score" data-order="desc">
                                        Total score</option>
                                    <option className="nomad_score" data-sort="nomad_score" data-type="score" data-order="desc">Nomad Score
                                    </option>
                                    <option className="life_score" data-sort="family_score" data-type="score" data-order="desc">Family score
                                    </option>
                                    <option data-sort="life_score" data-type="score" data-order="desc" data-emoji="🏡">Quality of life score
                                    </option>
                                    <option data-type="score" data-order="desc" data-sort="personal_score" data-emoji="✨️">Your Score
                                    </option>
                                    <option data-type="value" data-good="low" data-tab="cost-of-living" data-sort="cost_for_nomad_in_usd"
                                        data-prefix="$" data-postfix="/mo" data-order="asc">Cost for nomad</option>
                                    <option data-sort="internet_speed" data-postfix="Mbps" data-order="desc" data-good="high">Internet speed
                                    </option>
                                    <option data-sort="leisure_quality" data-type="score" data-order="desc">Fun</option>
                                    <option data-desc="safest" data-asc="unsafest" data-sort="safety_level" data-type="score"
                                        data-order="desc">Safety</option>
                                    <option data-desc="warmest" data-asc="coldest" className="metric" data-type="value" data-tab="nomad-guide"
                                        data-sort="temperatureC" data-postfix="°C" data-order="desc" data-emoji="☀️">Temperature (now)
                                    </option>
                                    <option className="metric" data-type="value" data-tab="nomad-guide" data-sort="temperatureC_annual_median"
                                        data-postfix="°C" data-order="desc" data-asc="low" data-desc="high" data-emoji="☀️">Temperature
                                        (annual avg)</option>
                                    <option data-type="value" data-good="low" data-sort="air_quality_now" data-postfix=" US AQI"
                                        data-order="asc">Air quality (now)</option>
                                    <option data-type="value" data-tab="nomad-guide" data-sort="air_quality_annual_or_now"
                                        data-postfix=" US AQI" data-order="asc" data-asc="good" data-desc="bad" data-emoji="💨">Air quality
                                        (annual avg)</option>
                                    <option className="humidity" data-type="value" data-tab="nomad-guide" data-sort="humidity" data-postfix="%"
                                        data-order="desc">Humidity (now)</option>
                                </optgroup>
                                <optgroup label="Social">
                                    <option className="users_count" data-order="desc" data-type="value" data-good="high" data-tab="people"
                                        data-sort="users_now_count_est" data-emoji="📍">Nomads there now</option>
                                    <option data-type="ratio" data-tab="reviews" data-sort="likes_ratio" data-postfix=" 👍/👎"
                                        data-order="desc" data-emoji="">Members rating</option>
                                    <option data-type="value" data-tab="people" data-sort="users_now_count_male_est" data-order="desc"
                                        data-asc="few" data-desc="many" data-emoji="📍">Men nomads there now</option>
                                    <option data-type="value" data-tab="people" data-sort="users_now_count_female_est" data-order="desc"
                                        data-asc="few" data-desc="many" data-emoji="📍">Women nomads there now</option>
                                    <option data-type="ratio" data-order="desc" data-good="high" data-tab="people"
                                        data-sort="nomads_percentage_of_population" data-decimals="3" data-postfix="%" data-emoji="📍">
                                        Nomads % of population</option>
                                    <option data-type="ratio" data-order="desc" data-good="high" data-tab="people"
                                        data-sort="nomads_percentage_of_tourists" data-decimals="2" data-postfix="%" data-emoji="📍">Nomads
                                        % of tourists</option>
                                    <option data-type="value" data-tab="people" data-sort="users_been_count_est" data-order="desc"
                                        data-asc="few" data-desc="many" data-emoji="📍">Nomads have been</option>
                                    <option data-type="value" data-tab="reviews" data-sort="review_count" data-order="desc" data-asc="few"
                                        data-desc="many" data-emoji="📍">Number of reviews</option>
                                    <option data-type="value" data-tab="people" data-sort="trip_length_median" data-postfix=" days"
                                        data-order="desc" data-asc="short" data-desc="long" data-emoji="📅">Trip duration (median)</option>
                                    <option data-type="value" data-tab="reviews" data-sort="pageviews_30d" data-postfix="/mo"
                                        data-order="desc" data-asc="few" data-desc="many" data-emoji="📍">Pageviews</option>
                                    <option data-type="value" data-tab="reviews" data-sort="pageviews_growth_30d" data-postfix="% / mo"
                                        data-order="desc" data-asc="few" data-desc="many" data-emoji="📍">Pageviews growth</option>
                                    <option data-type="ratio" data-tab="people" data-sort="users_been_count_gender_ratio_female"
                                        data-postfix="👩 / 100 👨" data-order="desc" data-asc="few" data-desc="many" data-emoji="📍">Nomads
                                        gender ratio</option>
                                    <option data-type="ratio" data-tab="people" data-sort="nomad_vs_local_gender_ratio" data-order="desc"
                                        data-asc="few" data-desc="many" data-emoji="📍">Nomad vs. local gender ratio</option>
                                    <option data-type="value" data-tab="reviews" data-sort="chat_messages_count" data-postfix=" in last 90d"
                                        data-order="desc" data-emoji="">Nomad List Chat messages</option>
                                    <option data-type="value" data-tab="reviews" data-sort="likes" data-postfix=" likes" data-order="desc"
                                        data-emoji="">Likes from members</option>
                                    <option data-type="value" data-tab="reviews" data-sort="dislikes" data-postfix=" dislikes"
                                        data-order="desc" data-emoji="">Dislikes from members</option>
                                    <option data-type="ratio" data-tab="reviews" data-sort="likes_ratio" data-postfix=" 👍/👎"
                                        data-order="desc" data-emoji="">Like/dislike ratio</option>
                                    <option data-type="percentage" data-tab="reviews" data-sort="likes_percentage" data-postfix="%"
                                        data-order="desc" data-emoji="">Liked percentage</option>
                                    <option data-type="ratio" data-tab="reviews" data-sort="likes_male_ratio" data-postfix=" 👍/👎"
                                        data-order="desc" data-emoji="">Like/dislike ratio by men</option>
                                    <option data-type="ratio" data-tab="reviews" data-sort="likes_female_ratio" data-postfix=" 👍/👎"
                                        data-order="desc" data-emoji="">Like/dislike ratio by women</option>
                                </optgroup>
                                <optgroup label="Generational">
                                    <option data-type="value" data-tab="people" data-sort="users_been_count_gen_z" data-order="desc"
                                        data-asc="few" data-desc="many" data-emoji="📍">Gen Z nomads have been</option>
                                    <option data-type="value" data-tab="people" data-sort="users_been_count_gen_y" data-order="desc"
                                        data-asc="few" data-desc="many" data-emoji="📍">Millennial nomads have been</option>
                                    <option data-type="value" data-tab="people" data-sort="users_been_count_gen_x" data-order="desc"
                                        data-asc="few" data-desc="many" data-emoji="📍">Gen X nomads have been</option>
                                    <option data-type="value" data-tab="people" data-sort="users_been_count_boomer" data-order="desc"
                                        data-asc="few" data-desc="many" data-emoji="📍">Boomer nomads have been</option>
                                </optgroup>
                                <optgroup label="Cost">
                                    <option data-type="value" data-tab="cost-of-living" data-sort="cost_for_nomad_in_usd" data-prefix="$"
                                        data-postfix="/mo" data-order="asc" data-asc="low" data-desc="high" data-emoji="💵">Cost for nomad
                                    </option>
                                    <option data-type="value" data-tab="cost-of-living" data-sort="local_cost_in_usd" data-prefix="$"
                                        data-postfix="/mo" data-order="asc" data-asc="low" data-desc="high" data-emoji="💵">Cost for local
                                    </option>
                                    <option data-type="value" data-tab="cost-of-living" data-sort="long_term_cost_in_usd" data-prefix="$"
                                        data-postfix="/mo" data-order="asc" data-asc="low" data-desc="high" data-emoji="💵">Cost for expat
                                    </option>
                                </optgroup>
                                <optgroup label="Travel">
                                    <option data-sort="last_5_year_growth" data-order="desc" data-postfix="% / year" data-type="percentage">
                                        Trips growth last 5Y</option>
                                    <option data-sort="last_2_year_growth" data-order="desc" data-postfix="% / year" data-type="percentage">
                                        Trips growth last 2Y</option>
                                    <option data-sort="tourist_visitors_2020_growth" data-order="desc" data-postfix="% / year"
                                        data-type="percentage">Tourism growth 2020</option>
                                    <option data-sort="tourist_visitors_2017" data-order="desc" data-type="value" data-postfix=" / year">
                                        Tourists per year</option>
                                    <option data-sort="tourists_per_capita" data-order="desc" data-type="value"
                                        data-postfix=" / capita / year" data-emoji="📸">Tourists per capita</option>
                                    <option data-type="value" data-tab="scores" data-sort="return_rate" data-order="desc" data-emoji="♻️"
                                        data-postfix="%">Return rate for nomads</option>
                                </optgroup>
                                <optgroup label="Geo">
                                    <option data-type="value" data-good="low" data-sort="distance" data-postfix=" km" data-order="asc"
                                        data-emoji="🗺">Distance</option>
                                    <option data-type="value" data-good="low" data-sort="flight_time" data-postfix=" hours" data-order="asc"
                                        data-emoji="">Flight time</option>
                                    <option data-type="value" data-tab="nomad-guide" data-sort="altitude" data-prefix="" data-postfix="m"
                                        data-good="high" data-order="desc" data-decimals="0">Altitude</option>
                                    <option data-type="value" data-tab="nomad-guide" data-sort="climate_koppen_name" data-order="asc">
                                        Climate</option>
                                </optgroup>
                                <optgroup label="Housing">
                                    <option data-type="value" data-tab="cost-of-living" data-sort="hotel_price_in_usd" data-prefix="$"
                                        data-postfix="/d" data-order="asc" data-asc="low" data-desc="high" data-emoji="🏨">Hotel price
                                    </option>
                                    <option data-type="value" data-tab="cost-of-living" data-sort="airbnb_median_price_in_usd"
                                        data-prefix="$" data-postfix="/d" data-order="asc" data-asc="low" data-desc="high" data-emoji="🏩">
                                        Airbnb price</option>
                                    <option data-type="value" data-tab="cost-of-living" data-sort="apartment_cost_in_usd" data-prefix="$"
                                        data-postfix="/mo" data-order="asc" data-asc="low" data-desc="high" data-emoji="🏠">Rent price 1br
                                    </option>
                                    <option data-type="ratio" data-tab="cost-of-living" data-sort="airbnb_vs_apartment_ratio"
                                        data-good="high" data-prefix="" data-postfix=" to 1" data-order="desc" data-asc="low"
                                        data-desc="high" data-emoji="🏩">Airbnb price vs. rent price</option>
                                    <option data-type="value" data-tab="cost-of-living" data-sort="housing_price_in_usd" data-prefix="$"
                                        data-order="asc" data-asc="low" data-desc="high" data-emoji="🏠">House price 1br</option>
                                    <option data-type="value" data-decimals="2" data-tab="cost-of-living" data-sort="beer_in_cafe_in_usd"
                                        data-prefix="$" data-order="asc" data-asc="low" data-desc="high" data-emoji="🍺">Beer price</option>
                                </optgroup>
                                <optgroup label="Environment">
                                    <option data-type="value" data-tab="nomad-guide" data-sort="air_quality_now" data-postfix=" US AQI"
                                        data-order="asc" data-asc="good" data-desc="bad" data-emoji="💨">Air quality (now)</option>
                                    <option data-type="value" data-tab="nomad-guide" data-sort="air_quality_annual_or_now"
                                        data-postfix=" US AQI" data-order="asc" data-asc="good" data-desc="bad" data-emoji="💨">Air quality
                                        (annual avg)</option>
                                    <option data-type="value" data-tab="nomad-guide" data-sort="environmental_score" data-order="desc">
                                        Sustainability (EPI)</option>
                                    <option data-type="value" data-tab="nomad-guide" data-sort="co2_emissions_in_kt" data-postfix=" kt/year"
                                        data-order="asc">CO2 emissions</option>
                                    <option data-type="value" data-tab="nomad-guide" data-sort="co2_emissions_per_capita"
                                        data-postfix=" t/year" data-order="asc">CO2 per capita</option>
                                    <option data-type="value" data-tab="nomad-guide" data-sort="noise_decibel" data-postfix=" dB"
                                        data-order="asc">Noise pollution</option>
                                    <option data-type="value" data-tab="nomad-guide" data-sort="light_pollution" data-postfix=" lumen/m2"
                                        data-order="asc">Light pollution</option>
                                    <option data-type="value" data-tab="nomad-guide" data-sort="uv_index" data-order="asc" data-asc="low"
                                        data-desc="high" data-emoji="🔥">UV index</option>
                                    <option data-type="value" data-tab="nomad-guide" data-sort="clean" data-order="desc" data-asc="low"
                                        data-desc="high" data-emoji="">Clean city</option>
                                    <option data-sort="nightlife" data-type="score" data-order="desc">Nightlife</option>
                                    <option data-sort="adult_nightlife" data-type="score" data-order="desc">Adult nightlife</option>
                                </optgroup>
                                <optgroup label="Society">
                                    <option data-sort="female_friendly" data-type="score" data-order="desc" data-emoji="👩">Female safety
                                    </option>
                                    <option data-sort="friendliness_to_foreigners" data-type="score" data-order="desc">Foreigner
                                        friendliness</option>
                                    <option data-sort="racial_tolerance" data-type="score" data-order="desc" data-emoji="🎨">Racial
                                        tolerance</option>
                                    <option data-sort="press_freedom_score" data-type="score" data-order="desc" data-emoji="💬">Freedom of
                                        speech</option>
                                    <option data-sort="democracy_score" data-type="score" data-order="desc" data-emoji="🏛">Democracy
                                    </option>
                                    <option data-sort="human_development_index" data-type="score" data-order="desc" data-emoji="💬">Human
                                        Development Index</option>
                                    <option data-sort="education_index_score" data-type="score" data-order="desc" data-emoji="🎓">Education
                                    </option>
                                    <option data-sort="religious" data-postfix="%" data-type="value" data-order="asc" data-emoji="🙏">
                                        Religious</option>
                                    <option data-sort="islamic" data-type="value" data-order="desc" data-emoji="🙏">Islamic</option>
                                    <option data-type="value" data-tab="nomad-guide" data-sort="population" data-order="desc" data-asc="low"
                                        data-desc="high" data-emoji="👤">Population</option>
                                    <option data-type="value" data-tab="nomad-guide" data-postfix=" ppl/km²" data-sort="population_density"
                                        data-order="desc" data-asc="low" data-desc="high" data-emoji="🚩">Population density</option>
                                    <option data-sort="happiness_score" data-type="score" data-order="desc" data-emoji="😊">Happiness
                                    </option>
                                    <option data-sort="lgbt_friendly" data-type="score" data-order="desc" data-emoji="🌈">LGBTQ+
                                        friendliness</option>
                                    <option data-type="value" data-decimals="4" data-sort="refugees_per_1000" data-order="desc"
                                        data-emoji="🌍">Refugees per 1,000 ppl</option>
                                    <option data-type="value" data-decimals="4" data-sort="refugees_by_country_of_origin" data-order="desc"
                                        data-emoji="🌍">Refugees by country of origin</option>
                                    <option data-type="value" data-tab="nomad-guide" data-postfix=" ppl/km²" data-sort="population_density"
                                        data-order="desc" data-asc="low" data-desc="high" data-emoji="🚩">Density of people</option>
                                    <option data-type="value" data-tab="nomad-guide" data-postfix=" years" data-sort="legal_drinking_age"
                                        data-order="desc" data-asc="low" data-desc="high" data-emoji="🚩">Legal drinking age</option>
                                    <option data-type="value" data-tab="nomad-guide" data-postfix=" partners/lifetime"
                                        data-sort="sexual_partners" data-order="desc" data-asc="low" data-desc="high" data-emoji="🚩">Sexual
                                        partners avg</option>
                                    <option data-sort="racism" data-type="score" data-order="desc" data-emoji="🎨">Racial tolerance</option>
                                </optgroup>
                                <optgroup label="Economics">
                                    <option data-type="value" data-tab="cost-of-living" data-sort="gdp_per_capita_in_usd" data-prefix="$"
                                        data-postfix="/year" data-order="desc" data-emoji="💵">Income / GDP per capita</option>
                                    <option data-type="value" data-tab="cost-of-living" data-sort="gdp_growth_rate" data-postfix="%"
                                        data-order="desc" data-emoji="📈">Growth rate economy (GDP)</option>
                                    <option data-type="value" data-tab="cost-of-living" data-sort="income_inequality"
                                        data-postfix="% Gini coefficient" data-order="asc" data-emoji="⚖️">Income inequality</option>
                                    <option data-type="value" data-tab="cost-of-living" data-sort="labor_productivity" data-prefix="$"
                                        data-postfix="/worker" data-order="desc" data-emoji="💪">Labor productivity</option>
                                    <option data-type="value" data-tab="nomad-guide" data-sort="gender_equality" data-postfix="/5"
                                        data-order="desc">Gender equality</option>
                                    <option data-type="value" data-tab="nomad-guide" data-sort="gender_pay_gap" data-postfix="%"
                                        data-order="desc">Gender pay gap</option>
                                    <option data-type="value" data-tab="nomad-guide" data-sort="venture_capital_per_year_in_usd"
                                        data-prefix="$" data-postfix=" / year" data-order="desc" data-emoji="💰">Venture capital</option>
                                    <option data-type="value" data-tab="nomad-guide" data-sort="venture_capital_per_year_per_capita"
                                        data-prefix="$" data-postfix=" / year / capita" data-order="desc" data-emoji="💰">Venture capital
                                        per capita</option>
                                    <option data-type="value" data-tab="cost-of-living" data-sort="tax_to_gdp_ratio" data-postfix="% to GDP"
                                        data-order="desc" data-emoji="🎟">Tax rate (% of GDP)</option>
                                    <option data-type="value" data-tab="cost-of-living" data-sort="gdp_per_capita_after_tax_in_usd"
                                        data-prefix="$" data-postfix="/year" data-order="desc" data-emoji="💵">GDP per capita after tax
                                    </option>
                                    <option data-type="ratio" data-tab="cost-of-living"
                                        data-sort="short_term_cost_of_living_vs_gdp_per_capita_ratio" data-postfix="x" data-order="asc"
                                        data-asc="low" data-desc="high" data-emoji="💵">Cost-to-income ratio</option>
                                    <option data-type="value" data-tab="cost-of-living" data-sort="tax_per_capita_in_usd" data-prefix="$"
                                        data-postfix="/year" data-order="desc" data-emoji="🎟">Tax per capita</option>
                                    <option data-type="value" data-tab="cost-of-living" data-sort="product_quality_index" data-order="desc"
                                        data-emoji="📦">Product quality</option>
                                </optgroup>
                                <optgroup label="Health">
                                    <option data-type="ratio" data-tab="nomad-guide" data-sort="birth_rate" data-decimals="2"
                                        data-postfix=" / 👩" data-order="asc" data-emoji="👶">Birth rate</option>
                                    <option data-type="value" data-tab="nomad-guide" data-decimals="0" data-sort="homelessness_per_100k"
                                        data-postfix=" / 100K people" data-order="asc">Homelessness</option>
                                    <option data-type="value" data-tab="nomad-guide" data-sort="gender_ratio_male" data-asc="men"
                                        data-desc="women" data-decimals="2" data-postfix="👨 / 100 👩" data-order="desc" data-emoji="👨">
                                        Gender ratio</option>
                                    <option data-type="value" data-tab="nomad-guide" data-sort="gender_ratio_female" data-asc="men"
                                        data-desc="women" data-decimals="2" data-postfix="👩 / 100 👨" data-order="desc" data-emoji="👩">
                                        Gender ratio (inv)</option>
                                    <option data-type="value" data-tab="nomad-guide" data-sort="average_height" data-order="desc"
                                        data-asc="low" data-desc="high" data-emoji="📐">Height</option>
                                    <option data-type="value" data-tab="nomad-guide" data-sort="average_height_male" data-order="desc"
                                        data-asc="low" data-postfix="cm" data-desc="high" data-emoji="📐👨">Height men</option>
                                    <option data-type="value" data-tab="nomad-guide" data-sort="average_height_female" data-order="desc"
                                        data-postfix="cm" data-asc="low" data-desc="high" data-emoji="📐👨">Height women</option>
                                    <option data-type="value" data-tab="nomad-guide" data-postfix="%" data-sort="overweight_rate"
                                        data-order="asc" data-emoji="⚖️">Overweight rate (BMI&gt;25)</option>
                                    <option data-type="value" data-tab="nomad-guide" data-postfix="%" data-sort="obesity_rate"
                                        data-order="asc" data-emoji="⚖️">Obesity rate (BMI&gt;30)</option>
                                    <option data-type="value" data-tab="nomad-guide" data-sort="bmi_male" data-order="asc" data-emoji="🏋">
                                        Body mass index men</option>
                                    <option data-type="value" data-tab="nomad-guide" data-sort="bmi_female" data-order="asc"
                                        data-emoji="🏋️&zwj;♀️">Body mass index women</option>
                                    <option data-type="value" data-tab="nomad-guide" data-sort="plastic_surgery_per_year_per_100k"
                                        data-postfix=" / 100K people " data-order="asc" data-emoji="💉">Plastic surgery</option>
                                    <option data-sort="diabetes_prevalence" data-postfix="%" data-asc="best" data-desc="worst"
                                        data-order="asc" data-emoji="🚬">Diabetes prevalence</option>
                                    <option data-sort="smoking_prevalence" data-postfix="% smoke" data-asc="best" data-desc="worst"
                                        data-order="asc" data-emoji="🚬">Smoking % / pop</option>
                                    <option data-sort="smoking_packs_per_year" data-postfix=" packs" data-asc="best" data-desc="worst"
                                        data-order="asc" data-emoji="🚬">Smoking packs / year</option>
                                    <option data-tab="nomad-guide" data-sort="alcohol_consumption_per_capita"
                                        data-postfix=" liter/year per person" data-order="asc" data-emoji="🍺">Alcohol consumption</option>
                                    <option data-tab="nomad-guide" data-sort="calories_per_capita" data-postfix=" cal/day per person"
                                        data-order="desc">Calorie consumption</option>
                                    <option data-tab="nomad-guide" data-sort="carb_to_protein_ratio" data-order="desc">Carb to protein
                                        consumption ratio</option>
                                    <option data-tab="nomad-guide" data-sort="carbs_percentage_per_capita" data-postfix=" % of diet"
                                        data-order="desc">Carbs consumption %</option>
                                    <option data-tab="nomad-guide" data-sort="protein_percentage_per_capita" data-postfix=" % of diet"
                                        data-order="desc">Protein consumption %</option>
                                    <option data-tab="nomad-guide" data-sort="fats_percentage_per_capita" data-postfix=" % of diet"
                                        data-order="desc">Fats consumption %</option>
                                    <option data-tab="nomad-guide" data-sort="sugar_consumption_per_capita"
                                        data-postfix=" kg/year per person" data-order="asc" data-emoji="🍭">Sugar consumption</option>
                                    <option data-tab="nomad-guide" data-sort="fat_consumption_per_capita" data-postfix=" kg/year per person"
                                        data-order="asc" data-emoji="🐷">Fat consumption</option>
                                    <option data-tab="nomad-guide" data-sort="protein_consumption_per_capita"
                                        data-postfix=" kg/year per person" data-order="desc" data-emoji="🐔">Protein consumption</option>
                                    <option data-tab="nomad-guide" data-sort="coronary_heart_disease_death_rate" data-postfix=" / 100,000"
                                        data-order="asc" data-emoji="❤️">Heart disease death rate</option>
                                    <option data-tab="nomad-guide" data-sort="cancer_rate" data-postfix=" / 100,000" data-order="asc"
                                        data-emoji="🕷">Cancer rate</option>
                                    <option data-tab="nomad-guide" data-sort="life_expectancy" data-postfix=" years" data-order="desc"
                                        data-emoji="🏥">Life expectancy</option>
                                    <option data-sort="median_age" data-order="desc" data-type="value" data-emoji="👴">Median age</option>
                                    <option data-sort="healthcare_score" data-type="score" data-order="desc" data-emoji="🏥">Healthcare
                                    </option>
                                    <option data-sort="hospital_score" data-type="score" data-order="desc" data-emoji="🏥">Hospital ranking
                                    </option>
                                    <option data-type="value" data-sort="suicide_rate" data-postfix=" / 100k" data-desc="high"
                                        data-asc="low" data-order="asc" data-emoji="☠️">Suicide rate</option>
                                    <option data-type="value" data-sort="crossfit_gyms" data-order="desc">Crossfit gyms</option>
                                </optgroup>
                                <optgroup label="COVID (Corona)">
                                    <option data-type="value" data-sort="corona_cases" data-order="desc">COVID cases</option>
                                    <option data-type="value" data-sort="corona_cases_per_million" data-order="desc">COVID cases per 1M
                                        inhabitants</option>
                                    <option data-type="value" data-sort="corona_deaths" data-order="desc">COVID deaths</option>
                                    <option data-type="value" data-sort="corona_deaths_per_million" data-order="desc">COVID deaths per 1M
                                        inhabitants</option>
                                    <option data-type="value" data-sort="corona_tests" data-order="desc">COVID tests</option>
                                    <option data-type="value" data-sort="corona_tests_per_million" data-order="desc">COVID tests per 1M
                                        inhabitants</option>
                                    <option data-type="value" data-sort="corona_cases_per_tests_percentage" data-order="desc"
                                        data-postfix="%">COVID cases/tests</option>
                                    <option data-type="value" data-sort="corona_death_rate" data-postfix="%" data-order="desc">COVID case
                                        fatality rate</option>
                                </optgroup>
                                <optgroup label="Safety">
                                    <option data-type="value" data-sort="guns_per_capita" data-postfix=" / 100" data-desc="high"
                                        data-asc="low" data-order="asc" data-emoji="🔫">Guns per capita</option>
                                    <option data-type="value" data-asc="good" data-desc="bad" data-sort="homicide_rate"
                                        data-postfix=" / 100k" data-order="asc" data-emoji="🔫">Murder rate</option>
                                    <option data-type="value" data-asc="good" data-desc="bad" data-sort="suicide_rate"
                                        data-postfix=" / 100k" data-order="asc" data-emoji="☠️">Suicide rate</option>
                                    <option data-type="value" data-asc="good" data-desc="bad" data-sort="natural_disaster_risk"
                                        data-postfix="%" data-order="asc" data-emoji="☠🌪">Natural disaster risk</option>
                                    <option data-sort="female_friendly" data-asc="bad" data-desc="good" data-type="score" data-order="desc"
                                        data-emoji="👩">Female safety</option>
                                    <option data-sort="lgbt_friendly" data-asc="bad" data-desc="good" data-type="score" data-order="desc"
                                        data-emoji="🌈">LGBT safety</option>
                                    <option data-desc="safest" data-asc="bad" data-sort="safety_level" data-type="score" data-order="desc">
                                        Safety</option>
                                    <option data-desc="safest" data-asc="unsafest" data-sort="road_traffic_score" data-type="score"
                                        data-order="desc">Traffic safety</option>
                                </optgroup>
                                <optgroup label="Culture (Hofstede)">
                                    <option data-type="value" data-sort="hofstede_hierarchical" data-order="asc" data-emoji="">Hierarchical
                                    </option>
                                    <option data-type="value" data-sort="hofstede_masculinity" data-order="asc" data-emoji="💪">Masculinity
                                    </option>
                                    <option data-type="value" data-sort="hofstede_uncertainty_avoidance" data-order="asc" data-emoji="😳">
                                        Risk avoidance</option>
                                    <option data-type="value" data-sort="hofstede_individualism" data-order="desc" data-emoji="👦">
                                        Individualism</option>
                                </optgroup>
                                <optgroup label="History">
                                    <option data-type="value" data-sort="ex_colony" data-order="desc" data-emoji="👦">Ex-colony</option>
                                    <option data-type="value" data-sort="ex_colony_non_native_independent" data-order="desc"
                                        data-emoji="👦">Ex-colony (now non native pop)</option>
                                    <option data-type="value" data-sort="ex_colony_returned_to_natives" data-order="desc" data-emoji="👦">
                                        Ex-colony (now native pop)</option>
                                </optgroup>
                                <optgroup label="Hoodmaps.com">
                                    <option data-sort="hoodmaps_tag_count" data-order="desc" data-type="value">Tag count</option>
                                    <option data-sort="hoodmaps_hipsters" data-order="desc" data-type="value" data-emoji="🎅">Hipsters
                                    </option>
                                    <option data-sort="hoodmaps_suits" data-order="desc" data-type="value" data-emoji="👨&zwj;👔&quot;">
                                        Suits</option>
                                    <option data-sort="hoodmaps_normies" data-order="desc" data-type="value" data-emoji="🏡">Normies
                                    </option>
                                    <option data-sort="hoodmaps_tourists" data-order="desc" data-type="value" data-emoji="📸">Tourists
                                    </option>
                                    <option data-sort="hoodmaps_uni" data-order="desc" data-type="value" data-emoji="🎓">Students</option>
                                    <option data-sort="hoodmaps_rich" data-order="desc" data-type="value" data-emoji="🤑">Rich</option>
                                </optgroup>
                                <optgroup label="Monthly temperature">
                                    <option data-type="value" data-sort="climate_temperatureC_month_01" data-order="desc" data-postfix="°C">
                                        Temperature January</option>
                                    <option data-type="value" data-sort="climate_temperatureC_month_02" data-order="desc" data-postfix="°C">
                                        Temperature February</option>
                                    <option data-type="value" data-sort="climate_temperatureC_month_03" data-order="desc" data-postfix="°C">
                                        Temperature March</option>
                                    <option data-type="value" data-sort="climate_temperatureC_month_04" data-order="desc" data-postfix="°C">
                                        Temperature April</option>
                                    <option data-type="value" data-sort="climate_temperatureC_month_05" data-order="desc" data-postfix="°C">
                                        Temperature May</option>
                                    <option data-type="value" data-sort="climate_temperatureC_month_06" data-order="desc" data-postfix="°C">
                                        Temperature June</option>
                                    <option data-type="value" data-sort="climate_temperatureC_month_07" data-order="desc" data-postfix="°C">
                                        Temperature July</option>
                                    <option data-type="value" data-sort="climate_temperatureC_month_08" data-order="desc" data-postfix="°C">
                                        Temperature August</option>
                                    <option data-type="value" data-sort="climate_temperatureC_month_09" data-order="desc" data-postfix="°C">
                                        Temperature September</option>
                                    <option data-type="value" data-sort="climate_temperatureC_month_10" data-order="desc" data-postfix="°C">
                                        Temperature October</option>
                                    <option data-type="value" data-sort="climate_temperatureC_month_11" data-order="desc" data-postfix="°C">
                                        Temperature November</option>
                                    <option data-type="value" data-sort="climate_temperatureC_month_12" data-order="desc" data-postfix="°C">
                                        Temperature December</option>
                                </optgroup>
                                <optgroup label="Monthly UV index">
                                    <option data-type="value" data-sort="climate_uv_index_month_01" data-order="desc">UV index January
                                    </option>
                                    <option data-type="value" data-sort="climate_uv_index_month_02" data-order="desc">UV index February
                                    </option>
                                    <option data-type="value" data-sort="climate_uv_index_month_03" data-order="desc">UV index March
                                    </option>
                                    <option data-type="value" data-sort="climate_uv_index_month_04" data-order="desc">UV index April
                                    </option>
                                    <option data-type="value" data-sort="climate_uv_index_month_05" data-order="desc">UV index May</option>
                                    <option data-type="value" data-sort="climate_uv_index_month_06" data-order="desc">UV index June</option>
                                    <option data-type="value" data-sort="climate_uv_index_month_07" data-order="desc">UV index July</option>
                                    <option data-type="value" data-sort="climate_uv_index_month_08" data-order="desc">UV index August
                                    </option>
                                    <option data-type="value" data-sort="climate_uv_index_month_09" data-order="desc">UV index September
                                    </option>
                                    <option data-type="value" data-sort="climate_uv_index_month_10" data-order="desc">UV index October
                                    </option>
                                    <option data-type="value" data-sort="climate_uv_index_month_11" data-order="desc">UV index November
                                    </option>
                                    <option data-type="value" data-sort="climate_uv_index_month_12" data-order="desc">UV index December
                                    </option>
                                </optgroup>
                                <optgroup label="Monthly humidity">
                                    <option data-type="value" data-sort="climate_humidity_month_01" data-order="desc" data-postfix="%">
                                        Humidity January</option>
                                    <option data-type="value" data-sort="climate_humidity_month_02" data-order="desc" data-postfix="%">
                                        Humidity February</option>
                                    <option data-type="value" data-sort="climate_humidity_month_03" data-order="desc" data-postfix="%">
                                        Humidity March</option>
                                    <option data-type="value" data-sort="climate_humidity_month_04" data-order="desc" data-postfix="%">
                                        Humidity April</option>
                                    <option data-type="value" data-sort="climate_humidity_month_05" data-order="desc" data-postfix="%">
                                        Humidity May</option>
                                    <option data-type="value" data-sort="climate_humidity_month_06" data-order="desc" data-postfix="%">
                                        Humidity June</option>
                                    <option data-type="value" data-sort="climate_humidity_month_07" data-order="desc" data-postfix="%">
                                        Humidity July</option>
                                    <option data-type="value" data-sort="climate_humidity_month_08" data-order="desc" data-postfix="%">
                                        Humidity August</option>
                                    <option data-type="value" data-sort="climate_humidity_month_09" data-order="desc" data-postfix="%">
                                        Humidity September</option>
                                    <option data-type="value" data-sort="climate_humidity_month_10" data-order="desc" data-postfix="%">
                                        Humidity October</option>
                                    <option data-type="value" data-sort="climate_humidity_month_11" data-order="desc" data-postfix="%">
                                        Humidity November</option>
                                    <option data-type="value" data-sort="climate_humidity_month_12" data-order="desc" data-postfix="%">
                                        Humidity December</option>
                                </optgroup>
                                <optgroup label="Monthly nomads there">
                                    <option data-type="value" data-sort="user_count_month_01_est" data-order="desc">Nomads there in January
                                    </option>
                                    <option data-type="value" data-sort="user_count_month_02_est" data-order="desc">Nomads there in February
                                    </option>
                                    <option data-type="value" data-sort="user_count_month_03_est" data-order="desc">Nomads there in March
                                    </option>
                                    <option data-type="value" data-sort="user_count_month_04_est" data-order="desc">Nomads there in April
                                    </option>
                                    <option data-type="value" data-sort="user_count_month_05_est" data-order="desc">Nomads there in May
                                    </option>
                                    <option data-type="value" data-sort="user_count_month_06_est" data-order="desc">Nomads there in June
                                    </option>
                                    <option data-type="value" data-sort="user_count_month_07_est" data-order="desc">Nomads there in July
                                    </option>
                                    <option data-type="value" data-sort="user_count_month_08_est" data-order="desc">Nomads there in August
                                    </option>
                                    <option data-type="value" data-sort="user_count_month_09_est" data-order="desc">Nomads there in
                                        September</option>
                                    <option data-type="value" data-sort="user_count_month_10_est" data-order="desc">Nomads there in October
                                    </option>
                                    <option data-type="value" data-sort="user_count_month_11_est" data-order="desc">Nomads there in November
                                    </option>
                                    <option data-type="value" data-sort="user_count_month_12_est" data-order="desc">Nomads there in December
                                    </option>
                                </optgroup>
                                <optgroup label="Geo">
                                    <option data-type="value" data-tab="nomad-guide" data-sort="latitude" data-order="desc"
                                        data-decimals="0" data-asc="low" data-desc="high" data-emoji="🗺">Latitude (N to S)</option>
                                    <option data-type="value" data-tab="nomad-guide" data-sort="longitude" data-order="desc"
                                        data-decimals="0" data-asc="low" data-desc="high" data-emoji="🗺">Longitude (E to W)</option>
                                </optgroup>
                            </select>
                            <div className="action-select-sort-order">
                                <div className="asc" data-order="asc"><span className="tooltip-set" title=""></span></div>
                                <div className="desc active" data-order="desc"><span className="tooltip-set" title=""></span></div>
                            </div>
                        </div><label htmlFor="action-change-view" style={{ display: "none" }}>Change view: </label><select id="action-change-view"
                            className="action-change-view tooltip-set" title="">
                            <option value="grid" selected="selected">Grid</option>
                            <option value="map">Map</option>
                        </select>
                        <div style={{ clear: "both" }}></div>
                        <div className="active-filters-box"></div>
                    </div>

                    <div className="chart view">
                        <div className="chart-branding">
                            <img alt="Nomad List" src="./assets/logo.svg" /> Nomad List
                        </div>
                        <span style={{ float: 'right', color: '#6f6f6f', margin: '7px', marginBottom: '7px' }}>
                            <span className="chart-hide-outliers-x" style={{ cursor: 'pointer' }}>
                                <input type="checkbox" style={{ pointerEvents: 'none' }} /> Hide
                                outliers X &nbsp;&nbsp;&nbsp;
                            </span>
                            <span className="chart-hide-outliers-y" style={{ cursor: 'pointer' }}>
                                <input type="checkbox" style={{ pointerEvents: 'none' }} /> Hide
                                outliers Y &nbsp;&nbsp;&nbsp;
                            </span>
                            <span className="chart-logarithmic-x" style={{ cursor: 'pointer' }}>
                                <input type="checkbox" style={{ pointerEvents: 'none' }} /> Log X
                                &nbsp;&nbsp;&nbsp;
                            </span>
                            <span className="chart-logarithmic-y" style={{ cursor: 'pointer' }}>
                                <input type="checkbox" style={{ pointerEvents: 'none' }} /> Log Y
                                &nbsp;&nbsp;&nbsp;
                            </span>
                            <span className="chart-show-labels" style={{ cursor: 'pointer' }}>
                                <input defaultChecked type="checkbox" style={{ pointerEvents: 'none' }} />{'{'}" "{'}'}
                                Labels &nbsp;&nbsp;&nbsp;
                            </span>
                            <span className="chart-show-population-as-bubble-size" style={{ cursor: 'pointer' }}>
                                <input defaultChecked type="checkbox" style={{ pointerEvents: 'none' }} />{'{'}" "{'}'}
                                Population bubble &nbsp;&nbsp;&nbsp;
                            </span>
                            <span className="chart-show-nomad-score-as-bubble-size" style={{ cursor: 'pointer' }}>
                                <input type="checkbox" style={{ pointerEvents: 'none' }} /> Total
                                score bubble
                            </span>
                        </span>
                        <div className="chart-container-scroller">
                            <div className="chart-container-scroller-width-extender">
                                <canvas id="chart-container" />
                            </div>
                        </div>
                    </div>
                    <div className="info-box-container" />
                    <ul className="grid show view">
                        <div className="aux-top-banner" />
                        <div className="grid-side show">
                            <div className="dynamic-fill" />
                            <div className="item item-aux show not-a-place ignore-click" data-type="text_with_image">
                                <div data-url="https://safetywing.com/nomad-insurance?referenceID=24730000&utm_source=24736628&utm_medium=Ambassador&ref=nomadlist" className=" container aux">
                                    <img alt="Get insured" style={{ background: '#58c5c7' }} className="lazyload" src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=cover,width=300,height=100,quality=25/https://nomadlist.com/assets/safetywing2021-c-scaled2.png" />
                                    <div className="text">
                                        <img alt="Global travel medical insurance for $1.34/day! Covid-19 coverage included." src="data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAYBQTFRFR3BMXsTJot3gYsXKlNjb/v/+ZcjM////dc3RdM3RcszQZMbMd83Svefod8zR1vDxfdDUasnOZsXK8fr6mdrdteTmhNLWgNLVk9ba7vn54vT1WsTJb8zQd87RacvQ6fb2e8/TiNTXdM7Rec7Sh9PXcMjMrOHj2vHybcvPvOXmjNXZW8HG3fP0+/79qN/ipd7hntvewefnYcfMXsPIU8DFasbLxerr1O7u9vz8suHi/f7+5vX3sePl9Pv7zurqds7SccvPeM7Rj9TXpN3dbsnO3/Lx7Pb2yenracjL1e3vn9ndqeDi0e7wyezthtDS4fLy9Pr6mdfacs7R//7/qt3fY8TL6PT0eM/TV8LH+/z8Rbq9es3RTrzBidLVc8zTdc/Tzuvszu3u9/z6g9DVz+3qruLk3/Dw2e/u4fTymtnb5vT0/f39YsTI5fPzdM7SdcnOYcTGndjYg9LT2vP0e83PtN7e8fb3fM/SeMvSzOfod8rSac3Ox+fo+Pv8Pre69vn3o15vdQAAAAF0Uk5TAEDm2GYAAAOBSURBVEjHhZb3V9swEMft2Fhy7Dh2nD0J2QmQBYGwV1mFMsum0MFoWd17/OuVRxIPpb0f5Hdnf9737uR3EkHYbNPtK9N+UfTTjom1EPFfm2xUUhCyLIsWqJjX9W9KnuhVvxOEqCTN8FCzwURXYMynAdMsR2ZEUWJSOgOzk3gil1Te8vBMIoPVuxcv+tNUrMUEnuMIl/72jPFUgWph6hlsW9ZOPNZfTXOZDQB6VCbIsR3GayUGtbjQl397CVpWjkCD0T1YDchHCm0CFEhoYnB1wD7uSSsrtJ5TrIkpd4hwO8jWX7UkEOJmnCYErreRQDvGvNeBqZEdAHJWBMo64euEIj6N2CxlBhQV1oJUNGK0E4kuJLRKHg350XOdsiJwXEUuDAi5oalUj+bR6iKthNY1g4gzIM1ryO6RC61Nsg/iZBptT4gXrz5OqsjW0Ae0OuwqcAIh3o7LzIFddV96XnKLCKFrgg3xm/KCXBCAJ0pq8sLXQ/RIM3YVlJm74/Q9XQVgbOvTJkhQRUSEFvKsHXEZN4VVEAAuP4PwgRfcXL2TMCLQQTgMXm1L3/tHQw5ws1F9eIZRoQnaWMtcGxlE6/iw095kmCT8hsSklwMacn2gILlhJyaxANFr8PIzIQ15Uyp3RXpNyPbtlPbbL9Yr6On2sFjEmBhPvtZUDjNKk0ewSIAIGhAhuowy20H/cPr7TjckbWoy5KlgWJVx1GUAVjy4WoLEhMnnubnd5rc90DhxK7XgkAqxZvK3qeabpfM9EBpqot1ZjmIQHzFp8oX4jNaA4zQAizN5DNJPmLYfwlikoiLZ0i8wKi7b6xfHDDNMb1tpSUESJ2gEFiP7NkSZzbI5FJOoa4UpDgNweio6MXkR5jZDNsVlEsrYP8olCiucNbOiOmFCluh+LXOHmFPpD2hErCI5ywzXLVVbRvXIJ037VArq03IgZY4L+0xp/hC4fo/KTy2JtU/NNav8bDRy/BOsPoC5SMwYL3RGf9bK8NNMaXXEk93zxGNdDhivrf/8PbkQOJhaqf+ItQ7z9JjpGKPtfwbrZPO3I8/r8Vl96MmWw9KL+Z3YWHx4ZYmKz94rY0ImuhywZpuOU6+mPFE0aLwDmIO/kbLLwNk8uV5lBLaAv16EHBgdvhZcPKbDXW8x/ZiKtr+8dv/zrhT2JS2Hw4X7/1eysKtMJwOiGEjSDl+/veq/bFOOhwOKIKMAAAAASUVORK5CYII=" width={20} height={20} />{'{'}" "{'}'}
                                        Global travel medical insurance for $1.34/day! Covid-19
                                        coverage included.{'{'}" "{'}'}
                                        <a rel="follow" target="_new" href="https://safetywing.com/nomad-insurance?referenceID=24730000&utm_source=24736628&utm_medium=Ambassador&ref=nomadlist" className="button red reverse" style={{ width: '100%' }}>
                                            Get insured
                                        </a>
                                    </div>
                                </div>
                                <a href="/cdn-cgi/l/email-protection#d5a6b4b9b0a695bbbab8b4b1b9bca6a1fbb6bab8eaa6a0b7bfb0b6a1e894b1a3b0a7a1bca6b0f0e7e5babbf0e7e59bbab8b4b1f0e7e599bca6a1f3b7bab1ace89bbaa1b0f0e694f0e7e5a1bdbca6f0e7e5b0b8b4bcb9f0e7e5b4b1b1a7b0a6a6f0e7e5b1bab0a6f0e7e5bbbaa1f0e7e5a2baa7befbf0e59485b9b0b4a6b0f0e7e5a0a6b0f0e7e5a1bdb0f0e7e5b0b8b4bcb9f0e7e5b4b1b1a7b0a6a6f0e7e5b4b18aa6b4b9b0a6f0e7e5b4bbb1f0e7e5a1bdb0bbf0e7e5f0e1e5f0e7e5b4bbb1f0e7e5a1bdb0bbf0e7e5a1bdbca6f0e7e5a6bca1b0f0e7e2a6f0e7e5b1bab8b4bcbbf0e796f0e7e5a1baf0e7e5b4a3babcb1f0e7e5a6a5b4b8b8b0a7a6f0e7e5b3b9babab1bcbbb2f0e7e5a1bdbca6f0e7e5b0b8b4bcb9fbf0e7e582b0f0e7e2a7b0f0e7e5babbb9acf0e7e5b4b6b6b0a5a1bcbbb2f0e7e5a6a5babba6baa7a6bdbca5f0e793b4b1f0e7e5b1b0b4b9a6f0e7e5b3a7bab8f0e7e5f0e7e1e4e5bef0e793b8baf0e7e5b4a1f0e7e5a1bdbca6f0e7e5b8bab8b0bba1fbf0e7e582b0f0e7e5b1baf0e7e59b9a81f0e7e5b1baf0e7e5968594f0e793b4b3b3bcb9bcb4a1b0f0e793a6b4b9b0f8b7b4a6b0b1f0e7e5b1b0b4b9a6f0e796f0e7e5babbb9acf0e7e5b3b9b4a1f0e7e5b3b0b0f0e7e5b9a0b8a5f0e7e5a6a0b8f0e7e5bdb4a7b1f0e7e5b6b4a6bdf0e7e5a6a5babba6baa7a6bdbca5a6f0e793b4b1a6f0e796f0e7e5a5b9b0b4a6b0f0e7e5a6b4a3b0f0e7e5b7baa1bdf0e7e5bab3f0e7e5a0a6f0e7e5a1bcb8b0f0e7e5b4bbb1f0e7e5b1babbf0e7e2a1f0e7e5b0b8b4bcb9f0e7e5a0a6f0e7e5b4b7baa0a1f0e7e5a1bdb4a1fbf0e7e581bdb4bbbea6f0e7e4" className="aux-item-advertise-here-link">
                                    Advertise here
                                </a>
                            </div>
                            <div className="item show grid-side-box item-latest-meetups not-a-place ignore-click">
                                <strong className="grid-side-box-heading" style={{ marginBottom: '7px' }}>
                                    🍹 Nomad List meetups
                                </strong>
                                <a target="_blank" rel="noopener" href="https://nomadlist.com/meetups" style={{ display: 'block' }}>
                                    <img alt="Canggu" className="avatar lazyload" src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/places/canggu-bali-indonesia.jpg" style={{ width: '30px', height: '30px' }} />
                                    <span style={{ display: 'inline-block', width: 'calc(100% - 37px)', whiteSpace: 'nowrap', verticalAlign: 'middle' }}>
                                        Fri 5th Nov: Canggu <span className="badge">6</span>
                                        <div className="soon-badge">SOON</div>
                                    </span>
                                    <div style={{ clear: 'both' }} />
                                    <img alt="8e07c4c52914e6c49f9a9c750cb656a9" className="avatar lazyload" src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/8e07c4c52914e6c49f9a9c750cb656a9.jpg?1613714431" />
                                    <img alt="fd8f812603da43d7e3a56a779e31aaa3" className="avatar lazyload" src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/fd8f812603da43d7e3a56a779e31aaa3.jpg?1614516458" />
                                    <img alt="e90e50987a248753ee52c52847b584cf" className="avatar lazyload" src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/e90e50987a248753ee52c52847b584cf.jpg?1629831467" />
                                    <img alt="cf92f651943b8256f1ec730582089ec4" className="avatar lazyload" src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/cf92f651943b8256f1ec730582089ec4.jpg?1628656918" />
                                    <img alt="0a1239fa0d0fa149d325107d5c0dfd8d" className="avatar lazyload" src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/0a1239fa0d0fa149d325107d5c0dfd8d.jpg?1635415365" />
                                    <img alt="1ce4df1b5eaf45ce276d3a2125cacf22" className="avatar lazyload" src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/1ce4df1b5eaf45ce276d3a2125cacf22.jpg?1628750013" />
                                    <div style={{ marginTop: '7px', marginBottom: '7px', width: '100%', borderTop: '1px solid var(--input-border-color)' }} />
                                </a><a target="_blank" rel="noopener" href="https://nomadlist.com/meetups" style={{ display: 'block' }}>
                                    <img alt="Dubai" className="avatar lazyload" src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/places/dubai-united-arab-emirates.jpg" style={{ width: '30px', height: '30px' }} />
                                    <span style={{ display: 'inline-block', width: 'calc(100% - 37px)', whiteSpace: 'nowrap', verticalAlign: 'middle' }}>
                                        Mon 1st Nov: Dubai <span className="badge">15</span>
                                    </span>
                                    <div style={{ clear: 'both' }} />
                                    <img alt="d2e5c115b80ae370a300963feb1ab844" className="avatar lazyload" src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/d2e5c115b80ae370a300963feb1ab844.jpg?1635185609" />
                                    <img alt="b7bfabe380cf6e158f6af24ea71e2212" className="avatar lazyload" src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/b7bfabe380cf6e158f6af24ea71e2212.jpg?1632242846" />
                                    <img alt="52adef61f8d39c4c7daf6442b884bc04" className="avatar lazyload" src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/52adef61f8d39c4c7daf6442b884bc04.jpg?1631100325" />
                                    <img alt="1635d57ec2fee45751f7c683bb18c4b9" className="avatar lazyload" src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/1635d57ec2fee45751f7c683bb18c4b9.jpg?1556699968" />
                                    <img alt="abd085d67d87157ab2d703572de0c6f4" className="avatar lazyload" src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/abd085d67d87157ab2d703572de0c6f4.jpg?1634416906" />
                                    <img alt="3727f0505d8d90658fe3a19002917b0b" className="avatar lazyload" src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/3727f0505d8d90658fe3a19002917b0b.jpg?1624116014" />
                                    <img alt="b4e41b876de3075bca22d0ebd88330fd" className="avatar lazyload" src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/b4e41b876de3075bca22d0ebd88330fd.jpg?1630528980" />
                                    <img alt="60faa46a20b351c0ab4ffed37580c5c9" className="avatar lazyload" src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/60faa46a20b351c0ab4ffed37580c5c9.jpg?1624450245" />
                                    <img alt="7cba648fd8b821132b60deb9a162b429" className="avatar lazyload" src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/7cba648fd8b821132b60deb9a162b429.jpg?1601967522" />
                                    <img alt="020d623c17d32ddf486d9854ea8f0136" className="avatar lazyload" src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/020d623c17d32ddf486d9854ea8f0136.jpg?1625367875" />
                                    <img alt="095ee3c2a384321821d61e19b9b1d9ec" className="avatar lazyload" src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/095ee3c2a384321821d61e19b9b1d9ec.jpg?1614690544" />
                                    <img alt="ca89c054e4c7c6d03266882ce1a322c2" className="avatar lazyload" src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/ca89c054e4c7c6d03266882ce1a322c2.jpg?1594384247" />
                                    <img alt="5d5c2a6cde46068bf55fa00702de83eb" className="avatar lazyload" src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/5d5c2a6cde46068bf55fa00702de83eb.jpg?1635431002" />
                                    <img alt="" className="avatar lazyload" src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/.jpg?1582402557" />
                                    <img alt="1d8a6d4848c6ff3c766add90eaceba6a" className="avatar lazyload" src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/1d8a6d4848c6ff3c766add90eaceba6a.jpg?1605718787" />
                                    <div style={{ marginTop: '7px', marginBottom: '7px', width: '100%', borderTop: '1px solid var(--input-border-color)' }} />
                                </a><a target="_blank" rel="noopener" href="https://nomadlist.com/meetups" style={{ display: 'block' }}>
                                    <img alt="Lisbon" className="avatar lazyload" src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/places/lisbon-portugal.jpg" style={{ width: '30px', height: '30px' }} />
                                    <span style={{ display: 'inline-block', width: 'calc(100% - 37px)', whiteSpace: 'nowrap', verticalAlign: 'middle' }}>
                                        Sun 31st Oct: Lisbon <span className="badge">38</span>
                                    </span>
                                    <div style={{ clear: 'both' }} />
                                    <img alt="f108e5738e6bd099461a7e7edd2cbe8b" className="avatar lazyload" src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/f108e5738e6bd099461a7e7edd2cbe8b.jpg?1629378498" />
                                    <img alt="2b4b63c979a6f2f49d7f1693eb272cb3" className="avatar lazyload" src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/2b4b63c979a6f2f49d7f1693eb272cb3.jpg?1629330002" />
                                    <img alt="478b3f2b886e0f9cbc6ee2e89f120287" className="avatar lazyload" src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/478b3f2b886e0f9cbc6ee2e89f120287.jpg?1632216422" />
                                    <img alt="a80ebcc61caa959639ed50aadeecb3cd" className="avatar lazyload" src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/a80ebcc61caa959639ed50aadeecb3cd.jpg?1602492706" />
                                    <img alt="8b6a946e761840d27e84cf6918086c6c" className="avatar lazyload" src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/8b6a946e761840d27e84cf6918086c6c.jpg?1594840226" />
                                    <img alt="d684f69640a4195ac80eda2c090381a8" className="avatar lazyload" src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/d684f69640a4195ac80eda2c090381a8.jpg?1574809974" />
                                    <img alt="42b39576036d8acaeddd2894bacfc30f" className="avatar lazyload" src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/42b39576036d8acaeddd2894bacfc30f.jpg?1635230550" />
                                    <img alt="b6d45b0d683b5752452a069259ae6a9e" className="avatar lazyload" src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/b6d45b0d683b5752452a069259ae6a9e.jpg?1627480143" />
                                    <img alt="4a7aea9a8693e13230ccf0dcba1ff6c9" className="avatar lazyload" src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/4a7aea9a8693e13230ccf0dcba1ff6c9.jpg?1628633156" />
                                    <img alt="083443345b2c21fdc98217e942d53336" className="avatar lazyload" src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/083443345b2c21fdc98217e942d53336.jpg?1622429533" />
                                    <img alt="7b7a5faa6836cf0aecde0d9f1ceca5e0" className="avatar lazyload" src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/7b7a5faa6836cf0aecde0d9f1ceca5e0.jpg?1631461006" />
                                    <img alt="4f2fd878f04a90603bb88df1b5b2da85" className="avatar lazyload" src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/4f2fd878f04a90603bb88df1b5b2da85.jpg?1629315434" />
                                    <img alt="566559a5014a92751064be1220384eba" className="avatar lazyload" src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/566559a5014a92751064be1220384eba.jpg?1632302458" />
                                    <img alt="2a435ef9f362e7af5aa9ae83c3f66cd7" className="avatar lazyload" src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/2a435ef9f362e7af5aa9ae83c3f66cd7.jpg?1630401921" />
                                    <img alt="2e5b1917d6487641c9f8bfb54b856569" className="avatar lazyload" src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/2e5b1917d6487641c9f8bfb54b856569.jpg?1622094353" />
                                    <img alt="6a056a67b4cf40beb6e560d3f99be95b" className="avatar lazyload" src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/6a056a67b4cf40beb6e560d3f99be95b.jpg?1619702576" />
                                    <img alt="811f0f3bec1f1bc08e8352c69fe3f305" className="avatar lazyload" src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/811f0f3bec1f1bc08e8352c69fe3f305.jpg?1578218619" />
                                    <img alt="4c525b4327dc1f06a2832638a8822f25" className="avatar lazyload" src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/4c525b4327dc1f06a2832638a8822f25.jpg?1632740533" />
                                    <img alt="20e6fe7e1a5aed1dd86851d77305a3e4" className="avatar lazyload" src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/20e6fe7e1a5aed1dd86851d77305a3e4.jpg?1632629791" />
                                    <img alt="9344edbf099a4f1bff9b365439aea4e6" className="avatar lazyload" src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/9344edbf099a4f1bff9b365439aea4e6.jpg?1605171254" />
                                    <img alt="4703bbf80bd9a3c30c41e81156fca0d2" className="avatar lazyload" src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/4703bbf80bd9a3c30c41e81156fca0d2.jpg?1629620056" />
                                    <img alt="a4fa8cbb1121268b9cd16d061cd0c70b" className="avatar lazyload" src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/a4fa8cbb1121268b9cd16d061cd0c70b.jpg?1621024668" />
                                    <img alt="fb7e49c2f3c75dc20d6adfb8d370b3ff" className="avatar lazyload" src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/fb7e49c2f3c75dc20d6adfb8d370b3ff.jpg?1633186973" />
                                    <img alt="e335036c9f305d874632c7ee813b686a" className="avatar lazyload" src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/e335036c9f305d874632c7ee813b686a.jpg?1623879923" />
                                    <img alt="de4c22b9c5eb80156b3d76b04d19a827" className="avatar lazyload" src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/de4c22b9c5eb80156b3d76b04d19a827.jpg?1633562509" />
                                    <img alt="6cb8495f22fbe789f25c3db3a60b6ebf" className="avatar lazyload" src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/6cb8495f22fbe789f25c3db3a60b6ebf.jpg?1630948359" />
                                    <img alt="c96b3b35c7cd7aad56c00cd7e04fceb6" className="avatar lazyload" src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/c96b3b35c7cd7aad56c00cd7e04fceb6.jpg?1606988383" />
                                    <img alt="dca19530ca2f911c419eb19fd4d933c6" className="avatar lazyload" src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/dca19530ca2f911c419eb19fd4d933c6.jpg?1517576273" />
                                    <img alt="81ec480c966ffced8728981da43fd3b7" className="avatar lazyload" src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/81ec480c966ffced8728981da43fd3b7.jpg?1634570641" />
                                    <img alt="10cc5064ce883e16a6397c8c68f2dc00" className="avatar lazyload" src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/10cc5064ce883e16a6397c8c68f2dc00.jpg?1626986971" />
                                    <img alt="4e88436708bf7ac3b1eea613f267d418" className="avatar lazyload" src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/4e88436708bf7ac3b1eea613f267d418.jpg?1629454901" />
                                    <img alt="bdb339c834880c54a086966712f2d2c9" className="avatar lazyload" src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/bdb339c834880c54a086966712f2d2c9.jpg?1635364899" />
                                    <img alt="26cd759722769a650b8c9b70d26aa785" className="avatar lazyload" src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/26cd759722769a650b8c9b70d26aa785.jpg?1606796195" />
                                    <img alt="5eff26f68653c98d8b443b107c7de43b" className="avatar lazyload" src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/5eff26f68653c98d8b443b107c7de43b.jpg?1584477735" />
                                    <img alt="aedfc6c78e6c537c56c5644b28ced821" className="avatar lazyload" src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/aedfc6c78e6c537c56c5644b28ced821.jpg?1621867649" />
                                    <img alt="72a74ca6962a99c4ff2263f44f7ac13e" className="avatar lazyload" src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/72a74ca6962a99c4ff2263f44f7ac13e.jpg?1630663777" />
                                    <img src="./assets/pixel.gif" className="lazyload meetup-photo" style={{ borderRadius: '12px', width: 'calc(100%)', height: '150px', margin: '7px', marginLeft: 0, marginRight: 0, objectFit: 'cover', boxShadow: 'var(--box-shadow-central)' }} data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=cover,width=500,height=300,quality=25/https://nomadlist.com/assets/img/meetups/2021-10-31_lisbon-portugal_a80ebcc61caa959639ed50aadeecb3cd_1635846375.3652_66.jpg" />
                                    <div style={{ marginTop: '7px', marginBottom: '7px', width: '100%', borderTop: '1px solid var(--input-border-color)' }} />
                                </a><a target="_blank" rel="noopener" href="https://nomadlist.com/meetups" style={{ display: 'block' }}>
                                    <img alt="Porto" className="avatar lazyload" src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/places/porto-portugal.jpg" style={{ width: '30px', height: '30px' }} />
                                    <span style={{ display: 'inline-block', width: 'calc(100% - 37px)', whiteSpace: 'nowrap', verticalAlign: 'middle' }}>
                                        Sun 31st Oct: Porto <span className="badge">5</span>
                                    </span>
                                    <div style={{ clear: 'both' }} />
                                    <img alt="c64f36cd1deb51af4acf712a7c772ff5" className="avatar lazyload" src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/c64f36cd1deb51af4acf712a7c772ff5.jpg?1632638498" />
                                    <img alt="d31169ad6225306971f7b6921d7ea671" className="avatar lazyload" src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/d31169ad6225306971f7b6921d7ea671.jpg?1558872720" />
                                    <img alt="81c555943383a70a3315adc7d6db8419" className="avatar lazyload" src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/81c555943383a70a3315adc7d6db8419.jpg?1635673088" />
                                    <img alt="6c39f136073600a376155f520901eea0" className="avatar lazyload" src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/6c39f136073600a376155f520901eea0.jpg?1608653966" />
                                    <img alt="97ff4a0112150bfe31a6982f46c7b90b" className="avatar lazyload" src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/97ff4a0112150bfe31a6982f46c7b90b.jpg?1556696681" />
                                    <img src="./assets/pixel.gif" className="lazyload meetup-photo" style={{ borderRadius: '12px', width: 'calc(100%)', height: '150px', margin: '7px', marginLeft: 0, marginRight: 0, objectFit: 'cover', boxShadow: 'var(--box-shadow-central)' }} data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=cover,width=500,height=300,quality=25/https://nomadlist.com/assets/img/meetups/2021-10-31_porto-portugal_c64f36cd1deb51af4acf712a7c772ff5_1635711231.0942_51.jpg" />
                                    <div style={{ marginTop: '7px', marginBottom: '7px', width: '100%', borderTop: '1px solid var(--input-border-color)' }} />
                                </a><a target="_blank" rel="noopener" href="https://nomadlist.com/meetups" style={{ display: 'block' }}>
                                    <img alt="Kyiv" className="avatar lazyload" src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/places/kyiv-ukraine.jpg" style={{ width: '30px', height: '30px' }} />
                                    <span style={{ display: 'inline-block', width: 'calc(100% - 37px)', whiteSpace: 'nowrap', verticalAlign: 'middle' }}>
                                        Tue 26th Oct: Kyiv <span className="badge">3</span>
                                    </span>
                                    <div style={{ clear: 'both' }} />
                                    <img alt="4dc376fad40d2c9efed56135f8fc9aea" className="avatar lazyload" src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/4dc376fad40d2c9efed56135f8fc9aea.jpg?1631008581" />
                                    <img alt="fe728a29933dd81360babb19dfdcb953" className="avatar lazyload" src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/fe728a29933dd81360babb19dfdcb953.jpg?1633452989" />
                                    <img alt="42a925bd2b08978e2b12587d32366e43" className="avatar lazyload" src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/42a925bd2b08978e2b12587d32366e43.jpg?1614116546" />
                                    <div style={{ marginTop: '7px', marginBottom: '7px', width: '100%', borderTop: '1px solid var(--input-border-color)' }} />
                                </a><a target="_blank" rel="noopener" href="https://nomadlist.com/meetups" style={{ display: 'block' }}>
                                    <img alt="Playa del Carmen" className="avatar lazyload" src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/places/playa-del-carmen-mexico.jpg" style={{ width: '30px', height: '30px' }} />
                                    <span style={{ display: 'inline-block', width: 'calc(100% - 37px)', whiteSpace: 'nowrap', verticalAlign: 'middle' }}>
                                        Thu 21st Oct: Playa del Carmen <span className="badge">7</span>
                                    </span>
                                    <div style={{ clear: 'both' }} />
                                    <img alt="596a614664b737618258451d9d377798" className="avatar lazyload" src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/596a614664b737618258451d9d377798.jpg?1615146645" />
                                    <img alt="79a9a97f0c7d2c5fbe695498a50c5be9" className="avatar lazyload" src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/79a9a97f0c7d2c5fbe695498a50c5be9.jpg?1630688785" />
                                    <img alt="89eb074130603a4b648a80d66a86e82d" className="avatar lazyload" src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/89eb074130603a4b648a80d66a86e82d.jpg?1634601598" />
                                    <img alt="81ab50f2347e33307b32c1a5b052e678" className="avatar lazyload" src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/81ab50f2347e33307b32c1a5b052e678.jpg?1634605269" />
                                    <img alt="d3ceaef65f80a5cc16d40c512f23656b" className="avatar lazyload" src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/d3ceaef65f80a5cc16d40c512f23656b.jpg?1631596685" />
                                    <img alt="68c2de6a8fd8bde4fd4d769732afa7a0" className="avatar lazyload" src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/68c2de6a8fd8bde4fd4d769732afa7a0.jpg?1633541770" />
                                    <img alt="b70d9cbfa2220248489f37749e4f9701" className="avatar lazyload" src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/b70d9cbfa2220248489f37749e4f9701.jpg?1632283400" />
                                    <img src="./assets/pixel.gif" className="lazyload meetup-photo" style={{ borderRadius: '12px', width: 'calc(100%)', height: '150px', margin: '7px', marginLeft: 0, marginRight: 0, objectFit: 'cover', boxShadow: 'var(--box-shadow-central)' }} data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=cover,width=500,height=300,quality=25/https://nomadlist.com/assets/img/meetups/2021-10-21_playa-del-carmen-mexico_596a614664b737618258451d9d377798_1634924382.4254_92.jpg" />
                                    <div style={{ marginTop: '7px', marginBottom: '7px', width: '100%', borderTop: '1px solid var(--input-border-color)' }} />
                                </a><a target="_blank" rel="noopener" href="https://nomadlist.com/meetups" style={{ display: 'block' }}>
                                    <img alt="Dubai" className="avatar lazyload" src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/places/dubai-united-arab-emirates.jpg" style={{ width: '30px', height: '30px' }} />
                                    <span style={{ display: 'inline-block', width: 'calc(100% - 37px)', whiteSpace: 'nowrap', verticalAlign: 'middle' }}>
                                        Wed 20th Oct: Dubai <span className="badge">7</span>
                                    </span>
                                    <div style={{ clear: 'both' }} />
                                    <img alt="2087729eae6f4f2ccda6adfc0ba35193" className="avatar lazyload" src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/2087729eae6f4f2ccda6adfc0ba35193.jpg?1631250780" />
                                    <img alt="4ede4dce579c3a8b0711ce8256c2b89b" className="avatar lazyload" src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/4ede4dce579c3a8b0711ce8256c2b89b.jpg?1544823298" />
                                    <img alt="58bdd2ea1789de8ca89fb5bb8f554877" className="avatar lazyload" src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/58bdd2ea1789de8ca89fb5bb8f554877.jpg?1620287523" />
                                    <img alt="b1508b2647d6340394ef798cfda822c3" className="avatar lazyload" src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/b1508b2647d6340394ef798cfda822c3.jpg?1604901864" />
                                    <img alt="294b9aee5bebfe5f02b962bea544c53f" className="avatar lazyload" src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/294b9aee5bebfe5f02b962bea544c53f.jpg?1613666815" />
                                    <img alt="7d39a20b13ed1ef54170ad98b04cd8fb" className="avatar lazyload" src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/7d39a20b13ed1ef54170ad98b04cd8fb.jpg?1575410625" />
                                    <img alt="52adef61f8d39c4c7daf6442b884bc04" className="avatar lazyload" src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/52adef61f8d39c4c7daf6442b884bc04.jpg?1631100325" />
                                    <div style={{ marginTop: '7px', marginBottom: '7px', width: '100%', borderTop: '1px solid var(--input-border-color)' }} />
                                </a></div><a target="_blank" rel="noopener" href="https://nomadlist.com/meetups" style={{ display: 'block' }}>
                            </a><li itemScope itemType="http://schema.org/City" data-type="explore" className="item show not-a-place favorited explore-item action-sign-up show-now " data-url="/spain" data-i={20} data-slug><a target="_blank" rel="noopener" href="https://nomadlist.com/meetups" style={{ display: 'block' }}>
                            </a><div className="text"><a target="_blank" rel="noopener" href="https://nomadlist.com/meetups" style={{ display: 'block' }}>
                                <h className="itemName" itemProp="name">
                                </h></a><a itemProp="url" href="	/spain	" title="Visit Spain for Digital Nomads">
                                        Visit Spain
                                    </a>
                                </div>
                                <div className="explore-badge" />
                                <span className="click do-not-open-on-click" />
                                <img src="./assets/pixel.gif" className="bg lazyload" alt="Visit Spain" data-srcset="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=600,height=300,quality=25/https://nomadlist.com/imageProxy.php?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1464730282481-19bd52679224%3Fcrop%3Dentropy%26cs%3Dtinysrgb%26fit%3Dmax%26fm%3Djpg%26ixid%3DMnwzMTM1N3wwfDF8c2VhcmNofDE0fHwlMjIlMjBTcGFpbiUyMCUyMnxlbnwwfDB8fHwxNjMwOTc2MDYz%26ixlib%3Drb-1.2.1%26q%3D80%26w%3D1080&hash=fecb054b4f5a5a155e59da6a37a43f7e 1x,https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=1200,height=600,quality=25/https://nomadlist.com/imageProxy.php?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1464730282481-19bd52679224%3Fcrop%3Dentropy%26cs%3Dtinysrgb%26fit%3Dmax%26fm%3Djpg%26ixid%3DMnwzMTM1N3wwfDF8c2VhcmNofDE0fHwlMjIlMjBTcGFpbiUyMCUyMnxlbnwwfDB8fHwxNjMwOTc2MDYz%26ixlib%3Drb-1.2.1%26q%3D80%26w%3D1080&hash=fecb054b4f5a5a155e59da6a37a43f7e 2x" sizes="25vw, (max-width:1000px) 33vw, (max-width:600px) 50vw" />
                                <meta itemProp="photo" content="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=600,height=300,quality=25/https://nomadlist.com/imageProxy.php?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1464730282481-19bd52679224%3Fcrop%3Dentropy%26cs%3Dtinysrgb%26fit%3Dmax%26fm%3Djpg%26ixid%3DMnwzMTM1N3wwfDF8c2VhcmNofDE0fHwlMjIlMjBTcGFpbiUyMCUyMnxlbnwwfDB8fHwxNjMwOTc2MDYz%26ixlib%3Drb-1.2.1%26q%3D80%26w%3D1080&hash=fecb054b4f5a5a155e59da6a37a43f7e 1x,https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=1200,height=600,quality=25/https://nomadlist.com/imageProxy.php?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1464730282481-19bd52679224%3Fcrop%3Dentropy%26cs%3Dtinysrgb%26fit%3Dmax%26fm%3Djpg%26ixid%3DMnwzMTM1N3wwfDF8c2VhcmNofDE0fHwlMjIlMjBTcGFpbiUyMCUyMnxlbnwwfDB8fHwxNjMwOTc2MDYz%26ixlib%3Drb-1.2.1%26q%3D80%26w%3D1080&hash=fecb054b4f5a5a155e59da6a37a43f7e 2x" />
                                <span className="attributes">
                                    <span className="element top-left" />
                                    <div className="clear" />
                                    <span className="element bottom-right">39,931x viewed</span>
                                    <div className="clear" />
                                    <span className="element top-right" />
                                </span>
                            </li>
                            <div className="item show grid-side-box item-latest-jobs not-a-place ignore-click">
                                <strong className="grid-side-box-heading">
                                    👩‍💻 Hiring remotely
                                </strong>
                                <br />
                                <a target="_blank" rel="noopener" href="https://remoteok.io/remote-jobs/106947-remote-frontend-react-developer-mid-level-wild-audience" style={{ display: 'block', marginBottom: '7px' }}>
                                    <img alt="Wild Audience " className="avatar lazyload" src="./assets/pixel.gif" data-src="https://remoteok.io/cdn-cgi/image/format=auto,fit=crop,width=60,height=60,quality=25/https://remoteOK.io/assets/img/jobs/b20e78db4ce03e37dfc78bfb9a9ed0fd1635867398.png" style={{ border: '1px solid var(--input-border-color)', objectFit: 'contain', borderRadius: '100%', width: '30px', height: '30px', display: 'inline-block', marginRight: '7px', verticalAlign: 'middle' }} />
                                    <span style={{ display: 'inline-block', width: 'calc(100% - 37px)', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
                                        Frontend React Developer Mid level
                                    </span>
                                </a>
                            </div>
                            <div className="item show grid-side-box traveling-today not-a-place ignore-click">
                                <strong className="grid-side-box-heading">🛩 Traveling now</strong>
                                <br />
                                <a target="_blank" href="/@piovella">
                                    <img alt="piovella" data-user-id="09589def4e761da545591ff3f0ab6f1b" className="avatar lazyload" width={40} height={40} style={{ borderRadius: '100%', width: '40px', height: '40px', objectFit: 'contain', margin: '3.5px' }} src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/09589def4e761da545591ff3f0ab6f1b.jpg?1622039833" data-tooltip="@hidden is traveling to hidden today and will be there for a non-descript time" />
                                </a>
                                <a target="_blank" href="/@marcoandcompany">
                                    <img alt="marcoandcompany" data-user-id="7138a549e1e4208efd5fca9b48638a3e" className="avatar lazyload" width={40} height={40} style={{ borderRadius: '100%', width: '40px', height: '40px', objectFit: 'contain', margin: '3.5px' }} src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/7138a549e1e4208efd5fca9b48638a3e.jpg?1631309320" data-tooltip="@hidden is traveling to hidden today and will be there for a non-descript time" />
                                </a>
                                <a target="_blank" href="/@elisabetta">
                                    <img alt="elisabetta" data-user-id="5fcb8efd5dd6b3b74e740dd1e7a58970" className="avatar lazyload" width={40} height={40} style={{ borderRadius: '100%', width: '40px', height: '40px', objectFit: 'contain', margin: '3.5px' }} src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/5fcb8efd5dd6b3b74e740dd1e7a58970.jpg?1610230730" data-tooltip="@hidden is traveling to hidden today and will be there for a non-descript time" />
                                </a>
                                <a target="_blank" href="/@ryannelson">
                                    <img alt="ryannelson" data-user-id="f4a5b96d9c36f5d8cdbb0ec896e75aaf" className="avatar lazyload" width={40} height={40} style={{ borderRadius: '100%', width: '40px', height: '40px', objectFit: 'contain', margin: '3.5px' }} src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/f4a5b96d9c36f5d8cdbb0ec896e75aaf.jpg?1622843528" data-tooltip="@hidden is traveling to hidden today and will be there for a non-descript time" />
                                </a>
                                <a target="_blank" href="/@danielaf">
                                    <img alt="danielaf" data-user-id="bbb56a16b5bec1542a1c0d7b26c55eac" className="avatar lazyload" width={40} height={40} style={{ borderRadius: '100%', width: '40px', height: '40px', objectFit: 'contain', margin: '3.5px' }} src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/bbb56a16b5bec1542a1c0d7b26c55eac.jpg?1620307856" data-tooltip="@hidden is traveling to hidden today and will be there for a non-descript time" />
                                </a>
                                <a target="_blank" href="/@joejones">
                                    <img alt="joejones" data-user-id="995603b766f5c59588aa84a5c6728cd8" className="avatar lazyload" width={40} height={40} style={{ borderRadius: '100%', width: '40px', height: '40px', objectFit: 'contain', margin: '3.5px' }} src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/995603b766f5c59588aa84a5c6728cd8.jpg?1604262868" data-tooltip="@hidden is traveling to hidden today and will be there for a non-descript time" />
                                </a>
                                <a target="_blank" href="/@calichick925">
                                    <img alt="calichick925" data-user-id="3efc88d43ca7743d9a53f25b39a82014" className="avatar lazyload" width={40} height={40} style={{ borderRadius: '100%', width: '40px', height: '40px', objectFit: 'contain', margin: '3.5px' }} src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/3efc88d43ca7743d9a53f25b39a82014.jpg?1626230335" data-tooltip="@hidden is traveling to hidden today and will be there for a non-descript time" />
                                </a>
                                <a target="_blank" href="/@andyabroad">
                                    <img alt="andyabroad" data-user-id="11dd1920585295450bee3df7060cf756" className="avatar lazyload" width={40} height={40} style={{ borderRadius: '100%', width: '40px', height: '40px', objectFit: 'contain', margin: '3.5px' }} src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/11dd1920585295450bee3df7060cf756.jpg?1621473600" data-tooltip="@hidden is traveling to hidden today and will be there for a non-descript time" />
                                </a>
                                <a target="_blank" href="/@teresalbs">
                                    <img alt="teresalbs" data-user-id="1c79369ab8a861d7e8bffd792593088c" className="avatar lazyload" width={40} height={40} style={{ borderRadius: '100%', width: '40px', height: '40px', objectFit: 'contain', margin: '3.5px' }} src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/1c79369ab8a861d7e8bffd792593088c.jpg?1619043270" data-tooltip="@hidden is traveling to hidden today and will be there for a non-descript time" />
                                </a>
                                <a target="_blank" href="/@hazelthehuman">
                                    <img alt="hazelthehuman" data-user-id="d5b790ca8efe990fd4b64e71b4f837fe" className="avatar lazyload" width={40} height={40} style={{ borderRadius: '100%', width: '40px', height: '40px', objectFit: 'contain', margin: '3.5px' }} src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/d5b790ca8efe990fd4b64e71b4f837fe.jpg?1630483357" data-tooltip="@hidden is traveling to hidden today and will be there for a non-descript time" />
                                </a>
                                <a target="_blank" href="/@lisakf">
                                    <img alt="lisakf" data-user-id="2338464595e0f3504e25cc48c31491ce" className="avatar lazyload" width={40} height={40} style={{ borderRadius: '100%', width: '40px', height: '40px', objectFit: 'contain', margin: '3.5px' }} src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/2338464595e0f3504e25cc48c31491ce.jpg?1627927458" data-tooltip="@hidden is traveling to hidden today and will be there for a non-descript time" />
                                </a>
                                <a target="_blank" href="/@mgfeller">
                                    <img alt="mgfeller" data-user-id="a7f652d8f2c7ccf80b225885c01ee0af" className="avatar lazyload" width={40} height={40} style={{ borderRadius: '100%', width: '40px', height: '40px', objectFit: 'contain', margin: '3.5px' }} src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/a7f652d8f2c7ccf80b225885c01ee0af.jpg?1635866780" data-tooltip="@hidden is traveling to hidden today and will be there for a non-descript time" />
                                </a>
                                <a target="_blank" href="/@vailmadison">
                                    <img alt="vailmadison" data-user-id="e32044d1e4a24b110bcc409c4a77e21f" className="avatar lazyload" width={40} height={40} style={{ borderRadius: '100%', width: '40px', height: '40px', objectFit: 'contain', margin: '3.5px' }} src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/e32044d1e4a24b110bcc409c4a77e21f.jpg?1614016402" data-tooltip="@hidden is traveling to hidden today and will be there for a non-descript time" />
                                </a>
                                <a target="_blank" href="/@tinvandigital">
                                    <img alt="tinvandigital" data-user-id="68f2415c1d4a447c5ada4933fbb14302" className="avatar lazyload" width={40} height={40} style={{ borderRadius: '100%', width: '40px', height: '40px', objectFit: 'contain', margin: '3.5px' }} src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/68f2415c1d4a447c5ada4933fbb14302.jpg?1633287681" data-tooltip="@hidden is traveling to hidden today and will be there for a non-descript time" />
                                </a>
                                <a target="_blank" href="/@jeremyrenken">
                                    <img alt="jeremyrenken" data-user-id="bc346281cf16ea9103d1ff63b1f5da90" className="avatar lazyload" width={40} height={40} style={{ borderRadius: '100%', width: '40px', height: '40px', objectFit: 'contain', margin: '3.5px' }} src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/bc346281cf16ea9103d1ff63b1f5da90.jpg?1630864679" data-tooltip="@hidden is traveling to hidden today and will be there for a non-descript time" />
                                </a>
                                <a target="_blank" href="/@noahalzayer">
                                    <img alt="noahalzayer" data-user-id="c5b1d33e98c638f27b6b7ccfbc73f691" className="avatar lazyload" width={40} height={40} style={{ borderRadius: '100%', width: '40px', height: '40px', objectFit: 'contain', margin: '3.5px' }} src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/c5b1d33e98c638f27b6b7ccfbc73f691.jpg?1623092784" data-tooltip="@hidden is traveling to hidden today and will be there for a non-descript time" />
                                </a>
                                <a target="_blank" href="/@captaincole">
                                    <img alt="captaincole" data-user-id="204b33543243e3f6dcfcc86134b2754d" className="avatar lazyload" width={40} height={40} style={{ borderRadius: '100%', width: '40px', height: '40px', objectFit: 'contain', margin: '3.5px' }} src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/204b33543243e3f6dcfcc86134b2754d.jpg?1632687151" data-tooltip="@hidden is traveling to hidden today and will be there for a non-descript time" />
                                </a>
                                <a target="_blank" href="/@grapplerulrich">
                                    <img alt="grapplerulrich" data-user-id="6d68f362fea24df1779e9d8dbbf55cd6" className="avatar lazyload" width={40} height={40} style={{ borderRadius: '100%', width: '40px', height: '40px', objectFit: 'contain', margin: '3.5px' }} src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/6d68f362fea24df1779e9d8dbbf55cd6.jpg?1540583302" data-tooltip="@hidden is traveling to hidden today and will be there for a non-descript time" />
                                </a>
                                <a target="_blank" href="/@chrishjorth">
                                    <img alt="chrishjorth" data-user-id="294b9aee5bebfe5f02b962bea544c53f" className="avatar lazyload" width={40} height={40} style={{ borderRadius: '100%', width: '40px', height: '40px', objectFit: 'contain', margin: '3.5px' }} src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/294b9aee5bebfe5f02b962bea544c53f.jpg?1613666815" data-tooltip="@hidden is traveling to hidden today and will be there for a non-descript time" />
                                </a>
                                <a target="_blank" href="/@vasily">
                                    <img alt="vasily" data-user-id="42a925bd2b08978e2b12587d32366e43" className="avatar lazyload" width={40} height={40} style={{ borderRadius: '100%', width: '40px', height: '40px', objectFit: 'contain', margin: '3.5px' }} src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/42a925bd2b08978e2b12587d32366e43.jpg?1614116546" data-tooltip="@hidden is traveling to hidden today and will be there for a non-descript time" />
                                </a>
                                <a target="_blank" href="/@lexrodba">
                                    <img alt="lexrodba" data-user-id="0f71ad0cad7e91675322bf4cb4187437" className="avatar lazyload" width={40} height={40} style={{ borderRadius: '100%', width: '40px', height: '40px', objectFit: 'contain', margin: '3.5px' }} src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/0f71ad0cad7e91675322bf4cb4187437.jpg?1610455679" data-tooltip="@hidden is traveling to hidden today and will be there for a non-descript time" />
                                </a>
                                <a target="_blank" href="/@cameldriver">
                                    <img alt="cameldriver" data-user-id="3727f0505d8d90658fe3a19002917b0b" className="avatar lazyload" width={40} height={40} style={{ borderRadius: '100%', width: '40px', height: '40px', objectFit: 'contain', margin: '3.5px' }} src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/3727f0505d8d90658fe3a19002917b0b.jpg?1624116014" data-tooltip="@hidden is traveling to hidden today and will be there for a non-descript time" />
                                </a>
                                <a target="_blank" href="/@david_a">
                                    <img alt="david_a" data-user-id="743e105a98aa6f4d0074b9d361f1fd41" className="avatar lazyload" width={40} height={40} style={{ borderRadius: '100%', width: '40px', height: '40px', objectFit: 'contain', margin: '3.5px' }} src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/743e105a98aa6f4d0074b9d361f1fd41.jpg?1620782918" data-tooltip="@hidden is traveling to hidden today and will be there for a non-descript time" />
                                </a>
                                <a target="_blank" href="/@wjlittlefield2">
                                    <img alt="wjlittlefield2" data-user-id="a4fa8cbb1121268b9cd16d061cd0c70b" className="avatar lazyload" width={40} height={40} style={{ borderRadius: '100%', width: '40px', height: '40px', objectFit: 'contain', margin: '3.5px' }} src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/a4fa8cbb1121268b9cd16d061cd0c70b.jpg?1621024668" data-tooltip="@hidden is traveling to hidden today and will be there for a non-descript time" />
                                </a>
                                <a target="_blank" href="/@trevayneobrien">
                                    <img alt="trevayneobrien" data-user-id="28d5c687889da406d1ca473b637c4ad3" className="avatar lazyload" width={40} height={40} style={{ borderRadius: '100%', width: '40px', height: '40px', objectFit: 'contain', margin: '3.5px' }} src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/28d5c687889da406d1ca473b637c4ad3.jpg?1604320852" data-tooltip="@hidden is traveling to hidden today and will be there for a non-descript time" />
                                </a>
                                <a target="_blank" href="/@dactrtr">
                                    <img alt="dactrtr" data-user-id="506cce73af0356e7f1627252d3750157" className="avatar lazyload" width={40} height={40} style={{ borderRadius: '100%', width: '40px', height: '40px', objectFit: 'contain', margin: '3.5px' }} src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/506cce73af0356e7f1627252d3750157.jpg?1583613134" data-tooltip="@hidden is traveling to hidden today and will be there for a non-descript time" />
                                </a>
                            </div>
                            <div className="item show grid-side-box traveling-today not-a-place ignore-click">
                                <strong className="grid-side-box-heading">👋 New members</strong>
                                <br />
                                <a target="_blank" href="/@quin">
                                    <img alt="quin" data-user-id="ae0b8816c897264e84875159e739dc41" className="avatar lazyload" width={40} height={40} style={{ borderRadius: '100%', width: '40px', height: '40px', objectFit: 'contain', margin: '3.5px' }} src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/ae0b8816c897264e84875159e739dc41.jpg?1635446037" />
                                </a>
                                <a target="_blank" href="/@jamieb">
                                    <img alt="jamieb" data-user-id="9e16fe9b09fb58c1ad7d8bbdc64924e5" className="avatar lazyload" width={40} height={40} style={{ borderRadius: '100%', width: '40px', height: '40px', objectFit: 'contain', margin: '3.5px' }} src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/9e16fe9b09fb58c1ad7d8bbdc64924e5.jpg?1635710918" />
                                </a>
                                <a target="_blank" href="/@darlene">
                                    <img alt="darlene" data-user-id="397afea1f04cff148ed4802486b3f053" className="avatar lazyload" width={40} height={40} style={{ borderRadius: '100%', width: '40px', height: '40px', objectFit: 'contain', margin: '3.5px' }} src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/397afea1f04cff148ed4802486b3f053.jpg?1635432394" />
                                </a>
                                <a target="_blank" href="/@johannesf">
                                    <img alt="johannesf" data-user-id="bb1a35c60e3563787f01c73fac547c72" className="avatar lazyload" width={40} height={40} style={{ borderRadius: '100%', width: '40px', height: '40px', objectFit: 'contain', margin: '3.5px' }} src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/bb1a35c60e3563787f01c73fac547c72.jpg?1635416255" />
                                </a>
                                <a target="_blank" href="/@rj0406">
                                    <img alt="rj0406" data-user-id="0b40feac2b047e08cbee93e2f5fd10af" className="avatar lazyload" width={40} height={40} style={{ borderRadius: '100%', width: '40px', height: '40px', objectFit: 'contain', margin: '3.5px' }} src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/0b40feac2b047e08cbee93e2f5fd10af.jpg?1635802045" />
                                </a>
                                <a target="_blank" href="/@francissprenger">
                                    <img alt="francissprenger" data-user-id="9c0b73180ab04e0fa82a369492dc2417" className="avatar lazyload" width={40} height={40} style={{ borderRadius: '100%', width: '40px', height: '40px', objectFit: 'contain', margin: '3.5px' }} src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/9c0b73180ab04e0fa82a369492dc2417.jpg?1635547649" />
                                </a>
                                <a target="_blank" href="/@elizabeth">
                                    <img alt="elizabeth" data-user-id="683fa8cda78e31028602d50e9f0e950f" className="avatar lazyload" width={40} height={40} style={{ borderRadius: '100%', width: '40px', height: '40px', objectFit: 'contain', margin: '3.5px' }} src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/683fa8cda78e31028602d50e9f0e950f.jpg?1635280586" />
                                </a>
                                <a target="_blank" href="/@mikes1424">
                                    <img alt="mikes1424" data-user-id="25aa40cae4675d881bdbfe3b4a455ad3" className="avatar lazyload" width={40} height={40} style={{ borderRadius: '100%', width: '40px', height: '40px', objectFit: 'contain', margin: '3.5px' }} src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/25aa40cae4675d881bdbfe3b4a455ad3.jpg?1635563334" />
                                </a>
                                <a target="_blank" href="/@kami">
                                    <img alt="kami" data-user-id="805f40bc9ad7e598369bb3fdc0d34038" className="avatar lazyload" width={40} height={40} style={{ borderRadius: '100%', width: '40px', height: '40px', objectFit: 'contain', margin: '3.5px' }} src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/805f40bc9ad7e598369bb3fdc0d34038.jpg?1635665319" />
                                </a>
                                <a target="_blank" href="/@yazanator">
                                    <img alt="yazanator" data-user-id="c7e96ea7fedb9e9c4165cf56937e7028" className="avatar lazyload" width={40} height={40} style={{ borderRadius: '100%', width: '40px', height: '40px', objectFit: 'contain', margin: '3.5px' }} src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/c7e96ea7fedb9e9c4165cf56937e7028.jpg?1635724177" />
                                </a>
                                <a target="_blank" href="/@jenruvolo">
                                    <img alt="jenruvolo" data-user-id="81c555943383a70a3315adc7d6db8419" className="avatar lazyload" width={40} height={40} style={{ borderRadius: '100%', width: '40px', height: '40px', objectFit: 'contain', margin: '3.5px' }} src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/81c555943383a70a3315adc7d6db8419.jpg?1635673088" />
                                </a>
                                <a target="_blank" href="/@mykola">
                                    <img alt="mykola" data-user-id="1ca0598f7655c71a050e8d85dede92cf" className="avatar lazyload" width={40} height={40} style={{ borderRadius: '100%', width: '40px', height: '40px', objectFit: 'contain', margin: '3.5px' }} src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/1ca0598f7655c71a050e8d85dede92cf.jpg?1635319680" />
                                </a>
                                <a target="_blank" href="/@may">
                                    <img alt="may" data-user-id="fcc6d59d70bd11147e0a561e32bc7192" className="avatar lazyload" width={40} height={40} style={{ borderRadius: '100%', width: '40px', height: '40px', objectFit: 'contain', margin: '3.5px' }} src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/fcc6d59d70bd11147e0a561e32bc7192.jpg?1635679465" />
                                </a>
                                <a target="_blank" href="/@cussj001">
                                    <img alt="cussj001" data-user-id="272f0ae56618ef9688edbd548413312c" className="avatar lazyload" width={40} height={40} style={{ borderRadius: '100%', width: '40px', height: '40px', objectFit: 'contain', margin: '3.5px' }} src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/272f0ae56618ef9688edbd548413312c.jpg?1635712199" />
                                </a>
                                <a target="_blank" href="/@kathyah">
                                    <img alt="kathyah" data-user-id="7002537c791636af38ce78edf9728e56" className="avatar lazyload" width={40} height={40} style={{ borderRadius: '100%', width: '40px', height: '40px', objectFit: 'contain', margin: '3.5px' }} src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/7002537c791636af38ce78edf9728e56.jpg?1635300357" />
                                </a>
                                <a target="_blank" href="/@kodahpip">
                                    <img alt="kodahpip" data-user-id="559d9aec19dc3a6c031e2289250a30db" className="avatar lazyload" width={40} height={40} style={{ borderRadius: '100%', width: '40px', height: '40px', objectFit: 'contain', margin: '3.5px' }} src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/559d9aec19dc3a6c031e2289250a30db.jpg?1635498363" />
                                </a>
                                <a target="_blank" href="/@sbpickering">
                                    <img alt="sbpickering" data-user-id="da4ad6de79715840e096f92a4d17fbe9" className="avatar lazyload" width={40} height={40} style={{ borderRadius: '100%', width: '40px', height: '40px', objectFit: 'contain', margin: '3.5px' }} src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/da4ad6de79715840e096f92a4d17fbe9.jpg?1635486361" />
                                </a>
                                <a target="_blank" href="/@ecomba">
                                    <img alt="ecomba" data-user-id="cef6b3bde1c23bcddfbe419ddc3d45f9" className="avatar lazyload" width={40} height={40} style={{ borderRadius: '100%', width: '40px', height: '40px', objectFit: 'contain', margin: '3.5px' }} src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/cef6b3bde1c23bcddfbe419ddc3d45f9.jpg?1635336019" />
                                </a>
                                <a target="_blank" href="/@artdimitrov">
                                    <img alt="artdimitrov" data-user-id="12f131b9cff07275d1e75dd81bb58b50" className="avatar lazyload" width={40} height={40} style={{ borderRadius: '100%', width: '40px', height: '40px', objectFit: 'contain', margin: '3.5px' }} src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/12f131b9cff07275d1e75dd81bb58b50.jpg?1635765618" />
                                </a>
                                <a target="_blank" href="/@partmor">
                                    <img alt="partmor" data-user-id="d43c9518896af6a3cfe283cd04576100" className="avatar lazyload" width={40} height={40} style={{ borderRadius: '100%', width: '40px', height: '40px', objectFit: 'contain', margin: '3.5px' }} src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/d43c9518896af6a3cfe283cd04576100.jpg?1635322504" />
                                </a>
                                <a target="_blank" href="/@konradgnat">
                                    <img alt="konradgnat" data-user-id="19a00d01444e1c0b86d7495145e43d58" className="avatar lazyload" width={40} height={40} style={{ borderRadius: '100%', width: '40px', height: '40px', objectFit: 'contain', margin: '3.5px' }} src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/19a00d01444e1c0b86d7495145e43d58.jpg?1635709694" />
                                </a>
                                <a target="_blank" href="/@pgate89">
                                    <img alt="pgate89" data-user-id="7ee6fbe313f848ee6b6c06e3b4fa8c3d" className="avatar lazyload" width={40} height={40} style={{ borderRadius: '100%', width: '40px', height: '40px', objectFit: 'contain', margin: '3.5px' }} src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/7ee6fbe313f848ee6b6c06e3b4fa8c3d.jpg?1635434714" />
                                </a>
                                <a target="_blank" href="/@jpsoares">
                                    <img alt="jpsoares" data-user-id="ec87e77a8842025768f4d2e0bda3e1a1" className="avatar lazyload" width={40} height={40} style={{ borderRadius: '100%', width: '40px', height: '40px', objectFit: 'contain', margin: '3.5px' }} src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/ec87e77a8842025768f4d2e0bda3e1a1.jpg?1635488323" />
                                </a>
                                <a target="_blank" href="/@marcreese">
                                    <img alt="marcreese" data-user-id="38c7a4a086d4c97174959d8042e9c5d5" className="avatar lazyload" width={40} height={40} style={{ borderRadius: '100%', width: '40px', height: '40px', objectFit: 'contain', margin: '3.5px' }} src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/38c7a4a086d4c97174959d8042e9c5d5.jpg?1635768043" />
                                </a>
                                <a target="_blank" href="/@mscattered">
                                    <img alt="mscattered" data-user-id="09add5079f4517d9f3b4bf76f475d141" className="avatar lazyload" width={40} height={40} style={{ borderRadius: '100%', width: '40px', height: '40px', objectFit: 'contain', margin: '3.5px' }} src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/09add5079f4517d9f3b4bf76f475d141.jpg?1635619968" />
                                </a>
                                <a target="_blank" href="/@djordje">
                                    <img alt="djordje" data-user-id="5b04f21f363ab0821bf4c94fef36f625" className="avatar lazyload" width={40} height={40} style={{ borderRadius: '100%', width: '40px', height: '40px', objectFit: 'contain', margin: '3.5px' }} src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/5b04f21f363ab0821bf4c94fef36f625.jpg?1635511237" />
                                </a>
                                <a target="_blank" href="/@croissant">
                                    <img alt="croissant" data-user-id="33dc3214fd1f9b2ba3998f9dd45c9692" className="avatar lazyload" width={40} height={40} style={{ borderRadius: '100%', width: '40px', height: '40px', objectFit: 'contain', margin: '3.5px' }} src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/33dc3214fd1f9b2ba3998f9dd45c9692.jpg?1635568944" />
                                </a>
                                <a target="_blank" href="/@hangaisho">
                                    <img alt="hangaisho" data-user-id="f2a21162539b7ee4ac5337925303f9e8" className="avatar lazyload" width={40} height={40} style={{ borderRadius: '100%', width: '40px', height: '40px', objectFit: 'contain', margin: '3.5px' }} src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/f2a21162539b7ee4ac5337925303f9e8.jpg?1635486077" />
                                </a>
                                <a target="_blank" href="/@divyaansh">
                                    <img alt="divyaansh" data-user-id="610615805c29a94457e49f3dbcc28290" className="avatar lazyload" width={40} height={40} style={{ borderRadius: '100%', width: '40px', height: '40px', objectFit: 'contain', margin: '3.5px' }} src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/610615805c29a94457e49f3dbcc28290.jpg?1635382216" />
                                </a>
                                <a target="_blank" href="/@teardrop">
                                    <img alt="teardrop" data-user-id="3c77bf54318bf9b36c2fb8f9511f5a91" className="avatar lazyload" width={40} height={40} style={{ borderRadius: '100%', width: '40px', height: '40px', objectFit: 'contain', margin: '3.5px' }} src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/3c77bf54318bf9b36c2fb8f9511f5a91.jpg?1635552340" />
                                </a>
                                <a target="_blank" href="/@daniel13rady">
                                    <img alt="daniel13rady" data-user-id="dad0b2fd3583fd6e9141879f3e4ca7c0" className="avatar lazyload" width={40} height={40} style={{ borderRadius: '100%', width: '40px', height: '40px', objectFit: 'contain', margin: '3.5px' }} src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/dad0b2fd3583fd6e9141879f3e4ca7c0.jpg?1635736208" />
                                </a>
                                <a target="_blank" href="/@forestrussell">
                                    <img alt="forestrussell" data-user-id="bf2e8e33efb490f4700dea3327a69b03" className="avatar lazyload" width={40} height={40} style={{ borderRadius: '100%', width: '40px', height: '40px', objectFit: 'contain', margin: '3.5px' }} src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/bf2e8e33efb490f4700dea3327a69b03.jpg?1635453753" />
                                </a>
                                <a target="_blank" href="/@martinb">
                                    <img alt="martinb" data-user-id="fda16949d0e401c119f7ef8c23b29686" className="avatar lazyload" width={40} height={40} style={{ borderRadius: '100%', width: '40px', height: '40px', objectFit: 'contain', margin: '3.5px' }} src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/fda16949d0e401c119f7ef8c23b29686.jpg?1635626490" />
                                </a>
                                <a target="_blank" href="/@feliperieger">
                                    <img alt="feliperieger" data-user-id="773237016833bcb60b7db7c598bc9e28" className="avatar lazyload" width={40} height={40} style={{ borderRadius: '100%', width: '40px', height: '40px', objectFit: 'contain', margin: '3.5px' }} src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/773237016833bcb60b7db7c598bc9e28.jpg?1635729150" />
                                </a>
                                <a target="_blank" href="/@bertrand">
                                    <img alt="bertrand" data-user-id="ae7f321ba5f2700b8d1c4af20fe03275" className="avatar lazyload" width={40} height={40} style={{ borderRadius: '100%', width: '40px', height: '40px', objectFit: 'contain', margin: '3.5px' }} src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/ae7f321ba5f2700b8d1c4af20fe03275.jpg?1635699324" />
                                </a>
                                <a target="_blank" href="/@smith64fx">
                                    <img alt="smith64fx" data-user-id="5d5c2a6cde46068bf55fa00702de83eb" className="avatar lazyload" width={40} height={40} style={{ borderRadius: '100%', width: '40px', height: '40px', objectFit: 'contain', margin: '3.5px' }} src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/5d5c2a6cde46068bf55fa00702de83eb.jpg?1635431002" />
                                </a>
                                <a target="_blank" href="/@brandonhli">
                                    <img alt="brandonhli" data-user-id="21ac40082ee490b72b337c48edcb5de8" className="avatar lazyload" width={40} height={40} style={{ borderRadius: '100%', width: '40px', height: '40px', objectFit: 'contain', margin: '3.5px' }} src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/21ac40082ee490b72b337c48edcb5de8.jpg?1635522405" />
                                </a>
                                <a target="_blank" href="/@dannimac">
                                    <img alt="dannimac" data-user-id="5f16c00b6f9de482a881826a29cdfb96" className="avatar lazyload" width={40} height={40} style={{ borderRadius: '100%', width: '40px', height: '40px', objectFit: 'contain', margin: '3.5px' }} src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/5f16c00b6f9de482a881826a29cdfb96.jpg?1635798987" />
                                </a>
                                <a target="_blank" href="/@schmittsfn">
                                    <img alt="schmittsfn" data-user-id="540176a9de7921ed592df0d5bbc4ffe1" className="avatar lazyload" width={40} height={40} style={{ borderRadius: '100%', width: '40px', height: '40px', objectFit: 'contain', margin: '3.5px' }} src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/540176a9de7921ed592df0d5bbc4ffe1.jpg?1635617669" />
                                </a>
                                <a target="_blank" href="/@ccie">
                                    <img alt="ccie" data-user-id="9c22305c4ecdfb801f8aaa9aa4610072" className="avatar lazyload" width={40} height={40} style={{ borderRadius: '100%', width: '40px', height: '40px', objectFit: 'contain', margin: '3.5px' }} src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/9c22305c4ecdfb801f8aaa9aa4610072.jpg?1635714796" />
                                </a>
                                <a target="_blank" href="/@gogosapiens">
                                    <img alt="gogosapiens" data-user-id="cb49aadd024f9a29aa029b7ce5cab3da" className="avatar lazyload" width={40} height={40} style={{ borderRadius: '100%', width: '40px', height: '40px', objectFit: 'contain', margin: '3.5px' }} src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/cb49aadd024f9a29aa029b7ce5cab3da.jpg?1635776319" />
                                </a>
                                <a target="_blank" href="/@kafernand">
                                    <img alt="kafernand" data-user-id="d09a2dcfe09382abefb94b963c535ae7" className="avatar lazyload" width={40} height={40} style={{ borderRadius: '100%', width: '40px', height: '40px', objectFit: 'contain', margin: '3.5px' }} src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/d09a2dcfe09382abefb94b963c535ae7.jpg?1635479583" />
                                </a>
                                <a target="_blank" href="/@riskman">
                                    <img alt="riskman" data-user-id="93bb3e72df0765c6816a81433a582c84" className="avatar lazyload" width={40} height={40} style={{ borderRadius: '100%', width: '40px', height: '40px', objectFit: 'contain', margin: '3.5px' }} src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/93bb3e72df0765c6816a81433a582c84.jpg?1635713610" />
                                </a>
                                <a target="_blank" href="/@lucasg">
                                    <img alt="lucasg" data-user-id="8695b913f7c5bfc09a638aeb86746788" className="avatar lazyload" width={40} height={40} style={{ borderRadius: '100%', width: '40px', height: '40px', objectFit: 'contain', margin: '3.5px' }} src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/8695b913f7c5bfc09a638aeb86746788.jpg?1635459026" />
                                </a>
                                <a target="_blank" href="/@marcusa">
                                    <img alt="marcusa" data-user-id="8fca6eea0feee0720cbe9ea26aef9746" className="avatar lazyload" width={40} height={40} style={{ borderRadius: '100%', width: '40px', height: '40px', objectFit: 'contain', margin: '3.5px' }} src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/8fca6eea0feee0720cbe9ea26aef9746.jpg?1635770857" />
                                </a>
                                <a target="_blank" href="/@nfinit">
                                    <img alt="nfinit" data-user-id="5d55176c0548b216e38ac43adfcb23e0" className="avatar lazyload" width={40} height={40} style={{ borderRadius: '100%', width: '40px', height: '40px', objectFit: 'contain', margin: '3.5px' }} src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/5d55176c0548b216e38ac43adfcb23e0.jpg?1635398877" />
                                </a>
                                <a target="_blank" href="/@bermudatriangle">
                                    <img alt="bermudatriangle" data-user-id="58579c8ae144cb0e681663eb05b13188" className="avatar lazyload" width={40} height={40} style={{ borderRadius: '100%', width: '40px', height: '40px', objectFit: 'contain', margin: '3.5px' }} src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/58579c8ae144cb0e681663eb05b13188.jpg?1635616833" />
                                </a>
                                <a target="_blank" href="/@spacepirate">
                                    <img alt="spacepirate" data-user-id="17bda2361d1c9069e7904fb52e9300f1" className="avatar lazyload" width={40} height={40} style={{ borderRadius: '100%', width: '40px', height: '40px', objectFit: 'contain', margin: '3.5px' }} src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/17bda2361d1c9069e7904fb52e9300f1.jpg?1635404118" />
                                </a>
                                <a target="_blank" href="/@xabi">
                                    <img alt="xabi" data-user-id="9e9ac33383ac0f1c87a781476aca3c01" className="avatar lazyload" width={40} height={40} style={{ borderRadius: '100%', width: '40px', height: '40px', objectFit: 'contain', margin: '3.5px' }} src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/9e9ac33383ac0f1c87a781476aca3c01.jpg?1635285920" />
                                </a>
                                <a target="_blank" href="/@varungohil">
                                    <img alt="varungohil" data-user-id="0a1239fa0d0fa149d325107d5c0dfd8d" className="avatar lazyload" width={40} height={40} style={{ borderRadius: '100%', width: '40px', height: '40px', objectFit: 'contain', margin: '3.5px' }} src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/0a1239fa0d0fa149d325107d5c0dfd8d.jpg?1635415365" />
                                </a>
                                <a target="_blank" href="/@mattmaple">
                                    <img alt="mattmaple" data-user-id="7f9e28af30ed97618616b7f16029bc73" className="avatar lazyload" width={40} height={40} style={{ borderRadius: '100%', width: '40px', height: '40px', objectFit: 'contain', margin: '3.5px' }} src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/7f9e28af30ed97618616b7f16029bc73.jpg?1635331543" />
                                </a>
                                <a target="_blank" href="/@sergy">
                                    <img alt="sergy" data-user-id="2b46c52e672949806c4bed82cc8f9dfb" className="avatar lazyload" width={40} height={40} style={{ borderRadius: '100%', width: '40px', height: '40px', objectFit: 'contain', margin: '3.5px' }} src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/2b46c52e672949806c4bed82cc8f9dfb.jpg?1635624496" />
                                </a>
                                <a target="_blank" href="/@officialtaras">
                                    <img alt="officialtaras" data-user-id="009eaf5d0da0c57f98d6b294c55eed51" className="avatar lazyload" width={40} height={40} style={{ borderRadius: '100%', width: '40px', height: '40px', objectFit: 'contain', margin: '3.5px' }} src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/009eaf5d0da0c57f98d6b294c55eed51.jpg?1635334079" />
                                </a>
                                <a target="_blank" href="/@joakim95">
                                    <img alt="joakim95" data-user-id="574c4086430f5fdbca206d73ea8ac9a5" className="avatar lazyload" width={40} height={40} style={{ borderRadius: '100%', width: '40px', height: '40px', objectFit: 'contain', margin: '3.5px' }} src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/574c4086430f5fdbca206d73ea8ac9a5.jpg?1635420317" />
                                </a>
                                <a target="_blank" href="/@blanglie">
                                    <img alt="blanglie" data-user-id="6d86c226f48ce517633c7c98d141f2b2" className="avatar lazyload" width={40} height={40} style={{ borderRadius: '100%', width: '40px', height: '40px', objectFit: 'contain', margin: '3.5px' }} src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/6d86c226f48ce517633c7c98d141f2b2.jpg?1635293773" />
                                </a>
                                <a target="_blank" href="/@tahseen">
                                    <img alt="tahseen" data-user-id="244c1832dd9779ad62c85471847719c9" className="avatar lazyload" width={40} height={40} style={{ borderRadius: '100%', width: '40px', height: '40px', objectFit: 'contain', margin: '3.5px' }} src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/244c1832dd9779ad62c85471847719c9.jpg?1635779515" />
                                </a>
                                <a target="_blank" href="/@jall">
                                    <img alt="jall" data-user-id="b9355c2757c6b4741b0f4def87d8a588" className="avatar lazyload" width={40} height={40} style={{ borderRadius: '100%', width: '40px', height: '40px', objectFit: 'contain', margin: '3.5px' }} src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/b9355c2757c6b4741b0f4def87d8a588.jpg?1635611478" />
                                </a>
                                <a target="_blank" href="/@dwmoff">
                                    <img alt="dwmoff" data-user-id="095def796f22bd52f62f807b70ce9da5" className="avatar lazyload" width={40} height={40} style={{ borderRadius: '100%', width: '40px', height: '40px', objectFit: 'contain', margin: '3.5px' }} src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/095def796f22bd52f62f807b70ce9da5.jpg?1635634470" />
                                </a>
                                <a target="_blank" href="/@saschabitz">
                                    <img alt="saschabitz" data-user-id="f7db33cc37f00ef6a9b417c4cfa5bb47" className="avatar lazyload" width={40} height={40} style={{ borderRadius: '100%', width: '40px', height: '40px', objectFit: 'contain', margin: '3.5px' }} src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/f7db33cc37f00ef6a9b417c4cfa5bb47.jpg?1635706762" />
                                </a>
                                <a target="_blank" href="/@basvanderwals">
                                    <img alt="basvanderwals" data-user-id="738362d4d1f313c19b1451750e74cfa2" className="avatar lazyload" width={40} height={40} style={{ borderRadius: '100%', width: '40px', height: '40px', objectFit: 'contain', margin: '3.5px' }} src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/738362d4d1f313c19b1451750e74cfa2.jpg?1635714856" />
                                </a>
                                <a target="_blank" href="/@winston">
                                    <img alt="winston" data-user-id="b8ad3b69aa5d61e32eae9475ff7de6e8" className="avatar lazyload" width={40} height={40} style={{ borderRadius: '100%', width: '40px', height: '40px', objectFit: 'contain', margin: '3.5px' }} src="./assets/pixel.gif" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=100,height=100,quality=25/https://nomadlist.com/assets/img/users/b8ad3b69aa5d61e32eae9475ff7de6e8.jpg?1635402733" />
                                </a>
                            </div>
                        </div>
                        <li itemScope itemType="http://schema.org/City" data-type="city" className="item show show-now lisbon" data-url="/lisbon" data-i={1} data-slug="lisbon">
                            <div className="text">
                                <h2 className="itemName" itemProp="name">
                                    <a itemProp="url" href="	/lisbon	" title="Lisbon for Digital Nomads">
                                        Lisbon
                                    </a>
                                </h2>
                                <h3 className="itemSub">
                                    <a href="/country/portugal" title="Portugal for a Digital Nomad">
                                        Portugal
                                    </a>
                                </h3>
                            </div>
                            <div className="popular-city-badge" />
                            <span className="click " />
                            <img src="./assets/pixel.gif" className="bg lazyload" alt="Lisbon" data-srcset="	https://nomadlist.com/cdn-cgi/image/format=auto,fit=cover,width=300,height=150,quality=25/https://nomadlist.com/assets/img/places/lisbon-portugal.jpg?1635811399 300w,	https://nomadlist.com/cdn-cgi/image/format=auto,fit=cover,width=600,height=300,quality=25/https://nomadlist.com/assets/img/places/lisbon-portugal.jpg?1635811399 600w" sizes="25vw, (max-width:1000px) 33vw, (max-width:600px) 50vw" />
                            <meta itemProp="photo" content="https://nomadlist.com/cdn-cgi/image/format=auto,fit=cover,width=600,height=300,quality=25/https://nomadlist.com/assets/img/places/lisbon-portugal.jpg?1635811399" />
                            <span className="action">
                                <p className="description" itemProp="description">
                                    Pros: -Great airport for connections to Africa and South
                                    America. -Has some really beautiful views. -Great fruit and
                                    fish. -Native Portuguese people are generally friendly and
                                    helpful. -Wonderful moderate climate (better than Spain) Cons:
                                    -The dirtiest major city I've seen in Europe. Filthy buildings
                                    and dog crap everywhere. -Unsafe - most other women I spoke to
                                    said they feel unsafe walking alone here (being leered at,
                                    whistled at and followed by the mostly immigrant men is a
                                    common occurrenc
                                </p>
                                <span className="label-main-score label">
                                    ⭐️ <span className="hide-before-400px">Overall</span>
                                    <span className="show-before-400px">All</span>
                                </span>
                                &nbsp;
                                <span className="rating-main-score rating r5">
                                    <span className="filling" style={{ width: '95.601555059106%' }} />
                                </span>
                                <div className="clear" />
                                <span className="label-cost-score label">💵 Cost&nbsp;</span>
                                <span className="rating-cost-score rating r4">
                                    <span className="filling" style={{ width: '86.08%' }}>
                                        <span className="text">😙 Affordable</span>
                                    </span>
                                </span>
                                <div className="clear" />
                                <span className="label-internet-score label">
                                    📡 <span className="hide-before-900px">Internet</span>
                                    <span className="hide-after-900px">WiFi</span>&nbsp;
                                </span>
                                <span className="rating-internet-score rating r5">
                                    <span className="filling" style={{ width: '100%' }}>
                                        <span className="text">🏎 Fast</span>
                                    </span>
                                </span>
                                <div className="clear" />
                                <span className="label-fun-score label">😀 Fun&nbsp;</span>
                                <span className="rating-fun-score rating r5">
                                    <span className="filling" style={{ width: '100%' }}>
                                        <span className="text">great</span>
                                    </span>
                                </span>
                                <div className="clear" />
                                <span className="label-safety-score label">👮 Safety&nbsp;</span>
                                <span className="rating-safety-score rating r4">
                                    <span className="filling" style={{ width: '89.5%' }}>
                                        <span className="text">good</span>
                                    </span>
                                </span>
                                <div className="clear" />
                                <span className="button red reverse action-tap-to-open">
                                    Tap to open
                                </span>
                                <div className="clear" />
                            </span>
                            <span className="attributes">
                                <span className="element bottom-left">
                                    <span className="weather-emoji">🌤</span>&nbsp;
                                    <span className="temperature " data-value={16}>
                                        <span className="label-heat-index">
                                            Feels&nbsp;<span className="value unit metric">16°</span>
                                            &nbsp;<span className="value unit imperial">61°</span>
                                        </span>
                                        &nbsp;<span className="value unit metric">16°</span>&nbsp;
                                        <span className="value unit imperial">61°</span>
                                    </span>
                                    <span className="air_quality ">
                                        <span className="above">AQI</span> <span className="value">6</span>
                                    </span>
                                </span>
                                <div className="clear" />
                                <span className="element top-left">
                                    <span className="rank">1</span>
                                </span>
                                <div className="clear" />
                                <span className="element bottom-right short_term_cost cost switchable" data-value={1480}>
                                    <span className="price" data-usd={2109}>
                                        $2,109
                                    </span>{'{'}" "{'}'}
                                    / mo
                                </span>
                                <div className="clear" />
                                <span className="element top-right">
                                    <span className="left" style={{ position: 'relative', paddingLeft: '1.25em', paddingBottom: '1em' }}>
                                        <svg width={25} className="wifi-svg" aria-hidden="true" data-prefix="fas" data-icon="wifi" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                                            <path fill="currentColor" d="M634.91 154.88C457.74-8.99 182.19-8.93 5.09 154.88c-6.66 6.16-6.79 16.59-.35 22.98l34.24 33.97c6.14 6.1 16.02 6.23 22.4.38 145.92-133.68 371.3-133.71 517.25 0 6.38 5.85 16.26 5.71 22.4-.38l34.24-33.97c6.43-6.39 6.3-16.82-.36-22.98zM320 352c-35.35 0-64 28.65-64 64s28.65 64 64 64 64-28.65 64-64-28.65-64-64-64zm202.67-83.59c-115.26-101.93-290.21-101.82-405.34 0-6.9 6.1-7.12 16.69-.57 23.15l34.44 33.99c6 5.92 15.66 6.32 22.05.8 83.95-72.57 209.74-72.41 293.49 0 6.39 5.52 16.05 5.13 22.05-.8l34.44-33.99c6.56-6.46 6.33-17.06-.56-23.15z" className />
                                        </svg>
                                    </span>
                                    <span className="right">
                                        <span className="value">26</span>
                                        <span className="mbps">Mbps</span>
                                    </span>
                                </span>
                            </span>
                            <span className="action-hide-item tooltip" title="Hide place in results for this search, it will come back on your next search or if you reload Nomad List">
                                ×
                            </span>
                            <span className="action-favorite tooltip" title="Add to your favorites">
                                <svg aria-hidden="true" width={25} focusable="false" data-prefix="fas" data-icon="heart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-heart fa-w-16 fa-9x">
                                    <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z" />
                                </svg>
                            </span>
                        </li>
                        <li itemScope itemType="http://schema.org/City" data-type="city" className="item show show-now madeira" data-url="/funchal" data-i={2} data-slug="madeira">
                            <div className="text">
                                <h2 className="itemName" itemProp="name">
                                    <a itemProp="url" href="	/funchal	" title="Madeira for Digital Nomads">
                                        Madeira
                                    </a>
                                </h2>
                                <h3 className="itemSub">
                                    <a href="/country/portugal" title="Portugal for a Digital Nomad">
                                        Portugal
                                    </a>
                                </h3>
                            </div>
                            <span className="click " />
                            <img src="./assets/pixel.gif" className="bg lazyload" alt="Madeira" data-srcset="	https://nomadlist.com/cdn-cgi/image/format=auto,fit=cover,width=300,height=150,quality=25/https://nomadlist.com/assets/img/places/madeira-portugal.jpg?1635811404 300w,	https://nomadlist.com/cdn-cgi/image/format=auto,fit=cover,width=600,height=300,quality=25/https://nomadlist.com/assets/img/places/madeira-portugal.jpg?1635811404 600w" sizes="25vw, (max-width:1000px) 33vw, (max-width:600px) 50vw" />
                            <meta itemProp="photo" content="https://nomadlist.com/cdn-cgi/image/format=auto,fit=cover,width=600,height=300,quality=25/https://nomadlist.com/assets/img/places/madeira-portugal.jpg?1635811404" />
                            <span className="action">
                                <p className="description" itemProp="description">
                                    If you are into fitness, don't forget to join Madeira Fitness
                                    Friends group! Best training program and friendly community
                                    ever on this island!{'{'}" "{'}'}
                                </p>
                                <span className="label-main-score label">
                                    ⭐️ <span className="hide-before-400px">Overall</span>
                                    <span className="show-before-400px">All</span>
                                </span>
                                &nbsp;
                                <span className="rating-main-score rating r5">
                                    <span className="filling" style={{ width: '92.646706701845%' }} />
                                </span>
                                <div className="clear" />
                                <span className="label-cost-score label">💵 Cost&nbsp;</span>
                                <span className="rating-cost-score rating r4">
                                    <span className="filling" style={{ width: '86.628571428571%' }}>
                                        <span className="text">😙 Affordable</span>
                                    </span>
                                </span>
                                <div className="clear" />
                                <span className="label-internet-score label">
                                    📡 <span className="hide-before-900px">Internet</span>
                                    <span className="hide-after-900px">WiFi</span>&nbsp;
                                </span>
                                <span className="rating-internet-score rating r5">
                                    <span className="filling" style={{ width: '100%' }}>
                                        <span className="text">🏎 Fast</span>
                                    </span>
                                </span>
                                <div className="clear" />
                                <span className="label-fun-score label">😀 Fun&nbsp;</span>
                                <span className="rating-fun-score rating r4">
                                    <span className="filling" style={{ width: '80%' }}>
                                        <span className="text">good</span>
                                    </span>
                                </span>
                                <div className="clear" />
                                <span className="label-safety-score label">👮 Safety&nbsp;</span>
                                <span className="rating-safety-score rating r5">
                                    <span className="filling" style={{ width: '100%' }}>
                                        <span className="text">great</span>
                                    </span>
                                </span>
                                <div className="clear" />
                                <span className="button red reverse action-tap-to-open">
                                    Tap to open
                                </span>
                                <div className="clear" />
                            </span>
                            <span className="attributes">
                                <span className="element bottom-left">
                                    <span className="weather-emoji">🌥</span>&nbsp;
                                    <span className="temperature " data-value={21}>
                                        <span className="label-heat-index">
                                            Feels&nbsp;<span className="value unit metric">21°</span>
                                            &nbsp;<span className="value unit imperial">70°</span>
                                        </span>
                                        &nbsp;<span className="value unit metric">21°</span>&nbsp;
                                        <span className="value unit imperial">70°</span>
                                    </span>
                                    <span className="air_quality ">
                                        <span className="above">AQI</span> <span className="value">28</span>
                                    </span>
                                </span>
                                <div className="clear" />
                                <span className="element top-left">
                                    <span className="rank">2</span>
                                </span>
                                <div className="clear" />
                                <span className="element bottom-right short_term_cost cost switchable" data-value={1361}>
                                    <span className="price" data-usd={2085}>
                                        $2,085
                                    </span>{'{'}" "{'}'}
                                    / mo
                                </span>
                                <div className="clear" />
                                <span className="element top-right">
                                    <span className="left" style={{ position: 'relative', paddingLeft: '1.25em', paddingBottom: '1em' }}>
                                        <svg width={25} className="wifi-svg" aria-hidden="true" data-prefix="fas" data-icon="wifi" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                                            <path fill="currentColor" d="M634.91 154.88C457.74-8.99 182.19-8.93 5.09 154.88c-6.66 6.16-6.79 16.59-.35 22.98l34.24 33.97c6.14 6.1 16.02 6.23 22.4.38 145.92-133.68 371.3-133.71 517.25 0 6.38 5.85 16.26 5.71 22.4-.38l34.24-33.97c6.43-6.39 6.3-16.82-.36-22.98zM320 352c-35.35 0-64 28.65-64 64s28.65 64 64 64 64-28.65 64-64-28.65-64-64-64zm202.67-83.59c-115.26-101.93-290.21-101.82-405.34 0-6.9 6.1-7.12 16.69-.57 23.15l34.44 33.99c6 5.92 15.66 6.32 22.05.8 83.95-72.57 209.74-72.41 293.49 0 6.39 5.52 16.05 5.13 22.05-.8l34.44-33.99c6.56-6.46 6.33-17.06-.56-23.15z" className />
                                        </svg>
                                    </span>
                                    <span className="right">
                                        <span className="value">38</span>
                                        <span className="mbps">Mbps</span>
                                    </span>
                                </span>
                            </span>
                            <span className="action-hide-item tooltip" title="Hide place in results for this search, it will come back on your next search or if you reload Nomad List">
                                ×
                            </span>
                            <span className="action-favorite tooltip" title="Add to your favorites">
                                <svg aria-hidden="true" width={25} focusable="false" data-prefix="fas" data-icon="heart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-heart fa-w-16 fa-9x">
                                    <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z" />
                                </svg>
                            </span>
                        </li>
                        <li data-type="city" className="item show show-later {slugAsClassName} template" data-i={26} data-slug="{slug}">
                            <div className="text">
                                <h2 className="itemName">
                                    <a href="	{itemURL}	" title="{itemAlt}">
                                        {'{'}/* {'{'}itemName{'}'} */{'}'} HEllo itemName
                                    </a>
                                </h2>
                                <h3 className="itemSub">
                                    <a href="/country/{country-slug}" title="{itemSubAlt} for a Digital Nomad">
                                        {'{'}/* {'{'}itemSub{'}'} */{'}'} itemSub
                                    </a>
                                </h3>
                            </div>
                            {'{'}/* {'{'}badge{'}'} */{'}'}badge
                            <span className="click " />
                            <img src="./assets/pixel.gif" className="bg lazyload" alt="{bgItemAlt}" data-srcset="{bg-data-srcset}" sizes="25vw, (max-width:1000px) 33vw, (max-width:600px) 50vw" />
                            <meta />
                            <span className="action">
                                <p className="description">
                                    {'{'}/* {'{'}descriptionFromReview{'}'} */{'}'}
                                    descriptionFromReview
                                </p>
                                <span className="label-main-score label">
                                    {'{'}/* {'{'}label - main - score{'}'} */{'}'}label - main - score
                                </span>
                                &nbsp;
                                <span className="rating-main-score rating r{rating-main-score-r}">
                                    <span className="filling" style={{ width: '{rating-main-score-width}' }} />
                                </span>
                                <div className="clear" />
                                <span className="label-cost-score label">💵 Cost&nbsp;</span>
                                <span className="rating-cost-score rating r{rating-cost-score-r}">
                                    <span className="filling" style={{ width: '{rating-cost-score-width}' }}>
                                        <span className="text" />
                                    </span>
                                </span>
                                <div className="clear" />
                                <span className="label-internet-score label">
                                    📡 <span className="hide-before-900px">Internet</span>
                                    <span className="hide-after-900px">WiFi</span>&nbsp;
                                </span>
                                <span className="rating-internet-score rating r{rating-internet-score-r}">
                                    <span className="filling" style={{ width: '{rating-internet-score-width}' }}>
                                        <span className="text" />
                                    </span>
                                </span>
                                <div className="clear" />
                                <span className="label-fun-score label">😀 Fun&nbsp;</span>
                                <span className="rating-fun-score rating r{rating-fun-score-r}">
                                    <span className="filling" style={{ width: '{rating-fun-score-width}' }}>
                                        <span className="text" />
                                    </span>
                                </span>
                                <div className="clear" />
                                <span className="label-safety-score label">👮 Safety&nbsp;</span>
                                <span className="rating-safety-score rating r{rating-safety-score-r}">
                                    <span className="filling" style={{ width: '{rating-safety-score-swidth}' }}>
                                        <span className="text" />
                                    </span>
                                </span>
                                <div className="clear" />
                                <span className="button red reverse action-tap-to-open">
                                    Tap to open
                                </span>
                                <div className="clear" />
                            </span>
                            <span className="attributes">
                                <span className="element bottom-left">{'{'}bottom - left{'}'}</span>
                                <span className="element top-left">{'{'}top - left{'}'}</span>
                                <div className="clear" />
                                <span className="element bottom-right">{'{'}bottom - right{'}'}</span>
                                <div className="clear" />
                                <span className="element top-right">{'{'}top - right{'}'}</span>
                            </span>
                            <span className="action-hide-item tooltip" title="Hide place in results for this search, it will come back on your next search or if you reload Nomad List">
                                ×
                            </span>
                            <span className="action-favorite tooltip" title="Add to your favorites">
                                <svg aria-hidden="true" width={25} focusable="false" data-prefix="fas" data-icon="heart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-heart fa-w-16 fa-9x">
                                    <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z" />
                                </svg>
                            </span>
                        </li>
                    </ul>
                    <div className="map_container">
                        <div className="map_legend">
                            <div className="map_legend_color green" />
                            <label className="label_green" />
                            <br />
                            <div className="map_legend_color yellow" />
                            <label className="label_yellow" />
                            <br />
                            <div className="map_legend_color red" />
                            <label className="label_red" />
                            <br />
                            <div className="map_legend_color grey" />
                            <label className="label_grey">No data</label>
                        </div>
                        <div className="map view ">
                            <canvas className="map-canvas" id="map-canvas" />
                            <div className="map-hoodmaps-legend">
                                <div className="red" data-emoji data-class="red" data-category="tourists">
                                    <span className="tag">
                                        <span>📸 Tour</span>
                                        <span className="hide-on-mobile">ists</span>
                                    </span>
                                </div>
                                <div className="yellow" data-emoji data-class="yellow" data-category="hipsters">
                                    <span className="tag">
                                        <span>🎅 Hip</span>
                                        <span className="hide-on-mobile">sters</span>
                                    </span>
                                </div>
                                <div className="darkblue" data-emoji data-class="darkblue" data-category="uni">
                                    <span className="tag">🎓 Uni</span>
                                </div>
                                <div className="green" data-emoji data-class="green" data-category="rich">
                                    <span className="tag">🤑 Rich</span>
                                </div>
                                <div className="blue" data-emoji data-class="blue" data-category="suits">
                                    <span className="tag">
                                        <span>👔 Suit</span>
                                        <span className="hide-on-mobile">s</span>
                                    </span>
                                </div>
                                <div className="silver" data-emoji data-class="silver" data-category="normies">
                                    <span className="tag">
                                        <span>
                                            🏡 Norm<span className="hide-on-mobile">ies</span>
                                        </span>
                                    </span>
                                </div>
                            </div>
                            <div className="map-markers" />
                            <div id="map-div" />
                        </div>
                    </div>
                    <div className="above-filter" />
                    <div className="infinity-scroll loading_spinner_2018 ">
                        <div>
                            <svg className="loader_spinner_svg" viewBox="25 25 50 50">
                                <circle className="loader_spinner_circle" cx={50} cy={50} r={22} fill="none" />
                                <circle className="loader_spinner_circle loader_spinner_circle--spinner" cx={50} cy={50} r={22} fill="none" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="clear" />
                <div className="loading_spinner_2018 loading_spinner-item">
                    <div>
                        <svg className="loader_spinner_svg" viewBox="25 25 50 50">
                            <circle className="loader_spinner_circle" cx={50} cy={50} r={22} fill="none" />
                            <circle className="loader_spinner_circle loader_spinner_circle--spinner" cx={50} cy={50} r={22} fill="none" />
                        </svg>
                    </div>
                </div>
                <div className="notice-no-items-found">
                    <a href="javascript:$(function(){$('.no-items-found').hide();$('.action-clear-all-filters').trigger('click');});">
                        <img alt="No results" data-src="/assets/no-results.png" />
                        <br />
                        <br />
                        We couldn't find any results, try{'{'}" "{'}'}
                        <span style={{ fontSize: '1em', borderBottom: '2px solid' }}>
                            clearing your filters
                        </span>
                    </a>
                </div>
                <div className="map-branding">
                    <img alt="Nomad List" src="./assets/logo.svg" width={100} height={100} />{'{'}" "{'}'}
                    Nomad List
                </div>
                <div className="notice-hold-control-to-drag-3d-map">
                    Tip: Hold ⌨ CTRL and drag mouse to pan around the map
                </div>
                <div className="notice-getting-flights">
                    <a href="javascript:$(function(){$('.no-items-found').hide();$('.action-clear-filter').trigger('click');});">
                        <span>
                            <i className="fa fa-plane" />
                            <i className="fa fa-plane" />
                            <i className="fa fa-plane" />
                            <i className="fa fa-plane" />
                        </span>
                        <span className="br">
                            <br />
                        </span>
                        &nbsp;&nbsp;Getting flight prices for{'{'}" "{'}'}
                        <span className="notice-getting-flights-city">you</span>, stand by...
                    </a>
                </div>
                {/* <div className="filters">
                    <div className="filter-group">
                        <label className="filter-group-label">What</label>
                        <div className="filter temperature weather choices multiple-choice-or c3">
                            <div className="choice tooltip" title="Temperature < 20°C aka freezing" data-filter-slug-position="before" data-filter-slug="cool" data-filter-target="temperatureC" data-filter-multiple-choice="true" data-filter-multiple-choice-type="or" data-filter-type="less-than" data-filter-max={20}>
                                <span>🍦 Cold now</span>
                            </div>
                            <div className="choice tooltip" title="Temperature 15°C - 29°C aka comfortable" data-filter-slug-position="before" data-filter-slug="mild" data-filter-target="temperatureC" data-filter-multiple-choice="true" data-filter-multiple-choice-type="or" data-filter-type="between-range" data-filter-min={15} data-filter-max={29}>
                                <span>🌤 Mild now</span>
                            </div>
                            <div className="choice tooltip" title="Temperature > 20°C aka hot" data-filter-slug-position="before" data-filter-slug="warm" data-filter-target="temperatureC" data-filter-multiple-choice="true" data-filter-multiple-choice-type="or" data-filter-type="greater-than" data-filter-min={20}>
                                <span>☀️ Warm now</span>
                            </div>
                        </div>
                        <div className="filter cost choices single-choice c3">
                            <div className="choice tooltip" title="Costs < $ 1,000 / mo to live (for your current cost mode, see top right of page)" data-filter-slug-position="after" data-filter-slug="on-a-budget" data-filter-target="cost_for_nomad_in_usd" data-filter-type="less-than" data-filter-max={1000}>
                                <span>💵&lt;US$1K/mo</span>
                            </div>
                            <div className="choice tooltip" title="Costs < $ 2,000 / mo to live (for your current cost mode, see top right of page)" data-filter-slug-position="before" data-filter-slug="cheap" data-filter-target="cost_for_nomad_in_usd" data-filter-type="less-than" data-filter-max={2000}>
                                <span>💸&lt;US$2K/mo</span>
                            </div>
                            <div className="choice tooltip" title="Costs < $ 3,000 / mo to live (for your current cost mode, see top right of page)" data-filter-slug-position="before" data-filter-slug="affordable" data-filter-target="cost_for_nomad_in_usd" data-filter-type="less-than" data-filter-max={3000}>
                                <span>💰&lt;US$3K/mo</span>
                            </div>
                        </div>
                        <div className="filter air_quality half choices c1">
                            <div className="choice tooltip" title="Good air quality <75 AQI (the WHO Air Quality guideline) (if you select a month or winter/all year round, this filter applies to that time only and we'll show you the value for that time on the city box)" data-filter-slug="with-clean-air" data-filter-target="air_quality_now" data-filter-type="less-than" data-filter-max={75}>
                                <span>💨 Clean air now</span>
                            </div>
                        </div>
                        <div className="filter humidity half choices c1">
                            <div className="choice tooltip" data-filter-slug="not-humid" data-filter-slug-position="before" title="Pleasant humidity levels below 70% (if you select a month or winter/all year round, this filter applies to that time only and we'll show you the value for that time on the city box)" data-filter-target="humidity" data-filter-type="less-than" data-filter-max={70}>
                                <span>💦 Not humid now</span>
                            </div>
                        </div>
                        <div className="filter internet_speed half choices c1">
                            <div className="choice tooltip" data-filter-target="internet_speed" data-filter-type="greater-than" data-filter-min="9.99" title="> 10mbps" data-text="fast internet">
                                <span>📡 Fast internet</span>
                            </div>
                        </div>
                        <div className="filter half choices c1 tooltip" title="Many Nomad List members who went here said they liked it a lot">
                            <div className="choice" data-filter-target="likes_score" data-filter-slug="most-liked" data-filter-slug-position="before" data-filter-type="greater-than" data-filter-min={3}>
                                <span>👍 Top rated</span>
                            </div>
                        </div>
                        <div className="filter users_count half choices c1">
                            <div className="choice tooltip" title="Places where many Nomad List members are checked in (if you select a month or winter/all year round, this filter applies to that time only and we'll show you the value for that time on the city box), aka popular places" data-filter-slug="with-many-nomads" data-filter-target="users_now_count" data-filter-type="greater-than" data-filter-min={4}>
                                <span>🔥 Popular now</span>
                            </div>
                        </div>
                        <div className="filter half choices c1">
                            <div className="choice tooltip" title="Growing consistently in Nomad List member visits in last 2 years aka upcoming, rising or booming" data-filter-slug="rising" data-filter-slug-position="before" data-filter-target="last_2_year_growth" data-filter-type="greater-than" data-filter-min={10}>
                                <span>📈 Rising</span>
                            </div>
                        </div>
                        <div className="filter choices c2 single-choice">
                            <div className="choice tooltip" title="Highly ranked by Nomad List's NomadScore™ algorithm which uses thousands of data points to rank a place every hour" data-filter-target="nomad_score" data-filter-slug-position="after" data-filter-slug="for-remote-workers" data-filter-type="greater-than" data-filter-min="3.49">
                                <span>🏅 Top ranked</span>
                            </div>
                            <div className="choice tooltip" title="Show more unique results by hiding the most popular destinations" data-filter-target="nomad_score" data-filter-slug-position="before" data-filter-slug="unique" data-filter-type="less-than" data-filter-max="3.5">
                                <span>🚫 Hide top cities</span>
                            </div>
                        </div>
                    </div>
                    <div className="filter-group">
                        <label className="filter-group-label">Where</label>
                        <div className="filter region full-width choices multiple-choice multiple-choice-or c8">
                            <div className="choice tooltip" data-filter-multiple-choice="true" data-filter-title="Best Places to Live In North America" data-filter-slug="north-america" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="region" data-filter-type="exact-match" data-filter-value="North America">
                                <span>🌎 Northern America</span>
                            </div>
                            <div className="choice tooltip" title="aka South America" data-filter-multiple-choice="true" data-filter-title="Best Places to Live In Latin America" data-filter-slug="latin-america" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="region" data-filter-type="exact-match" data-filter-value="Latin America">
                                <span>💃 Latin America</span>
                            </div>
                            <div className="choice tooltip" data-filter-multiple-choice="true" data-filter-title="Best Places to Live In Europe" data-filter-slug="europe" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="region" data-filter-type="exact-match" data-filter-value="Europe">
                                <span>🇪🇺 Europe</span>
                            </div>
                            <div className="choice tooltip" data-filter-multiple-choice="true" data-filter-title="Best Places to Live In Africa" data-filter-slug="africa" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="region" data-filter-type="exact-match" data-filter-value="Africa">
                                <span>🌍 Africa</span>
                            </div>
                            <div className="choice tooltip" data-filter-multiple-choice="true" data-filter-title="Best Places to Live In Middle East" data-filter-slug="middle-east" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="region" data-filter-type="exact-match" data-filter-value="Middle East">
                                <span>🕌 Middle East</span>
                            </div>
                            <div className="choice tooltip" data-filter-multiple-choice="true" data-filter-title="Best Places to Live In Asia" data-filter-slug="asia" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="region" data-filter-type="exact-match" data-filter-value="Asia">
                                <span>⛩ Asia</span>
                            </div>
                            <div className="choice tooltip" data-filter-multiple-choice="true" data-filter-title="Best Places to Live In Oceania" data-filter-slug="oceania" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="region" data-filter-type="exact-match" data-filter-value="Oceania">
                                <span>🏄 Oceania</span>
                            </div>
                            <div className="choice tooltip" data-filter-multiple-choice="true" data-filter-title="Best Places to Live In Space" data-filter-slug="space" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="region" data-filter-type="exact-match" data-filter-value="Space">
                                <span>🛰 Space</span>
                            </div>
                        </div>
                        <div className="filter half choices c1">
                            <div className="choice" data-filter-target="country" data-filter-type="exact-match" data-filter-value="United States">
                                <span>🇺🇸 United States</span>
                            </div>
                        </div>
                        <div className="filter schengen half choices c1 tooltip" title="Member of European Union">
                            <div className="choice" data-filter-slug="in-the-european-union" data-filter-target="european_union" data-filter-type="exact-match" data-filter-value={1}>
                                <span>🇪🇺 European Union</span>
                            </div>
                        </div>
                        <div className="filter schengen half choices c1 tooltip" title="Outside Schengen, so you can stay in Europe after your 90 days Schengen visa ends">
                            <div className="choice" data-filter-slug="non-schengen" data-filter-slug-position="before" data-filter-target="schengen" data-filter-type="exact-match" data-filter-value={0}>
                                <span>🇪🇺 Not in Schengen</span>
                            </div>
                        </div>
                        <div className="filter near near_me half choices c1">
                            <div className="choice tooltip" data-filter-slug="near-me" data-filter-slug-position="after" data-filter-target="distance" data-filter-type="less-than" data-filter-max={4000} title="Less than 6 hours flying from you (change your current city by signing up to Nomad List)">
                                <span>📍 Near me</span>
                            </div>
                        </div>
                        <div className="filter caribbean half choices c1">
                            <div className="choice tooltip" title="Caribbean places (or Carribean and Caribean to match for the common misspelling)" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="caribbean" data-filter-slug="in-the-caribbean" data-filter-type="exact-match" data-filter-value={1}>
                                <span>🏝 Caribbean</span>
                            </div>
                        </div>
                        <div className="filter half choices c1">
                            <div className="choice tooltip" data-filter-multiple-choice="true" data-filter-title="Best Places to Live In Antarctica" data-filter-slug="antarctica" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="region" data-filter-type="exact-match" data-filter-value="Antarctica">
                                <span>🧊 Antarctica</span>
                            </div>
                        </div>
                        <div className="filter half choices c1">
                            <div className="choice tooltip" data-filter-title="Best Places to Live In Bali" data-filter-slug="in-bali" data-filter-slug-position="after" data-filter-target="state" data-filter-type="exact-match" data-filter-value="Bali">
                                <span>🏝 Bali</span>
                            </div>
                        </div>
                        <div className="filter half choices c1">
                            <div className="choice tooltip" data-filter-title="Best Places to Live In Hawaii" data-filter-slug="in-hawaii" data-filter-slug-position="after" data-filter-target="state" data-filter-type="exact-match" data-filter-value="Hawaii">
                                <span>🏝 Hawaii</span>
                            </div>
                        </div>
                    </div>
                    <div className="filter-group">
                        <label className="filter-group-label">When</label>
                        <div className="filter full-width choices single-choice c2">
                            <div className="choice tooltip in_winter" data-filter-target="in_winter" data-filter-slug="in-the-winter" title="We'll apply the weather filters (temperature and humidity) and many nomads there (if selected) above to western Winter time (Dec, Jan, Feb)">
                                <span>☃️ In the winter</span>
                            </div>
                            <div className="choice tooltip all_year" data-filter-target="all_year" data-filter-slug="all-year-round" title="We'll apply the weather filters (temperature and humidity) and many nomads there (if selected) above to the entire year: for example if you select warm, low humidity and many nomads and this filter, we'll only show cities warm, with low humidity and many nomads for the entire year">
                                <span>♻️ All year round</span>
                            </div>
                        </div>
                        <div className="filter month full-width choices c12 single-choice">
                            <div className="choice tooltip " data-add-active-filter-text="🗓" data-filter-slug="january" data-filter-target="month" data-filter-type="partial-match" data-filter-value="{01}" title="When will you visit? I'll adjust the results data (like temperature, humidity and nomads there) for the months you select, and your weather filters will be applied to this month">
                                <span>Jan</span>
                            </div>
                            <div className="choice tooltip " data-add-active-filter-text="🗓" data-filter-slug="february" data-filter-target="month" data-filter-type="partial-match" data-filter-value="{02}" title="When will you visit? I'll adjust the results data (like temperature, humidity and nomads there) for the months you select, and your weather filters will be applied to this month">
                                <span>Feb</span>
                            </div>
                            <div className="choice tooltip " data-add-active-filter-text="🗓" data-filter-slug="march" data-filter-target="month" data-filter-type="partial-match" data-filter-value="{03}" title="When will you visit? I'll adjust the results data (like temperature, humidity and nomads there) for the months you select, and your weather filters will be applied to this month">
                                <span>Mar</span>
                            </div>
                            <div className="choice tooltip " data-add-active-filter-text="🗓" data-filter-slug="april" data-filter-target="month" data-filter-type="partial-match" data-filter-value="{04}" title="When will you visit? I'll adjust the results data (like temperature, humidity and nomads there) for the months you select, and your weather filters will be applied to this month">
                                <span>Apr</span>
                            </div>
                            <div className="choice tooltip " data-add-active-filter-text="🗓" data-filter-slug="may" data-filter-target="month" data-filter-type="partial-match" data-filter-value="{05}" title="When will you visit? I'll adjust the results data (like temperature, humidity and nomads there) for the months you select, and your weather filters will be applied to this month">
                                <span>May</span>
                            </div>
                            <div className="choice tooltip " data-add-active-filter-text="🗓" data-filter-slug="june" data-filter-target="month" data-filter-type="partial-match" data-filter-value="{06}" title="When will you visit? I'll adjust the results data (like temperature, humidity and nomads there) for the months you select, and your weather filters will be applied to this month">
                                <span>Jun</span>
                            </div>
                            <div className="choice tooltip " data-add-active-filter-text="🗓" data-filter-slug="july" data-filter-target="month" data-filter-type="partial-match" data-filter-value="{07}" title="When will you visit? I'll adjust the results data (like temperature, humidity and nomads there) for the months you select, and your weather filters will be applied to this month">
                                <span>Jul</span>
                            </div>
                            <div className="choice tooltip " data-add-active-filter-text="🗓" data-filter-slug="august" data-filter-target="month" data-filter-type="partial-match" data-filter-value="{08}" title="When will you visit? I'll adjust the results data (like temperature, humidity and nomads there) for the months you select, and your weather filters will be applied to this month">
                                <span>Aug</span>
                            </div>
                            <div className="choice tooltip " data-add-active-filter-text="🗓" data-filter-slug="september" data-filter-target="month" data-filter-type="partial-match" data-filter-value="{09}" title="When will you visit? I'll adjust the results data (like temperature, humidity and nomads there) for the months you select, and your weather filters will be applied to this month">
                                <span>Sep</span>
                            </div>
                            <div className="choice tooltip " data-add-active-filter-text="🗓" data-filter-slug="october" data-filter-target="month" data-filter-type="partial-match" data-filter-value="{10}" title="When will you visit? I'll adjust the results data (like temperature, humidity and nomads there) for the months you select, and your weather filters will be applied to this month">
                                <span>Oct</span>
                            </div>
                            <div className="choice tooltip " data-add-active-filter-text="🗓" data-filter-slug="november" data-filter-target="month" data-filter-type="partial-match" data-filter-value="{11}" title="When will you visit? I'll adjust the results data (like temperature, humidity and nomads there) for the months you select, and your weather filters will be applied to this month">
                                <span>Nov</span>
                            </div>
                            <div className="choice tooltip " data-add-active-filter-text="🗓" data-filter-slug="december" data-filter-target="month" data-filter-type="partial-match" data-filter-value="{12}" title="When will you visit? I'll adjust the results data (like temperature, humidity and nomads there) for the months you select, and your weather filters will be applied to this month">
                                <span>Dec</span>
                            </div>
                        </div>
                    </div>
                    <div className="filter-group half">
                        <label className="filter-group-label" htmlFor="review_score">
                            Reviewed by members
                        </label>
                        <div className="filter half choices c1 tooltip" title="Many Nomad List members who went here said they loved it">
                            <div className="choice" data-filter-target="likes_score" data-filter-slug="exceptional" data-filter-slug-position="before" data-filter-type="greater-than" data-filter-min="4.75">
                                <span>🤩 Exceptional (4.75+)</span>
                            </div>
                        </div>
                        <div className="filter half choices c1 tooltip" title="Many Nomad List members who went here said they liked it a lot">
                            <div className="choice" data-filter-target="likes_score" data-filter-slug="very-good" data-filter-slug-position="before" data-filter-type="greater-than" data-filter-min="4.5">
                                <span>😍 Very good (4.5+)</span>
                            </div>
                        </div>
                        <div className="filter half choices c1 tooltip" title="Many Nomad List members who went here said they liked it">
                            <div className="choice" data-filter-target="likes_score" data-filter-slug="good" data-filter-slug-position="before" data-filter-type="greater-than" data-filter-min={4}>
                                <span>👍 Good (4+)</span>
                            </div>
                        </div>
                        <div className="filter half choices c1 tooltip" title="Many Nomad List members who went here said they thought it was okay">
                            <div className="choice" data-filter-target="likes_score" data-filter-slug="okay" data-filter-slug-position="before" data-filter-type="greater-than" data-filter-min={3}>
                                <span>😐 Okay (3+)</span>
                            </div>
                        </div>
                    </div>
                    <div className="filter-group half">
                        <label className="filter-group-label" htmlFor="visa_free_for">
                            Visa free for (&gt;30 days)
                        </label>
                        <div id="visa_free_for" className="filter visa_free_for cities tooltip" title="At least 30 days of tourist visa and/or visa on arrival available">
                            <select className="choices" data-filter-target="visa_free_for" style={{ backgroundImage: 'url("data:image/png;hlPVBOcAcm+R8kcOGbLD6vfga9fUCK+BnDFxKrd96BhBM1ZTNPcZWISM3ANN/X9y9aaVye17emhouksfw0E8B5ZxsQ7baqXp++6ehvKjDBtIgfmawOvGfWdZZx2+dBft3n6pYJR/xc8/f116bX4GPvzkZOVbG9VVPl2Sopj+k2K7Lt0Ln0xnojj9iY7PPBLN03/pTKK6VnI62aDU14hLnscSLPbra7nN50kmiy7ZJwSfmRmILjbtcLOfvXvb6IBQIpuCD0onEZmhft+Zx7dxLTtTZV9iR6AwJUfx3GL4YDmCjcYi8nm9JdEAO8QLCYq8GTA+UnjT1SwfRHqrmWFQeQ0pybjfU8oCDygd37o8bk/VQSuR0Qx4CpeMal+F7xYEqzuTgqEH8dJYIysljcioxTXwmmJcHew2WS1QL/tt+yCIYwIKQQV05z0vp/CFXe5TFqjNeY+YMS7fIGYJr/0+aUJn1r3Xu47/F0lLJDRJKzxpBG2Oe1pF4VgLVOTV1erRi/uLul3KW7tX1XXsXN4IcgvJMIk1PwWBEm127xseb0GEvxTLvB7fIEu/6rgNQnf8rIT5EnBGbAazN8l+v1QgDYYQZt+1dXE8bUBHhs3mRTbnZFfbK9qm6bXQzpMUQAeIN8LWHnv5zdL/3qCHSn08Mui1KTRDQLVHNEEMPsPmE+TniOq1rxCNw0qbO4ryl4B+T9D6rX6mPA9z3O4hup5PF0GLLL1Dz7udonYarvar/gFSF8oy2RFakFB9YIWJb/rzAEWWS2sv/ldEdBHpB51Gx213dmWA2VfJgMQsNkOniLgP1wqRiQPOAeXRInYgeCHhQBpdoC2ctieo99HtKgRdDs+afcvnYJ6mTIEoGQl9D+7dX+baBoWZgfLzqb+HzHsL+VltP/PGflnks197j9k8v+JKNzBJ4cf5ShHOcpRjnKUoxzlKEc5ylGOcpSjHOUoRznKUY5ylKMc5ShHOcpRjvJPlP8PvcnSOd0i3xYAAAAASUVORK5CYII=' }}>
                                <option value selected>
                                    Select your passport
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-afghanistan" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Afghanistan">
                                    Afghanistan 🇦🇫
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-albania" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Albania">
                                    Albania 🇦🇱
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-algeria" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Algeria">
                                    Algeria 🇩🇿
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-andorra" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Andorra">
                                    Andorra 🇦🇩
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-angola" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Angola">
                                    Angola 🇦🇴
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-antarctica" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Antarctica">
                                    Antarctica 🇦🇶
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-antigua-and-barbuda" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Antigua and Barbuda">
                                    Antigua and Barbuda 🇦🇬
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-argentina" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Argentina">
                                    Argentina 🇦🇷
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-armenia" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Armenia">
                                    Armenia 🇦🇲
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-aruba" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Aruba">
                                    Aruba 🇦🇼
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-australia" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Australia">
                                    Australia 🇦🇺
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-austria" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Austria">
                                    Austria 🇦🇹
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-azerbaijan" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Azerbaijan">
                                    Azerbaijan 🇦🇿
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-bahrain" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Bahrain">
                                    Bahrain 🇧🇭
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-bangladesh" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Bangladesh">
                                    Bangladesh 🇧🇩
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-barbados" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Barbados">
                                    Barbados 🇧🇧
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-belarus" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Belarus">
                                    Belarus 🇧🇾
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-belgium" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Belgium">
                                    Belgium 🇧🇪
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-belize" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Belize">
                                    Belize 🇧🇿
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-bermuda" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Bermuda">
                                    Bermuda 🇧🇲
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-bolivia" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Bolivia">
                                    Bolivia 🇧🇴
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-bonaire" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Bonaire">
                                    Bonaire 🇧🇶
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-bosnia" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Bosnia">
                                    Bosnia 🇧🇦
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-botswana" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Botswana">
                                    Botswana 🇧🇼
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-brazil" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Brazil">
                                    Brazil 🇧🇷
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-british-virgin-islands" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="British Virgin Islands">
                                    British Virgin Islands 🇻🇬
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-brunei" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Brunei">
                                    Brunei 🇧🇳
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-bulgaria" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Bulgaria">
                                    Bulgaria 🇧🇬
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-burkina-faso" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Burkina Faso">
                                    Burkina Faso 🇧🇫
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-cambodia" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Cambodia">
                                    Cambodia 🇰🇭
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-cameroon" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Cameroon">
                                    Cameroon 🇨🇲
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-canada" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Canada">
                                    Canada 🇨🇦
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-cape-verde" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Cape Verde">
                                    Cape Verde 🇨🇻
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-cayman-islands" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Cayman Islands">
                                    Cayman Islands 🇰🇾
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-central-african-republic" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Central African Republic">
                                    Central African Republic 🇨🇫
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-chad" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Chad">
                                    Chad 🇹🇩
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-chile" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Chile">
                                    Chile 🇨🇱
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-china" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="China">
                                    China 🇨🇳
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-colombia" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Colombia">
                                    Colombia 🇨🇴
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-congo" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Congo">
                                    Congo 🇨🇬
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-cook-islands" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Cook Islands">
                                    Cook Islands 🇨🇰
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-costa-rica" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Costa Rica">
                                    Costa Rica 🇨🇷
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-cote-divoire" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Cote d'Ivoire">
                                    Cote d'Ivoire 🇨🇮
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-croatia" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Croatia">
                                    Croatia 🇭🇷
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-cuba" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Cuba">
                                    Cuba 🇨🇺
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-curacao" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Curaçao">
                                    Curaçao 🇨🇼
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-cyprus" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Cyprus">
                                    Cyprus 🇨🇾
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-czechia" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Czechia">
                                    Czechia 🇨🇿
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-denmark" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Denmark">
                                    Denmark 🇩🇰
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-djibouti" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Djibouti">
                                    Djibouti 🇩🇯
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-dominican-republic" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Dominican Republic">
                                    Dominican Republic 🇩🇴
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-dr-congo" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="DR Congo">
                                    DR Congo 🇨🇩
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-east-timor" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="East Timor">
                                    East Timor 🇹🇱
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-ecuador" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Ecuador">
                                    Ecuador 🇪🇨
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-egypt" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Egypt">
                                    Egypt 🇪🇬
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-el-salvador" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="El Salvador">
                                    El Salvador 🇸🇻
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-eritrea" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Eritrea">
                                    Eritrea 🇪🇷
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-estonia" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Estonia">
                                    Estonia 🇪🇪
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-ethiopia" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Ethiopia">
                                    Ethiopia 🇪🇹
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-falkland-islands" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Falkland Islands">
                                    Falkland Islands 🇫🇰
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-fiji" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Fiji">
                                    Fiji 🇫🇯
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-finland" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Finland">
                                    Finland 🇫🇮
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-france" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="France">
                                    France 🇫🇷
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-french-guiana" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="French Guiana">
                                    French Guiana 🇬🇫
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-gabon" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Gabon">
                                    Gabon 🇬🇦
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-gambia" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Gambia">
                                    Gambia 🇬🇲
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-georgia" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Georgia">
                                    Georgia 🇬🇪
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-germany" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Germany">
                                    Germany 🇩🇪
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-ghana" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Ghana">
                                    Ghana 🇬🇭
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-gibraltar" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Gibraltar">
                                    Gibraltar 🇬🇮
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-greece" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Greece">
                                    Greece 🇬🇷
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-greenland" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Greenland">
                                    Greenland 🇬🇱
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-guadeloupe" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Guadeloupe">
                                    Guadeloupe 🇬🇵
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-guam" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Guam">
                                    Guam 🇬🇺
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-guatemala" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Guatemala">
                                    Guatemala 🇬🇹
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-guinea" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Guinea">
                                    Guinea 🇬🇳
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-guyana" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Guyana">
                                    Guyana 🇬🇾
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-haiti" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Haiti">
                                    Haiti 🇭🇹
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-honduras" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Honduras">
                                    Honduras 🇭🇳
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-hong-kong" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Hong Kong">
                                    Hong Kong 🇭🇰
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-hungary" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Hungary">
                                    Hungary 🇭🇺
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-iceland" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Iceland">
                                    Iceland 🇮🇸
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-india" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="India">
                                    India 🇮🇳
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-indonesia" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Indonesia">
                                    Indonesia 🇮🇩
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-iran" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Iran">
                                    Iran 🇮🇷
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-iraq" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Iraq">
                                    Iraq 🇮🇶
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-ireland" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Ireland">
                                    Ireland 🇮🇪
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-israel" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Israel">
                                    Israel 🇮🇱
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-italy" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Italy">
                                    Italy 🇮🇹
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-jamaica" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Jamaica">
                                    Jamaica 🇯🇲
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-japan" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Japan">
                                    Japan 🇯🇵
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-jersey" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Jersey">
                                    Jersey 🇯🇪
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-jordan" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Jordan">
                                    Jordan 🇯🇴
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-kazakhstan" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Kazakhstan">
                                    Kazakhstan 🇰🇿
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-kenya" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Kenya">
                                    Kenya 🇰🇪
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-kosovo" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Kosovo">
                                    Kosovo 🇽🇰
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-kurdistan" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Kurdistan">
                                    Kurdistan 🏴
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-kuwait" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Kuwait">
                                    Kuwait 🇰🇼
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-kyrgyzstan" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Kyrgyzstan">
                                    Kyrgyzstan 🇰🇬
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-laos" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Laos">
                                    Laos 🇱🇦
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-latvia" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Latvia">
                                    Latvia 🇱🇻
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-lebanon" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Lebanon">
                                    Lebanon 🇱🇧
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-lesotho" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Lesotho">
                                    Lesotho 🇱🇸
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-liberia" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Liberia">
                                    Liberia 🇱🇷
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-libya" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Libya">
                                    Libya 🇱🇾
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-lithuania" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Lithuania">
                                    Lithuania 🇱🇹
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-luxembourg" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Luxembourg">
                                    Luxembourg 🇱🇺
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-madagascar" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Madagascar">
                                    Madagascar 🇲🇬
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-malawi" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Malawi">
                                    Malawi 🇲🇼
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-malaysia" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Malaysia">
                                    Malaysia 🇲🇾
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-maldives" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Maldives">
                                    Maldives 🇲🇻
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-mali" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Mali">
                                    Mali 🇲🇱
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-malta" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Malta">
                                    Malta 🇲🇹
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-mauritania" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Mauritania">
                                    Mauritania 🇲🇷
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-mauritius" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Mauritius">
                                    Mauritius 🇲🇺
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-mexico" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Mexico">
                                    Mexico 🇲🇽
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-moldova" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Moldova">
                                    Moldova 🇲🇩
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-monaco" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Monaco">
                                    Monaco 🇲🇨
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-mongolia" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Mongolia">
                                    Mongolia 🇲🇳
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-montenegro" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Montenegro">
                                    Montenegro 🇲🇪
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-morocco" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Morocco">
                                    Morocco 🇲🇦
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-mozambique" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Mozambique">
                                    Mozambique 🇲🇿
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-myanmar" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Myanmar">
                                    Myanmar 🇲🇲
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-namibia" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Namibia">
                                    Namibia 🇳🇦
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-nepal" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Nepal">
                                    Nepal 🇳🇵
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-netherlands" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Netherlands">
                                    Netherlands 🇳🇱
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-new-caledonia" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="New Caledonia">
                                    New Caledonia 🇳🇨
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-new-zealand" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="New Zealand">
                                    New Zealand 🇳🇿
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-nicaragua" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Nicaragua">
                                    Nicaragua 🇳🇮
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-niger" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Niger">
                                    Niger 🇳🇪
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-nigeria" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Nigeria">
                                    Nigeria 🇳🇬
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-north-korea" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="North Korea">
                                    North Korea 🇰🇵
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-north-macedonia" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="North Macedonia">
                                    North Macedonia 🇲🇰
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-norway" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Norway">
                                    Norway 🇳🇴
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-oman" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Oman">
                                    Oman 🇴🇲
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-pakistan" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Pakistan">
                                    Pakistan 🇵🇰
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-palestine" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Palestine">
                                    Palestine 🇵🇸
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-panama" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Panama">
                                    Panama 🇵🇦
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-papua-new-guinea" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Papua New Guinea">
                                    Papua New Guinea 🇵🇬
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-paraguay" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Paraguay">
                                    Paraguay 🇵🇾
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-peru" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Peru">
                                    Peru 🇵🇪
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-philippines" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Philippines">
                                    Philippines 🇵🇭
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-poland" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Poland">
                                    Poland 🇵🇱
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-portugal" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Portugal">
                                    Portugal 🇵🇹
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-puerto-rico" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Puerto Rico">
                                    Puerto Rico 🇵🇷
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-qatar" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Qatar">
                                    Qatar 🇶🇦
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-romania" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Romania">
                                    Romania 🇷🇴
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-russia" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Russia">
                                    Russia 🇷🇺
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-rwanda" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Rwanda">
                                    Rwanda 🇷🇼
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-saint-helena" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Saint Helena">
                                    Saint Helena 🇸🇭
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-samoa" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Samoa">
                                    Samoa 🇼🇸
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-saudi-arabia" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Saudi Arabia">
                                    Saudi Arabia 🇸🇦
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-senegal" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Senegal">
                                    Senegal 🇸🇳
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-serbia" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Serbia">
                                    Serbia 🇷🇸
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-seychelles" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Seychelles">
                                    Seychelles 🇸🇨
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-sierra-leone" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Sierra Leone">
                                    Sierra Leone 🇸🇱
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-singapore" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Singapore">
                                    Singapore 🇸🇬
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-sint-maarten" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Sint Maarten">
                                    Sint Maarten 🇸🇽
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-slovakia" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Slovakia">
                                    Slovakia 🇸🇰
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-slovenia" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Slovenia">
                                    Slovenia 🇸🇮
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-solomon-islands" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Solomon Islands">
                                    Solomon Islands 🇸🇧
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-somalia" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Somalia">
                                    Somalia 🇸🇴
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-south-africa" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="South Africa">
                                    South Africa 🇿🇦
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-south-georgia-and-the-south-sandwich-islands" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="South Georgia and the South Sandwich Islands">
                                    South Georgia and the South Sandwich Islands 🇬🇸
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-south-korea" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="South Korea">
                                    South Korea 🇰🇷
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-south-sudan" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="South Sudan">
                                    South Sudan 🇸🇸
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-spain" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Spain">
                                    Spain 🇪🇸
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-sri-lanka" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Sri Lanka">
                                    Sri Lanka 🇱🇰
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-sudan" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Sudan">
                                    Sudan 🇸🇩
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-suriname" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Suriname">
                                    Suriname 🇸🇷
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-sweden" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Sweden">
                                    Sweden 🇸🇪
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-switzerland" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Switzerland">
                                    Switzerland 🇨🇭
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-syria" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Syria">
                                    Syria 🇸🇾
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-taiwan" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Taiwan">
                                    Taiwan 🇹🇼
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-tajikistan" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Tajikistan">
                                    Tajikistan 🇹🇯
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-tanzania" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Tanzania">
                                    Tanzania 🇹🇿
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-thailand" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Thailand">
                                    Thailand 🇹🇭
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-the-bahamas" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="The Bahamas">
                                    The Bahamas 🇧🇸
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-togo" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Togo">
                                    Togo 🇹🇬
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-tonga" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Tonga">
                                    Tonga 🇹🇴
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-trinidad-and-tobago" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Trinidad and Tobago">
                                    Trinidad and Tobago 🇹🇹
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-tunisia" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Tunisia">
                                    Tunisia 🇹🇳
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-turkey" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Turkey">
                                    Turkey 🇹🇷
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-turkmenistan" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Turkmenistan">
                                    Turkmenistan 🇹🇲
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-tuvalu" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Tuvalu">
                                    Tuvalu 🇹🇻
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-uganda" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Uganda">
                                    Uganda 🇺🇬
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-ukraine" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Ukraine">
                                    Ukraine 🇺🇦
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-united-arab-emirates" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="United Arab Emirates">
                                    United Arab Emirates 🇦🇪
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-united-kingdom" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="United Kingdom">
                                    United Kingdom 🇬🇧
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-united-states" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="United States">
                                    United States 🇺🇸
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-united-states-virgin-islands" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="United States Virgin Islands">
                                    United States Virgin Islands 🇻🇮
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-uruguay" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Uruguay">
                                    Uruguay 🇺🇾
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-uzbekistan" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Uzbekistan">
                                    Uzbekistan 🇺🇿
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-vanuatu" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Vanuatu">
                                    Vanuatu 🇻🇺
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-vatican-city" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Vatican City">
                                    Vatican City 🇻🇦
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-venezuela" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Venezuela">
                                    Venezuela 🇻🇪
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-vietnam" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Vietnam">
                                    Vietnam 🇻🇳
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-western-sahara" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Western Sahara">
                                    Western Sahara 🇪🇭
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-yemen" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Yemen">
                                    Yemen 🇾🇪
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-zambia" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Zambia">
                                    Zambia 🇿🇲
                                </option>
                                <option data-filter-slug="visa-free-for-citizens-of-zimbabwe" data-filter-target="visa_free_for" data-filter-type="partial-match" data-filter-value="Zimbabwe">
                                    Zimbabwe 🇿🇼
                                </option>
                            </select>
                        </div>
                        <center style={{ color: 'var(--input-text-color)', fontSize: '20px', marginTop: '-7px' }}>
                            +
                        </center>
                        <div className>
                            <div className="filter visa_free_for_partner cities tooltip" title="At least 30 days of tourist visa and/or visa on arrival available">
                                <select className="choices" data-filter-target="visa_free_for_partner" style={{ backgroundImage: 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAxRjJhTPDqkVeeLURJYQrnmRXfkpHuCZKFwEkZE3k+7LBarD21bpL9uOOR44fnM8Ie2IRC02+hgTzHEafjEH/KSAebsmUDQx6L04co/uZvqMHjLvqW387oglgXiKfD1aUI8acJo1b7A9PvbX+D4d95LnV0Zv9Z1PpAmzz6jBaETOJfTdF4npkF0KgF+ti0AGGhyrYqErJ5Qzf0EnDhHALnjcHt8TDzhcKjsMNPsKDbB43CKKB+fiiRk83TdH14FUPgl/CfN/LjDU+N0uo8RuvqOu89WbZFIP+8agpe6yfxn8pT6AmH54UBb8rxJaeQVO0Wlu0u5Bd9Lqgd/oJdbSstrZoVnAgknS4UdFwq8mUXZ43q8x/58LMEJ6yJm39D5PVI2G36oVVL6W+P5o3G5ldtCuTkwPXAJw4KejVn8SBviBeOaa51tG5SP7WXYJHcGwo3ZvzbcaHhlPVBOcAcm+R8kcOGbLD6vfga9fUCK+BnDFxKrd96BhBM1ZTNPcZWISM3ANN/X9y9aaVye17emhouksfw0E8B5ZxsQ7baqXp++6ehvKjDBtIgfmawOvGfWdZZx2+dBft3n6pYJR/xc8/f116bX4GPvzkZOVbG9VVPl2Sopj+k2K7Lt0Ln0xnojj9iY7PPBLN03/pTKK6VnI62aDU14hLnscSLPbra7nN50kmiy7ZJwSfmRmILjbtcLOfvXvb6IBQIpuCD0onEZmhft+Zx7dxLTtTZV9iR6AwJUfx3GL4YDmCjcYi8nm9JdEAO8QLCYq8GTA+UnjT1SwfRHqrmWFQeQ0pybjfU8oCDygd37o8bk/VQSuR0Qx4CpeMal+F7xYEqzuTgqEH8dJYIysljcioxTXwmmJcHew2WS1QL/tt+yCIYwIKQQV05z0vp/CFXe5TFqjNeY+YMS7fIGYJr/0+aUJn1r3Xu47/F0lLJDRJKzxpBG2Oe1pF4VgLVOTV1erRi/uLul3KW7tX1XXsXN4IcgvJMIk1PwWBEm127xseb0GEvxTLvB7fIEu/6rgNQnf8rIT5EnBGbAazN8l+v1QgDYYQZt+1dXE8bUBHhs3mRTbnZFfbK9qm6bXQzpMUQAeIN8LWHnv5zdL/3qCHSn08Mui1KTRDQLVHNEEMPsPmE+TniOq1rxCNw0qbO4ryl4B+T9D6rX6mPA9z3O4hup5PF0GLLL1Dz7udonYarvar/gFSF8oy2RFakFB9YIWJb/rzAEWWS2sv/ldEdBHpB51Gx213dmWA2VfJgMQsNkOniLgP1wqRiQPOAeXRInYgeCHhQBpdoC2ctieo99HtKgRdDs+afcvnYJ6mTIEoGQl9D+7dX+baBoWZgfLzqb+HzHsL+VltP/PGflnks197j9k8v+JKNzBJ4cf5ShHOcpRjnKUoxzlKEc5ylGOcpSjHOUoRznKUY5ylKMc5ShHOcpRjvJPlP8PvcnSOd0i3xYAAAAASUVORK5CYII=' }}>
                                    <option value selected>
                                        Select your partner's passport
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-afghanistan" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Afghanistan">
                                        Afghanistan 🇦🇫
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-albania" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Albania">
                                        Albania 🇦🇱
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-algeria" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Algeria">
                                        Algeria 🇩🇿
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-andorra" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Andorra">
                                        Andorra 🇦🇩
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-angola" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Angola">
                                        Angola 🇦🇴
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-antarctica" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Antarctica">
                                        Antarctica 🇦🇶
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-antigua-and-barbuda" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Antigua and Barbuda">
                                        Antigua and Barbuda 🇦🇬
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-argentina" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Argentina">
                                        Argentina 🇦🇷
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-armenia" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Armenia">
                                        Armenia 🇦🇲
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-aruba" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Aruba">
                                        Aruba 🇦🇼
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-australia" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Australia">
                                        Australia 🇦🇺
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-austria" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Austria">
                                        Austria 🇦🇹
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-azerbaijan" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Azerbaijan">
                                        Azerbaijan 🇦🇿
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-bahrain" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Bahrain">
                                        Bahrain 🇧🇭
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-bangladesh" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Bangladesh">
                                        Bangladesh 🇧🇩
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-barbados" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Barbados">
                                        Barbados 🇧🇧
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-belarus" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Belarus">
                                        Belarus 🇧🇾
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-belgium" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Belgium">
                                        Belgium 🇧🇪
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-belize" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Belize">
                                        Belize 🇧🇿
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-bermuda" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Bermuda">
                                        Bermuda 🇧🇲
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-bolivia" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Bolivia">
                                        Bolivia 🇧🇴
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-bonaire" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Bonaire">
                                        Bonaire 🇧🇶
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-bosnia" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Bosnia">
                                        Bosnia 🇧🇦
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-botswana" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Botswana">
                                        Botswana 🇧🇼
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-brazil" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Brazil">
                                        Brazil 🇧🇷
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-british-virgin-islands" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="British Virgin Islands">
                                        British Virgin Islands 🇻🇬
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-brunei" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Brunei">
                                        Brunei 🇧🇳
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-bulgaria" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Bulgaria">
                                        Bulgaria 🇧🇬
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-burkina-faso" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Burkina Faso">
                                        Burkina Faso 🇧🇫
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-cambodia" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Cambodia">
                                        Cambodia 🇰🇭
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-cameroon" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Cameroon">
                                        Cameroon 🇨🇲
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-canada" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Canada">
                                        Canada 🇨🇦
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-cape-verde" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Cape Verde">
                                        Cape Verde 🇨🇻
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-cayman-islands" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Cayman Islands">
                                        Cayman Islands 🇰🇾
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-central-african-republic" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Central African Republic">
                                        Central African Republic 🇨🇫
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-chad" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Chad">
                                        Chad 🇹🇩
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-chile" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Chile">
                                        Chile 🇨🇱
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-china" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="China">
                                        China 🇨🇳
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-colombia" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Colombia">
                                        Colombia 🇨🇴
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-congo" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Congo">
                                        Congo 🇨🇬
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-cook-islands" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Cook Islands">
                                        Cook Islands 🇨🇰
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-costa-rica" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Costa Rica">
                                        Costa Rica 🇨🇷
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-cote-divoire" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Cote d'Ivoire">
                                        Cote d'Ivoire 🇨🇮
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-croatia" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Croatia">
                                        Croatia 🇭🇷
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-cuba" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Cuba">
                                        Cuba 🇨🇺
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-curacao" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Curaçao">
                                        Curaçao 🇨🇼
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-cyprus" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Cyprus">
                                        Cyprus 🇨🇾
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-czechia" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Czechia">
                                        Czechia 🇨🇿
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-denmark" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Denmark">
                                        Denmark 🇩🇰
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-djibouti" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Djibouti">
                                        Djibouti 🇩🇯
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-dominican-republic" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Dominican Republic">
                                        Dominican Republic 🇩🇴
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-dr-congo" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="DR Congo">
                                        DR Congo 🇨🇩
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-east-timor" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="East Timor">
                                        East Timor 🇹🇱
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-ecuador" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Ecuador">
                                        Ecuador 🇪🇨
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-egypt" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Egypt">
                                        Egypt 🇪🇬
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-el-salvador" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="El Salvador">
                                        El Salvador 🇸🇻
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-eritrea" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Eritrea">
                                        Eritrea 🇪🇷
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-estonia" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Estonia">
                                        Estonia 🇪🇪
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-ethiopia" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Ethiopia">
                                        Ethiopia 🇪🇹
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-falkland-islands" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Falkland Islands">
                                        Falkland Islands 🇫🇰
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-fiji" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Fiji">
                                        Fiji 🇫🇯
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-finland" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Finland">
                                        Finland 🇫🇮
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-france" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="France">
                                        France 🇫🇷
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-french-guiana" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="French Guiana">
                                        French Guiana 🇬🇫
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-gabon" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Gabon">
                                        Gabon 🇬🇦
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-gambia" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Gambia">
                                        Gambia 🇬🇲
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-georgia" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Georgia">
                                        Georgia 🇬🇪
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-germany" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Germany">
                                        Germany 🇩🇪
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-ghana" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Ghana">
                                        Ghana 🇬🇭
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-gibraltar" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Gibraltar">
                                        Gibraltar 🇬🇮
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-greece" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Greece">
                                        Greece 🇬🇷
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-greenland" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Greenland">
                                        Greenland 🇬🇱
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-guadeloupe" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Guadeloupe">
                                        Guadeloupe 🇬🇵
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-guam" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Guam">
                                        Guam 🇬🇺
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-guatemala" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Guatemala">
                                        Guatemala 🇬🇹
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-guinea" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Guinea">
                                        Guinea 🇬🇳
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-guyana" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Guyana">
                                        Guyana 🇬🇾
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-haiti" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Haiti">
                                        Haiti 🇭🇹
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-honduras" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Honduras">
                                        Honduras 🇭🇳
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-hong-kong" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Hong Kong">
                                        Hong Kong 🇭🇰
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-hungary" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Hungary">
                                        Hungary 🇭🇺
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-iceland" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Iceland">
                                        Iceland 🇮🇸
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-india" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="India">
                                        India 🇮🇳
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-indonesia" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Indonesia">
                                        Indonesia 🇮🇩
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-iran" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Iran">
                                        Iran 🇮🇷
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-iraq" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Iraq">
                                        Iraq 🇮🇶
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-ireland" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Ireland">
                                        Ireland 🇮🇪
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-israel" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Israel">
                                        Israel 🇮🇱
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-italy" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Italy">
                                        Italy 🇮🇹
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-jamaica" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Jamaica">
                                        Jamaica 🇯🇲
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-japan" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Japan">
                                        Japan 🇯🇵
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-jersey" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Jersey">
                                        Jersey 🇯🇪
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-jordan" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Jordan">
                                        Jordan 🇯🇴
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-kazakhstan" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Kazakhstan">
                                        Kazakhstan 🇰🇿
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-kenya" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Kenya">
                                        Kenya 🇰🇪
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-kosovo" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Kosovo">
                                        Kosovo 🇽🇰
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-kurdistan" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Kurdistan">
                                        Kurdistan 🏴
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-kuwait" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Kuwait">
                                        Kuwait 🇰🇼
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-kyrgyzstan" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Kyrgyzstan">
                                        Kyrgyzstan 🇰🇬
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-laos" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Laos">
                                        Laos 🇱🇦
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-latvia" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Latvia">
                                        Latvia 🇱🇻
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-lebanon" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Lebanon">
                                        Lebanon 🇱🇧
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-lesotho" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Lesotho">
                                        Lesotho 🇱🇸
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-liberia" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Liberia">
                                        Liberia 🇱🇷
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-libya" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Libya">
                                        Libya 🇱🇾
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-lithuania" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Lithuania">
                                        Lithuania 🇱🇹
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-luxembourg" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Luxembourg">
                                        Luxembourg 🇱🇺
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-madagascar" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Madagascar">
                                        Madagascar 🇲🇬
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-malawi" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Malawi">
                                        Malawi 🇲🇼
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-malaysia" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Malaysia">
                                        Malaysia 🇲🇾
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-maldives" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Maldives">
                                        Maldives 🇲🇻
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-mali" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Mali">
                                        Mali 🇲🇱
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-malta" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Malta">
                                        Malta 🇲🇹
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-mauritania" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Mauritania">
                                        Mauritania 🇲🇷
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-mauritius" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Mauritius">
                                        Mauritius 🇲🇺
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-mexico" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Mexico">
                                        Mexico 🇲🇽
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-moldova" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Moldova">
                                        Moldova 🇲🇩
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-monaco" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Monaco">
                                        Monaco 🇲🇨
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-mongolia" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Mongolia">
                                        Mongolia 🇲🇳
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-montenegro" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Montenegro">
                                        Montenegro 🇲🇪
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-morocco" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Morocco">
                                        Morocco 🇲🇦
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-mozambique" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Mozambique">
                                        Mozambique 🇲🇿
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-myanmar" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Myanmar">
                                        Myanmar 🇲🇲
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-namibia" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Namibia">
                                        Namibia 🇳🇦
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-nepal" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Nepal">
                                        Nepal 🇳🇵
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-netherlands" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Netherlands">
                                        Netherlands 🇳🇱
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-new-caledonia" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="New Caledonia">
                                        New Caledonia 🇳🇨
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-new-zealand" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="New Zealand">
                                        New Zealand 🇳🇿
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-nicaragua" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Nicaragua">
                                        Nicaragua 🇳🇮
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-niger" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Niger">
                                        Niger 🇳🇪
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-nigeria" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Nigeria">
                                        Nigeria 🇳🇬
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-north-korea" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="North Korea">
                                        North Korea 🇰🇵
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-north-macedonia" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="North Macedonia">
                                        North Macedonia 🇲🇰
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-norway" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Norway">
                                        Norway 🇳🇴
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-oman" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Oman">
                                        Oman 🇴🇲
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-pakistan" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Pakistan">
                                        Pakistan 🇵🇰
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-palestine" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Palestine">
                                        Palestine 🇵🇸
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-panama" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Panama">
                                        Panama 🇵🇦
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-papua-new-guinea" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Papua New Guinea">
                                        Papua New Guinea 🇵🇬
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-paraguay" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Paraguay">
                                        Paraguay 🇵🇾
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-peru" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Peru">
                                        Peru 🇵🇪
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-philippines" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Philippines">
                                        Philippines 🇵🇭
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-poland" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Poland">
                                        Poland 🇵🇱
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-portugal" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Portugal">
                                        Portugal 🇵🇹
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-puerto-rico" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Puerto Rico">
                                        Puerto Rico 🇵🇷
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-qatar" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Qatar">
                                        Qatar 🇶🇦
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-romania" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Romania">
                                        Romania 🇷🇴
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-russia" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Russia">
                                        Russia 🇷🇺
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-rwanda" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Rwanda">
                                        Rwanda 🇷🇼
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-saint-helena" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Saint Helena">
                                        Saint Helena 🇸🇭
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-samoa" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Samoa">
                                        Samoa 🇼🇸
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-saudi-arabia" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Saudi Arabia">
                                        Saudi Arabia 🇸🇦
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-senegal" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Senegal">
                                        Senegal 🇸🇳
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-serbia" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Serbia">
                                        Serbia 🇷🇸
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-seychelles" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Seychelles">
                                        Seychelles 🇸🇨
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-sierra-leone" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Sierra Leone">
                                        Sierra Leone 🇸🇱
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-singapore" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Singapore">
                                        Singapore 🇸🇬
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-sint-maarten" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Sint Maarten">
                                        Sint Maarten 🇸🇽
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-slovakia" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Slovakia">
                                        Slovakia 🇸🇰
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-slovenia" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Slovenia">
                                        Slovenia 🇸🇮
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-solomon-islands" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Solomon Islands">
                                        Solomon Islands 🇸🇧
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-somalia" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Somalia">
                                        Somalia 🇸🇴
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-south-africa" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="South Africa">
                                        South Africa 🇿🇦
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-south-georgia-and-the-south-sandwich-islands" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="South Georgia and the South Sandwich Islands">
                                        South Georgia and the South Sandwich Islands 🇬🇸
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-south-korea" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="South Korea">
                                        South Korea 🇰🇷
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-south-sudan" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="South Sudan">
                                        South Sudan 🇸🇸
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-spain" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Spain">
                                        Spain 🇪🇸
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-sri-lanka" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Sri Lanka">
                                        Sri Lanka 🇱🇰
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-sudan" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Sudan">
                                        Sudan 🇸🇩
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-suriname" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Suriname">
                                        Suriname 🇸🇷
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-sweden" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Sweden">
                                        Sweden 🇸🇪
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-switzerland" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Switzerland">
                                        Switzerland 🇨🇭
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-syria" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Syria">
                                        Syria 🇸🇾
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-taiwan" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Taiwan">
                                        Taiwan 🇹🇼
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-tajikistan" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Tajikistan">
                                        Tajikistan 🇹🇯
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-tanzania" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Tanzania">
                                        Tanzania 🇹🇿
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-thailand" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Thailand">
                                        Thailand 🇹🇭
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-the-bahamas" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="The Bahamas">
                                        The Bahamas 🇧🇸
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-togo" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Togo">
                                        Togo 🇹🇬
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-tonga" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Tonga">
                                        Tonga 🇹🇴
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-trinidad-and-tobago" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Trinidad and Tobago">
                                        Trinidad and Tobago 🇹🇹
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-tunisia" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Tunisia">
                                        Tunisia 🇹🇳
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-turkey" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Turkey">
                                        Turkey 🇹🇷
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-turkmenistan" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Turkmenistan">
                                        Turkmenistan 🇹🇲
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-tuvalu" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Tuvalu">
                                        Tuvalu 🇹🇻
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-uganda" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Uganda">
                                        Uganda 🇺🇬
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-ukraine" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Ukraine">
                                        Ukraine 🇺🇦
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-united-arab-emirates" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="United Arab Emirates">
                                        United Arab Emirates 🇦🇪
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-united-kingdom" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="United Kingdom">
                                        United Kingdom 🇬🇧
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-united-states" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="United States">
                                        United States 🇺🇸
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-united-states-virgin-islands" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="United States Virgin Islands">
                                        United States Virgin Islands 🇻🇮
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-uruguay" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Uruguay">
                                        Uruguay 🇺🇾
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-uzbekistan" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Uzbekistan">
                                        Uzbekistan 🇺🇿
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-vanuatu" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Vanuatu">
                                        Vanuatu 🇻🇺
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-vatican-city" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Vatican City">
                                        Vatican City 🇻🇦
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-venezuela" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Venezuela">
                                        Venezuela 🇻🇪
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-vietnam" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Vietnam">
                                        Vietnam 🇻🇳
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-western-sahara" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Western Sahara">
                                        Western Sahara 🇪🇭
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-yemen" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Yemen">
                                        Yemen 🇾🇪
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-zambia" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Zambia">
                                        Zambia 🇿🇲
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-zimbabwe" data-filter-target="visa_free_for_partner" data-filter-type="partial-match" data-filter-value="Zimbabwe">
                                        Zimbabwe 🇿🇼
                                    </option>
                                </select>
                            </div>
                        </div>
                        <center style={{ color: 'var(--input-text-color)', fontSize: '20px', marginTop: '-7px' }}>
                            +
                        </center>
                        <div className>
                            <div className="filter visa_free_for_friend cities tooltip" title="At least 30 days of tourist visa and/or visa on arrival available">
                                <select className="choices" data-filter-target="visa_free_for_friend" style={{ backgroundImage: 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAA8FBMVEX///+qAACdCw7//v+nAACrAACbAACdAACZAAD///2fCw6kAACuAACrAAGdCxCWAAD89/ecAAb79PT47e2zKSn25uX03t6wGhr89fb15OTtz87FX1/qwMHx2Ni3NTW7QkK/UVHQgH/pwsHmt7fTiYnam5uvFBPhra3RjJhTPDqkVeeLURJYQrnmRXfkpHuCZKFwEkZE3k+7LBarD21bpL9uOOR44fnM8Ie2IRC02+hgTzHEafjEH/KSAebsmUDQx6L04co/uZvqMHjLvqW387oglgXiKfD1aUI8acJo1b7A9PvbX+D4d95LnV0Zv9Z1PpAmzz6jBaETOJfTdF4npkF0KgF+ti0AGGhyrYqErJ5Qzf0EnDhHALnjcHt8TDzhcKjsMNPsKDbB43CKKB+fiiRk83TdH14FUPgl/CfN/LjDU+N0uo8RuvqOu89WbZFIP+8agpe6yfxn8pT6AmH54UBb8rxJaeQVO0Wlu0u5Bd9Lqgd/oJdbSstrZoVnAgknS4UdFwq8mUXZ43q8x/58LMEJ6yJm39D5PVI2G36oVVL6W+P5o3G5ldtCuTkwPXAJw4KejVn8SBviBeOaa51tG5SP7WXYJHcGwo3ZvzbcaHhlPVBOcAcm+R8kcOGbLD6vfga9fUCK+BnDFxKrd96BhBM1ZTNPcZWISM3ANN/X9y9aaVye17emhouksfw0E8B5ZxsQ7baqXp++6ehvKjDBtIgfmawOvGfWdZZx2+dBft3n6pYJR/xc8/f116bX4GPvzkZOVbG9VVPl2Sopj+k2K7Lt0Ln0xnojj9iY7PPBLN03/pTKK6VnI62aDU14hLnscSLPbra7nN50kmiy7ZJwSfmRmILjbtcLOfvXvb6IBQIpuCD0onEZmhft+Zx7dxLTtTZV9iR6AwJUfx3GL4YDmCjcYi8nm9JdEAO8QLCYq8GTA+UnjT1SwfRHqrmWFQeQ0pybjfU8oCDygd37o8bk/VQSuR0Qx4CpeMal+F7xYEqzuTgqEH8dJYIysljcioxTXwmmJcHew2WS1QL/tt+yCIYwIKQQV05z0vp/CFXe5TFqjNeY+YMS7fIGYJr/0+aUJn1r3Xu47/F0lLJDRJKzxpBG2Oe1pF4VgLVOTV1erRi/uLul3KW7tX1XXsXN4IcgvJMIk1PwWBEm127xseb0GEvxTLvB7fIEu/6rgNQnf8rIT5EnBGbAazN8l+v1QgDYYQZt+1dXE8bUBHhs3mRTbnZFfbK9qm6bXQzpMUQAeIN8LWHnv5zdL/3qCHSn08Mui1KTRDQLVHNEEMPsPmE+TniOq1rxCNw0qbO4ryl4B+T9D6rX6mPA9z3O4hup5PF0GLLL1Dz7udonYarvar/gFSF8oy2RFakFB9YIWJb/rzAEWWS2sv/ldEdBHpB51Gx213dmWA2VfJgMQsNkOniLgP1wqRiQPOAeXRInYgeCHhQBpdoC2ctieo99HtKgRdDs+afcvnYJ6mTIEoGQl9D+7dX+baBoWZgfLzqb+HzHsL+VltP/PGflnks197j9k8v+JKNzBJ4cf5ShHOcpRjnKUoxzlKEc5ylGOcpSjHOUoRznKUY5ylKMc5ShHOcpRjvJPlP8PvcnSOd0i3xYAAAAASUVORK5CYII=' }}>
                                    <option value selected>
                                        Select your friend's passport
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-afghanistan" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Afghanistan">
                                        Afghanistan 🇦🇫
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-albania" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Albania">
                                        Albania 🇦🇱
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-algeria" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Algeria">
                                        Algeria 🇩🇿
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-andorra" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Andorra">
                                        Andorra 🇦🇩
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-angola" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Angola">
                                        Angola 🇦🇴
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-antarctica" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Antarctica">
                                        Antarctica 🇦🇶
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-antigua-and-barbuda" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Antigua and Barbuda">
                                        Antigua and Barbuda 🇦🇬
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-argentina" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Argentina">
                                        Argentina 🇦🇷
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-armenia" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Armenia">
                                        Armenia 🇦🇲
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-aruba" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Aruba">
                                        Aruba 🇦🇼
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-australia" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Australia">
                                        Australia 🇦🇺
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-austria" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Austria">
                                        Austria 🇦🇹
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-azerbaijan" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Azerbaijan">
                                        Azerbaijan 🇦🇿
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-bahrain" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Bahrain">
                                        Bahrain 🇧🇭
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-bangladesh" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Bangladesh">
                                        Bangladesh 🇧🇩
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-barbados" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Barbados">
                                        Barbados 🇧🇧
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-belarus" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Belarus">
                                        Belarus 🇧🇾
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-belgium" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Belgium">
                                        Belgium 🇧🇪
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-belize" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Belize">
                                        Belize 🇧🇿
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-bermuda" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Bermuda">
                                        Bermuda 🇧🇲
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-bolivia" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Bolivia">
                                        Bolivia 🇧🇴
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-bonaire" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Bonaire">
                                        Bonaire 🇧🇶
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-bosnia" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Bosnia">
                                        Bosnia 🇧🇦
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-botswana" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Botswana">
                                        Botswana 🇧🇼
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-brazil" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Brazil">
                                        Brazil 🇧🇷
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-british-virgin-islands" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="British Virgin Islands">
                                        British Virgin Islands 🇻🇬
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-brunei" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Brunei">
                                        Brunei 🇧🇳
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-bulgaria" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Bulgaria">
                                        Bulgaria 🇧🇬
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-burkina-faso" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Burkina Faso">
                                        Burkina Faso 🇧🇫
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-cambodia" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Cambodia">
                                        Cambodia 🇰🇭
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-cameroon" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Cameroon">
                                        Cameroon 🇨🇲
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-canada" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Canada">
                                        Canada 🇨🇦
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-cape-verde" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Cape Verde">
                                        Cape Verde 🇨🇻
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-cayman-islands" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Cayman Islands">
                                        Cayman Islands 🇰🇾
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-central-african-republic" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Central African Republic">
                                        Central African Republic 🇨🇫
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-chad" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Chad">
                                        Chad 🇹🇩
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-chile" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Chile">
                                        Chile 🇨🇱
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-china" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="China">
                                        China 🇨🇳
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-colombia" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Colombia">
                                        Colombia 🇨🇴
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-congo" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Congo">
                                        Congo 🇨🇬
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-cook-islands" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Cook Islands">
                                        Cook Islands 🇨🇰
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-costa-rica" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Costa Rica">
                                        Costa Rica 🇨🇷
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-cote-divoire" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Cote d'Ivoire">
                                        Cote d'Ivoire 🇨🇮
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-croatia" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Croatia">
                                        Croatia 🇭🇷
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-cuba" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Cuba">
                                        Cuba 🇨🇺
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-curacao" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Curaçao">
                                        Curaçao 🇨🇼
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-cyprus" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Cyprus">
                                        Cyprus 🇨🇾
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-czechia" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Czechia">
                                        Czechia 🇨🇿
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-denmark" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Denmark">
                                        Denmark 🇩🇰
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-djibouti" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Djibouti">
                                        Djibouti 🇩🇯
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-dominican-republic" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Dominican Republic">
                                        Dominican Republic 🇩🇴
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-dr-congo" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="DR Congo">
                                        DR Congo 🇨🇩
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-east-timor" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="East Timor">
                                        East Timor 🇹🇱
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-ecuador" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Ecuador">
                                        Ecuador 🇪🇨
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-egypt" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Egypt">
                                        Egypt 🇪🇬
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-el-salvador" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="El Salvador">
                                        El Salvador 🇸🇻
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-eritrea" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Eritrea">
                                        Eritrea 🇪🇷
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-estonia" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Estonia">
                                        Estonia 🇪🇪
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-ethiopia" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Ethiopia">
                                        Ethiopia 🇪🇹
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-falkland-islands" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Falkland Islands">
                                        Falkland Islands 🇫🇰
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-fiji" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Fiji">
                                        Fiji 🇫🇯
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-finland" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Finland">
                                        Finland 🇫🇮
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-france" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="France">
                                        France 🇫🇷
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-french-guiana" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="French Guiana">
                                        French Guiana 🇬🇫
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-gabon" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Gabon">
                                        Gabon 🇬🇦
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-gambia" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Gambia">
                                        Gambia 🇬🇲
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-georgia" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Georgia">
                                        Georgia 🇬🇪
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-germany" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Germany">
                                        Germany 🇩🇪
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-ghana" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Ghana">
                                        Ghana 🇬🇭
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-gibraltar" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Gibraltar">
                                        Gibraltar 🇬🇮
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-greece" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Greece">
                                        Greece 🇬🇷
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-greenland" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Greenland">
                                        Greenland 🇬🇱
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-guadeloupe" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Guadeloupe">
                                        Guadeloupe 🇬🇵
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-guam" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Guam">
                                        Guam 🇬🇺
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-guatemala" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Guatemala">
                                        Guatemala 🇬🇹
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-guinea" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Guinea">
                                        Guinea 🇬🇳
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-guyana" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Guyana">
                                        Guyana 🇬🇾
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-haiti" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Haiti">
                                        Haiti 🇭🇹
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-honduras" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Honduras">
                                        Honduras 🇭🇳
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-hong-kong" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Hong Kong">
                                        Hong Kong 🇭🇰
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-hungary" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Hungary">
                                        Hungary 🇭🇺
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-iceland" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Iceland">
                                        Iceland 🇮🇸
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-india" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="India">
                                        India 🇮🇳
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-indonesia" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Indonesia">
                                        Indonesia 🇮🇩
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-iran" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Iran">
                                        Iran 🇮🇷
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-iraq" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Iraq">
                                        Iraq 🇮🇶
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-ireland" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Ireland">
                                        Ireland 🇮🇪
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-israel" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Israel">
                                        Israel 🇮🇱
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-italy" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Italy">
                                        Italy 🇮🇹
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-jamaica" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Jamaica">
                                        Jamaica 🇯🇲
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-japan" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Japan">
                                        Japan 🇯🇵
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-jersey" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Jersey">
                                        Jersey 🇯🇪
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-jordan" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Jordan">
                                        Jordan 🇯🇴
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-kazakhstan" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Kazakhstan">
                                        Kazakhstan 🇰🇿
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-kenya" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Kenya">
                                        Kenya 🇰🇪
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-kosovo" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Kosovo">
                                        Kosovo 🇽🇰
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-kurdistan" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Kurdistan">
                                        Kurdistan 🏴
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-kuwait" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Kuwait">
                                        Kuwait 🇰🇼
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-kyrgyzstan" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Kyrgyzstan">
                                        Kyrgyzstan 🇰🇬
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-laos" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Laos">
                                        Laos 🇱🇦
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-latvia" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Latvia">
                                        Latvia 🇱🇻
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-lebanon" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Lebanon">
                                        Lebanon 🇱🇧
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-lesotho" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Lesotho">
                                        Lesotho 🇱🇸
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-liberia" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Liberia">
                                        Liberia 🇱🇷
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-libya" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Libya">
                                        Libya 🇱🇾
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-lithuania" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Lithuania">
                                        Lithuania 🇱🇹
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-luxembourg" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Luxembourg">
                                        Luxembourg 🇱🇺
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-madagascar" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Madagascar">
                                        Madagascar 🇲🇬
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-malawi" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Malawi">
                                        Malawi 🇲🇼
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-malaysia" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Malaysia">
                                        Malaysia 🇲🇾
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-maldives" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Maldives">
                                        Maldives 🇲🇻
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-mali" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Mali">
                                        Mali 🇲🇱
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-malta" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Malta">
                                        Malta 🇲🇹
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-mauritania" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Mauritania">
                                        Mauritania 🇲🇷
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-mauritius" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Mauritius">
                                        Mauritius 🇲🇺
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-mexico" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Mexico">
                                        Mexico 🇲🇽
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-moldova" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Moldova">
                                        Moldova 🇲🇩
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-monaco" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Monaco">
                                        Monaco 🇲🇨
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-mongolia" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Mongolia">
                                        Mongolia 🇲🇳
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-montenegro" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Montenegro">
                                        Montenegro 🇲🇪
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-morocco" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Morocco">
                                        Morocco 🇲🇦
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-mozambique" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Mozambique">
                                        Mozambique 🇲🇿
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-myanmar" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Myanmar">
                                        Myanmar 🇲🇲
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-namibia" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Namibia">
                                        Namibia 🇳🇦
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-nepal" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Nepal">
                                        Nepal 🇳🇵
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-netherlands" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Netherlands">
                                        Netherlands 🇳🇱
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-new-caledonia" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="New Caledonia">
                                        New Caledonia 🇳🇨
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-new-zealand" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="New Zealand">
                                        New Zealand 🇳🇿
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-nicaragua" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Nicaragua">
                                        Nicaragua 🇳🇮
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-niger" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Niger">
                                        Niger 🇳🇪
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-nigeria" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Nigeria">
                                        Nigeria 🇳🇬
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-north-korea" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="North Korea">
                                        North Korea 🇰🇵
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-north-macedonia" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="North Macedonia">
                                        North Macedonia 🇲🇰
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-norway" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Norway">
                                        Norway 🇳🇴
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-oman" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Oman">
                                        Oman 🇴🇲
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-pakistan" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Pakistan">
                                        Pakistan 🇵🇰
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-palestine" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Palestine">
                                        Palestine 🇵🇸
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-panama" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Panama">
                                        Panama 🇵🇦
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-papua-new-guinea" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Papua New Guinea">
                                        Papua New Guinea 🇵🇬
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-paraguay" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Paraguay">
                                        Paraguay 🇵🇾
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-peru" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Peru">
                                        Peru 🇵🇪
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-philippines" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Philippines">
                                        Philippines 🇵🇭
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-poland" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Poland">
                                        Poland 🇵🇱
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-portugal" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Portugal">
                                        Portugal 🇵🇹
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-puerto-rico" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Puerto Rico">
                                        Puerto Rico 🇵🇷
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-qatar" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Qatar">
                                        Qatar 🇶🇦
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-romania" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Romania">
                                        Romania 🇷🇴
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-russia" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Russia">
                                        Russia 🇷🇺
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-rwanda" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Rwanda">
                                        Rwanda 🇷🇼
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-saint-helena" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Saint Helena">
                                        Saint Helena 🇸🇭
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-samoa" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Samoa">
                                        Samoa 🇼🇸
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-saudi-arabia" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Saudi Arabia">
                                        Saudi Arabia 🇸🇦
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-senegal" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Senegal">
                                        Senegal 🇸🇳
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-serbia" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Serbia">
                                        Serbia 🇷🇸
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-seychelles" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Seychelles">
                                        Seychelles 🇸🇨
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-sierra-leone" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Sierra Leone">
                                        Sierra Leone 🇸🇱
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-singapore" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Singapore">
                                        Singapore 🇸🇬
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-sint-maarten" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Sint Maarten">
                                        Sint Maarten 🇸🇽
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-slovakia" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Slovakia">
                                        Slovakia 🇸🇰
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-slovenia" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Slovenia">
                                        Slovenia 🇸🇮
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-solomon-islands" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Solomon Islands">
                                        Solomon Islands 🇸🇧
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-somalia" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Somalia">
                                        Somalia 🇸🇴
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-south-africa" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="South Africa">
                                        South Africa 🇿🇦
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-south-georgia-and-the-south-sandwich-islands" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="South Georgia and the South Sandwich Islands">
                                        South Georgia and the South Sandwich Islands 🇬🇸
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-south-korea" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="South Korea">
                                        South Korea 🇰🇷
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-south-sudan" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="South Sudan">
                                        South Sudan 🇸🇸
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-spain" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Spain">
                                        Spain 🇪🇸
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-sri-lanka" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Sri Lanka">
                                        Sri Lanka 🇱🇰
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-sudan" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Sudan">
                                        Sudan 🇸🇩
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-suriname" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Suriname">
                                        Suriname 🇸🇷
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-sweden" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Sweden">
                                        Sweden 🇸🇪
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-switzerland" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Switzerland">
                                        Switzerland 🇨🇭
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-syria" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Syria">
                                        Syria 🇸🇾
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-taiwan" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Taiwan">
                                        Taiwan 🇹🇼
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-tajikistan" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Tajikistan">
                                        Tajikistan 🇹🇯
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-tanzania" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Tanzania">
                                        Tanzania 🇹🇿
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-thailand" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Thailand">
                                        Thailand 🇹🇭
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-the-bahamas" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="The Bahamas">
                                        The Bahamas 🇧🇸
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-togo" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Togo">
                                        Togo 🇹🇬
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-tonga" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Tonga">
                                        Tonga 🇹🇴
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-trinidad-and-tobago" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Trinidad and Tobago">
                                        Trinidad and Tobago 🇹🇹
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-tunisia" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Tunisia">
                                        Tunisia 🇹🇳
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-turkey" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Turkey">
                                        Turkey 🇹🇷
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-turkmenistan" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Turkmenistan">
                                        Turkmenistan 🇹🇲
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-tuvalu" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Tuvalu">
                                        Tuvalu 🇹🇻
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-uganda" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Uganda">
                                        Uganda 🇺🇬
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-ukraine" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Ukraine">
                                        Ukraine 🇺🇦
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-united-arab-emirates" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="United Arab Emirates">
                                        United Arab Emirates 🇦🇪
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-united-kingdom" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="United Kingdom">
                                        United Kingdom 🇬🇧
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-united-states" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="United States">
                                        United States 🇺🇸
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-united-states-virgin-islands" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="United States Virgin Islands">
                                        United States Virgin Islands 🇻🇮
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-uruguay" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Uruguay">
                                        Uruguay 🇺🇾
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-uzbekistan" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Uzbekistan">
                                        Uzbekistan 🇺🇿
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-vanuatu" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Vanuatu">
                                        Vanuatu 🇻🇺
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-vatican-city" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Vatican City">
                                        Vatican City 🇻🇦
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-venezuela" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Venezuela">
                                        Venezuela 🇻🇪
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-vietnam" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Vietnam">
                                        Vietnam 🇻🇳
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-western-sahara" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Western Sahara">
                                        Western Sahara 🇪🇭
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-yemen" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Yemen">
                                        Yemen 🇾🇪
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-zambia" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Zambia">
                                        Zambia 🇿🇲
                                    </option>
                                    <option data-filter-slug="visa-free-for-citizens-of-zimbabwe" data-filter-target="visa_free_for_friend" data-filter-type="partial-match" data-filter-value="Zimbabwe">
                                        Zimbabwe 🇿🇼
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="filter-group">
                        <label className="filter-group-label">How</label>
                        <div className="filter safety half choices c1 tooltip" title="Low crime + high safety in terms of level of crime, scams and political situation">
                            <div className="choice" data-filter-slug-position="before" data-filter-target="safety_level" data-filter-type="greater-than" data-filter-min="3.5">
                                <span>👮‍ Safe</span>
                            </div>
                        </div>
                        <div className="filter leisure half choices c1 tooltip" title="Quality of leisure and fun stuff to do">
                            <div className="choice" data-filter-target="leisure_quality" data-filter-slug="fun" data-filter-slug-position="before" data-filter-type="greater-than" data-filter-min="3.75">
                                <span>🙂 Fun</span>
                            </div>
                        </div>
                        <div className="filter nightlife half choices c1 tooltip" title="Good nghtlife, clubs, festivals and culture">
                            <div className="choice" data-filter-target="nightlife" data-filter-type="greater-than" data-filter-min={3}>
                                <span>💃 Good nightlife</span>
                            </div>
                        </div>
                        <div className="filter half choices c1">
                            <div className="choice" data-filter-slug="near-a-beach" data-filter-slug-position="after" data-filter-target="tags" data-filter-type="partial-match" data-filter-value=",beach">
                                <span>⛱ Near beach</span>
                            </div>
                        </div>
                        <div className="filter friendliness half choices c1 tooltip" title="Friendliness to foreigners">
                            <div className="choice" data-text="friendly people" data-filter-target="friendliness_to_foreigners" data-filter-type="greater-than" data-filter-min={3}>
                                <span>🙂 Friendly people</span>
                            </div>
                        </div>
                        <div className="filter female_safety half choices c1 tooltip" title="Safe for women">
                            <div className="choice" data-filter-slug="safe-for-women-to-travel-alone" data-filter-target="female_friendly" data-filter-type="greater-than" data-filter-min="3.75">
                                <span>👩 Safe for women</span>
                            </div>
                        </div>
                        <div className="filter gay_safety half choices c1">
                            <div className="choice tooltip" title="Friendly/safe for lesbian, gay, bisexual, transgender, and queer people based on data sets and surveys" data-filter-slug="lgbt-friendly" data-filter-slug-position="before" data-filter-target="lgbt_friendly" data-filter-type="greater-than" data-filter-min={3}>
                                <span>🌈 LGBTQ+ friendly</span>
                            </div>
                        </div>
                        <div className="filter racial_tolerance half choices c1 tooltip" title="Based on diversity surveys from the World Values Survey">
                            <div className="choice" data-filter-slug="least-racist" data-filter-slug-position="before" data-filter-target="racial_tolerance" data-filter-type="greater-than" data-filter-min="3.25">
                                <span>🤲 Low in racism</span>
                            </div>
                        </div>
                        <div className="filter remote_work_visas half choices c1">
                            <div className="choice tooltip" data-filter-slug="with-remote-work-visas" title="Places that have attractive visas for remote workers, tech workers or similar programs to attract them" data-filter-target="remote_work_visa" data-filter-type="exact-match" data-filter-value={1}>
                                <span>👩‍💻 Remote work visa</span>
                            </div>
                        </div>
                    </div>
                    <div className>
                        <div className="filter-group">
                            <label className="filter-group-label">Health</label>
                            <div className="filter filter_annual half choices c1 tooltip" title="Good air quality <75 AQI (the WHO Air Quality guideline) on average over the whole year">
                                <div className="choice" data-filter-target="air_quality_annual_or_now" data-filter-type="less-than" data-filter-max={75}>
                                    <span>💨 Clean air (on avg)</span>
                                </div>
                            </div>
                            <div className="filter half choices c1">
                                <div className="choice tooltip" title="Cities with at least one top-ranked hospital (ranked in top 40%) according to the CSIC" data-filter-target="top_hospital_score" data-filter-type="greater-than" data-filter-min={3}>
                                    <span>🏥 Great hospitals</span>
                                </div>
                            </div>
                            <div className="filter half choices c1">
                                <div className="choice tooltip" title="Low amount of smoking on average: less than 3 cigarettes per day per capita, which is the U.S. average (Tobacco Atlas, 2016)" data-filter-target="smoking_packs_per_year" data-filter-type="less-than" data-filter-max={55}>
                                    <span>🚬 No smoking</span>
                                </div>
                            </div>
                            <div className="filter half choices c1">
                                <div className="choice tooltip" data-filter-slug="non-overweight" data-filter-slug-position="before" data-filter-target="overweight_rate" data-filter-type="less-than" data-filter-max={65} title="Less than 65% of people overweight (BMI>25)">
                                    <span>⚖️ Not overweight</span>
                                </div>
                            </div>
                            <div className="filter half choices c1">
                                <div className="choice tooltip" data-filter-slug="non-obese" data-filter-slug-position="before" data-filter-target="obesity_rate" data-filter-type="less-than" data-filter-max={25} title="Less than 25% of people overweight (BMI>30)">
                                    <span>⚖️ Not obese</span>
                                </div>
                            </div>
                            <div className="filter half choices c1">
                                <div className="choice tooltip" title="Low prevalence of diabetes (International Diabetes Federation, 2019)" data-filter-target="diabetes_prevalence" data-filter-type="less-than" data-filter-max={10}>
                                    <span>🩸 Low diabetes rate</span>
                                </div>
                            </div>
                        </div>
                        <div className="filter-group">
                            <label className="filter-group-label">Members data</label>
                            <div className="filter half choices c1 tooltip" title="Many Nomad List members who went here said they liked it">
                                <div className="choice" data-filter-target="likes_score" data-filter-slug="most-liked" data-filter-slug-position="before" data-filter-type="greater-than" data-filter-min={4}>
                                    <span>👍 Top rated</span>
                                </div>
                            </div>
                            <div className="filter user_has_been half choices c1">
                                <div className="choice tooltip" data-filter-slug="where-i-have-been" data-filter-slug-position="after" data-filter-target="user_has_been" data-filter-type="exact-match" data-filter-value={1} title="Places you've already been (Members only: unlock this and hundreds more filters by signing up to Nomad List)">
                                    <span>🖼️ You've already been</span>
                                </div>
                            </div>
                            <div className="filter user_has_been half choices c1">
                                <div className="choice tooltip" data-filter-slug="where-you-have-not-been-yet" data-filter-slug-position="after" data-filter-target="user_has_been" data-filter-type="exact-match" data-filter-value={0} title="Places you've never been (Members only: unlock this and hundreds more filters by signing up to Nomad List)">
                                    <span>✨ You've not been yet</span>
                                </div>
                            </div>
                            <div className="filter personal_score half choices c1 tooltip">
                                <div className="choice tooltip" title="This recommends places by analyzing your trips history to find places that other people that visit similar places to you have also visited, it excludes places you've already visited (if you're a member)" data-filter-slug="recommended-for-you" data-filter-slug-position="after" data-filter-target="personal_score" data-filter-type="greater-than" data-filter-min="0.1">
                                    <span>✨ Recommended to you</span>
                                </div>
                            </div>
                            <div className="filter my-favorites half choices c1 tooltip members-only tooltip" title="Members only: unlock this and hundreds more filters by joining to Nomad List">
                                <div className="choice" data-filter-target="favorited_cities" data-filter-type="exact-match" data-filter-value data-filter-slug="in-my-favorites" data-filter-slug-position="after">
                                    <span>❤️ In your favorites</span>
                                </div>
                            </div>
                            <div className="filter half choices c1">
                                <div className="choice tooltip" title=">10% of nomads return to this place after their first visit" data-filter-target="return_rate" data-filter-type="greater-than" data-filter-min={10}>
                                    <span>♻️ High return rate</span>
                                </div>
                            </div>
                            <div className="filter choices c2">
                                <div className="choice tooltip" title="Cities mostly visited by men on Nomad List based on trips data" data-filter-slug="for-men" data-filter-target="users_been_count_gender_ratio" data-filter-type="greater-than" data-filter-min={100}>
                                    <span>👱‍ For men</span>
                                </div>
                                <div className="choice tooltip" title="Cities mostly visited by women on Nomad List based on trips data" data-filter-slug="for-women" data-filter-target="users_been_count_gender_ratio" data-filter-type="less-than" data-filter-max={100}>
                                    <span>👱‍♀️ For women</span>
                                </div>
                            </div>
                            <div className="filter half choices c1">
                                <div className="choice tooltip" title="Cities more visited by Gen Z (vs Millennial) on Nomad List based on trips data" data-filter-slug="for-gen-z" data-filter-target="user_been_count_gen_z_vs_gen_y_ratio" data-filter-type="greater-than" data-filter-min={100}>
                                    <span>🤪 For Gen Z</span>
                                </div>
                            </div>
                            <div className="filter half choices c1">
                                <div className="choice tooltip" title="Cities more visited by Millenials (vs Gen X) on Nomad List based on trips data" data-filter-slug="for-millennials" data-filter-target="user_been_count_gen_y_vs_gen_x_ratio" data-filter-type="less-than" data-filter-max={100}>
                                    <span>😛 For Millenials</span>
                                </div>
                            </div>
                            <div className="filter half choices c1">
                                <div className="choice tooltip" title="Cities more visited by Gen X (vs Baby Boomers) on Nomad List based on trips data" data-filter-slug="for-gen-x" data-filter-target="user_been_count_gen_x_vs_boomers_ratio" data-filter-type="less-than" data-filter-max={100}>
                                    <span>😋 For Gen X</span>
                                </div>
                            </div>
                            <div className="filter half choices c1">
                                <div className="choice tooltip" title="Cities more visited by Baby Boomers on Nomad List based on trips data" data-filter-slug="for-baby-boomers" data-filter-target="user_been_count_boomers_vs_gen_z_ratio" data-filter-type="less-than" data-filter-max={100}>
                                    <span>👴 For Boomers</span>
                                </div>
                            </div>
                        </div>
                        <div className="filter-group">
                            <label className="filter-group-label">Size</label>
                            <div className="filter population cities choices multiple-choice c5">
                                <div className="choice tooltip" data-filter-slug="small-town" data-filter-slug-position="before" title="Less than 10K people" data-filter-multiple-choice="true" data-filter-multiple-choice-type="or" data-filter-target="population" data-filter-type="less-than" data-filter-max={10000}>
                                    <span>👨‍🌾 Town</span>
                                </div>
                                <div className="choice tooltip" data-filter-slug="large-town" data-filter-slug-position="before" title="10K to 100K people" data-filter-multiple-choice="true" data-filter-multiple-choice-type="or" data-filter-target="population" data-filter-type="between-range" data-filter-min={10000} data-filter-max={100000}>
                                    <span>🏡 Large town</span>
                                </div>
                                <div className="choice tooltip" data-filter-slug="small-city" data-filter-slug-position="before" title="100K to 1M people" data-filter-multiple-choice="true" data-filter-multiple-choice-type="or" data-filter-target="population" data-filter-type="between-range" data-filter-min={100000} data-filter-max={1000000}>
                                    <span>🌉 City</span>
                                </div>
                                <div className="choice tooltip" data-filter-slug="metropolis" data-filter-slug-position="before" title="1M to 10M people" data-filter-multiple-choice="true" data-filter-multiple-choice-type="or" data-filter-target="population" data-filter-type="between-range" data-filter-min={1000000} data-filter-max={10000000}>
                                    <span>🌃 Metropolis</span>
                                </div>
                                <div className="choice tooltip" data-filter-slug="megacity" data-filter-slug-position="before" title="Over 10M people" data-filter-multiple-choice="true" data-filter-multiple-choice-type="or" data-filter-target="population" data-filter-type="greater-than" data-filter-min={10000000}>
                                    <span>🌇 Megacity</span>
                                </div>
                            </div>
                        </div>
                        <div className="filter-group half">
                            <label className="filter-group-label">Great</label>
                            <div className="filter half choices c1">
                                <div className="choice" data-filter-slug="for-digital-nomads" data-filter-target="nomad_score" data-filter-type="greater-than" data-filter-min={3}>
                                    <span>🎒 For nomads</span>
                                </div>
                            </div>
                            <div className="filter half choices c1">
                                <div className="choice" data-filter-slug="for-remote-workers-to-live" data-filter-target="nomad_score" data-filter-type="greater-than" data-filter-min={3}>
                                    <span>👩‍💻 For remote workers</span>
                                </div>
                            </div>
                            <div className="filter half choices c1">
                                <div className="choice tooltip" data-filter-slug="for-backpackers" title="Less than $25/day to travel for backpackers" data-filter-target="backpacker_score" data-filter-type="greater-than" data-filter-min={3}>
                                    <span>🎒 For backpackers</span>
                                </div>
                            </div>
                            <div className="filter half choices c1">
                                <div className="choice tooltip" title="Over $4,000/mo for a short term nomad to live" data-filter-slug="for-flashpackers" data-filter-target="short_term_cost_in_usd" data-filter-type="greater-than" data-filter-min={4000}>
                                    <span>🤑 For flashpackers</span>
                                </div>
                            </div>
                            <div className="filter half choices c1">
                                <div className="choice" data-filter-slug="for-startups" data-filter-target="startup_score" data-filter-type="greater-than" data-filter-min={3}>
                                    <span>🚀 For startups</span>
                                </div>
                            </div>
                            <div className="filter half choices c1">
                                <div className="choice tooltip" title="Places with great infrastructure for families to raise kids safely" data-filter-slug="for-families-to-live" data-filter-target="family_score" data-filter-type="greater-than" data-filter-min="3.5">
                                    <span>👨‍👩‍👧 For families</span>
                                </div>
                            </div>
                            <div className="filter half choices c1">
                                <div className="choice tooltip" title="Places with great infrastructure for families to raise kids safely" data-filter-slug="to-raise-kids" data-filter-target="family_score" data-filter-type="greater-than" data-filter-min="3.5">
                                    <span>👶 To raise kids</span>
                                </div>
                            </div>
                            <div className="filter half choices c1">
                                <div className="choice tooltip" title="Destinations that are Muslim friendly" data-filter-slug="muslim-friendly" data-filter-slug-position="before" data-filter-target="muslim_friendly" data-filter-type="exact-match" data-filter-value={1}>
                                    <span>🕌 For Muslims</span>
                                </div>
                            </div>
                            <div className="filter half choices c1">
                                <div className="choice tooltip" title="Destinations that are Jewish friendly" data-filter-slug="jewish-friendly" data-filter-slug-position="before" data-filter-target="jewish_friendly" data-filter-type="exact-match" data-filter-value={1}>
                                    <span>🕍 For Jewish</span>
                                </div>
                            </div>
                            <div className="filter half choices c1">
                                <div className="choice" data-filter-slug="for-expats-to-live" data-filter-target="expat_score" data-filter-type="greater-than" data-filter-min={3}>
                                    <span>🤠 For expats</span>
                                </div>
                            </div>
                            <div className="filter half choices c1">
                                <div className="choice" data-filter-slug="for-retirees-to-live" data-filter-target="retiree_score" data-filter-type="greater-than" data-filter-value={3}>
                                    <span>👴 For retirees</span>
                                </div>
                            </div>
                            <div className="filter half choices c1">
                                <div className="choice tooltip" title="Destinations that are dog friendly" data-filter-slug="dog-friendly" data-filter-slug-position="before" data-filter-target="dog_friendly" data-filter-type="exact-match" data-filter-value={1}>
                                    <span>🦮 For dogs</span>
                                </div>
                            </div>
                            <div className="filter half choices c1">
                                <div className="choice tooltip" title="Places that are spiritual or have a conscious community, e.g. yoga, yogis, gurus, meditation, midlife crisis, energies, gems, crystals and places that are on the Earth's chakras. Do I believe all this? That's a question for another day, another time." data-filter-slug="spiritual" data-filter-slug-position="before" data-filter-target="spiritual" data-filter-type="exact-match" data-filter-value={1}>
                                    <span>🧘‍♀️ For spiritual people</span>
                                </div>
                            </div>
                        </div>
                        <div className="filter-group half climate">
                            <label className="filter-group-label">Climate</label>
                            <div className="filter climate choices c5 multiple-choice multiple-choice-or">
                                <div className="choice tooltip" title="Tropical climate (everything around the equator) is in which all twelve months have mean temperatures of warmer than 18°C/64°F" data-filter-slug="with-a-tropical-climate" data-filter-multiple-choice-type="or" data-filter-target="climate_koppen_1st" data-filter-type="exact-match" data-filter-value="A">
                                    <span>🏝 Tropical climate</span>
                                </div>
                                <div className="choice tooltip" title="Desert climate (South America, Africa, Middle East, North Asia) is a climate in which there is an excess of evaporation over precipitation. The typically bald, rocky, or sandy surfaces in desert climates hold little moisture and evaporate the little rainfall they receive" data-filter-slug="with-a-dry-climate" data-filter-multiple-choice-type="or" data-filter-target="climate_koppen_1st" data-filter-type="exact-match" data-filter-value="B">
                                    <span>🏜 Desert climate</span>
                                </div>
                                <div className="choice tooltip" title="Temperate climate (Europe, North America, East Asia) has moderate rainfall spread across the year or portion of the year with sporadic drought, mild to warm summers and cool to cold winters" data-filter-slug="with-a-temperate-climate" data-filter-multiple-choice-type="or" data-filter-target="climate_koppen_1st" data-filter-type="exact-match" data-filter-value="C">
                                    <span>🌳 Temperate climate</span>
                                </div>
                                <div className="choice tooltip" title="Continental climate (North East Europe, Canada, North East Asia) has hot summers and cold winters." data-filter-slug="with-a-continental-climate" data-filter-multiple-choice-type="or" data-filter-target="climate_koppen_1st" data-filter-type="exact-match" data-filter-value="D">
                                    <span>🏔 Continental climate</span>
                                </div>
                                <div className="choice tooltip" title="Polar climate (Antarctica and the North Pole) don't have warm summers and every month is usually colder than 10°C/50°F with cool summers and very cold winters." data-filter-slug="with-a-polar-climate" data-filter-multiple-choice-type="or" data-filter-target="climate_koppen_1st" data-filter-type="exact-match" data-filter-value="E">
                                    <span>🥶 Polar climate</span>
                                </div>
                            </div>
                            <div className="filter humidity half choices c1">
                                <div className="choice tooltip" title="Comfortable humidity levels between 30% to 70%" data-filter-multiple-choice="true" data-filter-multiple-choice-type="or" data-filter-target="humidity" data-filter-type="between-range" data-filter-min={30} data-filter-max={70}>
                                    <span>💦 Good humidity now</span>
                                </div>
                            </div>
                            <div className="filter half choices c1">
                                <div className="choice tooltip" title="UV index below 6 which means low to moderate risk of sun burn" data-filter-target="uv_index" data-filter-type="less-than" data-filter-max={6}>
                                    <span>🔥 Good UV Index</span>
                                </div>
                            </div>
                        </div>
                        <div className="filter-group half">
                            <label className="filter-group-label">Investment</label>
                            <div className="filter half choices c1">
                                <div className="choice tooltip" title="Full land ownership by foreigners is allowed with no restrictions" data-filter-target="foreign_land_ownership" data-filter-slug="where-foreigners-can-own-land" data-filter-slug-position="after" data-filter-type="exact-match" data-filter-value={1}>
                                    <span>🏞 Foreign land ownership</span>
                                </div>
                            </div>
                            <div className="filter half choices c1">
                                <div className="choice tooltip" title="Full real estate ownership by foreigners is allowed with no restrictions" data-filter-target="foreign_land_ownership" data-filter-slug="where-foreigners-can-own-real-estate" data-filter-slug-position="after" data-filter-type="exact-match" data-filter-value={1}>
                                    <span>🏛 Foreign real estate ownership</span>
                                </div>
                            </div>
                            <div className="filter half choices c1">
                                <div className="choice tooltip" data-filter-slug="very-profitable-airbnb" data-filter-slug-position="before" title="Cities with a high Airbnb price vs. low rent price ratio which means high profit margins and a good place to be an Airbnb host. Average occupancy of Airbnb is 44%, which means you need the Airbnb price per month to be 2.2x rent to at least to break even (without costs). This filter shows only very profitable cities with Airbnb price being 8x rent." data-filter-target="airbnb_vs_apartment_ratio" data-filter-type="greater-than" data-filter-min={8}>
                                    <span>💒 Very profitable to be an Airbnb host</span>
                                </div>
                            </div>
                            <div className="filter half choices c1">
                                <div className="choice tooltip" data-filter-slug="profitable-airbnb" data-filter-slug-position="before" title="Cities with a high Airbnb price vs. low rent price ratio which means high profit margins and a good place to be an Airbnb host. Average occupancy of Airbnb is 44%, which means you need the Airbnb price per month to be 2.2x rent to at least to break even (without costs)." data-filter-target="airbnb_vs_apartment_ratio" data-filter-type="greater-than" data-filter-min={5}>
                                    <span>💒 Profitable to be an Airbnb host</span>
                                </div>
                            </div>
                        </div>
                        <div className="filter-group half">
                            <label className="filter-group-label">Cost</label>
                            <div className="filter half choices c1">
                                <div className="choice tooltip" data-filter-target="hotel_price_in_usd" data-filter-type="less-than" data-filter-max={50} title="Hotel lower than $50/night">
                                    <span>🏨 Cheap hotels</span>
                                </div>
                            </div>
                            <div className="filter half choices c1 tooltip">
                                <div className="choice tooltip" data-filter-target="airbnb_median_price_in_usd" data-filter-type="less-than" data-filter-max={50} title="Airbnb lower than $50/night">
                                    <span>💒 Cheap Airbnbs</span>
                                </div>
                            </div>
                            <div className="filter half choices c1 tooltip">
                                <div className="choice tooltip" data-filter-target="apartment_cost_in_usd" data-filter-type="less-than" data-filter-max={750} title="1br rent median lower than $750/m">
                                    <span>🏡 Cheap rent</span>
                                </div>
                            </div>
                            <div className="filter half choices c1 tooltip">
                                <div className="choice tooltip" data-filter-target="housing_price_in_usd" data-filter-type="less-than" data-filter-max={250000} title="1br house price median less than $250,000">
                                    <span>🏡 Cheap real estate</span>
                                </div>
                            </div>
                            <div className="filter half choices c1 tooltip">
                                <div className="choice tooltip" data-filter-target="local_cost_in_usd" data-filter-type="less-than" data-filter-max={1000} title="Cost of living for a local lower than $1,000/month">
                                    <span>💵 Cheap life</span>
                                </div>
                            </div>
                            <div className="filter half choices c1">
                                <div className="choice tooltip" title="Less than $25/day to travel for backpackers" data-filter-target="backpacker_score" data-filter-type="greater-than" data-filter-min={3}>
                                    <span>🎒 Cheap backpacking</span>
                                </div>
                            </div>
                        </div>
                        <div className="filter-group half">
                            <label className="filter-group-label">Development</label>
                            <div className="filter">
                                <div className="choices single-choice c2">
                                    <div className="choice tooltip" title="High Human Development Index (UN)" data-filter-slug-position="before" data-filter-target="human_development_index" data-filter-type="greater-than" data-filter-min="0.7">
                                        <span>👍 Developed</span>
                                    </div>
                                    <div className="choice tooltip" title="Low Human Development Index (UN)" data-filter-slug-position="before" data-filter-target="human_development_index" data-filter-type="less-than" data-filter-max="0.7">
                                        <span>👎 Underdeveloped</span>
                                    </div>
                                </div>
                            </div>
                            <div className="filter peace half choices c1 tooltip" title="Scores relatively high in the Press Freedom Index (aka high free speech)">
                                <div className="choice" data-filter-target="press_freedom_score" data-filter-type="greater-than" data-filter-min="3.75">
                                    <span>💬 Freedom of speech</span>
                                </div>
                            </div>
                            <div className="filter democracy half choices c1 tooltip" title="Scores relatively high in the Democracy Index">
                                <div className="choice" data-filter-target="democracy_score" data-filter-slug-position="before" data-filter-type="greater-than" data-filter-min={3}>
                                    <span>🏛 Democratic</span>
                                </div>
                            </div>
                            <div className="filter oecd half choices c1 tooltip" title="Member of OECD (Organisation for Economic Co-operation and Development is an intergovernmental economic organisation with 38 member countries, founded in 1961 to stimulate economic progress and world trade), aka developed countries cooperating in economic policy">
                                <div className="choice" data-filter-target="oecd" data-filter-slug="in-oecd" data-filter-slug-position="after" data-filter-type="exact-match" data-filter-value={1}>
                                    <span>🌎 OECD member</span>
                                </div>
                            </div>
                            <div className="filter half">
                                <div className="choices c1">
                                    <div className="choice tooltip" title="Average highly educated based on UNDP's Education Index (UN, 2013), e.g. smart, intelligent people" data-filter-target="education_index_score" data-filter-slug-position="before" data-filter-type="greater-than" data-filter-min={3}>
                                        <span>🎓 High educated</span>
                                    </div>
                                </div>
                            </div>
                            <div className="filter half">
                                <div className="choices c1">
                                    <div className="choice tooltip" title="Intelligence quotient (IQ) >100 (aka highly intelligent and smart people)" data-filter-target="iq_level" data-filter-slug="with-very-high-iq-people" data-filter-slug-position="after" data-filter-type="greater-than" data-filter-min={100}>
                                        <span>🧠 Highly intelligent</span>
                                    </div>
                                </div>
                            </div>
                            <div className="filter half">
                                <div className="choices c1">
                                    <div className="choice tooltip" title="Intelligence quotient (IQ) >95 (aka intelligent and smart people)" data-filter-target="iq_level" data-filter-slug="with-high-iq-people" data-filter-slug-position="after" data-filter-type="greater-than" data-filter-min={95}>
                                        <span>🧠 Intelligent</span>
                                    </div>
                                </div>
                            </div>
                            <div className="filter half choices c1">
                                <div className="choice tooltip" data-filter-slug-position="before" title="Over $2,000/mo in income average (GDP per capita nominal)" data-filter-target="gdp_per_capita_in_usd_monthly" data-filter-type="greater-than" data-filter-min={2000}>
                                    <span>💰 High income</span>
                                </div>
                            </div>
                            <div className="filter half choices c1">
                                <div className="choice tooltip" data-filter-slug-position="before" title="Over $2,000/mo in income average (GDP per capita nominal) aka a rich country" data-filter-target="gdp_per_capita_in_usd_monthly" data-filter-type="greater-than" data-filter-min={2000}>
                                    <span>💰 Wealthy country</span>
                                </div>
                            </div>
                            <div className="filter half choices c1">
                                <div className="choice tooltip" data-filter-slug-position="before" title="Income inequality index below Gini coefficient of 40, which means low income inequality" data-filter-target="income_inequality" data-filter-type="less-than" data-filter-max={40}>
                                    <span>💵 Low income inequality</span>
                                </div>
                            </div>
                            <div className="filter half choices c1">
                                <div className="choice tooltip" data-filter-slug-position="before" title="Over 75 years of life expectancy" data-filter-target="life_expectancy" data-filter-type="greater-than" data-filter-min="74.99">
                                    <span>🏥 High life expectancy</span>
                                </div>
                            </div>
                            <div className="filter half choices c1">
                                <div className="choice tooltip" title="High perceived product quality based on the Made-In Index which measures quality of fabricated products in countries" data-filter-target="product_quality_index" data-filter-type="greater-than" data-filter-min={50}>
                                    <span>📦 High quality products</span>
                                </div>
                            </div>
                            <div className="filter english_speaking half choices c1">
                                <div className="choice" data-filter-target="english_speaking" data-filter-slug="english-speaking" data-filter-slug-position="before" data-filter-type="greater-than" data-filter-value="2.9">
                                    <span>🇬🇧 Speaks English</span>
                                </div>
                            </div>
                            <div className="filter half choices c1">
                                <div className="choice tooltip" title="Low gender wage gap" data-filter-target="gender_pay_gap" data-filter-type="less-than" data-filter-max={75}>
                                    <span>👩‍⚖️ Low gender pay gap</span>
                                </div>
                            </div>
                            <div className="filter homelessness half choices c1 tooltip" title="Less than 1% of people live without shelter">
                                <div className="choice" data-filter-target="homelessness_per_100k" data-filter-type="less-than" data-filter-max={250}>
                                    <span>🏚 Low homelessness</span>
                                </div>
                            </div>
                            <div className="filter google_stadia_or_nvidia_geforce_now half choices c1 tooltip" title="Supports cloud gaming like Google Stadia or Nvidia Geforce Now">
                                <div className="choice" data-filter-slug="that-support-stadia-or-geforce-now" data-filter-target="google_stadia_or_nvidia_geforce_now" data-filter-type="exact-match" data-filter-value={1}>
                                    <span>🎮 Has Stadia or GeForce Now</span>
                                </div>
                            </div>
                            <div className="filter ease_of_doing_business half choices c1 tooltip" title="Based on the ease of doing business index in the country (World Bank, 2019)">
                                <div className="choice" data-filter-slug="to-do-business" data-filter-slug-position="after" data-filter-target="ease_of_doing_business" data-filter-type="greater-than" data-filter-min="2.9">
                                    <span>🚀 Easy to do business</span>
                                </div>
                            </div>
                            <div className="filter legal_weed half choices c1">
                                <div className="choice tooltip" data-filter-slug="where-weed-is-legal" title="Places where marijuana usage MAY be legal, unenforced or decriminalized (always double check this from another source to avoid getting into trouble, drugs can carry the death penalty in many countries!)" data-filter-target="legal_weed" data-filter-type="exact-match" data-filter-value={1}>
                                    <span>🌿 Legal weed</span>
                                </div>
                            </div>
                            <div className="filter legal_weed_for_medical_use half choices c1">
                                <div className="choice tooltip" data-filter-slug="where-weed-is-legal-for-medical-use" title="Places where marijuana usage MAY be legal, legal for medical use with a prescription, unenforced or decriminalized (always double check this from another source to avoid getting into trouble, drugs can carry the death penalty in many countries!)" data-filter-target="legal_weed_for_medical_use" data-filter-type="exact-match" data-filter-value={1}>
                                    <span>🌿 Legal weed for medical use</span>
                                </div>
                            </div>
                            <div className="filter abortion half choices c1 tooltip" title="If abortion is generally legalized and not restricted">
                                <div className="choice" data-filter-target="legal_abortion" data-filter-type="exact-match" data-filter-value={1}>
                                    <span>🏥 Legal abortion</span>
                                </div>
                            </div>
                            <div className="filter choices c2 single-choice">
                                <div className="choice tooltip" title="Population density > 5,000 people/sq. km" data-filter-target="population_density" data-filter-slug="high-density" data-filter-slug-position="before" data-filter-type="greater-than" data-filter-min={4999}>
                                    <span>😤 High population density</span>
                                </div>
                                <div className="choice tooltip" title="Population density < 5,000 people/sq. km" data-filter-target="population_density" data-filter-slug="low-density" data-filter-slug-position="before" data-filter-type="less-than" data-filter-max={4999}>
                                    <span>🧘‍♀️ Low population density</span>
                                </div>
                            </div>
                        </div>
                        <div className="filter-group half">
                            <label className="filter-group-label">Quality of life</label>
                            <div className="filter clean half choices c1 tooltip" title="Clean city by hygiene standards">
                                <div className="choice" data-filter-target="clean" data-filter-slug="clean" data-filter-slug-position="before" data-filter-type="exact-match" data-filter-value="yes">
                                    <span>🧹 Clean city</span>
                                </div>
                            </div>
                            <div className="filter noise half choices c1 tooltip" title="Low levels of noise pollution based on hearing loss data and noise decibel levels (country level data), aka silent, silence, quiet and peaceful">
                                <div className="choice" data-filter-slug="silent" data-filter-slug-position="before" data-filter-target="noise_decibel" data-filter-type="less-than" data-filter-max={50}>
                                    <span>🌲 Silent place</span>
                                </div>
                            </div>
                            <div className="filter insects half choices c1 tooltip" title="Not many insects or pests like spiders and cockroaches">
                                <div className="choice" data-filter-slug="without-insects" data-filter-slug-position="after" data-filter-target="insects" data-filter-type="exact-match" data-filter-value={0}>
                                    <span>🪳 No insects</span>
                                </div>
                            </div>
                            <div className="filter noise half choices c1 tooltip" title="Low levels of light pollution (less than 30 lux) based on satellite date">
                                <div className="choice" data-filter-target="light_pollution" data-filter-type="less-than" data-filter-max={30}>
                                    <span>💡 Low light pollution</span>
                                </div>
                            </div>
                            <div className="filter clean half choices c1 tooltip" title="Less than 6.9kg (EU average) of CO2 emissions per capita">
                                <div className="choice" data-filter-target="co2_emissions_per_capita" data-filter-type="less-than" data-filter-max="6.9">
                                    <span>🏭 Low CO2 emissions</span>
                                </div>
                            </div>
                            <div className="filter sustainable half choices c1 tooltip" title="Highly-rated in the Environmental Performance Index (EPI, 2020), meaning a country that scores well in sustainability and ecology">
                                <div className="choice" data-filter-slug="sustainable" data-filter-slug-position="before" data-filter-target="environmental_score" data-filter-type="greater-than" data-filter-min={3}>
                                    <span>🌳 Sustainable</span>
                                </div>
                            </div>
                            <div className="filter half choices c1 tooltip" title="Clean and drinkable tap water">
                                <div className="choice" data-filter-target="safe_tap_water" data-filter-type="exact-match" data-filter-value={1}>
                                    <span>🚰 Drinkable tap water</span>
                                </div>
                            </div>
                            <div className="filter half choices c1">
                                <div className="choice tooltip" title="Cities that have open supermarkets, shops, restaurants, cafes and/or bars to allow for 24-hour lifestyles" data-filter-target="24_hour" data-filter-type="exact-match" data-filter-value={1} data-filter-slug="24-hour" data-filter-slug-position="before">
                                    <span>🏪 24/7</span>
                                </div>
                            </div>
                            <div className="filter half choices c1">
                                <div className="choice tooltip" data-filter-slug="people-are-happy" title="Happiness as measured by World Happiness Report 2017" data-filter-target="happiness_score" data-filter-type="greater-than" data-filter-min="3.75">
                                    <span>🙂 Happy</span>
                                </div>
                            </div>
                            <div className="filter leisure half">
                                <div className="choices c1 tooltip" title="Quality of leisure and fun stuff to do">
                                    <div className="choice" data-filter-target="leisure_quality" data-filter-slug="fun" data-filter-slug-position="before" data-filter-type="greater-than" data-filter-min="3.75">
                                        <span>🙂 Fun</span>
                                    </div>
                                </div>
                            </div>
                            <div className="filter traffic_index half choices c1 tooltip" title="Traffic congestion measured by TomTom's Traffic Index">
                                <div className="choice" data-filter-target="traffic_index" data-filter-type="less-than" data-filter-max={25}>
                                    <span>🚘 Low traffic</span>
                                </div>
                            </div>
                            <div className="filter road_safety half choices c1 tooltip" title="Road traffic safety (based on traffic deaths by 100,000 people)">
                                <div className="choice" data-filter-target="road_traffic_score" data-filter-type="greater-than" data-filter-min={3}>
                                    <span>🚘 Safe traffic</span>
                                </div>
                            </div>
                            <div className="filter peace half choices c1 tooltip" title="Peace score based on U.N.'s Fragile States Index">
                                <div className="choice" data-filter-target="fragile_states_index" data-filter-type="less-than" data-filter-max={60}>
                                    <span>✌️ Peaceful</span>
                                </div>
                            </div>
                            <div className="filter half">
                                <div className="choices c1">
                                    <div className="choice tooltip" title="Places where less than 50% of population thinks religion is important" data-filter-target="religious" data-filter-type="less-than" data-filter-value={50}>
                                        <span>🙏 Not religious</span>
                                    </div>
                                </div>
                            </div>
                            <div className="filter half choices c1">
                                <div className="choice" data-filter-slug="without-tourists" data-filter-target="tags" data-filter-type="partial-match" data-filter-value="non-touristy">
                                    <span>📸 Few tourists</span>
                                </div>
                            </div>
                            <div className="filter half choices c1 tooltip">
                                <div className="choice tooltip" data-filter-slug="for-allergies" data-filter-slug-position="after" title="Low amount of grass pollen currently" data-filter-target="pollen_free" data-filter-type="exact-match" data-filter-value={1}>
                                    <span>🤧 Low pollen (no hayfever)</span>
                                </div>
                            </div>
                            <div className="filter half choices c1">
                                <div className="choice tooltip" title="Cities with no risk of Zika (CDC, 2017)" data-filter-slug="without-zika" data-filter-target="tags" data-filter-type="partial-match-not" data-filter-value="zika">
                                    <span>🦟 No Zika</span>
                                </div>
                            </div>
                            <div className="filter half choices c1">
                                <div className="choice tooltip" title="Cities with low < 1,000 Coronavirus cases per 1M inhabitants (1 in 1,000)" data-filter-slug="with-few-corona-cases" data-filter-target="corona_cases_per_million" data-filter-type="less-than" data-filter-max={1000}>
                                    <span>🦠 Few Corona cases</span>
                                </div>
                            </div>
                            <div className="filter half choices c1">
                                <div className="choice tooltip" title="Cities with low < 100 Coronavirus deaths per 1M inhabitants (1 in 10,000)" data-filter-slug="with-few-corona-deaths" data-filter-target="corona_deaths_per_million" data-filter-type="less-than" data-filter-max={100}>
                                    <span>🦠 Few Corona deaths</span>
                                </div>
                            </div>
                            <div className="filter half choices c1 tooltip" title="Homicide rate < 5 per 100,000 people">
                                <div className="choice" data-filter-target="homicide_rate" data-filter-type="less-than" data-filter-max={5}>
                                    <span>🔫 Low murder rate</span>
                                </div>
                            </div>
                            <div className="filter half choices c1 tooltip" title="< 10 guns per 100 people">
                                <div className="choice" data-filter-target="guns_per_capita" data-filter-type="less-than" data-filter-max={10}>
                                    <span>🔫 Few guns</span>
                                </div>
                            </div>
                        </div>
                        <div className="filter-group half">
                            <label className="filter-group-label">Dating + Social</label>
                            <div className="filter half choices c1">
                                <div className="choice" data-filter-slug="top-tinder" data-filter-slug-position="before" data-filter-target="tinder_top_city" data-filter-type="exact-match" data-filter-value={1}>
                                    <span>🍑 Top Tinder</span>
                                </div>
                            </div>
                            <div className="filter half choices c1">
                                <div className="choice" data-filter-slug="top-grindr" data-filter-slug-position="before" data-filter-target="grindr_top_city" data-filter-type="exact-match" data-filter-value={1}>
                                    <span>🌈 Top Grindr</span>
                                </div>
                            </div>
                            <div className="filter half choices c1">
                                <div className="choice tooltip" data-filter-target="gender_ratio_young_male" data-filter-type="greater-than" data-filter-min="105.1" title="More young adult men in country than the world average (CIA World Factbook, 2018)">
                                    <span>👱 Many young men</span>
                                </div>
                            </div>
                            <div className="filter half choices c1">
                                <div className="choice tooltip" data-filter-target="gender_ratio_young_female" data-filter-type="greater-than" data-filter-min="94.9" title="More young adult women in country than the world average (CIA World Factbook, 2018)">
                                    <span>👩 Many young women</span>
                                </div>
                            </div>
                            <div className="filter half choices c1">
                                <div className="choice tooltip" data-filter-target="gender_ratio_male" data-filter-type="greater-than" data-filter-min="105.1" title="More men than women in city, over all ages, than the world average (UN, 2018)">
                                    <span>👱 Many men</span>
                                </div>
                            </div>
                            <div className="filter half choices c1">
                                <div className="choice tooltip" data-filter-target="gender_ratio_female" data-filter-type="greater-than" data-filter-min="94.9" title="More women than men in city, over all ages, than the world average (UN, 2018)">
                                    <span>👩 Many women</span>
                                </div>
                            </div>
                            <div className="filter half choices c1">
                                <div className="choice tooltip" title="Most attractive men as chosen by superficial women blogs (inb4 MRAs) aka hot" data-filter-target="beautiful_men" data-filter-type="exact-match" data-filter-value={1}>
                                    <span>🤵 Beautiful men</span>
                                </div>
                            </div>
                            <div className="filter half choices c1">
                                <div className="choice tooltip" title="Most attractive women as chosen by superficial men blogs (inb4 SJWs) aka hot" data-filter-target="beautiful_women" data-filter-type="exact-match" data-filter-value={1}>
                                    <span>💃 Beautiful women</span>
                                </div>
                            </div>
                            <div className="filter half choices c1">
                                <div className="choice tooltip" title="Average male height of over 177cm / 5'10" data-filter-target="average_height_male" data-filter-type="greater-than" data-filter-min={177}>
                                    <span>🦁 Tall men</span>
                                </div>
                            </div>
                            <div className="filter half choices c1">
                                <div className="choice tooltip" title="Average female height of over 167cm / 5'6" data-filter-target="average_height_female" data-filter-type="greater-than" data-filter-min={167}>
                                    <span>🐯 Tall women</span>
                                </div>
                            </div>
                            <div className="filter half choices c1">
                                <div className="choice tooltip" title="Average male height of below 177cm / 5'10" data-filter-target="average_height_male" data-filter-type="less-than" data-filter-max={177}>
                                    <span>🐶 Short men</span>
                                </div>
                            </div>
                            <div className="filter half choices c1">
                                <div className="choice tooltip" title="Average female height of below 167cm / 5'6" data-filter-target="average_height_female" data-filter-type="less-than" data-filter-max={167}>
                                    <span>🐱 Short women</span>
                                </div>
                            </div>
                            <div className="filter half choices c1">
                                <div className="choice tooltip" data-filter-target="bmi_male" data-filter-type="between-range" data-filter-min="18.5" data-filter-max="27.5" title="Healthy male body mass index (BMI) below 27.5 (not overweight)">
                                    <span>🏃 Healthy men</span>
                                </div>
                            </div>
                            <div className="filter half choices c1">
                                <div className="choice tooltip" data-filter-target="bmi_female" data-filter-type="between-range" data-filter-min="18.5" data-filter-max="27.5" title="Healthy female body mass index (BMI) below 27.5 (not overweight)">
                                    <span>🏃‍♀️ Healthy women</span>
                                </div>
                            </div>
                            <div className="filter half choices c1">
                                <div className="choice tooltip" data-filter-target="overweight_rate" data-filter-type="less-than" data-filter-max={50} title="Less than 50% of people overweight (BMI>25)">
                                    <span>⚖️ Not overweight</span>
                                </div>
                            </div>
                            <div className="filter half choices c1">
                                <div className="choice tooltip" data-filter-target="obesity_rate" data-filter-type="less-than" data-filter-max={50} title="Less than 25% of people overweight (BMI>30)">
                                    <span>⚖️ Not obese</span>
                                </div>
                            </div>
                            <div className="filter friendliness half choices c1 tooltip" title="Friendliness to foreigners">
                                <div className="choice" data-text="friendly people" data-filter-target="friendliness_to_foreigners" data-filter-type="greater-than" data-filter-min="3.75">
                                    <span>🙂 Friendly</span>
                                </div>
                            </div>
                            <div className="filter easy_to_make_friends_score half choices c1 tooltip" title="Places where it's easy to make friends with locals according to international culture surveys">
                                <div className="choice" data-filter-slug="where-it-is-easy-to-make-friends" data-text="easy to make friends" data-filter-target="easy_to_make_friends_score" data-filter-type="greater-than" data-filter-min="2.9">
                                    <span>🤝 Easy to make friends</span>
                                </div>
                            </div>
                            <div className="filter half choices c1">
                                <div className="choice" title="Same-sex marriage is legally performed and recognized (nationwide or in some jurisdictions)" data-filter-target="legal_gay_marriage" data-filter-type="exact-match" data-filter-value={1}>
                                    <span>🌈 Legal gay marriage</span>
                                </div>
                            </div>
                            <div className="filter half choices c1">
                                <div className="choice tooltip" data-filter-slug="with-a-large-population" data-filter-slug-position="before" title="Over 10M people" data-filter-multiple-choice="true" data-filter-multiple-choice-type="or" data-filter-target="population" data-filter-type="greater-than" data-filter-min={10000000}>
                                    <span>🌇 Population &gt; 10M</span>
                                </div>
                            </div>
                            <div className="filter nightlife half choices c1 tooltip" title="Good nghtlife, clubs, festivals and culture">
                                <div className="choice" data-text="nightlife" data-filter-target="nightlife" data-filter-type="greater-than" data-filter-min={3}>
                                    <span>💃 Good nightlife</span>
                                </div>
                            </div>
                        </div>
                        <div className="filter-group half ">
                            <label className="filter-group-label">Geography</label>
                            <div className="filter choices multiple-choice c3">
                                <div className="choice tooltip" title="Altitude below 0m" data-filter-slug="below-sea-level" data-filter-slug-position="after" data-filter-multiple-choice="true" data-filter-multiple-choice-type="or" data-filter-target="altitude" data-filter-type="less-than" data-filter-max={0}>
                                    <span>🌊 Below sea level</span>
                                </div>
                                <div className="choice tooltip" title="Altitude below 300m (1,000ft)" data-filter-slug="low-altitude" data-filter-slug-position="before" data-filter-multiple-choice="true" data-filter-multiple-choice-type="or" data-filter-target="altitude" data-filter-type="less-than" data-filter-max={100}>
                                    <span>🌱 Low altitude</span>
                                </div>
                                <div className="choice tooltip" title="Altitude above 2,400m (8,000ft)" data-filter-slug="high-altitude" data-filter-slug-position="before" data-filter-multiple-choice="true" data-filter-multiple-choice-type="or" data-filter-target="altitude" data-filter-type="greater-than" data-filter-min={2400}>
                                    <span>⛰ High altitude</span>
                                </div>
                            </div>
                            <div className="filter half choices c1">
                                <div className="choice tooltip" title="Low risk of natural disasters like tsunamis, hurricanes and storms" data-filter-target="natural_disaster_risk" data-filter-type="less-than" data-filter-max={6}>
                                    <span>🌪 No natural disasters</span>
                                </div>
                            </div>
                            <div className="filter half choices c1">
                                <div className="choice" data-filter-target="fault_distance" data-filter-type="greater-than" data-filter-min={100}>
                                    <span>🌋 No earthquake risk</span>
                                </div>
                            </div>
                            <div className="filter half choices c1">
                                <div className="choice tooltip" title="Low risk of terror based on Global Terrorism Index" data-filter-target="global_terrorism_index" data-filter-type="less-than" data-filter-max={2}>
                                    <span>💣 Low terror threat</span>
                                </div>
                            </div>
                            <div className="filter half choices c1">
                                <div className="choice tooltip" title="No currently ongoing armed conflicts" data-filter-target="war" data-filter-type="exact-match" data-filter-value>
                                    <span>💥 No armed conflict</span>
                                </div>
                            </div>
                            <div className="filter half choices c1">
                                <div className="choice" data-filter-target="tags" data-filter-type="partial-match" data-filter-value="island">
                                    <span>🏝 Island</span>
                                </div>
                            </div>
                            <div className="filter half choices c1">
                                <div className="choice" data-filter-target="tags" data-filter-type="partial-match" data-filter-value="hiking">
                                    <span>🏔 Mountains</span>
                                </div>
                            </div>
                            <div className="filter recommended half choices c1">
                                <div className="choice tooltip" title="Has an airport" data-filter-slug="near-airport" data-filter-target="tags" data-filter-type="partial-match" data-filter-value="airport">
                                    <span>🛫 Near airport</span>
                                </div>
                            </div>
                            <div className="filter palm_trees half choices c1 tooltip" title="Places where palm trees grow">
                                <div className="choice" data-filter-target="climate_koppen_1st" data-filter-type="exact-match" data-filter-value="A">
                                    <span>🌴 Palm trees</span>
                                </div>
                            </div>
                            <div className="filter train half choices c1 tooltip" title="Places that are fun and safe to travel through by train">
                                <div className="choice" data-filter-slug="to-travel-by-train" data-filter-slug-position="after" data-filter-target="good_train_travel" data-filter-type="exact-match" data-filter-value={1}>
                                    <span>🚂 By train</span>
                                </div>
                            </div>
                        </div>
                        <div className="filter-group half">
                            <label className="filter-group-label">Entertainment</label>
                            <div className="filter half choices c1">
                                <div className="choice" data-filter-target="tags" data-filter-type="partial-match" data-filter-value="gambling">
                                    <span>🎲 Gambling</span>
                                </div>
                            </div>
                            <div className="filter half choices c1">
                                <div className="choice" data-filter-target="tags" data-filter-type="partial-match" data-filter-value="edm">
                                    <span>🎧 EDM music</span>
                                </div>
                            </div>
                            <div className="filter half choices c1">
                                <div className="choice" data-filter-target="nightlife" data-filter-type="greater-than" data-filter-min={3}>
                                    <span>💃 Good nightlife</span>
                                </div>
                            </div>
                            <div className="filter half choices c1">
                                <div className="choice" data-filter-target="adult_nightlife" data-filter-type="greater-than" data-filter-min={3}>
                                    <span>🌶 Adult nightlife</span>
                                </div>
                            </div>
                            <div className="filter recommended half choices c1">
                                <div className="choice" data-filter-target="tags" data-filter-type="partial-match" data-filter-value="spa">
                                    <span>💆 Spas</span>
                                </div>
                            </div>
                            <div className="filter half choices c1">
                                <div className="choice" data-filter-slug="near-parks" data-filter-slug-position="after" data-filter-target="tags" data-filter-type="partial-match" data-filter-value="parks">
                                    <span>🌳 Near parks</span>
                                </div>
                            </div>
                        </div>
                        <div className="filter-group half">
                            <label className="filter-group-label">Culture</label>
                            <div className="filter">
                                <div className="choices c2">
                                    <div className="choice tooltip" title="Median population age < 40" data-filter-target="median_age" data-filter-type="less-than" data-filter-max={40}>
                                        <span>👦 Young population</span>
                                    </div>
                                    <div className="choice tooltip" title="Median population age > 40" data-filter-target="median_age" data-filter-type="greater-than" data-filter-min="39.9">
                                        <span>👴 Aging population</span>
                                    </div>
                                </div>
                            </div>
                            <div className="filter">
                                <div className="choices single-choice c2">
                                    <div className="choice tooltip" title="Destinations that are Jewish friendly" data-filter-slug-position="before" data-filter-target="jewish_friendly" data-filter-type="exact-match" data-filter-value={1}>
                                        <span>🕍 Jewish friendly</span>
                                    </div>
                                    <div className="choice tooltip" title="Destinations that are not Jewish friendly" data-filter-slug-position="before" data-filter-target="jewish_friendly" data-filter-type="exact-match" data-filter-value={0}>
                                        <span>🕍 Non-Jewish friendly</span>
                                    </div>
                                </div>
                            </div>
                            <div className="filter">
                                <div className="choices single-choice c2">
                                    <div className="choice tooltip" title="Destinations that are Muslim friendly" data-filter-slug-position="before" data-filter-target="muslim_friendly" data-filter-type="exact-match" data-filter-value={1}>
                                        <span>🕌 Muslim friendly</span>
                                    </div>
                                    <div className="choice" title="Destinations that are not Muslim friendly" data-filter-slug-position="before" data-filter-target="muslim_friendly" data-filter-type="exact-match" data-filter-value={0}>
                                        <span>🕌 Non-Muslim friendly</span>
                                    </div>
                                </div>
                            </div>
                            <div className="filter">
                                <div className="choices single-choice c2">
                                    <div className="choice tooltip" title="Majority islamic country" data-filter-slug-position="before" data-filter-target="islamic" data-filter-type="exact-match" data-filter-value={1}>
                                        <span>🕌 Islamic</span>
                                    </div>
                                    <div className="choice" data-filter-slug-position="before" data-filter-target="islamic" data-filter-type="exact-match" data-filter-value={0}>
                                        <span>🕌 Non-islamic</span>
                                    </div>
                                </div>
                            </div>
                            <div className="filter">
                                <div className="choices multiple-choice c2">
                                    <div className="choice tooltip" title="No or low strong Antifa, Neo-Marxist, Cultural Marxist, Communist, SJW or extreme or radical left presence in country" data-filter-slug-position="after" data-filter-slug="without-antifa" data-filter-target="antifa" data-filter-type="exact-match" data-filter-value={0}>
                                        <span>🧑‍🎤 No radical left</span>
                                    </div>
                                    <div className="choice tooltip" title="No or low strong alt right, right wing populist, extreme right presence in country" data-filter-slug-position="after" data-filter-slug="without-alt-right" data-filter-target="alt_right" data-filter-type="exact-match" data-filter-value={0}>
                                        <span>👌 No alt right</span>
                                    </div>
                                </div>
                            </div>
                            <div className="filter half choices c1">
                                <div className="choice" data-filter-target="tags" data-filter-type="partial-match" data-filter-value="museum">
                                    <span>🖼 Museums</span>
                                </div>
                            </div>
                            <div className="filter half choices c1">
                                <div className="choice" data-filter-target="tags" data-filter-type="partial-match" data-filter-value="places of worship">
                                    <span>⛩ Temples / Churches</span>
                                </div>
                            </div>
                            <div className="filter half choices c1">
                                <div className="choice" data-filter-target="tags" data-filter-type="partial-match" data-filter-value="art">
                                    <span>🎨 Artistic</span>
                                </div>
                            </div>
                            <div className="filter half choices c1">
                                <div className="choice tooltip" title="Places with great historical significance" data-filter-target="tags" data-filter-type="partial-match" data-filter-value="history">
                                    <span>📜 Historical</span>
                                </div>
                            </div>
                            <div className="filter half choices c1">
                                <div className="choice tooltip" title="Places with great cultural significance" data-filter-target="tags" data-filter-type="partial-match" data-filter-value="culture">
                                    <span>🖼 Cultural</span>
                                </div>
                            </div>
                            <div className="filter half choices c1 tooltip" title="High walkability rated by WalkScore.com© (this data is rough so don't trust it too much yet)">
                                <div className="choice" data-filter-target="walkScore" data-filter-slug="walkable" data-filter-slug-position="before" data-filter-type="greater-than" data-filter-min={90}>
                                    <span>🚶 Walkable</span>
                                </div>
                            </div>
                            <div className="filter half choices ex_colony c1 tooltip" title="Formerly a colony">
                                <div className="choice" data-filter-target="ex_colony" data-filter-slug="formerly-colonized" data-filter-slug-position="before" data-filter-type="exact-match" data-filter-value={1}>
                                    <span>⛵ Ex-colony</span>
                                </div>
                            </div>
                            <div className="filter half choices ex_colony c1 tooltip" title="Formerly a colony (and returned to native population)">
                                <div className="choice" data-filter-target="ex_colony_returned_to_natives" data-filter-slug="formerly-colonized-now-native" data-filter-slug-position="before" data-filter-type="exact-match" data-filter-value={1}>
                                    <span>⛵ Ex-colony (native)</span>
                                </div>
                            </div>
                            <div className="filter half choices ex_colony c1 tooltip" title="Formerly a colony (and became independent with native population as a minority">
                                <div className="choice" data-filter-target="ex_colony_non_native_independent" data-filter-slug="formerly-colonized-now-non-native" data-filter-slug-position="before" data-filter-type="exact-match" data-filter-value={1}>
                                    <span>⛵ Ex-colony (non native)</span>
                                </div>
                            </div>
                            <div className="filter half choices not_ex_colony c1 tooltip" title="Never been colonized">
                                <div className="choice" data-filter-target="ex_colony" data-filter-slug="never-colonized" data-filter-slug-position="before" data-filter-type="exact-match" data-filter-value={0}>
                                    <span>⛵ Never colonized</span>
                                </div>
                            </div>
                        </div>
                        <div className="filter-group half">
                            <label className="filter-group-label">Work</label>
                            <div className="filter secular half">
                                <div className="choices c1">
                                    <div className="choice tooltip" data-text="places to work" data-filter-target="places_to_work_score" data-filter-type="greater-than" data-filter-min={4} title="High density of places to work (like coworking or coffee shops)">
                                        ⌨️ Places to work
                                    </div>
                                </div>
                            </div>
                            <div className="filter half choices c1">
                                <div className="choice tooltip" title="Annual venture capital investments totaling over $10,000,000/year" data-filter-target="venture_capital_per_year_in_usd" data-filter-type="greater-than" data-filter-min={10000000}>
                                    <span>💰 Startups</span>
                                </div>
                            </div>
                            <div className="filter half choices c1">
                                <div className="choice tooltip" title="Less than 30% of GDP in tax income" data-filter-target="tax_to_gdp_ratio" data-filter-type="less-than" data-filter-max={30}>
                                    <span>💸 Low tax</span>
                                </div>
                            </div>
                            <div className="filter half choices c1">
                                <div className="choice" data-filter-target="has_apple_store" data-filter-type="exact-match" data-filter-value={1}>
                                    <span>🍏 Apple Store</span>
                                </div>
                            </div>
                            <div className="filter half choices c1">
                                <div className="choice" data-filter-target="has_uber" data-filter-type="partial-match" data-filter-value="x">
                                    <span>🚕 Has Uber</span>
                                </div>
                            </div>
                            <div className="filter half">
                                <div className="choices c1">
                                    <div className="choice" data-filter-target="wifi_availability" data-filter-type="greater-than" data-filter-min="3.75">
                                        <span>📡 Free WiFi</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="filter-group half">
                            <label className="filter-group-label">Character</label>
                            <div className="filter half choices c1">
                                <div className="choice tooltip" title="Predominantly a hipster city (based on Hoodmaps™ data)" data-filter-slug="with-a-hipster-neighborhood" data-filter-slug-position="after" data-filter-target="hoodmaps_hipsters" data-filter-type="greater-than" data-filter-min="0.1">
                                    <span>🎅 Hipster neighborhood</span>
                                </div>
                            </div>
                            <div className="filter half choices c1">
                                <div className="choice tooltip" title="Predominantly a tourist city (based on Hoodmaps™ data)" data-filter-slug="with-a-tourist-neighborhood" data-filter-slug-position="after" data-filter-target="hoodmaps_tourists" data-filter-type="greater-than" data-filter-min="0.1">
                                    <span>📸 Tourist neighborhood</span>
                                </div>
                            </div>
                            <div className="filter half choices c1">
                                <div className="choice tooltip" title="Predominantly a university city (based on Hoodmaps™ data)" data-filter-slug="with-a-university-neighborhood" data-filter-slug-position="after" data-filter-target="hoodmaps_uni" data-filter-type="greater-than" data-filter-min="0.1">
                                    <span>🎓 University neighborhood</span>
                                </div>
                            </div>
                            <div className="filter half choices c1">
                                <div className="choice tooltip" title="Predominantly a rich people city (based on Hoodmaps™ data)" data-filter-slug="with-a-rich-neighborhood" data-filter-slug-position="after" data-filter-target="hoodmaps_rich" data-filter-type="greater-than" data-filter-min="0.1">
                                    <span>🤑 Rich neighborhood</span>
                                </div>
                            </div>
                            <div className="filter half choices c1">
                                <div className="choice tooltip" title="Predominantly a city for business (based on Hoodmaps™ data)" data-filter-slug-position="after" data-filter-slug="with-a-business-district" data-filter-target="hoodmaps_suits" data-filter-type="greater-than" data-filter-min="0.1">
                                    <span>👔 Business district</span>
                                </div>
                            </div>
                            <div className="filter half choices c1">
                                <div className="choice tooltip" title="Predominantly a city for suburban residentials (based on Hoodmaps™ data)" data-filter-slug="for-normies" data-filter-target="hoodmaps_normies" data-filter-type="greater-than" data-filter-min="0.3">
                                    <span>🏡 Normies neighborhood</span>
                                </div>
                            </div>
                        </div>
                        <div className="filter-group half">
                            <label className="filter-group-label">Cultural Enclaves</label>
                            <div className="filter half choices c1">
                                <div className="choice tooltip" title="Has a Chinese community" data-filter-slug="with-a-chinatown" data-filter-target="cultural_enclaves" data-filter-type="partial-match" data-filter-value="china">
                                    <span>🇨🇳 Chinatown</span>
                                </div>
                            </div>
                            <div className="filter half choices c1">
                                <div className="choice tooltip" title="Has a Japanese community" data-filter-slug="with-a-japantown" data-filter-target="cultural_enclaves" data-filter-type="partial-match" data-filter-value="japan">
                                    <span>🇯🇵 Japantown</span>
                                </div>
                            </div>
                            <div className="filter half choices c1">
                                <div className="choice tooltip" title="Has a Korean community" data-filter-slug="with-a-koreatown" data-filter-target="cultural_enclaves" data-filter-type="partial-match" data-filter-value="korea">
                                    <span>🇰🇷 Koreatown</span>
                                </div>
                            </div>
                            <div className="filter half choices c1">
                                <div className="choice tooltip" title="Has a Vietnamese community" data-filter-slug="with-a-little-saigon" data-filter-target="cultural_enclaves" data-filter-type="partial-match" data-filter-value="vietnam">
                                    <span>🇻🇳 Little Saigon</span>
                                </div>
                            </div>
                            <div className="filter half choices c1">
                                <div className="choice tooltip" title="Has an Indian community" data-filter-slug="with-a-little-india" data-filter-target="cultural_enclaves" data-filter-type="partial-match" data-filter-value="india">
                                    <span>🇮🇳 Little India</span>
                                </div>
                            </div>
                            <div className="filter half choices c1">
                                <div className="choice tooltip" title="Has a Russian community" data-filter-slug="with-a-little-russia" data-filter-target="cultural_enclaves" data-filter-type="partial-match" data-filter-value="russia">
                                    <span>🇷🇺 Little Russia</span>
                                </div>
                            </div>
                            <div className="filter half choices c1">
                                <div className="choice tooltip" title="Has an Arabic community" data-filter-slug="with-a-little-arabia" data-filter-target="cultural_enclaves" data-filter-type="partial-match" data-filter-value="arab">
                                    <span>🕌 Little Arabia</span>
                                </div>
                            </div>
                            <div className="filter half choices c1">
                                <div className="choice tooltip" title="Has a Turkish community" data-filter-slug="with-a-little-istanbul" data-filter-target="cultural_enclaves" data-filter-type="partial-match" data-filter-value="turkey">
                                    <span>🇹🇷 Little Istanbul</span>
                                </div>
                            </div>
                            <div className="filter half choices c1">
                                <div className="choice tooltip" title="Has a Mexican community" data-filter-slug="with-a-little-mexico" data-filter-target="cultural_enclaves" data-filter-type="partial-match" data-filter-value="mexico">
                                    <span>🇲🇽 Little Mexico</span>
                                </div>
                            </div>
                            <div className="filter half choices c1">
                                <div className="choice tooltip" title="Has a Filipino community" data-filter-slug="with-a-little-manila" data-filter-target="cultural_enclaves" data-filter-type="partial-match" data-filter-value="philippines">
                                    <span>🇵🇭 Little Manila</span>
                                </div>
                            </div>
                            <div className="filter half choices c1">
                                <div className="choice tooltip" title="Has a French community" data-filter-slug="with-a-little-paris" data-filter-target="cultural_enclaves" data-filter-type="partial-match" data-filter-value="france">
                                    <span>🇫🇷 Little Paris</span>
                                </div>
                            </div>
                            <div className="filter half choices c1">
                                <div className="choice tooltip" title="Has an Italian community" data-filter-slug="with-a-little-italy" data-filter-target="cultural_enclaves" data-filter-type="partial-match" data-filter-value="italy">
                                    <span>🇮🇹 Little Italy</span>
                                </div>
                            </div>
                            <div className="filter half choices c1">
                                <div className="choice tooltip" title="Has a Cuban community" data-filter-slug="with-a-little-havana" data-filter-target="cultural_enclaves" data-filter-type="partial-match" data-filter-value="cuba">
                                    <span>🇨🇺 Little Havana</span>
                                </div>
                            </div>
                            <div className="filter half choices c1">
                                <div className="choice tooltip" title="Has a U.S. Army base" data-filter-slug="with-a-us-army-base" data-filter-target="cultural_enclaves" data-filter-type="partial-match" data-filter-value="us army">
                                    <span>🇺🇸 US Army</span>
                                </div>
                            </div>
                        </div>
                        <div className="filter-group half">
                            <label className="filter-group-label">Sports</label>
                            <div className="filter recommended half choices c1">
                                <div className="choice" data-filter-target="tags" data-filter-type="partial-match" data-filter-value="golf">
                                    <span>⛳️ Golf</span>
                                </div>
                            </div>
                            <div className="filter half choices c1">
                                <div className="choice" data-filter-target="tags" data-filter-type="partial-match" data-filter-value="surfing">
                                    <span>🏄 Surfing</span>
                                </div>
                            </div>
                            <div className="filter half choices c1">
                                <div className="choice" data-filter-target="tags" data-filter-type="partial-match" data-filter-value="diving">
                                    <span>🐟 Diving</span>
                                </div>
                            </div>
                            <div className="filter half choices c1">
                                <div className="choice" data-filter-target="tags" data-filter-type="partial-match" data-filter-value="snow">
                                    <span>⛄️ Skiing</span>
                                </div>
                            </div>
                            <div className="filter half choices c1">
                                <div className="choice" data-filter-target="tags" data-filter-type="partial-match" data-filter-value="outdoors">
                                    <span>🏞 Outdoors</span>
                                </div>
                            </div>
                            <div className="filter half choices c1">
                                <div className="choice" data-filter-target="tags" data-filter-type="partial-match" data-filter-value="hiking">
                                    <span>🏞 Hiking</span>
                                </div>
                            </div>
                            <div className="filter half choices c1">
                                <div className="choice" data-filter-target="crossfit" data-filter-type="exact-match" data-filter-value="yes">
                                    <span>🏋️‍♀️ Crossfit</span>
                                </div>
                            </div>
                        </div>
                        <div className="filter-group half">
                            <label className="filter-group-label">Food</label>
                            <div className="filter half choices c1">
                                <div className="choice" data-filter-target="tags" data-filter-type="partial-match" data-filter-value="food">
                                    <span>🍕 Good food</span>
                                </div>
                            </div>
                            <div className="filter half choices c1">
                                <div className="choice" data-filter-target="tags" data-filter-type="partial-match" data-filter-value="street food">
                                    <span>🍜 Street food</span>
                                </div>
                            </div>
                            <div className="filter half choices c1">
                                <div className="choice tooltip" title="Broad availability of vegan food places" data-filter-target="tags" data-filter-type="partial-match" data-filter-value="vegan">
                                    <span>🥑 Vegan food</span>
                                </div>
                            </div>
                        </div>
                        <div className="filter-group half">
                            <label className="filter-group-label">Cultural traits</label>
                            <div className="filter">
                                <div className="choices single-choice c2">
                                    <div className="choice tooltip" title="Feminine (according to Hofstede's Cultural Dimensions, 2012)" data-filter-slug="with-a-feminine-culture" data-filter-slug-position="after" data-filter-target="hofstede_masculinity" data-filter-type="less-than" data-filter-max={50}>
                                        <span>💅 Feminine culture</span>
                                    </div>
                                    <div className="choice tooltip" title="Masculine (according to Hofstede's Cultural Dimensions, 2012)" data-filter-slug="with-a-masculine-culture" data-filter-slug-position="after" data-filter-target="hofstede_masculinity" data-filter-type="greater-than" data-filter-min={50}>
                                        <span>💪 Masculine culture</span>
                                    </div>
                                </div>
                            </div>
                            <div className="filter">
                                <div className="choices single-choice c2">
                                    <div className="choice tooltip" title="Equal (according to Hofstede's Cultural Dimensions, 2012)" data-filter-slug="with-an-equality-culture" data-filter-slug-position="after" data-filter-target="hofstede_hierarchical" data-filter-type="less-than" data-filter-max={50}>
                                        <span>🙏 Equality culture</span>
                                    </div>
                                    <div className="choice tooltip" title="Hierarchical (according to Hofstede's Cultural Dimensions, 2012)" data-filter-slug="with-a-hierarchical-culture" data-filter-slug-position="after" data-filter-target="hofstede_hierarchical" data-filter-type="greater-than" data-filter-min={50}>
                                        <span>🏢 Hierarchical culture</span>
                                    </div>
                                </div>
                            </div>
                            <div className="filter">
                                <div className="choices single-choice c2">
                                    <div className="choice tooltip" title="Individualist (according to Hofstede's Cultural Dimensions, 2012)" data-filter-slug="with-an-individualist-culture" data-filter-slug-position="after" data-filter-target="hofstede_individualism" data-filter-type="greater-than" data-filter-min={50}>
                                        <span>👦 Individualist culture</span>
                                    </div>
                                    <div className="choice tooltip" title="Collectivist (according to Hofstede's Cultural Dimensions, 2012)" data-filter-slug="with-a-collectivist-culture" data-filter-slug-position="after" data-filter-target="hofstede_individualism" data-filter-type="less-than" data-filter-max={50}>
                                        <span>🤝 Collectivist culture</span>
                                    </div>
                                </div>
                            </div>
                            <div className="filter">
                                <div className="choices single-choice c2">
                                    <div className="choice tooltip" title="Low uncertainty avoidance (according to Hofstede's Cultural Dimensions, 2012)" data-filter-slug="with-a-risk-seeking-culture" data-filter-slug-position="after" data-filter-target="hofstede_uncertainty_avoidance" data-filter-type="less-than" data-filter-max={50}>
                                        <span>😎 Risk seeking culture</span>
                                    </div>
                                    <div className="choice tooltip" title="High uncertainty avoidance (according to Hofstede's Cultural Dimensions, 2012)" data-filter-slug="with-a-risk-avoiding-culture" data-filter-slug-position="after" data-filter-target="hofstede_uncertainty_avoidance" data-filter-type="greater-than" data-filter-min={50}>
                                        <span>😳 Risk avoiding culture</span>
                                    </div>
                                </div>
                            </div>
                            <div className="filter">
                                <div className="choices single-choice c2">
                                    <div className="choice tooltip" title="Low long term orientation (according to Hofstede's Cultural Dimensions, 2012)" data-filter-slug="with-a-short-term-culture" data-filter-slug-position="after" data-filter-target="hofstede_long_term_orientation" data-filter-type="less-than" data-filter-max={50}>
                                        <span>💥 Short term culture</span>
                                    </div>
                                    <div className="choice tooltip" title="High long term orientation (according to Hofstede's Cultural Dimensions, 2012)" data-filter-slug="with-a-long-term-culture" data-filter-slug-position="after" data-filter-target="hofstede_long_term_orientation" data-filter-type="greater-than" data-filter-min={50}>
                                        <span>📈 Long term culture</span>
                                    </div>
                                </div>
                            </div>
                            <div className="filter">
                                <div className="choices single-choice c2">
                                    <div className="choice tooltip" title="High indulgence (according to Hofstede's Cultural Dimensions, 2012)" data-filter-slug="with-a-loose-culture" data-filter-slug-position="after" data-filter-target="hofstede_indulgence" data-filter-type="greater-than" data-filter-min={50}>
                                        <span>💃 Loose culture</span>
                                    </div>
                                    <div className="choice tooltip" title="Low indulgence (according to Hofstede's Cultural Dimensions, 2012)" data-filter-slug="with-a-strict-culture" data-filter-slug-position="after" data-filter-target="hofstede_indulgence" data-filter-type="less-than" data-filter-max={50}>
                                        <span>🏡 Strict culture</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="filter-group half">
                            <label className="filter-group-label">Timezone</label>
                            <div className="filter timezone full-width hide-on-mobile">
                                <div className="choices multiple-choice multiple-choice-or">
                                    <div className="choice tooltip" data-add-active-filter-text="⏰ Timezone UTC" data-filter-slug="in-utc-minus-13" data-filter-multiple-choice="true" data-filter-multiple-choice-type="or" data-filter-target="timezone_gmt_offset_in_hours" data-filter-type="exact-match" data-filter-value={-13} title="Timezone ">
                                        <span>-13</span>
                                    </div>
                                    <div className="choice tooltip" data-add-active-filter-text="⏰ Timezone UTC" data-filter-slug="in-utc-minus-12" data-filter-multiple-choice="true" data-filter-multiple-choice-type="or" data-filter-target="timezone_gmt_offset_in_hours" data-filter-type="exact-match" data-filter-value={-12} title="Timezone ">
                                        <span>-12</span>
                                    </div>
                                    <div className="choice tooltip" data-add-active-filter-text="⏰ Timezone UTC" data-filter-slug="in-utc-minus-11" data-filter-multiple-choice="true" data-filter-multiple-choice-type="or" data-filter-target="timezone_gmt_offset_in_hours" data-filter-type="exact-match" data-filter-value={-11} title="Timezone ">
                                        <span>-11</span>
                                    </div>
                                    <div className="choice tooltip" data-add-active-filter-text="⏰ Timezone UTC" data-filter-slug="in-utc-minus-10" data-filter-multiple-choice="true" data-filter-multiple-choice-type="or" data-filter-target="timezone_gmt_offset_in_hours" data-filter-type="exact-match" data-filter-value={-10} title="Timezone Honolulu, United States">
                                        <span>-10</span>
                                    </div>
                                    <div className="choice tooltip" data-add-active-filter-text="⏰ Timezone UTC" data-filter-slug="in-utc-minus-9" data-filter-multiple-choice="true" data-filter-multiple-choice-type="or" data-filter-target="timezone_gmt_offset_in_hours" data-filter-type="exact-match" data-filter-value={-9} title="Timezone ">
                                        <span>-9</span>
                                    </div>
                                    <div className="choice tooltip" data-add-active-filter-text="⏰ Timezone UTC" data-filter-slug="in-utc-minus-8" data-filter-multiple-choice="true" data-filter-multiple-choice-type="or" data-filter-target="timezone_gmt_offset_in_hours" data-filter-type="exact-match" data-filter-value={-8} title="Timezone Anchorage, United States">
                                        <span>-8</span>
                                    </div>
                                    <div className="choice tooltip" data-add-active-filter-text="⏰ Timezone UTC" data-filter-slug="in-utc-minus-7" data-filter-multiple-choice="true" data-filter-multiple-choice-type="or" data-filter-target="timezone_gmt_offset_in_hours" data-filter-type="exact-match" data-filter-value={-7} title="Timezone Vancouver, Canada">
                                        <span>-7</span>
                                    </div>
                                    <div className="choice tooltip" data-add-active-filter-text="⏰ Timezone UTC" data-filter-slug="in-utc-minus-6" data-filter-multiple-choice="true" data-filter-multiple-choice-type="or" data-filter-target="timezone_gmt_offset_in_hours" data-filter-type="exact-match" data-filter-value={-6} title="Timezone Mexico City, Mexico">
                                        <span>-6</span>
                                    </div>
                                    <div className="choice tooltip" data-add-active-filter-text="⏰ Timezone UTC" data-filter-slug="in-utc-minus-5" data-filter-multiple-choice="true" data-filter-multiple-choice-type="or" data-filter-target="timezone_gmt_offset_in_hours" data-filter-type="exact-match" data-filter-value={-5} title="Timezone Austin, United States">
                                        <span>-5</span>
                                    </div>
                                    <div className="choice tooltip" data-add-active-filter-text="⏰ Timezone UTC" data-filter-slug="in-utc-minus-4" data-filter-multiple-choice="true" data-filter-multiple-choice-type="or" data-filter-target="timezone_gmt_offset_in_hours" data-filter-type="exact-match" data-filter-value={-4} title="Timezone Miami, United States">
                                        <span>-4</span>
                                    </div>
                                    <div className="choice tooltip" data-add-active-filter-text="⏰ Timezone UTC" data-filter-slug="in-utc-minus-3" data-filter-multiple-choice="true" data-filter-multiple-choice-type="or" data-filter-target="timezone_gmt_offset_in_hours" data-filter-type="exact-match" data-filter-value={-3} title="Timezone São Paulo, Brazil">
                                        <span>-3</span>
                                    </div>
                                    <div className="choice tooltip" data-add-active-filter-text="⏰ Timezone UTC" data-filter-slug="in-utc-minus-2" data-filter-multiple-choice="true" data-filter-multiple-choice-type="or" data-filter-target="timezone_gmt_offset_in_hours" data-filter-type="exact-match" data-filter-value={-2} title="Timezone King Edward Point, South Georgia and the South Sandwich Islands">
                                        <span>-2</span>
                                    </div>
                                    <div className="choice tooltip" data-add-active-filter-text="⏰ Timezone UTC" data-filter-slug="in-utc-minus-1" data-filter-multiple-choice="true" data-filter-multiple-choice-type="or" data-filter-target="timezone_gmt_offset_in_hours" data-filter-type="exact-match" data-filter-value={-1} title="Timezone Ponta Delgada, Portugal">
                                        <span>-1</span>
                                    </div>
                                    <div className="choice utc-0 tooltip" data-add-active-filter-text="⏰ Timezone " data-filter-multiple-choice="true" data-filter-multiple-choice-type="or" data-filter-target="timezone_gmt_offset_in_hours" data-filter-slug="n-utc-0" data-filter-type="exact-match" data-filter-value={0} title="Timezone Lisbon, Portugal">
                                        <span>UTC</span>
                                    </div>
                                    <div className="choice tooltip" data-add-active-filter-text="⏰ Timezone UTC" data-filter-slug="in-utc-plus-1" data-filter-multiple-choice="true" data-filter-multiple-choice-type="or" data-filter-target="timezone_gmt_offset_in_hours" data-filter-type="exact-match" data-filter-value={1} title="Timezone Prague, Czechia">
                                        <span>+1</span>
                                    </div>
                                    <div className="choice tooltip" data-add-active-filter-text="⏰ Timezone UTC" data-filter-slug="in-utc-plus-2" data-filter-multiple-choice="true" data-filter-multiple-choice-type="or" data-filter-target="timezone_gmt_offset_in_hours" data-filter-type="exact-match" data-filter-value={2} title="Timezone Cape Town, South Africa">
                                        <span>+2</span>
                                    </div>
                                    <div className="choice tooltip" data-add-active-filter-text="⏰ Timezone UTC" data-filter-slug="in-utc-plus-3" data-filter-multiple-choice="true" data-filter-multiple-choice-type="or" data-filter-target="timezone_gmt_offset_in_hours" data-filter-type="exact-match" data-filter-value={3} title="Timezone Istanbul, Turkey">
                                        <span>+3</span>
                                    </div>
                                    <div className="choice tooltip" data-add-active-filter-text="⏰ Timezone UTC" data-filter-slug="in-utc-plus-4" data-filter-multiple-choice="true" data-filter-multiple-choice-type="or" data-filter-target="timezone_gmt_offset_in_hours" data-filter-type="exact-match" data-filter-value={4} title="Timezone Tbilisi, Georgia">
                                        <span>+4</span>
                                    </div>
                                    <div className="choice tooltip" data-add-active-filter-text="⏰ Timezone UTC" data-filter-slug="in-utc-plus-5" data-filter-multiple-choice="true" data-filter-multiple-choice-type="or" data-filter-target="timezone_gmt_offset_in_hours" data-filter-type="exact-match" data-filter-value={5} title="Timezone Bengaluru, India">
                                        <span>+5</span>
                                    </div>
                                    <div className="choice tooltip" data-add-active-filter-text="⏰ Timezone UTC" data-filter-slug="in-utc-plus-6" data-filter-multiple-choice="true" data-filter-multiple-choice-type="or" data-filter-target="timezone_gmt_offset_in_hours" data-filter-type="exact-match" data-filter-value={6} title="Timezone Yangon, Myanmar">
                                        <span>+6</span>
                                    </div>
                                    <div className="choice tooltip" data-add-active-filter-text="⏰ Timezone UTC" data-filter-slug="in-utc-plus-7" data-filter-multiple-choice="true" data-filter-multiple-choice-type="or" data-filter-target="timezone_gmt_offset_in_hours" data-filter-type="exact-match" data-filter-value={7} title="Timezone Bangkok, Thailand">
                                        <span>+7</span>
                                    </div>
                                    <div className="choice tooltip" data-add-active-filter-text="⏰ Timezone UTC" data-filter-slug="in-utc-plus-8" data-filter-multiple-choice="true" data-filter-multiple-choice-type="or" data-filter-target="timezone_gmt_offset_in_hours" data-filter-type="exact-match" data-filter-value={8} title="Timezone Canggu, Indonesia">
                                        <span>+8</span>
                                    </div>
                                    <div className="choice tooltip" data-add-active-filter-text="⏰ Timezone UTC" data-filter-slug="in-utc-plus-9" data-filter-multiple-choice="true" data-filter-multiple-choice-type="or" data-filter-target="timezone_gmt_offset_in_hours" data-filter-type="exact-match" data-filter-value={9} title="Timezone Seoul, South Korea">
                                        <span>+9</span>
                                    </div>
                                    <div className="choice tooltip" data-add-active-filter-text="⏰ Timezone UTC" data-filter-slug="in-utc-plus-10" data-filter-multiple-choice="true" data-filter-multiple-choice-type="or" data-filter-target="timezone_gmt_offset_in_hours" data-filter-type="exact-match" data-filter-value={10} title="Timezone Cairns, Australia">
                                        <span>+10</span>
                                    </div>
                                    <div className="choice tooltip" data-add-active-filter-text="⏰ Timezone UTC" data-filter-slug="in-utc-plus-11" data-filter-multiple-choice="true" data-filter-multiple-choice-type="or" data-filter-target="timezone_gmt_offset_in_hours" data-filter-type="exact-match" data-filter-value={11} title="Timezone Sydney, Australia">
                                        <span>+11</span>
                                    </div>
                                    <div className="choice tooltip" data-add-active-filter-text="⏰ Timezone UTC" data-filter-slug="in-utc-plus-12" data-filter-multiple-choice="true" data-filter-multiple-choice-type="or" data-filter-target="timezone_gmt_offset_in_hours" data-filter-type="exact-match" data-filter-value={12} title="Timezone Suva, Fiji">
                                        <span>+12</span>
                                    </div>
                                    <div className="choice tooltip" data-add-active-filter-text="⏰ Timezone UTC" data-filter-slug="in-utc-plus-13" data-filter-multiple-choice="true" data-filter-multiple-choice-type="or" data-filter-target="timezone_gmt_offset_in_hours" data-filter-type="exact-match" data-filter-value={13} title="Timezone Wellington, New Zealand">
                                        <span>+13</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="filter-group half">
                            <label className="filter-group-label">Language</label>
                            <div className="filter english_speaking half choices c1">
                                <div className="choice" data-filter-target="english_speaking" data-filter-slug="english-speaking" data-filter-slug-position="before" data-filter-type="greater-than" data-filter-value="2.9">
                                    <span>
                                        <img width={16} height={16} alt="English speaking" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/uk.png" />{'{'}" "{'}'}
                                        English speaking
                                    </span>
                                </div>
                            </div>
                            <div className="filter half choices c1">
                                <div className="choice" data-filter-target="language" data-filter-slug="spanish-speaking" data-filter-slug-position="before" data-filter-type="partial-match" data-filter-value="spanish">
                                    <span>
                                        <img width={16} height={16} alt="Spanish speaking" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/es.png" />{'{'}" "{'}'}
                                        Spanish speaking
                                    </span>
                                </div>
                            </div>
                            <div className="filter half choices c1">
                                <div className="choice" data-filter-target="language" data-filter-slug="french-speaking" data-filter-slug-position="before" data-filter-type="partial-match" data-filter-value="french">
                                    <span>
                                        <img width={16} height={16} alt="French speaking" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/fr.png" />{'{'}" "{'}'}
                                        French speaking
                                    </span>
                                </div>
                            </div>
                            <div className="filter half choices c1">
                                <div className="choice" data-filter-target="language" data-filter-slug="with-arabic-speaking" data-filter-slug-position="before" data-filter-type="partial-match" data-filter-value="arabic">
                                    <span>
                                        <img width={16} height={16} alt="Arabic speaking" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/sa.png" />{'{'}" "{'}'}
                                        Arabic speaking
                                    </span>
                                </div>
                            </div>
                            <div className="filter half choices c1">
                                <div className="choice" data-filter-target="language" data-filter-slug="hindi-speaking" data-filter-slug-position="before" data-filter-type="partial-match" data-filter-value="hindi">
                                    <span>
                                        <img width={16} height={16} alt="Hindi speaking" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/in.png" />{'{'}" "{'}'}
                                        Hindi speaking
                                    </span>
                                </div>
                            </div>
                            <div className="filter half choices c1">
                                <div className="choice" data-filter-target="language" data-filter-slug="chinese-speaking" data-filter-slug-position="before" data-filter-type="partial-match" data-filter-value="mandarin">
                                    <span>
                                        <img width={16} height={16} alt="Chinese speaking" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/cn.png" />{'{'}" "{'}'}
                                        Chinese speaking
                                    </span>
                                </div>
                            </div>
                            <div className="filter half choices c1">
                                <div className="choice" data-filter-target="language" data-filter-slug="russian-speaking" data-filter-slug-position="before" data-filter-type="partial-match" data-filter-value="russian">
                                    <span>
                                        <img width={16} height={16} alt="Russian speaking" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/ru.png" />{'{'}" "{'}'}
                                        Russian speaking
                                    </span>
                                </div>
                            </div>
                            <div className="filter half choices c1">
                                <div className="choice" data-filter-target="language" data-filter-slug="portuguese-speaking" data-filter-slug-position="before" data-filter-type="partial-match" data-filter-value="portuguese">
                                    <span>
                                        <img width={16} height={16} alt="Portuguese speaking" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/pt.png" />{'{'}" "{'}'}
                                        Portuguese speaking
                                    </span>
                                </div>
                            </div>
                            <div className="filter half choices c1">
                                <div className="choice" data-filter-target="language" data-filter-slug="dutch-speaking" data-filter-slug-position="before" data-filter-type="partial-match" data-filter-value="dutch">
                                    <span>
                                        <img width={16} height={16} alt="Dutch speaking" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/nl.png" />{'{'}" "{'}'}
                                        Dutch speaking
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="filter-group half">
                            <label className="filter-group-label">Misc</label>
                            <div className="filter half choices c1">
                                <div className="choice" data-filter-target="legal_bitcoin" data-filter-slug="where-bitcoin-is-legal" data-filter-type="exact-match" data-filter-value={1}>
                                    <span>🏵 Legal Bitcoin</span>
                                </div>
                            </div>
                            <div className="filter half choices c1">
                                <div className="choice" data-filter-slug="without-mosquitos" data-filter-target="tags" data-filter-type="partial-match" data-filter-value="few mosquitos">
                                    <span>🦟 No mosquitos</span>
                                </div>
                            </div>
                            <div className="filter half choices c1">
                                <div className="choice tooltip" title="Growing faster than 10% per year in tourist visitors (Euromonitor, 2020), aka upcoming, rising or booming" data-filter-slug="fast-growing" data-filter-slug-position="before" data-filter-target="tourist_visitors_2020_growth" data-filter-type="greater-than" data-filter-min={10}>
                                    <span>📈 Fast growing tourism</span>
                                </div>
                            </div>
                            <div className="filter half choices c1">
                                <div className="choice tooltip" title="Growing faster than 10% per year in Nomad List members in last 5 years on median, aka upcoming, rising or booming" data-filter-slug="which-are-fast-growing-in-last-5-years" data-filter-slug-position="after" data-filter-target="last_5_year_growth" data-filter-type="greater-than" data-filter-min={10}>
                                    <span>📈 Fast growing in trips (5Y)</span>
                                </div>
                            </div>
                            <div className="filter half choices c1">
                                <div className="choice tooltip" title="Growing faster than 10% per year in Nomad List members in last 2 years on median, aka upcoming, rising or booming" data-filter-slug="which-are-fast-growing-in-last-2-years" data-filter-slug-position="after" data-filter-target="last_2_year_growth" data-filter-type="greater-than" data-filter-min={10}>
                                    <span>📈 Fast growing in trips (2Y)</span>
                                </div>
                            </div>
                            <div className="filter half choices c1">
                                <div className="choice tooltip" title="Growing consistently with Nomad List members in last 5 years on median, aka upcoming, rising or booming" data-filter-slug="which-are-consistently-growing-in-last-5-years" data-filter-slug-position="after" data-filter-target="last_5_year_growth_positive" data-filter-type="exact-match" data-filter-value={1}>
                                    <span>📈 Consistently growing in trips (5Y)</span>
                                </div>
                            </div>
                            <div className="filter half choices c1">
                                <div className="choice tooltip" title="Growing faster than 5% per year in GDP (2018), aka upcoming, rising or booming" data-filter-slug="fast-growing-economy" data-filter-slug-position="before" data-filter-target="gdp_growth_rate" data-filter-type="greater-than" data-filter-min={5}>
                                    <span>📈 Fast growing economy</span>
                                </div>
                            </div>
                            <div className="filter half choices c1">
                                <div className="choice tooltip" title="Places where few nomads have been checked in on Nomad List in the past" data-filter-target="users_been_count" data-filter-type="less-than" data-filter-max={500} data-filter-slug="where-few-nomads-have-been" data-filter-slug-position="after">
                                    <span>🎒 Few nomads have been</span>
                                </div>
                            </div>
                        </div>
                        <div className="filter-group" style={{ display: 'none' }} this-is-hidden-because-it-is-used-for-url-country-pages-like="/united-states">
                            <label className="filter-group-label">Countries</label>
                            <div className="filter country">
                                <div className="choices multiple-choice multiple-choice-or c4">
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="portugal" data-filter-slug-position="after" data-filter-title="Best Places to Live in Portugal" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Portugal">
                                        <img width={16} height={16} alt="Portugal" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/pt.png" />{'{'}" "{'}'}
                                        Portugal
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="indonesia" data-filter-slug-position="after" data-filter-title="Best Places to Live in Indonesia" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Indonesia">
                                        <img width={16} height={16} alt="Indonesia" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/id.png" />{'{'}" "{'}'}
                                        Indonesia
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="brazil" data-filter-slug-position="after" data-filter-title="Best Places to Live in Brazil" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Brazil">
                                        <img width={16} height={16} alt="Brazil" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/br.png" />{'{'}" "{'}'}
                                        Brazil
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="czechia" data-filter-slug-position="after" data-filter-title="Best Places to Live in Czechia" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Czechia">
                                        <img width={16} height={16} alt="Czechia" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/cz.png" />{'{'}" "{'}'}
                                        Czechia
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="south-africa" data-filter-slug-position="after" data-filter-title="Best Places to Live in South Africa" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="South Africa">
                                        <img width={16} height={16} alt="South Africa" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/za.png" />{'{'}" "{'}'}
                                        South Africa
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="united-states" data-filter-slug-position="after" data-filter-title="Best Places to Live in United States" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="United States">
                                        <img width={16} height={16} alt="United States" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/us.png" />{'{'}" "{'}'}
                                        United States
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="thailand" data-filter-slug-position="after" data-filter-title="Best Places to Live in Thailand" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Thailand">
                                        <img width={16} height={16} alt="Thailand" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/th.png" />{'{'}" "{'}'}
                                        Thailand
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="germany" data-filter-slug-position="after" data-filter-title="Best Places to Live in Germany" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Germany">
                                        <img width={16} height={16} alt="Germany" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/de.png" />{'{'}" "{'}'}
                                        Germany
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="turkey" data-filter-slug-position="after" data-filter-title="Best Places to Live in Turkey" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Turkey">
                                        <img width={16} height={16} alt="Turkey" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/tr.png" />{'{'}" "{'}'}
                                        Turkey
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="singapore" data-filter-slug-position="after" data-filter-title="Best Places to Live in Singapore" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Singapore">
                                        <img width={16} height={16} alt="Singapore" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/sg.png" />{'{'}" "{'}'}
                                        Singapore
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="spain" data-filter-slug-position="after" data-filter-title="Best Places to Live in Spain" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Spain">
                                        <img width={16} height={16} alt="Spain" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/es.png" />
                                        Spain
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="canada" data-filter-slug-position="after" data-filter-title="Best Places to Live in Canada" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Canada">
                                        <img width={16} height={16} alt="Canada" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/ca.png" />{'{'}" "{'}'}
                                        Canada
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="mexico" data-filter-slug-position="after" data-filter-title="Best Places to Live in Mexico" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Mexico">
                                        <img width={16} height={16} alt="Mexico" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/mx.png" />{'{'}" "{'}'}
                                        Mexico
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="hungary" data-filter-slug-position="after" data-filter-title="Best Places to Live in Hungary" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Hungary">
                                        <img width={16} height={16} alt="Hungary" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/hu.png" />{'{'}" "{'}'}
                                        Hungary
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="serbia" data-filter-slug-position="after" data-filter-title="Best Places to Live in Serbia" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Serbia">
                                        <img width={16} height={16} alt="Serbia" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/rs.png" />{'{'}" "{'}'}
                                        Serbia
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="colombia" data-filter-slug-position="after" data-filter-title="Best Places to Live in Colombia" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Colombia">
                                        <img width={16} height={16} alt="Colombia" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/co.png" />{'{'}" "{'}'}
                                        Colombia
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="taiwan" data-filter-slug-position="after" data-filter-title="Best Places to Live in Taiwan" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Taiwan">
                                        <img width={16} height={16} alt="Taiwan" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/tw.png" />{'{'}" "{'}'}
                                        Taiwan
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="vietnam" data-filter-slug-position="after" data-filter-title="Best Places to Live in Vietnam" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Vietnam">
                                        <img width={16} height={16} alt="Vietnam" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/vn.png" />{'{'}" "{'}'}
                                        Vietnam
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="georgia" data-filter-slug-position="after" data-filter-title="Best Places to Live in Georgia" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Georgia">
                                        <img width={16} height={16} alt="Georgia" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/ge.png" />{'{'}" "{'}'}
                                        Georgia
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="greece" data-filter-slug-position="after" data-filter-title="Best Places to Live in Greece" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Greece">
                                        <img width={16} height={16} alt="Greece" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/gr.png" />{'{'}" "{'}'}
                                        Greece
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="argentina" data-filter-slug-position="after" data-filter-title="Best Places to Live in Argentina" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Argentina">
                                        <img width={16} height={16} alt="Argentina" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/ar.png" />{'{'}" "{'}'}
                                        Argentina
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="malaysia" data-filter-slug-position="after" data-filter-title="Best Places to Live in Malaysia" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Malaysia">
                                        <img width={16} height={16} alt="Malaysia" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/my.png" />{'{'}" "{'}'}
                                        Malaysia
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="bulgaria" data-filter-slug-position="after" data-filter-title="Best Places to Live in Bulgaria" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Bulgaria">
                                        <img width={16} height={16} alt="Bulgaria" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/bg.png" />{'{'}" "{'}'}
                                        Bulgaria
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="russia" data-filter-slug-position="after" data-filter-title="Best Places to Live in Russia" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Russia">
                                        <img width={16} height={16} alt="Russia" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/ru.png" />{'{'}" "{'}'}
                                        Russia
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="united-kingdom" data-filter-slug-position="after" data-filter-title="Best Places to Live in United Kingdom" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="United Kingdom">
                                        <img width={16} height={16} alt="United Kingdom" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/uk.png" />{'{'}" "{'}'}
                                        United Kingdom
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="peru" data-filter-slug-position="after" data-filter-title="Best Places to Live in Peru" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Peru">
                                        <img width={16} height={16} alt="Peru" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/pe.png" />
                                        Peru
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="poland" data-filter-slug-position="after" data-filter-title="Best Places to Live in Poland" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Poland">
                                        <img width={16} height={16} alt="Poland" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/pl.png" />{'{'}" "{'}'}
                                        Poland
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="romania" data-filter-slug-position="after" data-filter-title="Best Places to Live in Romania" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Romania">
                                        <img width={16} height={16} alt="Romania" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/ro.png" />{'{'}" "{'}'}
                                        Romania
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="australia" data-filter-slug-position="after" data-filter-title="Best Places to Live in Australia" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Australia">
                                        <img width={16} height={16} alt="Australia" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/au.png" />{'{'}" "{'}'}
                                        Australia
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="slovenia" data-filter-slug-position="after" data-filter-title="Best Places to Live in Slovenia" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Slovenia">
                                        <img width={16} height={16} alt="Slovenia" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/si.png" />{'{'}" "{'}'}
                                        Slovenia
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="lithuania" data-filter-slug-position="after" data-filter-title="Best Places to Live in Lithuania" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Lithuania">
                                        <img width={16} height={16} alt="Lithuania" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/lt.png" />{'{'}" "{'}'}
                                        Lithuania
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="india" data-filter-slug-position="after" data-filter-title="Best Places to Live in India" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="India">
                                        <img width={16} height={16} alt="India" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/in.png" />
                                        India
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="croatia" data-filter-slug-position="after" data-filter-title="Best Places to Live in Croatia" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Croatia">
                                        <img width={16} height={16} alt="Croatia" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/hr.png" />{'{'}" "{'}'}
                                        Croatia
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="sweden" data-filter-slug-position="after" data-filter-title="Best Places to Live in Sweden" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Sweden">
                                        <img width={16} height={16} alt="Sweden" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/se.png" />{'{'}" "{'}'}
                                        Sweden
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="south-korea" data-filter-slug-position="after" data-filter-title="Best Places to Live in South Korea" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="South Korea">
                                        <img width={16} height={16} alt="South Korea" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/kr.png" />{'{'}" "{'}'}
                                        South Korea
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="netherlands" data-filter-slug-position="after" data-filter-title="Best Places to Live in Netherlands" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Netherlands">
                                        <img width={16} height={16} alt="Netherlands" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/nl.png" />{'{'}" "{'}'}
                                        Netherlands
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="estonia" data-filter-slug-position="after" data-filter-title="Best Places to Live in Estonia" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Estonia">
                                        <img width={16} height={16} alt="Estonia" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/ee.png" />{'{'}" "{'}'}
                                        Estonia
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="new-zealand" data-filter-slug-position="after" data-filter-title="Best Places to Live in New Zealand" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="New Zealand">
                                        <img width={16} height={16} alt="New Zealand" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/nz.png" />{'{'}" "{'}'}
                                        New Zealand
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="philippines" data-filter-slug-position="after" data-filter-title="Best Places to Live in Philippines" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Philippines">
                                        <img width={16} height={16} alt="Philippines" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/ph.png" />{'{'}" "{'}'}
                                        Philippines
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="belarus" data-filter-slug-position="after" data-filter-title="Best Places to Live in Belarus" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Belarus">
                                        <img width={16} height={16} alt="Belarus" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/by.png" />{'{'}" "{'}'}
                                        Belarus
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="france" data-filter-slug-position="after" data-filter-title="Best Places to Live in France" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="France">
                                        <img width={16} height={16} alt="France" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/fr.png" />{'{'}" "{'}'}
                                        France
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="austria" data-filter-slug-position="after" data-filter-title="Best Places to Live in Austria" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Austria">
                                        <img width={16} height={16} alt="Austria" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/at.png" />{'{'}" "{'}'}
                                        Austria
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="latvia" data-filter-slug-position="after" data-filter-title="Best Places to Live in Latvia" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Latvia">
                                        <img width={16} height={16} alt="Latvia" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/lv.png" />{'{'}" "{'}'}
                                        Latvia
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="morocco" data-filter-slug-position="after" data-filter-title="Best Places to Live in Morocco" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Morocco">
                                        <img width={16} height={16} alt="Morocco" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/ma.png" />{'{'}" "{'}'}
                                        Morocco
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="curacao" data-filter-slug-position="after" data-filter-title="Best Places to Live in Curaçao" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Curaçao">
                                        <img width={16} height={16} alt="Curaçao" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/cw.png" />{'{'}" "{'}'}
                                        Curaçao
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="ukraine" data-filter-slug-position="after" data-filter-title="Best Places to Live in Ukraine" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Ukraine">
                                        <img width={16} height={16} alt="Ukraine" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/ua.png" />{'{'}" "{'}'}
                                        Ukraine
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="lebanon" data-filter-slug-position="after" data-filter-title="Best Places to Live in Lebanon" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Lebanon">
                                        <img width={16} height={16} alt="Lebanon" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/lb.png" />{'{'}" "{'}'}
                                        Lebanon
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="egypt" data-filter-slug-position="after" data-filter-title="Best Places to Live in Egypt" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Egypt">
                                        <img width={16} height={16} alt="Egypt" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/eg.png" />
                                        Egypt
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="slovakia" data-filter-slug-position="after" data-filter-title="Best Places to Live in Slovakia" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Slovakia">
                                        <img width={16} height={16} alt="Slovakia" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/sk.png" />{'{'}" "{'}'}
                                        Slovakia
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="chile" data-filter-slug-position="after" data-filter-title="Best Places to Live in Chile" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Chile">
                                        <img width={16} height={16} alt="Chile" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/cl.png" />
                                        Chile
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="albania" data-filter-slug-position="after" data-filter-title="Best Places to Live in Albania" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Albania">
                                        <img width={16} height={16} alt="Albania" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/al.png" />{'{'}" "{'}'}
                                        Albania
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="cuba" data-filter-slug-position="after" data-filter-title="Best Places to Live in Cuba" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Cuba">
                                        <img width={16} height={16} alt="Cuba" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/cu.png" />
                                        Cuba
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="ecuador" data-filter-slug-position="after" data-filter-title="Best Places to Live in Ecuador" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Ecuador">
                                        <img width={16} height={16} alt="Ecuador" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/ec.png" />{'{'}" "{'}'}
                                        Ecuador
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="fiji" data-filter-slug-position="after" data-filter-title="Best Places to Live in Fiji" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Fiji">
                                        <img width={16} height={16} alt="Fiji" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/fj.png" />
                                        Fiji
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="japan" data-filter-slug-position="after" data-filter-title="Best Places to Live in Japan" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Japan">
                                        <img width={16} height={16} alt="Japan" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/jp.png" />
                                        Japan
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="myanmar" data-filter-slug-position="after" data-filter-title="Best Places to Live in Myanmar" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Myanmar">
                                        <img width={16} height={16} alt="Myanmar" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/mm.png" />{'{'}" "{'}'}
                                        Myanmar
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="sri-lanka" data-filter-slug-position="after" data-filter-title="Best Places to Live in Sri Lanka" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Sri Lanka">
                                        <img width={16} height={16} alt="Sri Lanka" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/lk.png" />{'{'}" "{'}'}
                                        Sri Lanka
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="laos" data-filter-slug-position="after" data-filter-title="Best Places to Live in Laos" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Laos">
                                        <img width={16} height={16} alt="Laos" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/la.png" />
                                        Laos
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="cambodia" data-filter-slug-position="after" data-filter-title="Best Places to Live in Cambodia" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Cambodia">
                                        <img width={16} height={16} alt="Cambodia" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/kh.png" />{'{'}" "{'}'}
                                        Cambodia
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="cyprus" data-filter-slug-position="after" data-filter-title="Best Places to Live in Cyprus" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Cyprus">
                                        <img width={16} height={16} alt="Cyprus" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/cy.png" />{'{'}" "{'}'}
                                        Cyprus
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="belgium" data-filter-slug-position="after" data-filter-title="Best Places to Live in Belgium" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Belgium">
                                        <img width={16} height={16} alt="Belgium" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/be.png" />{'{'}" "{'}'}
                                        Belgium
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="uruguay" data-filter-slug-position="after" data-filter-title="Best Places to Live in Uruguay" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Uruguay">
                                        <img width={16} height={16} alt="Uruguay" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/uy.png" />{'{'}" "{'}'}
                                        Uruguay
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="malta" data-filter-slug-position="after" data-filter-title="Best Places to Live in Malta" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Malta">
                                        <img width={16} height={16} alt="Malta" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/mt.png" />
                                        Malta
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="bosnia" data-filter-slug-position="after" data-filter-title="Best Places to Live in Bosnia" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Bosnia">
                                        <img width={16} height={16} alt="Bosnia" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/ba.png" />{'{'}" "{'}'}
                                        Bosnia
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="moldova" data-filter-slug-position="after" data-filter-title="Best Places to Live in Moldova" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Moldova">
                                        <img width={16} height={16} alt="Moldova" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/md.png" />{'{'}" "{'}'}
                                        Moldova
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="china" data-filter-slug-position="after" data-filter-title="Best Places to Live in China" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="China">
                                        <img width={16} height={16} alt="China" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/cn.png" />
                                        China
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="kazakhstan" data-filter-slug-position="after" data-filter-title="Best Places to Live in Kazakhstan" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Kazakhstan">
                                        <img width={16} height={16} alt="Kazakhstan" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/kz.png" />{'{'}" "{'}'}
                                        Kazakhstan
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="jamaica" data-filter-slug-position="after" data-filter-title="Best Places to Live in Jamaica" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Jamaica">
                                        <img width={16} height={16} alt="Jamaica" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/jm.png" />{'{'}" "{'}'}
                                        Jamaica
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="guatemala" data-filter-slug-position="after" data-filter-title="Best Places to Live in Guatemala" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Guatemala">
                                        <img width={16} height={16} alt="Guatemala" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/gt.png" />{'{'}" "{'}'}
                                        Guatemala
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="switzerland" data-filter-slug-position="after" data-filter-title="Best Places to Live in Switzerland" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Switzerland">
                                        <img width={16} height={16} alt="Switzerland" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/ch.png" />{'{'}" "{'}'}
                                        Switzerland
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="suriname" data-filter-slug-position="after" data-filter-title="Best Places to Live in Suriname" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Suriname">
                                        <img width={16} height={16} alt="Suriname" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/sr.png" />{'{'}" "{'}'}
                                        Suriname
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="ireland" data-filter-slug-position="after" data-filter-title="Best Places to Live in Ireland" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Ireland">
                                        <img width={16} height={16} alt="Ireland" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/ie.png" />{'{'}" "{'}'}
                                        Ireland
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="jordan" data-filter-slug-position="after" data-filter-title="Best Places to Live in Jordan" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Jordan">
                                        <img width={16} height={16} alt="Jordan" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/jo.png" />{'{'}" "{'}'}
                                        Jordan
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="montenegro" data-filter-slug-position="after" data-filter-title="Best Places to Live in Montenegro" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Montenegro">
                                        <img width={16} height={16} alt="Montenegro" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/me.png" />{'{'}" "{'}'}
                                        Montenegro
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="hong-kong" data-filter-slug-position="after" data-filter-title="Best Places to Live in Hong Kong" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Hong Kong">
                                        <img width={16} height={16} alt="Hong Kong" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/hk.png" />{'{'}" "{'}'}
                                        Hong Kong
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="kenya" data-filter-slug-position="after" data-filter-title="Best Places to Live in Kenya" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Kenya">
                                        <img width={16} height={16} alt="Kenya" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/ke.png" />
                                        Kenya
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="maldives" data-filter-slug-position="after" data-filter-title="Best Places to Live in Maldives" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Maldives">
                                        <img width={16} height={16} alt="Maldives" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/mv.png" />{'{'}" "{'}'}
                                        Maldives
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="denmark" data-filter-slug-position="after" data-filter-title="Best Places to Live in Denmark" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Denmark">
                                        <img width={16} height={16} alt="Denmark" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/dk.png" />{'{'}" "{'}'}
                                        Denmark
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="bahrain" data-filter-slug-position="after" data-filter-title="Best Places to Live in Bahrain" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Bahrain">
                                        <img width={16} height={16} alt="Bahrain" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/bh.png" />{'{'}" "{'}'}
                                        Bahrain
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="mauritius" data-filter-slug-position="after" data-filter-title="Best Places to Live in Mauritius" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Mauritius">
                                        <img width={16} height={16} alt="Mauritius" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/mu.png" />{'{'}" "{'}'}
                                        Mauritius
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="guyana" data-filter-slug-position="after" data-filter-title="Best Places to Live in Guyana" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Guyana">
                                        <img width={16} height={16} alt="Guyana" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/gy.png" />{'{'}" "{'}'}
                                        Guyana
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="bangladesh" data-filter-slug-position="after" data-filter-title="Best Places to Live in Bangladesh" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Bangladesh">
                                        <img width={16} height={16} alt="Bangladesh" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/bd.png" />{'{'}" "{'}'}
                                        Bangladesh
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="zimbabwe" data-filter-slug-position="after" data-filter-title="Best Places to Live in Zimbabwe" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Zimbabwe">
                                        <img width={16} height={16} alt="Zimbabwe" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/zw.png" />{'{'}" "{'}'}
                                        Zimbabwe
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="italy" data-filter-slug-position="after" data-filter-title="Best Places to Live in Italy" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Italy">
                                        <img width={16} height={16} alt="Italy" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/it.png" />
                                        Italy
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="paraguay" data-filter-slug-position="after" data-filter-title="Best Places to Live in Paraguay" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Paraguay">
                                        <img width={16} height={16} alt="Paraguay" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/py.png" />{'{'}" "{'}'}
                                        Paraguay
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="trinidad-and-tobago" data-filter-slug-position="after" data-filter-title="Best Places to Live in Trinidad and Tobago" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Trinidad and Tobago">
                                        <img width={16} height={16} alt="Trinidad and Tobago" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/tt.png" />{'{'}" "{'}'}
                                        Trinidad and Tobago
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="dominican-republic" data-filter-slug-position="after" data-filter-title="Best Places to Live in Dominican Republic" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Dominican Republic">
                                        <img width={16} height={16} alt="Dominican Republic" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/do.png" />{'{'}" "{'}'}
                                        Dominican Republic
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="tonga" data-filter-slug-position="after" data-filter-title="Best Places to Live in Tonga" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Tonga">
                                        <img width={16} height={16} alt="Tonga" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/to.png" />
                                        Tonga
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="zambia" data-filter-slug-position="after" data-filter-title="Best Places to Live in Zambia" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Zambia">
                                        <img width={16} height={16} alt="Zambia" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/zm.png" />{'{'}" "{'}'}
                                        Zambia
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="armenia" data-filter-slug-position="after" data-filter-title="Best Places to Live in Armenia" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Armenia">
                                        <img width={16} height={16} alt="Armenia" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/am.png" />{'{'}" "{'}'}
                                        Armenia
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="botswana" data-filter-slug-position="after" data-filter-title="Best Places to Live in Botswana" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Botswana">
                                        <img width={16} height={16} alt="Botswana" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/bw.png" />{'{'}" "{'}'}
                                        Botswana
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="angola" data-filter-slug-position="after" data-filter-title="Best Places to Live in Angola" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Angola">
                                        <img width={16} height={16} alt="Angola" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/ao.png" />{'{'}" "{'}'}
                                        Angola
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="tunisia" data-filter-slug-position="after" data-filter-title="Best Places to Live in Tunisia" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Tunisia">
                                        <img width={16} height={16} alt="Tunisia" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/tn.png" />{'{'}" "{'}'}
                                        Tunisia
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="aruba" data-filter-slug-position="after" data-filter-title="Best Places to Live in Aruba" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Aruba">
                                        <img width={16} height={16} alt="Aruba" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/aw.png" />
                                        Aruba
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="brunei" data-filter-slug-position="after" data-filter-title="Best Places to Live in Brunei" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Brunei">
                                        <img width={16} height={16} alt="Brunei" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/bn.png" />{'{'}" "{'}'}
                                        Brunei
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="united-arab-emirates" data-filter-slug-position="after" data-filter-title="Best Places to Live in United Arab Emirates" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="United Arab Emirates">
                                        <img width={16} height={16} alt="United Arab Emirates" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/ae.png" />{'{'}" "{'}'}
                                        United Arab Emirates
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="iceland" data-filter-slug-position="after" data-filter-title="Best Places to Live in Iceland" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Iceland">
                                        <img width={16} height={16} alt="Iceland" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/is.png" />{'{'}" "{'}'}
                                        Iceland
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="nepal" data-filter-slug-position="after" data-filter-title="Best Places to Live in Nepal" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Nepal">
                                        <img width={16} height={16} alt="Nepal" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/np.png" />
                                        Nepal
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="finland" data-filter-slug-position="after" data-filter-title="Best Places to Live in Finland" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Finland">
                                        <img width={16} height={16} alt="Finland" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/fi.png" />{'{'}" "{'}'}
                                        Finland
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="congo" data-filter-slug-position="after" data-filter-title="Best Places to Live in Congo" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Congo">
                                        <img width={16} height={16} alt="Congo" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/cg.png" />
                                        Congo
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="sierra-leone" data-filter-slug-position="after" data-filter-title="Best Places to Live in Sierra Leone" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Sierra Leone">
                                        <img width={16} height={16} alt="Sierra Leone" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/sl.png" />{'{'}" "{'}'}
                                        Sierra Leone
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="pakistan" data-filter-slug-position="after" data-filter-title="Best Places to Live in Pakistan" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Pakistan">
                                        <img width={16} height={16} alt="Pakistan" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/pk.png" />{'{'}" "{'}'}
                                        Pakistan
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="azerbaijan" data-filter-slug-position="after" data-filter-title="Best Places to Live in Azerbaijan" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Azerbaijan">
                                        <img width={16} height={16} alt="Azerbaijan" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/az.png" />{'{'}" "{'}'}
                                        Azerbaijan
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="namibia" data-filter-slug-position="after" data-filter-title="Best Places to Live in Namibia" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Namibia">
                                        <img width={16} height={16} alt="Namibia" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/na.png" />{'{'}" "{'}'}
                                        Namibia
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="panama" data-filter-slug-position="after" data-filter-title="Best Places to Live in Panama" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Panama">
                                        <img width={16} height={16} alt="Panama" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/pa.png" />{'{'}" "{'}'}
                                        Panama
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="dr-congo" data-filter-slug-position="after" data-filter-title="Best Places to Live in DR Congo" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="DR Congo">
                                        <img width={16} height={16} alt="DR Congo" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/cd.png" />{'{'}" "{'}'}
                                        DR Congo
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="belize" data-filter-slug-position="after" data-filter-title="Best Places to Live in Belize" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Belize">
                                        <img width={16} height={16} alt="Belize" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/bz.png" />{'{'}" "{'}'}
                                        Belize
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="nigeria" data-filter-slug-position="after" data-filter-title="Best Places to Live in Nigeria" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Nigeria">
                                        <img width={16} height={16} alt="Nigeria" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/ng.png" />{'{'}" "{'}'}
                                        Nigeria
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="israel" data-filter-slug-position="after" data-filter-title="Best Places to Live in Israel" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Israel">
                                        <img width={16} height={16} alt="Israel" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/il.png" />{'{'}" "{'}'}
                                        Israel
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="madagascar" data-filter-slug-position="after" data-filter-title="Best Places to Live in Madagascar" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Madagascar">
                                        <img width={16} height={16} alt="Madagascar" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/mg.png" />{'{'}" "{'}'}
                                        Madagascar
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="senegal" data-filter-slug-position="after" data-filter-title="Best Places to Live in Senegal" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Senegal">
                                        <img width={16} height={16} alt="Senegal" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/sn.png" />{'{'}" "{'}'}
                                        Senegal
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="north-macedonia" data-filter-slug-position="after" data-filter-title="Best Places to Live in North Macedonia" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="North Macedonia">
                                        <img width={16} height={16} alt="North Macedonia" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/mk.png" />{'{'}" "{'}'}
                                        North Macedonia
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="bolivia" data-filter-slug-position="after" data-filter-title="Best Places to Live in Bolivia" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Bolivia">
                                        <img width={16} height={16} alt="Bolivia" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/bo.png" />{'{'}" "{'}'}
                                        Bolivia
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="samoa" data-filter-slug-position="after" data-filter-title="Best Places to Live in Samoa" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Samoa">
                                        <img width={16} height={16} alt="Samoa" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/ws.png" />
                                        Samoa
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="algeria" data-filter-slug-position="after" data-filter-title="Best Places to Live in Algeria" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Algeria">
                                        <img width={16} height={16} alt="Algeria" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/dz.png" />{'{'}" "{'}'}
                                        Algeria
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="kosovo" data-filter-slug-position="after" data-filter-title="Best Places to Live in Kosovo" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Kosovo">
                                        <img width={16} height={16} alt="Kosovo" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/xk.png" />{'{'}" "{'}'}
                                        Kosovo
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="norway" data-filter-slug-position="after" data-filter-title="Best Places to Live in Norway" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Norway">
                                        <img width={16} height={16} alt="Norway" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/no.png" />{'{'}" "{'}'}
                                        Norway
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="guam" data-filter-slug-position="after" data-filter-title="Best Places to Live in Guam" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Guam">
                                        <img width={16} height={16} alt="Guam" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/gu.png" />
                                        Guam
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="guinea" data-filter-slug-position="after" data-filter-title="Best Places to Live in Guinea" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Guinea">
                                        <img width={16} height={16} alt="Guinea" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/gn.png" />{'{'}" "{'}'}
                                        Guinea
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="gambia" data-filter-slug-position="after" data-filter-title="Best Places to Live in Gambia" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Gambia">
                                        <img width={16} height={16} alt="Gambia" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/gm.png" />{'{'}" "{'}'}
                                        Gambia
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="malawi" data-filter-slug-position="after" data-filter-title="Best Places to Live in Malawi" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Malawi">
                                        <img width={16} height={16} alt="Malawi" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/mw.png" />{'{'}" "{'}'}
                                        Malawi
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="costa-rica" data-filter-slug-position="after" data-filter-title="Best Places to Live in Costa Rica" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Costa Rica">
                                        <img width={16} height={16} alt="Costa Rica" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/cr.png" />{'{'}" "{'}'}
                                        Costa Rica
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="puerto-rico" data-filter-slug-position="after" data-filter-title="Best Places to Live in Puerto Rico" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Puerto Rico">
                                        <img width={16} height={16} alt="Puerto Rico" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/pr.png" />{'{'}" "{'}'}
                                        Puerto Rico
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="uganda" data-filter-slug-position="after" data-filter-title="Best Places to Live in Uganda" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Uganda">
                                        <img width={16} height={16} alt="Uganda" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/ug.png" />{'{'}" "{'}'}
                                        Uganda
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="lesotho" data-filter-slug-position="after" data-filter-title="Best Places to Live in Lesotho" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Lesotho">
                                        <img width={16} height={16} alt="Lesotho" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/ls.png" />{'{'}" "{'}'}
                                        Lesotho
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="greenland" data-filter-slug-position="after" data-filter-title="Best Places to Live in Greenland" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Greenland">
                                        <img width={16} height={16} alt="Greenland" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/gl.png" />{'{'}" "{'}'}
                                        Greenland
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="rwanda" data-filter-slug-position="after" data-filter-title="Best Places to Live in Rwanda" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Rwanda">
                                        <img width={16} height={16} alt="Rwanda" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/rw.png" />{'{'}" "{'}'}
                                        Rwanda
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="burkina-faso" data-filter-slug-position="after" data-filter-title="Best Places to Live in Burkina Faso" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Burkina Faso">
                                        <img width={16} height={16} alt="Burkina Faso" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/bf.png" />{'{'}" "{'}'}
                                        Burkina Faso
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="uzbekistan" data-filter-slug-position="after" data-filter-title="Best Places to Live in Uzbekistan" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Uzbekistan">
                                        <img width={16} height={16} alt="Uzbekistan" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/uz.png" />{'{'}" "{'}'}
                                        Uzbekistan
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="el-salvador" data-filter-slug-position="after" data-filter-title="Best Places to Live in El Salvador" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="El Salvador">
                                        <img width={16} height={16} alt="El Salvador" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/sv.png" />{'{'}" "{'}'}
                                        El Salvador
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="east-timor" data-filter-slug-position="after" data-filter-title="Best Places to Live in East Timor" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="East Timor">
                                        <img width={16} height={16} alt="East Timor" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/tl.png" />{'{'}" "{'}'}
                                        East Timor
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="ghana" data-filter-slug-position="after" data-filter-title="Best Places to Live in Ghana" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Ghana">
                                        <img width={16} height={16} alt="Ghana" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/gh.png" />
                                        Ghana
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="andorra" data-filter-slug-position="after" data-filter-title="Best Places to Live in Andorra" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Andorra">
                                        <img width={16} height={16} alt="Andorra" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/ad.png" />{'{'}" "{'}'}
                                        Andorra
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="saudi-arabia" data-filter-slug-position="after" data-filter-title="Best Places to Live in Saudi Arabia" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Saudi Arabia">
                                        <img width={16} height={16} alt="Saudi Arabia" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/sa.png" />{'{'}" "{'}'}
                                        Saudi Arabia
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="venezuela" data-filter-slug-position="after" data-filter-title="Best Places to Live in Venezuela" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Venezuela">
                                        <img width={16} height={16} alt="Venezuela" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/ve.png" />{'{'}" "{'}'}
                                        Venezuela
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="sudan" data-filter-slug-position="after" data-filter-title="Best Places to Live in Sudan" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Sudan">
                                        <img width={16} height={16} alt="Sudan" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/sd.png" />
                                        Sudan
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="nicaragua" data-filter-slug-position="after" data-filter-title="Best Places to Live in Nicaragua" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Nicaragua">
                                        <img width={16} height={16} alt="Nicaragua" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/ni.png" />{'{'}" "{'}'}
                                        Nicaragua
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="haiti" data-filter-slug-position="after" data-filter-title="Best Places to Live in Haiti" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Haiti">
                                        <img width={16} height={16} alt="Haiti" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/ht.png" />
                                        Haiti
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="south-georgia-and-the-south-sandwich-islands" data-filter-slug-position="after" data-filter-title="Best Places to Live in South Georgia and the South Sandwich Islands" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="South Georgia and the South Sandwich Islands">
                                        <img width={16} height={16} alt="South Georgia and the South Sandwich Islands" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/gs.png" />{'{'}" "{'}'}
                                        South Georgia and the South Sandwich Islands
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="iran" data-filter-slug-position="after" data-filter-title="Best Places to Live in Iran" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Iran">
                                        <img width={16} height={16} alt="Iran" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/ir.png" />
                                        Iran
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="mongolia" data-filter-slug-position="after" data-filter-title="Best Places to Live in Mongolia" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Mongolia">
                                        <img width={16} height={16} alt="Mongolia" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/mn.png" />{'{'}" "{'}'}
                                        Mongolia
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="ethiopia" data-filter-slug-position="after" data-filter-title="Best Places to Live in Ethiopia" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Ethiopia">
                                        <img width={16} height={16} alt="Ethiopia" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/et.png" />{'{'}" "{'}'}
                                        Ethiopia
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="eritrea" data-filter-slug-position="after" data-filter-title="Best Places to Live in Eritrea" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Eritrea">
                                        <img width={16} height={16} alt="Eritrea" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/er.png" />{'{'}" "{'}'}
                                        Eritrea
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="tanzania" data-filter-slug-position="after" data-filter-title="Best Places to Live in Tanzania" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Tanzania">
                                        <img width={16} height={16} alt="Tanzania" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/tz.png" />{'{'}" "{'}'}
                                        Tanzania
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="mauritania" data-filter-slug-position="after" data-filter-title="Best Places to Live in Mauritania" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Mauritania">
                                        <img width={16} height={16} alt="Mauritania" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/mr.png" />{'{'}" "{'}'}
                                        Mauritania
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="north-korea" data-filter-slug-position="after" data-filter-title="Best Places to Live in North Korea" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="North Korea">
                                        <img width={16} height={16} alt="North Korea" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/kp.png" />{'{'}" "{'}'}
                                        North Korea
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="gibraltar" data-filter-slug-position="after" data-filter-title="Best Places to Live in Gibraltar" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Gibraltar">
                                        <img width={16} height={16} alt="Gibraltar" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/gi.png" />{'{'}" "{'}'}
                                        Gibraltar
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="togo" data-filter-slug-position="after" data-filter-title="Best Places to Live in Togo" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Togo">
                                        <img width={16} height={16} alt="Togo" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/tg.png" />
                                        Togo
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="kyrgyzstan" data-filter-slug-position="after" data-filter-title="Best Places to Live in Kyrgyzstan" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Kyrgyzstan">
                                        <img width={16} height={16} alt="Kyrgyzstan" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/kg.png" />{'{'}" "{'}'}
                                        Kyrgyzstan
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="the-bahamas" data-filter-slug-position="after" data-filter-title="Best Places to Live in The Bahamas" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="The Bahamas">
                                        <img width={16} height={16} alt="The Bahamas" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/bs.png" />{'{'}" "{'}'}
                                        The Bahamas
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="western-sahara" data-filter-slug-position="after" data-filter-title="Best Places to Live in Western Sahara" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Western Sahara">
                                        <img width={16} height={16} alt="Western Sahara" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/eh.png" />{'{'}" "{'}'}
                                        Western Sahara
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="kurdistan" data-filter-slug-position="after" data-filter-title="Best Places to Live in Kurdistan" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Kurdistan">
                                        <img width={16} height={16} alt="Kurdistan" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/ku.png" />{'{'}" "{'}'}
                                        Kurdistan
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="yemen" data-filter-slug-position="after" data-filter-title="Best Places to Live in Yemen" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Yemen">
                                        <img width={16} height={16} alt="Yemen" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/ye.png" />
                                        Yemen
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="tajikistan" data-filter-slug-position="after" data-filter-title="Best Places to Live in Tajikistan" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Tajikistan">
                                        <img width={16} height={16} alt="Tajikistan" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/tj.png" />{'{'}" "{'}'}
                                        Tajikistan
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="libya" data-filter-slug-position="after" data-filter-title="Best Places to Live in Libya" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Libya">
                                        <img width={16} height={16} alt="Libya" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/ly.png" />
                                        Libya
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="south-sudan" data-filter-slug-position="after" data-filter-title="Best Places to Live in South Sudan" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="South Sudan">
                                        <img width={16} height={16} alt="South Sudan" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/ss.png" />{'{'}" "{'}'}
                                        South Sudan
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="monaco" data-filter-slug-position="after" data-filter-title="Best Places to Live in Monaco" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Monaco">
                                        <img width={16} height={16} alt="Monaco" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/mc.png" />{'{'}" "{'}'}
                                        Monaco
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="honduras" data-filter-slug-position="after" data-filter-title="Best Places to Live in Honduras" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Honduras">
                                        <img width={16} height={16} alt="Honduras" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/hn.png" />{'{'}" "{'}'}
                                        Honduras
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="solomon-islands" data-filter-slug-position="after" data-filter-title="Best Places to Live in Solomon Islands" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Solomon Islands">
                                        <img width={16} height={16} alt="Solomon Islands" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/sb.png" />{'{'}" "{'}'}
                                        Solomon Islands
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="cape-verde" data-filter-slug-position="after" data-filter-title="Best Places to Live in Cape Verde" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Cape Verde">
                                        <img width={16} height={16} alt="Cape Verde" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/cv.png" />{'{'}" "{'}'}
                                        Cape Verde
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="luxembourg" data-filter-slug-position="after" data-filter-title="Best Places to Live in Luxembourg" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Luxembourg">
                                        <img width={16} height={16} alt="Luxembourg" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/lu.png" />{'{'}" "{'}'}
                                        Luxembourg
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="syria" data-filter-slug-position="after" data-filter-title="Best Places to Live in Syria" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Syria">
                                        <img width={16} height={16} alt="Syria" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/sy.png" />
                                        Syria
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="tuvalu" data-filter-slug-position="after" data-filter-title="Best Places to Live in Tuvalu" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Tuvalu">
                                        <img width={16} height={16} alt="Tuvalu" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/tv.png" />{'{'}" "{'}'}
                                        Tuvalu
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="oman" data-filter-slug-position="after" data-filter-title="Best Places to Live in Oman" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Oman">
                                        <img width={16} height={16} alt="Oman" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/om.png" />
                                        Oman
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="cameroon" data-filter-slug-position="after" data-filter-title="Best Places to Live in Cameroon" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Cameroon">
                                        <img width={16} height={16} alt="Cameroon" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/cm.png" />{'{'}" "{'}'}
                                        Cameroon
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="cote-divoire" data-filter-slug-position="after" data-filter-title="Best Places to Live in Cote d'Ivoire" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Cote d'Ivoire">
                                        <img width={16} height={16} alt="Cote d'Ivoire" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/ci.png" />{'{'}" "{'}'}
                                        Cote d'Ivoire
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="guadeloupe" data-filter-slug-position="after" data-filter-title="Best Places to Live in Guadeloupe" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Guadeloupe">
                                        <img width={16} height={16} alt="Guadeloupe" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/gp.png" />{'{'}" "{'}'}
                                        Guadeloupe
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="vanuatu" data-filter-slug-position="after" data-filter-title="Best Places to Live in Vanuatu" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Vanuatu">
                                        <img width={16} height={16} alt="Vanuatu" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/vu.png" />{'{'}" "{'}'}
                                        Vanuatu
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="cayman-islands" data-filter-slug-position="after" data-filter-title="Best Places to Live in Cayman Islands" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Cayman Islands">
                                        <img width={16} height={16} alt="Cayman Islands" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/ky.png" />{'{'}" "{'}'}
                                        Cayman Islands
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="turkmenistan" data-filter-slug-position="after" data-filter-title="Best Places to Live in Turkmenistan" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Turkmenistan">
                                        <img width={16} height={16} alt="Turkmenistan" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/tm.png" />{'{'}" "{'}'}
                                        Turkmenistan
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="jersey" data-filter-slug-position="after" data-filter-title="Best Places to Live in Jersey" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Jersey">
                                        <img width={16} height={16} alt="Jersey" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/je.png" />{'{'}" "{'}'}
                                        Jersey
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="mozambique" data-filter-slug-position="after" data-filter-title="Best Places to Live in Mozambique" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Mozambique">
                                        <img width={16} height={16} alt="Mozambique" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/mz.png" />{'{'}" "{'}'}
                                        Mozambique
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="saint-helena" data-filter-slug-position="after" data-filter-title="Best Places to Live in Saint Helena" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Saint Helena">
                                        <img width={16} height={16} alt="Saint Helena" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/sh.png" />{'{'}" "{'}'}
                                        Saint Helena
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="iraq" data-filter-slug-position="after" data-filter-title="Best Places to Live in Iraq" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Iraq">
                                        <img width={16} height={16} alt="Iraq" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/iq.png" />
                                        Iraq
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="papua-new-guinea" data-filter-slug-position="after" data-filter-title="Best Places to Live in Papua New Guinea" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Papua New Guinea">
                                        <img width={16} height={16} alt="Papua New Guinea" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/pg.png" />{'{'}" "{'}'}
                                        Papua New Guinea
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="british-virgin-islands" data-filter-slug-position="after" data-filter-title="Best Places to Live in British Virgin Islands" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="British Virgin Islands">
                                        <img width={16} height={16} alt="British Virgin Islands" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/vg.png" />{'{'}" "{'}'}
                                        British Virgin Islands
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="barbados" data-filter-slug-position="after" data-filter-title="Best Places to Live in Barbados" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Barbados">
                                        <img width={16} height={16} alt="Barbados" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/bb.png" />{'{'}" "{'}'}
                                        Barbados
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="qatar" data-filter-slug-position="after" data-filter-title="Best Places to Live in Qatar" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Qatar">
                                        <img width={16} height={16} alt="Qatar" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/qa.png" />
                                        Qatar
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="falkland-islands" data-filter-slug-position="after" data-filter-title="Best Places to Live in Falkland Islands" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Falkland Islands">
                                        <img width={16} height={16} alt="Falkland Islands" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/fk.png" />{'{'}" "{'}'}
                                        Falkland Islands
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="bermuda" data-filter-slug-position="after" data-filter-title="Best Places to Live in Bermuda" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Bermuda">
                                        <img width={16} height={16} alt="Bermuda" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/bm.png" />{'{'}" "{'}'}
                                        Bermuda
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="cook-islands" data-filter-slug-position="after" data-filter-title="Best Places to Live in Cook Islands" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Cook Islands">
                                        <img width={16} height={16} alt="Cook Islands" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/ck.png" />{'{'}" "{'}'}
                                        Cook Islands
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="sint-maarten" data-filter-slug-position="after" data-filter-title="Best Places to Live in Sint Maarten" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Sint Maarten">
                                        <img width={16} height={16} alt="Sint Maarten" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/sx.png" />{'{'}" "{'}'}
                                        Sint Maarten
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="antarctica" data-filter-slug-position="after" data-filter-title="Best Places to Live in Antarctica" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Antarctica">
                                        <img width={16} height={16} alt="Antarctica" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/aq.png" />{'{'}" "{'}'}
                                        Antarctica
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="united-states-virgin-islands" data-filter-slug-position="after" data-filter-title="Best Places to Live in United States Virgin Islands" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="United States Virgin Islands">
                                        <img width={16} height={16} alt="United States Virgin Islands" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/vi.png" />{'{'}" "{'}'}
                                        United States Virgin Islands
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="antigua-and-barbuda" data-filter-slug-position="after" data-filter-title="Best Places to Live in Antigua and Barbuda" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Antigua and Barbuda">
                                        <img width={16} height={16} alt="Antigua and Barbuda" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/ag.png" />{'{'}" "{'}'}
                                        Antigua and Barbuda
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="afghanistan" data-filter-slug-position="after" data-filter-title="Best Places to Live in Afghanistan" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Afghanistan">
                                        <img width={16} height={16} alt="Afghanistan" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/af.png" />{'{'}" "{'}'}
                                        Afghanistan
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="vatican-city" data-filter-slug-position="after" data-filter-title="Best Places to Live in Vatican City" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Vatican City">
                                        <img width={16} height={16} alt="Vatican City" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/va.png" />{'{'}" "{'}'}
                                        Vatican City
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="central-african-republic" data-filter-slug-position="after" data-filter-title="Best Places to Live in Central African Republic" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Central African Republic">
                                        <img width={16} height={16} alt="Central African Republic" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/cf.png" />{'{'}" "{'}'}
                                        Central African Republic
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="bonaire" data-filter-slug-position="after" data-filter-title="Best Places to Live in Bonaire" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Bonaire">
                                        <img width={16} height={16} alt="Bonaire" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/bq.png" />{'{'}" "{'}'}
                                        Bonaire
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="kuwait" data-filter-slug-position="after" data-filter-title="Best Places to Live in Kuwait" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Kuwait">
                                        <img width={16} height={16} alt="Kuwait" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/kw.png" />{'{'}" "{'}'}
                                        Kuwait
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="somalia" data-filter-slug-position="after" data-filter-title="Best Places to Live in Somalia" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Somalia">
                                        <img width={16} height={16} alt="Somalia" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/so.png" />{'{'}" "{'}'}
                                        Somalia
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="mali" data-filter-slug-position="after" data-filter-title="Best Places to Live in Mali" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Mali">
                                        <img width={16} height={16} alt="Mali" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/ml.png" />
                                        Mali
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="seychelles" data-filter-slug-position="after" data-filter-title="Best Places to Live in Seychelles" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Seychelles">
                                        <img width={16} height={16} alt="Seychelles" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/sc.png" />{'{'}" "{'}'}
                                        Seychelles
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="niger" data-filter-slug-position="after" data-filter-title="Best Places to Live in Niger" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Niger">
                                        <img width={16} height={16} alt="Niger" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/ne.png" />
                                        Niger
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="gabon" data-filter-slug-position="after" data-filter-title="Best Places to Live in Gabon" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Gabon">
                                        <img width={16} height={16} alt="Gabon" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/ga.png" />
                                        Gabon
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="french-guiana" data-filter-slug-position="after" data-filter-title="Best Places to Live in French Guiana" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="French Guiana">
                                        <img width={16} height={16} alt="French Guiana" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/gf.png" />{'{'}" "{'}'}
                                        French Guiana
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="djibouti" data-filter-slug-position="after" data-filter-title="Best Places to Live in Djibouti" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Djibouti">
                                        <img width={16} height={16} alt="Djibouti" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/dj.png" />{'{'}" "{'}'}
                                        Djibouti
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="palestine" data-filter-slug-position="after" data-filter-title="Best Places to Live in Palestine" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Palestine">
                                        <img width={16} height={16} alt="Palestine" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/ps.png" />{'{'}" "{'}'}
                                        Palestine
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="new-caledonia" data-filter-slug-position="after" data-filter-title="Best Places to Live in New Caledonia" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="New Caledonia">
                                        <img width={16} height={16} alt="New Caledonia" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/nc.png" />{'{'}" "{'}'}
                                        New Caledonia
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="liberia" data-filter-slug-position="after" data-filter-title="Best Places to Live in Liberia" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Liberia">
                                        <img width={16} height={16} alt="Liberia" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/lr.png" />{'{'}" "{'}'}
                                        Liberia
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="chad" data-filter-slug-position="after" data-filter-title="Best Places to Live in Chad" data-filter-multiple-choice-type="or" data-filter-target="country" data-filter-type="exact-match" data-filter-value="Chad">
                                        <img width={16} height={16} alt="Chad" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/td.png" />
                                        Chad
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="filter-group" style={{ display: 'none' }} this-is-hidden-because-it-is-used-for-warm-in-typing-filters>
                            <label className="filter-group-label">Warm in</label>
                            <div className="filter warm-in">
                                <div className="choices multiple-choice multiple-choice-or c4">
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="warm-in-jan" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="climate_temperatureC_month_01" data-filter-type="greater-than" data-filter-min={20}>
                                        <span>☀️ Warm in January</span>
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="warm-in-feb" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="climate_temperatureC_month_02" data-filter-type="greater-than" data-filter-min={20}>
                                        <span>☀️ Warm in February</span>
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="warm-in-mar" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="climate_temperatureC_month_03" data-filter-type="greater-than" data-filter-min={20}>
                                        <span>☀️ Warm in March</span>
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="warm-in-apr" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="climate_temperatureC_month_04" data-filter-type="greater-than" data-filter-min={20}>
                                        <span>☀️ Warm in April</span>
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="warm-in-may" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="climate_temperatureC_month_05" data-filter-type="greater-than" data-filter-min={20}>
                                        <span>☀️ Warm in May</span>
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="warm-in-jun" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="climate_temperatureC_month_06" data-filter-type="greater-than" data-filter-min={20}>
                                        <span>☀️ Warm in June</span>
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="warm-in-jul" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="climate_temperatureC_month_07" data-filter-type="greater-than" data-filter-min={20}>
                                        <span>☀️ Warm in July</span>
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="warm-in-aug" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="climate_temperatureC_month_08" data-filter-type="greater-than" data-filter-min={20}>
                                        <span>☀️ Warm in August</span>
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="warm-in-sep" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="climate_temperatureC_month_09" data-filter-type="greater-than" data-filter-min={20}>
                                        <span>☀️ Warm in September</span>
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="warm-in-oct" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="climate_temperatureC_month_10" data-filter-type="greater-than" data-filter-min={20}>
                                        <span>☀️ Warm in October</span>
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="warm-in-nov" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="climate_temperatureC_month_11" data-filter-type="greater-than" data-filter-min={20}>
                                        <span>☀️ Warm in November</span>
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="warm-in-dec" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="climate_temperatureC_month_12" data-filter-type="greater-than" data-filter-min={20}>
                                        <span>☀️ Warm in December</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="filter-group" style={{ display: 'none' }} this-is-hidden-because-it-is-used-for-url-near-country-pages-like="/best-cities-near-united-states">
                            <label className="filter-group-label">Near countries</label>
                            <div className="filter near-country">
                                <div className="choices multiple-choice multiple-choice-or c4">
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-portugal" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-portugal" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Portugal" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/pt.png" />{'{'}" "{'}'}
                                        Near Portugal
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-indonesia" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-indonesia" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Indonesia" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/id.png" />{'{'}" "{'}'}
                                        Near Indonesia
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-brazil" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-brazil" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Brazil" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/br.png" />{'{'}" "{'}'}
                                        Near Brazil
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-czechia" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-czechia" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Czechia" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/cz.png" />{'{'}" "{'}'}
                                        Near Czechia
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-south-africa" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-south-africa" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near South Africa" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/za.png" />{'{'}" "{'}'}
                                        Near South Africa
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-united-states" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-united-states" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near United States" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/us.png" />{'{'}" "{'}'}
                                        Near United States
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-thailand" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-thailand" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Thailand" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/th.png" />{'{'}" "{'}'}
                                        Near Thailand
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-germany" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-germany" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Germany" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/de.png" />{'{'}" "{'}'}
                                        Near Germany
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-turkey" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-turkey" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Turkey" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/tr.png" />{'{'}" "{'}'}
                                        Near Turkey
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-singapore" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-singapore" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Singapore" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/sg.png" />{'{'}" "{'}'}
                                        Near Singapore
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-spain" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-spain" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Spain" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/es.png" />{'{'}" "{'}'}
                                        Near Spain
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-canada" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-canada" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Canada" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/ca.png" />{'{'}" "{'}'}
                                        Near Canada
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-mexico" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-mexico" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Mexico" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/mx.png" />{'{'}" "{'}'}
                                        Near Mexico
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-hungary" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-hungary" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Hungary" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/hu.png" />{'{'}" "{'}'}
                                        Near Hungary
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-serbia" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-serbia" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Serbia" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/rs.png" />{'{'}" "{'}'}
                                        Near Serbia
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-colombia" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-colombia" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Colombia" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/co.png" />{'{'}" "{'}'}
                                        Near Colombia
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-taiwan" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-taiwan" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Taiwan" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/tw.png" />{'{'}" "{'}'}
                                        Near Taiwan
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-vietnam" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-vietnam" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Vietnam" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/vn.png" />{'{'}" "{'}'}
                                        Near Vietnam
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-georgia" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-georgia" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Georgia" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/ge.png" />{'{'}" "{'}'}
                                        Near Georgia
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-greece" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-greece" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Greece" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/gr.png" />{'{'}" "{'}'}
                                        Near Greece
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-argentina" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-argentina" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Argentina" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/ar.png" />{'{'}" "{'}'}
                                        Near Argentina
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-malaysia" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-malaysia" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Malaysia" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/my.png" />{'{'}" "{'}'}
                                        Near Malaysia
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-bulgaria" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-bulgaria" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Bulgaria" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/bg.png" />{'{'}" "{'}'}
                                        Near Bulgaria
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-russia" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-russia" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Russia" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/ru.png" />{'{'}" "{'}'}
                                        Near Russia
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-united-kingdom" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-united-kingdom" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near United Kingdom" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/uk.png" />{'{'}" "{'}'}
                                        Near United Kingdom
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-peru" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-peru" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Peru" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/pe.png" />{'{'}" "{'}'}
                                        Near Peru
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-poland" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-poland" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Poland" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/pl.png" />{'{'}" "{'}'}
                                        Near Poland
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-romania" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-romania" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Romania" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/ro.png" />{'{'}" "{'}'}
                                        Near Romania
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-australia" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-australia" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Australia" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/au.png" />{'{'}" "{'}'}
                                        Near Australia
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-slovenia" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-slovenia" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Slovenia" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/si.png" />{'{'}" "{'}'}
                                        Near Slovenia
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-lithuania" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-lithuania" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Lithuania" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/lt.png" />{'{'}" "{'}'}
                                        Near Lithuania
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-india" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-india" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near India" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/in.png" />{'{'}" "{'}'}
                                        Near India
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-croatia" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-croatia" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Croatia" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/hr.png" />{'{'}" "{'}'}
                                        Near Croatia
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-sweden" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-sweden" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Sweden" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/se.png" />{'{'}" "{'}'}
                                        Near Sweden
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-south-korea" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-south-korea" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near South Korea" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/kr.png" />{'{'}" "{'}'}
                                        Near South Korea
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-netherlands" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-netherlands" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Netherlands" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/nl.png" />{'{'}" "{'}'}
                                        Near Netherlands
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-estonia" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-estonia" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Estonia" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/ee.png" />{'{'}" "{'}'}
                                        Near Estonia
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-new-zealand" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-new-zealand" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near New Zealand" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/nz.png" />{'{'}" "{'}'}
                                        Near New Zealand
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-philippines" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-philippines" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Philippines" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/ph.png" />{'{'}" "{'}'}
                                        Near Philippines
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-belarus" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-belarus" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Belarus" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/by.png" />{'{'}" "{'}'}
                                        Near Belarus
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-france" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-france" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near France" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/fr.png" />{'{'}" "{'}'}
                                        Near France
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-austria" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-austria" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Austria" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/at.png" />{'{'}" "{'}'}
                                        Near Austria
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-latvia" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-latvia" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Latvia" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/lv.png" />{'{'}" "{'}'}
                                        Near Latvia
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-morocco" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-morocco" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Morocco" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/ma.png" />{'{'}" "{'}'}
                                        Near Morocco
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-curacao" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-curacao" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Curaçao" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/cw.png" />{'{'}" "{'}'}
                                        Near Curaçao
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-ukraine" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-ukraine" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Ukraine" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/ua.png" />{'{'}" "{'}'}
                                        Near Ukraine
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-lebanon" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-lebanon" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Lebanon" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/lb.png" />{'{'}" "{'}'}
                                        Near Lebanon
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-egypt" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-egypt" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Egypt" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/eg.png" />{'{'}" "{'}'}
                                        Near Egypt
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-slovakia" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-slovakia" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Slovakia" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/sk.png" />{'{'}" "{'}'}
                                        Near Slovakia
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-chile" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-chile" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Chile" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/cl.png" />{'{'}" "{'}'}
                                        Near Chile
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-albania" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-albania" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Albania" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/al.png" />{'{'}" "{'}'}
                                        Near Albania
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-cuba" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-cuba" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Cuba" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/cu.png" />{'{'}" "{'}'}
                                        Near Cuba
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-ecuador" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-ecuador" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Ecuador" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/ec.png" />{'{'}" "{'}'}
                                        Near Ecuador
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-fiji" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-fiji" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Fiji" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/fj.png" />{'{'}" "{'}'}
                                        Near Fiji
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-japan" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-japan" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Japan" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/jp.png" />{'{'}" "{'}'}
                                        Near Japan
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-myanmar" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-myanmar" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Myanmar" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/mm.png" />{'{'}" "{'}'}
                                        Near Myanmar
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-sri-lanka" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-sri-lanka" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Sri Lanka" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/lk.png" />{'{'}" "{'}'}
                                        Near Sri Lanka
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-laos" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-laos" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Laos" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/la.png" />{'{'}" "{'}'}
                                        Near Laos
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-cambodia" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-cambodia" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Cambodia" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/kh.png" />{'{'}" "{'}'}
                                        Near Cambodia
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-cyprus" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-cyprus" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Cyprus" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/cy.png" />{'{'}" "{'}'}
                                        Near Cyprus
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-belgium" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-belgium" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Belgium" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/be.png" />{'{'}" "{'}'}
                                        Near Belgium
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-uruguay" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-uruguay" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Uruguay" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/uy.png" />{'{'}" "{'}'}
                                        Near Uruguay
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-malta" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-malta" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Malta" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/mt.png" />{'{'}" "{'}'}
                                        Near Malta
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-bosnia" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-bosnia" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Bosnia" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/ba.png" />{'{'}" "{'}'}
                                        Near Bosnia
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-moldova" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-moldova" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Moldova" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/md.png" />{'{'}" "{'}'}
                                        Near Moldova
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-china" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-china" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near China" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/cn.png" />{'{'}" "{'}'}
                                        Near China
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-kazakhstan" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-kazakhstan" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Kazakhstan" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/kz.png" />{'{'}" "{'}'}
                                        Near Kazakhstan
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-jamaica" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-jamaica" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Jamaica" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/jm.png" />{'{'}" "{'}'}
                                        Near Jamaica
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-guatemala" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-guatemala" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Guatemala" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/gt.png" />{'{'}" "{'}'}
                                        Near Guatemala
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-switzerland" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-switzerland" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Switzerland" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/ch.png" />{'{'}" "{'}'}
                                        Near Switzerland
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-suriname" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-suriname" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Suriname" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/sr.png" />{'{'}" "{'}'}
                                        Near Suriname
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-ireland" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-ireland" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Ireland" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/ie.png" />{'{'}" "{'}'}
                                        Near Ireland
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-jordan" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-jordan" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Jordan" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/jo.png" />{'{'}" "{'}'}
                                        Near Jordan
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-montenegro" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-montenegro" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Montenegro" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/me.png" />{'{'}" "{'}'}
                                        Near Montenegro
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-hong-kong" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-hong-kong" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Hong Kong" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/hk.png" />{'{'}" "{'}'}
                                        Near Hong Kong
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-kenya" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-kenya" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Kenya" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/ke.png" />{'{'}" "{'}'}
                                        Near Kenya
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-maldives" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-maldives" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Maldives" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/mv.png" />{'{'}" "{'}'}
                                        Near Maldives
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-denmark" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-denmark" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Denmark" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/dk.png" />{'{'}" "{'}'}
                                        Near Denmark
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-bahrain" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-bahrain" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Bahrain" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/bh.png" />{'{'}" "{'}'}
                                        Near Bahrain
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-mauritius" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-mauritius" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Mauritius" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/mu.png" />{'{'}" "{'}'}
                                        Near Mauritius
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-guyana" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-guyana" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Guyana" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/gy.png" />{'{'}" "{'}'}
                                        Near Guyana
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-bangladesh" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-bangladesh" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Bangladesh" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/bd.png" />{'{'}" "{'}'}
                                        Near Bangladesh
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-zimbabwe" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-zimbabwe" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Zimbabwe" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/zw.png" />{'{'}" "{'}'}
                                        Near Zimbabwe
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-italy" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-italy" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Italy" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/it.png" />{'{'}" "{'}'}
                                        Near Italy
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-paraguay" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-paraguay" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Paraguay" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/py.png" />{'{'}" "{'}'}
                                        Near Paraguay
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-trinidad-and-tobago" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-trinidad-and-tobago" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Trinidad and Tobago" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/tt.png" />{'{'}" "{'}'}
                                        Near Trinidad and Tobago
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-dominican-republic" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-dominican-republic" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Dominican Republic" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/do.png" />{'{'}" "{'}'}
                                        Near Dominican Republic
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-tonga" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-tonga" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Tonga" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/to.png" />{'{'}" "{'}'}
                                        Near Tonga
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-zambia" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-zambia" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Zambia" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/zm.png" />{'{'}" "{'}'}
                                        Near Zambia
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-armenia" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-armenia" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Armenia" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/am.png" />{'{'}" "{'}'}
                                        Near Armenia
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-botswana" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-botswana" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Botswana" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/bw.png" />{'{'}" "{'}'}
                                        Near Botswana
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-angola" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-angola" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Angola" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/ao.png" />{'{'}" "{'}'}
                                        Near Angola
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-tunisia" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-tunisia" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Tunisia" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/tn.png" />{'{'}" "{'}'}
                                        Near Tunisia
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-aruba" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-aruba" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Aruba" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/aw.png" />{'{'}" "{'}'}
                                        Near Aruba
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-brunei" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-brunei" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Brunei" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/bn.png" />{'{'}" "{'}'}
                                        Near Brunei
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-united-arab-emirates" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-united-arab-emirates" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near United Arab Emirates" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/ae.png" />{'{'}" "{'}'}
                                        Near United Arab Emirates
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-iceland" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-iceland" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Iceland" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/is.png" />{'{'}" "{'}'}
                                        Near Iceland
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-nepal" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-nepal" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Nepal" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/np.png" />{'{'}" "{'}'}
                                        Near Nepal
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-finland" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-finland" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Finland" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/fi.png" />{'{'}" "{'}'}
                                        Near Finland
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-congo" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-congo" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Congo" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/cg.png" />{'{'}" "{'}'}
                                        Near Congo
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-sierra-leone" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-sierra-leone" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Sierra Leone" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/sl.png" />{'{'}" "{'}'}
                                        Near Sierra Leone
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-pakistan" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-pakistan" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Pakistan" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/pk.png" />{'{'}" "{'}'}
                                        Near Pakistan
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-azerbaijan" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-azerbaijan" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Azerbaijan" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/az.png" />{'{'}" "{'}'}
                                        Near Azerbaijan
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-namibia" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-namibia" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Namibia" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/na.png" />{'{'}" "{'}'}
                                        Near Namibia
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-panama" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-panama" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Panama" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/pa.png" />{'{'}" "{'}'}
                                        Near Panama
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-dr-congo" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-dr-congo" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near DR Congo" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/cd.png" />{'{'}" "{'}'}
                                        Near DR Congo
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-belize" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-belize" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Belize" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/bz.png" />{'{'}" "{'}'}
                                        Near Belize
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-nigeria" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-nigeria" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Nigeria" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/ng.png" />{'{'}" "{'}'}
                                        Near Nigeria
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-israel" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-israel" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Israel" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/il.png" />{'{'}" "{'}'}
                                        Near Israel
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-madagascar" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-madagascar" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Madagascar" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/mg.png" />{'{'}" "{'}'}
                                        Near Madagascar
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-senegal" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-senegal" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Senegal" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/sn.png" />{'{'}" "{'}'}
                                        Near Senegal
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-north-macedonia" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-north-macedonia" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near North Macedonia" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/mk.png" />{'{'}" "{'}'}
                                        Near North Macedonia
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-bolivia" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-bolivia" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Bolivia" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/bo.png" />{'{'}" "{'}'}
                                        Near Bolivia
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-samoa" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-samoa" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Samoa" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/ws.png" />{'{'}" "{'}'}
                                        Near Samoa
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-algeria" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-algeria" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Algeria" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/dz.png" />{'{'}" "{'}'}
                                        Near Algeria
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-kosovo" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-kosovo" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Kosovo" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/xk.png" />{'{'}" "{'}'}
                                        Near Kosovo
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-norway" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-norway" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Norway" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/no.png" />{'{'}" "{'}'}
                                        Near Norway
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-guam" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-guam" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Guam" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/gu.png" />{'{'}" "{'}'}
                                        Near Guam
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-guinea" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-guinea" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Guinea" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/gn.png" />{'{'}" "{'}'}
                                        Near Guinea
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-gambia" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-gambia" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Gambia" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/gm.png" />{'{'}" "{'}'}
                                        Near Gambia
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-malawi" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-malawi" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Malawi" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/mw.png" />{'{'}" "{'}'}
                                        Near Malawi
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-costa-rica" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-costa-rica" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Costa Rica" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/cr.png" />{'{'}" "{'}'}
                                        Near Costa Rica
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-puerto-rico" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-puerto-rico" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Puerto Rico" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/pr.png" />{'{'}" "{'}'}
                                        Near Puerto Rico
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-uganda" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-uganda" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Uganda" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/ug.png" />{'{'}" "{'}'}
                                        Near Uganda
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-lesotho" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-lesotho" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Lesotho" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/ls.png" />{'{'}" "{'}'}
                                        Near Lesotho
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-greenland" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-greenland" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Greenland" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/gl.png" />{'{'}" "{'}'}
                                        Near Greenland
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-rwanda" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-rwanda" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Rwanda" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/rw.png" />{'{'}" "{'}'}
                                        Near Rwanda
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-burkina-faso" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-burkina-faso" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Burkina Faso" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/bf.png" />{'{'}" "{'}'}
                                        Near Burkina Faso
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-uzbekistan" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-uzbekistan" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Uzbekistan" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/uz.png" />{'{'}" "{'}'}
                                        Near Uzbekistan
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-el-salvador" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-el-salvador" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near El Salvador" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/sv.png" />{'{'}" "{'}'}
                                        Near El Salvador
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-east-timor" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-east-timor" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near East Timor" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/tl.png" />{'{'}" "{'}'}
                                        Near East Timor
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-ghana" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-ghana" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Ghana" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/gh.png" />{'{'}" "{'}'}
                                        Near Ghana
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-andorra" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-andorra" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Andorra" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/ad.png" />{'{'}" "{'}'}
                                        Near Andorra
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-saudi-arabia" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-saudi-arabia" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Saudi Arabia" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/sa.png" />{'{'}" "{'}'}
                                        Near Saudi Arabia
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-venezuela" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-venezuela" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Venezuela" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/ve.png" />{'{'}" "{'}'}
                                        Near Venezuela
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-sudan" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-sudan" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Sudan" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/sd.png" />{'{'}" "{'}'}
                                        Near Sudan
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-nicaragua" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-nicaragua" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Nicaragua" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/ni.png" />{'{'}" "{'}'}
                                        Near Nicaragua
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-haiti" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-haiti" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Haiti" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/ht.png" />{'{'}" "{'}'}
                                        Near Haiti
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-south-georgia-and-the-south-sandwich-islands" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-south-georgia-and-the-south-sandwich-islands" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near South Georgia and the South Sandwich Islands" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/gs.png" />{'{'}" "{'}'}
                                        Near South Georgia and the South Sandwich Islands
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-iran" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-iran" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Iran" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/ir.png" />{'{'}" "{'}'}
                                        Near Iran
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-mongolia" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-mongolia" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Mongolia" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/mn.png" />{'{'}" "{'}'}
                                        Near Mongolia
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-ethiopia" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-ethiopia" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Ethiopia" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/et.png" />{'{'}" "{'}'}
                                        Near Ethiopia
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-eritrea" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-eritrea" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Eritrea" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/er.png" />{'{'}" "{'}'}
                                        Near Eritrea
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-tanzania" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-tanzania" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Tanzania" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/tz.png" />{'{'}" "{'}'}
                                        Near Tanzania
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-mauritania" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-mauritania" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Mauritania" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/mr.png" />{'{'}" "{'}'}
                                        Near Mauritania
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-north-korea" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-north-korea" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near North Korea" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/kp.png" />{'{'}" "{'}'}
                                        Near North Korea
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-gibraltar" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-gibraltar" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Gibraltar" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/gi.png" />{'{'}" "{'}'}
                                        Near Gibraltar
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-togo" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-togo" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Togo" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/tg.png" />{'{'}" "{'}'}
                                        Near Togo
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-kyrgyzstan" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-kyrgyzstan" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Kyrgyzstan" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/kg.png" />{'{'}" "{'}'}
                                        Near Kyrgyzstan
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-the-bahamas" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-the-bahamas" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near The Bahamas" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/bs.png" />{'{'}" "{'}'}
                                        Near The Bahamas
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-western-sahara" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-western-sahara" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Western Sahara" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/eh.png" />{'{'}" "{'}'}
                                        Near Western Sahara
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-kurdistan" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-kurdistan" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Kurdistan" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/ku.png" />{'{'}" "{'}'}
                                        Near Kurdistan
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-yemen" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-yemen" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Yemen" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/ye.png" />{'{'}" "{'}'}
                                        Near Yemen
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-tajikistan" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-tajikistan" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Tajikistan" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/tj.png" />{'{'}" "{'}'}
                                        Near Tajikistan
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-libya" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-libya" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Libya" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/ly.png" />{'{'}" "{'}'}
                                        Near Libya
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-south-sudan" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-south-sudan" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near South Sudan" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/ss.png" />{'{'}" "{'}'}
                                        Near South Sudan
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-monaco" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-monaco" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Monaco" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/mc.png" />{'{'}" "{'}'}
                                        Near Monaco
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-honduras" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-honduras" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Honduras" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/hn.png" />{'{'}" "{'}'}
                                        Near Honduras
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-solomon-islands" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-solomon-islands" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Solomon Islands" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/sb.png" />{'{'}" "{'}'}
                                        Near Solomon Islands
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-cape-verde" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-cape-verde" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Cape Verde" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/cv.png" />{'{'}" "{'}'}
                                        Near Cape Verde
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-luxembourg" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-luxembourg" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Luxembourg" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/lu.png" />{'{'}" "{'}'}
                                        Near Luxembourg
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-syria" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-syria" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Syria" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/sy.png" />{'{'}" "{'}'}
                                        Near Syria
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-tuvalu" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-tuvalu" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Tuvalu" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/tv.png" />{'{'}" "{'}'}
                                        Near Tuvalu
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-oman" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-oman" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Oman" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/om.png" />{'{'}" "{'}'}
                                        Near Oman
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-cameroon" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-cameroon" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Cameroon" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/cm.png" />{'{'}" "{'}'}
                                        Near Cameroon
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-cote-divoire" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-cote-divoire" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Cote d'Ivoire" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/ci.png" />{'{'}" "{'}'}
                                        Near Cote d'Ivoire
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-guadeloupe" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-guadeloupe" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Guadeloupe" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/gp.png" />{'{'}" "{'}'}
                                        Near Guadeloupe
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-vanuatu" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-vanuatu" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Vanuatu" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/vu.png" />{'{'}" "{'}'}
                                        Near Vanuatu
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-cayman-islands" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-cayman-islands" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Cayman Islands" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/ky.png" />{'{'}" "{'}'}
                                        Near Cayman Islands
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-turkmenistan" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-turkmenistan" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Turkmenistan" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/tm.png" />{'{'}" "{'}'}
                                        Near Turkmenistan
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-jersey" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-jersey" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Jersey" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/je.png" />{'{'}" "{'}'}
                                        Near Jersey
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-mozambique" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-mozambique" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Mozambique" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/mz.png" />{'{'}" "{'}'}
                                        Near Mozambique
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-saint-helena" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-saint-helena" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Saint Helena" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/sh.png" />{'{'}" "{'}'}
                                        Near Saint Helena
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-iraq" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-iraq" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Iraq" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/iq.png" />{'{'}" "{'}'}
                                        Near Iraq
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-papua-new-guinea" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-papua-new-guinea" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Papua New Guinea" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/pg.png" />{'{'}" "{'}'}
                                        Near Papua New Guinea
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-british-virgin-islands" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-british-virgin-islands" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near British Virgin Islands" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/vg.png" />{'{'}" "{'}'}
                                        Near British Virgin Islands
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-barbados" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-barbados" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Barbados" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/bb.png" />{'{'}" "{'}'}
                                        Near Barbados
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-qatar" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-qatar" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Qatar" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/qa.png" />{'{'}" "{'}'}
                                        Near Qatar
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-falkland-islands" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-falkland-islands" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Falkland Islands" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/fk.png" />{'{'}" "{'}'}
                                        Near Falkland Islands
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-bermuda" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-bermuda" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Bermuda" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/bm.png" />{'{'}" "{'}'}
                                        Near Bermuda
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-cook-islands" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-cook-islands" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Cook Islands" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/ck.png" />{'{'}" "{'}'}
                                        Near Cook Islands
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-sint-maarten" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-sint-maarten" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Sint Maarten" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/sx.png" />{'{'}" "{'}'}
                                        Near Sint Maarten
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-antarctica" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-antarctica" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Antarctica" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/aq.png" />{'{'}" "{'}'}
                                        Near Antarctica
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-united-states-virgin-islands" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-united-states-virgin-islands" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near United States Virgin Islands" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/vi.png" />{'{'}" "{'}'}
                                        Near United States Virgin Islands
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-antigua-and-barbuda" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-antigua-and-barbuda" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Antigua and Barbuda" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/ag.png" />{'{'}" "{'}'}
                                        Near Antigua and Barbuda
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-afghanistan" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-afghanistan" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Afghanistan" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/af.png" />{'{'}" "{'}'}
                                        Near Afghanistan
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-vatican-city" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-vatican-city" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Vatican City" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/va.png" />{'{'}" "{'}'}
                                        Near Vatican City
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-central-african-republic" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-central-african-republic" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Central African Republic" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/cf.png" />{'{'}" "{'}'}
                                        Near Central African Republic
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-bonaire" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-bonaire" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Bonaire" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/bq.png" />{'{'}" "{'}'}
                                        Near Bonaire
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-kuwait" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-kuwait" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Kuwait" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/kw.png" />{'{'}" "{'}'}
                                        Near Kuwait
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-somalia" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-somalia" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Somalia" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/so.png" />{'{'}" "{'}'}
                                        Near Somalia
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-mali" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-mali" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Mali" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/ml.png" />{'{'}" "{'}'}
                                        Near Mali
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-seychelles" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-seychelles" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Seychelles" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/sc.png" />{'{'}" "{'}'}
                                        Near Seychelles
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-niger" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-niger" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Niger" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/ne.png" />{'{'}" "{'}'}
                                        Near Niger
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-gabon" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-gabon" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Gabon" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/ga.png" />{'{'}" "{'}'}
                                        Near Gabon
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-french-guiana" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-french-guiana" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near French Guiana" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/gf.png" />{'{'}" "{'}'}
                                        Near French Guiana
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-djibouti" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-djibouti" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Djibouti" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/dj.png" />{'{'}" "{'}'}
                                        Near Djibouti
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-palestine" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-palestine" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Palestine" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/ps.png" />{'{'}" "{'}'}
                                        Near Palestine
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-new-caledonia" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-new-caledonia" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near New Caledonia" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/nc.png" />{'{'}" "{'}'}
                                        Near New Caledonia
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-liberia" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-liberia" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Liberia" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/lr.png" />{'{'}" "{'}'}
                                        Near Liberia
                                    </div>
                                    <div className="choice" data-filter-multiple-choice="true" data-filter-slug="near-chad" data-filter-slug-position="after" data-filter-multiple-choice-type="or" data-filter-target="near-chad" data-filter-type="greater-than" data-filter-min={1}>
                                        <img width={16} height={16} alt="Near Chad" className="lazyload emoji_flag" data-src="/assets/emoji_flag_fallback/td.png" />{'{'}" "{'}'}
                                        Near Chad
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="clear" />
                    <div className="filters-bottom-gradient" />
                </div> */}
            </div>

        );
    }
}

export default Apsp;
