import React, { Component } from "react";
import { Helmet } from "react-helmet";

// const dataScript1 = { "@context": "http://schema.org", "@type": "Organization", name: "Nomad List", naics: "4724", url: "https://nomadlist.com", logo: "https://nomadlist.com/assets/logo.svg"};
// const dataScript2 = {"@context": "http://schema.org", "@type": "WebSite", url: "https://nomadlist.com/", potentialAction: { "@type": "SearchAction", target: "https://nomadlist.com/search/{search_term_string}", "query-input": "required name=search_term_string" }};
export class HeadTags extends Component {
    render() {
        return (

            <Helmet>
                <meta charset="UTF-8" />
                <title>Project Nepal — Best Places to Live for Digital Nomads</title>
                <meta http-equiv="content-language" content="en-us" />
                <meta name="google" value="notranslate" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta property="fb:app_id" content="496534930523733" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="black" />
                <meta http-equiv="cleartype" content="on" />
                <meta name="HandheldFriendly" content="true" />
                <meta name="description"
                    content="Learn how to become a digital nomad and find the best places to live and work remotely as a location independent remote worker. Explore places based on cost of living, internet speed, weather and other metrics. For startups that work remotely and remote workers." />
                <meta property="og:title" content="Project Nepal" />
                <meta property="og:url" content="http://nomadlist.com/" />
                <meta property="og:description"
                    content="🌍 Go nomad: Join a global community of remote workers living around the world" />
                <meta property="og:video" content="https://nomadlist.com/assets/video-2019-480p.mp4" />
                <meta property="og:video:type" content="video/mp4" />
                <meta property="og:video:width" content="640" />
                <meta property="og:video:height" content="360" />
                <meta property="og:image" content="https://nomadlist.com/assets/media-2020-2.png?5" />
                <meta property="og:site_name" content="Project Nepal" />
                <meta property="og:type" content="website" />
                <meta name="google-site-verification" content="INTvRV5oUO_vyr6KsVSsgzUIRN1y52pUMV__lfxKlFo" />
                <link rel="image_src" href="https://nomadlist.com/assets/media-2020-2.png?5" />
                <link rel="search" type="application/opensearchdescription+xml" title="Project Nepal"
                    href="/opensearch.xml?1493194267" />
                {/* <script
            type="application/ld+json">{dataScript1}</script>
        <script
            type="application/ld+json">{dataScript2}</script> */}
                <link rel="icon"
                    href="https://nomadlist.com/cdn-cgi/image/format=auto,fit=cover,width=64,height=64,quality=100/https://nomadlist.com/assets/logo-trans.png"
                    type="image/x-icon" />
                <link rel="apple-touch-icon-precomposed" sizes="57x57" href="./assets/apple-touch-icon-57x57.png" />
                <link rel="apple-touch-icon-precomposed" sizes="114x114" href="./assets/apple-touch-icon-114x114.png" />
                <link rel="apple-touch-icon-precomposed" sizes="72x72" href="./assets/apple-touch-icon-72x72.png" />
                <link rel="apple-touch-icon-precomposed" sizes="144x144" href="./assets/apple-touch-icon-144x144.png" />
                <link rel="apple-touch-icon-precomposed" sizes="120x120" href="./assets/apple-touch-icon-120x120.png" />
                <link rel="apple-touch-icon-precomposed" sizes="152x152" href="./assets/apple-touch-icon-152x152.png" />
                <link href="./assets/apple-touch-startup-image-320x460.png" media="(device-width: 320px)"
                    rel="apple-touch-startup-image" />
                <link href="./assets/apple-touch-startup-image-640x920.png"
                    media="(device-width: 320px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image" />
                <link href="./assets/apple-touch-startup-image-768x1004.png"
                    media="(device-width: 768px) and (orientation: portrait)" rel="apple-touch-startup-image" />
                <link href="./assets/apple-touch-startup-image-748x1024.png"
                    media="(device-width: 768px) and (orientation: landscape)" rel="apple-touch-startup-image" />
                <link href="./assets/apple-touch-startup-image-1536x2008.png"
                    media="(device-width: 1536px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 2)"
                    rel="apple-touch-startup-image" />
                <meta name="apple-mobile-web-app-title" content="Nomad List" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@nomadlist" />
                <meta name="twitter:creator" content="@nomadlist" />
                <meta name="twitter:title" content="Nomad List" />
                <meta name="twitter:description"
                    content="🌍 Go nomad: Join a global community of remote workers living around the world" />
                <meta name="twitter:image:src" content="https://nomadlist.com/assets/media-2020-2.png?5" />
                <meta name="twitter:url" content="https://nomadlist.com//" />
                <script src="https://nomadlist.com/jquery.js"></script>
                <script>var imgQ = '25'; var showSignUpModalAfterVisitCount = 20; var showSignUpModalAfterFilterCount = 20;</script>
                <script>var userIsAdmin = null;</script>
                <meta http-equiv="last-modified" content="1635856400" />
                <meta name="last-modified" content="1635856400" /><span itemscope itemtype="http://schema.org/Organization"></span>

            </Helmet>
        );
    }
}

export default HeadTags;
