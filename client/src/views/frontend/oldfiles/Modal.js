import React, { Component } from "react";

export class ModalSection extends Component {
  render() {
    return (
    <>
    <div className="modal item "></div><span className="modal-item-nav-left">‹</span><span
    className="modal-item-nav-right">›</span>
<div className="backdrop item">
    <div className="action-close-item-modal">&times;</div>
</div>
<div className="currency-switcher-floater action-change-localization">
    <div className="currency">USD ─ &#36;</div>
    <div className="units">°C</div>
    <div className="cost-mode">Nomad</div>
</div>
<div className="modal currency-switcher">
    <div className="select-wrapper"><select className="currency-switcher tooltip" title="Show prices in a different currency">
            <option disabled>──────────</option>
            <option selected value="USD">USD ─ $</option>
            <option value="BTC">BTC ─ ฿</option>
            <option value="SATS">SATS ─ 丰</option>
            <option value="ETH">ETH ─ Ξ</option>
            <option disabled>──────────</option>
            <option value="EUR">EUR ─ &euro;</option>
            <option value="CNY">CNY ─ &#165;</option>
            <option value="GBP">GBP ─ &pound;</option>
            <option value="AUD">AUD ─ $</option>
            <option disabled>──────────</option>
            <option disabled>──────────</option>
            <option value="ARS">ARS ─ Ar&#36;</option>
            <option value="AUD">AUD ─ A&#36;</option>
            <option value="BRL">BRL ─ &#82;&#36;</option>
            <option value="BGN">BGN ─ &#1083;&#1074;</option>
            <option value="BDT">BDT ─ ৳</option>
            <option value="BTC">BTC ─ m฿</option>
            <option value="CAD">CAD ─ C&#36;</option>
            <option value="CLP">CLP ─ </option>
            <option value="CNY">CNY ─ &#165;</option>
            <option value="COP">COP ─ CO&#36;</option>
            <option value="CRC">CRC ─ &#8353;</option>
            <option value="HRK">HRK ─ &#107;&#110;</option>
            <option value="CZK">CZK ─ &#75;&#269;</option>
            <option value="DKK">DKK ─ &#107;&#114;</option>
            <option value="AED">AED ─ د.إ</option>
            <option value="EUR">EUR ─ &#8364;</option>
            <option value="ETH">ETH ─ mΞ</option>
            <option value="HKD">HKD ─ HK&#36;</option>
            <option value="HUF">HUF ─ &#70;&#116;</option>
            <option value="INR">INR ─ ₹</option>
            <option value="IDR">IDR ─ &#82;&#112;</option>
            <option value="ILS">ILS ─ &#8362;</option>
            <option value="JPY">JPY ─ &#165;</option>
            <option value="MYR">MYR ─ &#82;&#77;</option>
            <option value="MXN">MXN ─ &#36;</option>
            <option value="MAD">MAD ─ .د.م.</option>
            <option value="NTD">NTD ─ NT$</option>
            <option value="NZD">NZD ─ NZ&#36;</option>
            <option value="NOK">NOK ─ &#107;&#114;</option>
            <option value="PEN">PEN ─ &#83;&#47;&#46;</option>
            <option value="PHP">PHP ─ &#8369;</option>
            <option value="PLN">PLN ─ &#122;&#322;</option>
            <option value="GBP">GBP ─ &#163;</option>
            <option value="RON">RON ─ &#108;&#101;&#105;</option>
            <option value="RUB">RUB ─ &#1088;&#1091;&#1073;</option>
            <option value="SAR">SAR ─ &#65020;</option>
            <option value="SGD">SGD ─ S&#36;</option>
            <option value="ZAR">ZAR ─ &#82;</option>
            <option value="KRW">KRW ─ &#8361;</option>
            <option value="SEK">SEK ─ &#107;&#114;</option>
            <option value="CHF">CHF ─ CHF</option>
            <option value="THB">THB ─ &#3647;</option>
            <option value="TRY">TRY ─ ₺</option>
            <option value="UAH">UAH ─ &#8372;</option>
            <option value="USD">USD ─ &#36;</option>
            <option value="UYU">UYU ─ &#36;&#85;</option>
            <option value="VND">VND ─ &#8363;</option>
        </select></div><select className="units-switcher">
        <option value="metric" selected>°C / km</option>
        <option value="imperial">°F / mi</option>
    </select><br /><select className="cost-mode-switcher tooltip"
        title="Switch the cost per month shown to match your lifestyle">
        <option value="cost_for_nomad" selected>Cost for a nomad</option>
        <option value="cost_for_expat">Cost for an expat</option>
        <option value="cost_for_local">Cost for a local</option>
        <option value="cost_for_family">Cost for a family</option>
    </select>
</div>
<div className="backdrop currency-switcher"></div>
<div className="loading_spinner_2018 loading_spinner-general">
    <div><svg className="loader_spinner_svg" viewBox="25 25 50 50">
            <circle className="loader_spinner_circle" cx="50" cy="50" r="22" fill="none"></circle>
            <circle className="loader_spinner_circle loader_spinner_circle--spinner" cx="50" cy="50" r="22" fill="none">
            </circle>
        </svg></div>
    <div className="loading_message"></div>
</div>
<div className="modal login ">
   
    <div className="login-container">
        <span className="action-close-login-modal">&times;</span>
        <div className="side">
            <div className="box"><input type="text" autocomplete="off" className="username-or-email"
                    placeholder="Email, username or login link" />
                <div className="button reverse red action-login-by-username-or-email">Log in</div>
                <p className="forgot-username-text" style={{margin:"14px auto", maxWidth:"600px", }}>Can't login? <a
                        href="/faq#cannot_login">See the FAQ</a></p>

            </div>
        </div>
    </div>
</div>


  <div className="backdrop modal-pay-backdrop" />
  <div className="modal modal-pay">
    <div className="modal-pay-top-bg">
      <div style={{background: '#000', opacity: '0.35', left: 0, top: 0, width: '100%', height: '100%', position: 'absolute'}} />
      <div className="modal-pay-top-bg-head" />
    </div><span className="action-close-modal-pay">×</span>
    <div className="modal-pay-container premium-plan-selected">
      <div className="left put_benefits_below_on_mobile">
        <div className="modal-pay-head" style={{marginBottom: '0.5em'}}>Join <img alt="Nomad List" src="./assets/logo.svg" className="logo" /> Nomad List <sup style={{fontSize: '12px', marginLeft: '-8px', opacity: '0.75', marginTop: '-3px'}} /></div>
        <div className="modal-pay-subhead basic" style={{marginTop: '14px', marginBottom: '14px'}}><a className="modal-pay-avatar-a" href="/lisbon">
            <div className="avatar" style={{zIndex: 10, backgroundImage: 'url("https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=200,height=200,quality=25/https://nomadlist.com/assets/img/places/lisbon-portugal.jpg")'}}>
            </div>
          </a><a className="modal-pay-avatar-a" href="/madeira">
            <div className="avatar" style={{zIndex: 9, backgroundImage: 'url("https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=200,height=200,quality=25/https://nomadlist.com/assets/img/places/madeira-portugal.jpg")'}}>
            </div>
          </a><a className="modal-pay-avatar-a" href="/porto">
            <div className="avatar" style={{zIndex: 8, backgroundImage: 'url("https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=200,height=200,quality=25/https://nomadlist.com/assets/img/places/porto-portugal.jpg")'}}>
            </div>
          </a><a className="modal-pay-avatar-a" href="/ericeira">
            <div className="avatar" style={{zIndex: 7, backgroundImage: 'url("https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=200,height=200,quality=25/https://nomadlist.com/assets/img/places/ericeira-portugal.jpg")'}}>
            </div>
          </a><a className="modal-pay-avatar-a" href="/canggu">
            <div className="avatar" style={{zIndex: 6, backgroundImage: 'url("https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=200,height=200,quality=25/https://nomadlist.com/assets/img/places/canggu-bali-indonesia.jpg")'}}>
            </div>
          </a><a className="modal-pay-avatar-a" href="/sao-paulo">
            <div className="avatar" style={{zIndex: 5, backgroundImage: 'url("https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=200,height=200,quality=25/https://nomadlist.com/assets/img/places/sao-paulo-brazil.jpg")'}}>
            </div>
          </a><a className="modal-pay-avatar-a" href="/prague">
            <div className="avatar" style={{zIndex: 4, backgroundImage: 'url("https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=200,height=200,quality=25/https://nomadlist.com/assets/img/places/prague-czechia.jpg")'}}>
            </div>
          </a><a className="modal-pay-avatar-a" href="/cape-town">
            <div className="avatar" style={{zIndex: 3, backgroundImage: 'url("https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=200,height=200,quality=25/https://nomadlist.com/assets/img/places/cape-town-south-africa.jpg")'}}>
            </div>
          </a><a className="modal-pay-avatar-a" href="/miami">
            <div className="avatar" style={{zIndex: 2, backgroundImage: 'url("https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=200,height=200,quality=25/https://nomadlist.com/assets/img/places/miami-fl-united-states.jpg")'}}>
            </div>
          </a></div>
        <div className="modal-pay-subhead premium" style={{marginTop: '14px', marginBottom: '14px'}}>
          <div className="modal-pay-avatar-a action-sign-up" style={{textDecoration: 'none', display: 'inline-block'}}>
            <div className="avatar" style={{zIndex: 112, cursor: 'pointer', backgroundPosition: 'center', backgroundImage: 'url("https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=200,height=200,quality=25/https://nomadlist.com/assets/img/users/26f58617d2724c4e7f45add352f297a6.jpg")'}}>
            </div>
          </div>
          <div className="modal-pay-avatar-a action-sign-up" style={{textDecoration: 'none', display: 'inline-block'}}>
            <div className="avatar" style={{zIndex: 111, cursor: 'pointer', backgroundPosition: 'center', backgroundImage: 'url("https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=200,height=200,quality=25/https://nomadlist.com/assets/img/users/36cc2f59cd4bf13eaeca615e69e53e8d.jpg")'}}>
            </div>
          </div>
          <div className="modal-pay-avatar-a action-sign-up" style={{textDecoration: 'none', display: 'inline-block'}}>
            <div className="avatar" style={{zIndex: 110, cursor: 'pointer', backgroundPosition: 'center', backgroundImage: 'url("https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=200,height=200,quality=25/https://nomadlist.com/assets/img/users/e13e13da38e33e264d7c8e563abea611.jpg")'}}>
            </div>
          </div>
          <div className="modal-pay-avatar-a action-sign-up" style={{textDecoration: 'none', display: 'inline-block'}}>
            <div className="avatar" style={{zIndex: 109, cursor: 'pointer', backgroundPosition: 'center', backgroundImage: 'url("https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=200,height=200,quality=25/https://nomadlist.com/assets/img/users/9e5befd2f1a22c62bab83827a512751c.jpg")'}}>
            </div>
          </div>
          <div className="modal-pay-avatar-a action-sign-up" style={{textDecoration: 'none', display: 'inline-block'}}>
            <div className="avatar" style={{zIndex: 108, cursor: 'pointer', backgroundPosition: 'center', backgroundImage: 'url("https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=200,height=200,quality=25/https://nomadlist.com/assets/img/users/5383239d27d94a7815f95a63e5000785.jpg")'}}>
            </div>
          </div>
          <div className="modal-pay-avatar-a action-sign-up" style={{textDecoration: 'none', display: 'inline-block'}}>
            <div className="avatar" style={{zIndex: 107, cursor: 'pointer', backgroundPosition: 'center', backgroundImage: 'url("https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=200,height=200,quality=25/https://nomadlist.com/assets/img/users/7343b6348c8b15ce5fd36a0a981947b6.jpg")'}}>
            </div>
          </div>
          <div className="modal-pay-avatar-a action-sign-up" style={{textDecoration: 'none', display: 'inline-block'}}>
            <div className="avatar" style={{zIndex: 106, cursor: 'pointer', backgroundPosition: 'center', backgroundImage: 'url("https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=200,height=200,quality=25/https://nomadlist.com/assets/img/users/9a0f9121327f487a52ab93dfc4e3aff5.jpg")'}}>
            </div>
          </div>
          <div className="modal-pay-avatar-a action-sign-up" style={{textDecoration: 'none', display: 'inline-block'}}>
            <div className="avatar" style={{zIndex: 105, cursor: 'pointer', backgroundPosition: 'center', backgroundImage: 'url("https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=200,height=200,quality=25/https://nomadlist.com/assets/img/users/522f10b2aa95550af01ce71d31295e88.jpg")'}}>
            </div>
          </div>
          <div className="modal-pay-avatar-a action-sign-up" style={{textDecoration: 'none', display: 'inline-block'}}>
            <div className="avatar" style={{zIndex: 104, cursor: 'pointer', backgroundPosition: 'center', backgroundImage: 'url("https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=200,height=200,quality=25/https://nomadlist.com/assets/img/users/f108e5738e6bd099461a7e7edd2cbe8b.jpg")'}}>
            </div>
          </div><br />
        </div>

        <div className="modal-pay-list">
          <div className="modal-pay-list-gradient" />
          <div className="modal-pay-list-scroller">
            <div className="modal-pay-list-item basic"><strong className="sign-up-notice-free-limit-reached" style={{color: 'var(--brand-color)'}}>🛑 You've reached your free usage limit, log in or sign
                up to get unlimited access forever</strong></div>
            <div className="modal-pay-list-item modal-pay-list-item-first" />
            <div className="modal-pay-list-item premium">✅ <a href="/community" target="_blank">Join a global
                community of 31,105</a> remote workers living around the world<img src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=800,quality=25/https://nomadlist.com/assets/join-modal-community.png?1634031163" />
            </div>
            <div className="modal-pay-list-item premium">✅ <a target="_blank" href="/userApi.php?action=redirect_to_discord">Get up-to-date COVID travel info</a> from
              people in the places you want to go (like entry requirements)<img src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=800,quality=25/https://nomadlist.com/assets/join-modal-covid.png?1634029102" />
            </div>
            <div className="modal-pay-list-item basic">✅ <a target="_blank" href="/scores/canggu">Get unlimited
                members-only access to cities in 195+ countries</a> and research the best places to live,
              travel and work remotely<img src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=800,quality=25/https://nomadlist.com/assets/join-modal-data.png?1634029531" />
            </div>
            <div className="modal-pay-list-item premium">✅ <a target="_blank" className="allow-link" href="/userApi.php?action=redirect_to_discord">Get access to the paid Nomad List Chat on
                Slack Pro + Discord</a> and find your community on the road (17,962 messages sent this
              month)<img src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=800,quality=25/https://nomadlist.com/assets/join-modal-discord.png?1634030687" />
            </div>
            <div className="modal-pay-list-item basic">✅ <a target="_blank" href="/faq#refund">7-day money back
                guarantee</a>. Not satisfied? Self-refund and get your money back, no questions asked. <img src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=800,quality=25/https://nomadlist.com/assets/join-modal-refund.png?1634031623" />
            </div>
            <div className="modal-pay-list-item premium">✅ <a target="_blank" href="/meetups">Attend Nomad List
                meetups in remote hubs</a> and make friends (182 meetups per year, in total 7,952 people
              attended)<img src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=800,quality=25/https://nomadlist.com/assets/img/meetups/2021-10-14_lisbon-portugal_c64f36cd1deb51af4acf712a7c772ff5_1634210213.5655_80.jpg" />
            </div>
            <div className="modal-pay-list-item premium">✅ <a target="_blank" className="allow-link" href="/userApi.php?action=redirect_to_discord">Learn how to get visas &amp; residence
                permits</a> from other people who been through the process</div>
            <div className="modal-pay-list-item premium">✅ <a target="_blank" href="/dating">Meet new and
                interesting people</a> for dating or friends and get matched based on your interests and the
              places you visit(ed)<img src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=800,quality=25/https://nomadlist.com/assets/join-modal-dating.png?1634031074" />
            </div>
            <div className="modal-pay-list-item premium">✅ <a target="_blank" href="/@john">Keep track of your
                travels</a> to record where you've been, where you're going and meet people there<img src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=800,quality=25//assets/join-modal-profile.png?1634028384" />
            </div>
            <div className="modal-pay-list-item basic">✅ <a target="_blank" href="/cities">Unlock hundreds of
                filters</a> to pick destinations on exactly your preferences and find your perfect place to
              live and travel<img style={{style: 'border-radius:none !important', boxShadow: 'none !important'}} src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=800,quality=25//assets/join-modal-filters.png?1634028446" />
            </div>
            <div className="modal-pay-list-item basic">✅ <a target="_blank" href="/climate-finder">Use the Climate
                Finder</a> to search cities based on future weather and air quality</div>
            <div className="modal-pay-list-item basic">✅ <a target="_blank" href="/fire">Use the FIRE retirement
                tool</a> to find places to retire early</div>
            <div className="modal-pay-list-item premium">✅ Awarded <a rel="noopener" target="_blank" href="https://www.producthunt.com/stories/announcing-the-2019-golden-kitty-award-winners">Best
                Remote Work Tool</a> and <a rel="noopener" href="https://www.producthunt.com/topics/travel?order=most-upvoted" target="_blank">Best
                Travel App</a><img src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=crop,width=800,quality=25/https://nomadlist.com/assets/join-modal-ph-award.png?1634031411" />
            </div>
            <div className="modal-pay-list-item premium">✅ <a target="_blank" className="allow-link" href="/userApi.php?action=redirect_to_discord">Be the first to receive new remote jobs</a>
              on our Nomad List Chat</div>
            <div className="modal-pay-list-item basic">✅ <a target="_blank" href="/faq#money">Remove all ads</a> and
              support the development of Nomad List financially</div>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="modal-pay-head" style={{marginBottom: '0.5em'}} />
        <div className="action-open-intro-video"><img src="./assets/pixel.gif" className="lazyload" alt="Explore the world" data-src="https://videodelivery.net/ed83ec0012330711ea783fabd47efdff/thumbnails/thumbnail.jpg?width=300" /><svg className="play-icon" fill="#fff" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 60 60" style={{enableBackground: 'new 0 0 60 60'}} xmlSpace="preserve">
            <path d="M30,0C13.458,0,0,13.458,0,30s13.458,30,30,30s30-13.458,30-30S46.542,0,30,0z M45.563,30.826l-22,15	C23.394,45.941,23.197,46,23,46c-0.16,0-0.321-0.038-0.467-0.116C22.205,45.711,22,45.371,22,45V15c0-0.371,0.205-0.711,0.533-0.884	c0.328-0.174,0.724-0.15,1.031,0.058l22,15C45.836,29.36,46,29.669,46,30S45.836,30.64,45.563,30.826z" />
          </svg></div>
        <div className="modal-pay-plan-switcher">
          <div className="basic">Lite Membership</div>
          <div className="premium">Full Membership</div>
        </div>
        <div className="plans basic" data-plan-name="Lite membership without social features">
          <div className="plan basic best" data-name="forever" data-plan="14_99_forever" data-price="14.99">
            <p><strong>One-time-payment: <s style={{textDecorationThickness: '2px'}}>$29.98</s> $14.99</strong>
              <span className="badge-circle" style={{display: 'inline-block'}}>💫2021 NEW YEAR 0% off</span>
            </p>
            <p className="small" style={{opacity: 1}}>Billed once. Then never again. 7-day money back.</p>
          </div>
          <div style={{clear: 'both'}} />
        </div>
        <div style={{display: 'none'}} className="plans premium" data-plan-name>
          <div className="plan best" data-name="forever" data-plan="99.99_forever" data-price="99.99">
            <p><strong>One-time-payment: <s style={{textDecorationThickness: '2px'}}>$199.98</s>
                $99.99</strong>&nbsp;<span className="badge-circle" style={{display: 'inline-block'}}>💫2021 NEW YEAR
                50% off</span></p>
            <p className="small" style={{opacity: 1}}>Billed once. Then never again. 7-day money back.</p>
          </div>
          <div style={{clear: 'both'}} />
        </div><span className="members-joined-today" style={{display: 'block', marginBottom: '14px', fontSize: '0.9em', marginTop: 0, color: '#ff4742', fontWeight: 'var(--bold)', padding: '3px', border: '1px solid #ff4742', borderRadius: '6px'}}>16
          people joined today</span>
        <div className="email_and_join_box"><input type="email" className="input_email" defaultValue placeholder="Type your email..." />
          <div className="input_email_error input_error">&nbsp;</div>
          <div className="button red reverse action-modal-pay-checkout">Join Nomad List<div className="modal-pay-checkout-button-subtext">Community plan</div>
          </div>
        </div>
        <p style={{fontSize: '12px'}}>Already a member? <a href="/login" className="action-login" style={{color: '#ff4742'}}>Log
            in.</a> Questions? <a href="/faq" style={{color: '#ff4742'}}>See the FAQ.</a> Why isn't <a href="/faq#free" target="_blank" style={{color: '#ff4742'}}>Nomad List free?</a>. By signing up, you
          agree to our <a href="/faq#tos" style={{color: '#ff4742'}}>TOS</a>.</p>
      </div>
    </div>
    <div className="modal-pay-featured members-work-at">
      <p style={{fontSize: '10px', opacity: '0.5', margin: 0, marginRight: '7px', display: 'inline-block', verticalAlign: 'middle', textAlign: 'right'}}>
        Nomad Listers<br /> work remotely at</p><img src="./assets/pixel.gif" style={{transform: 'translateY(-7%)', filter: 'none !important', opacity: '1 !important'}} className="lazyload" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=cover,height=30,quality=25/https://nomadlist.com/assets/featured/apple.png?1621068742" /><img src="./assets/pixel.gif" style={{transform: 'translateY(3%)', filter: 'none !important', opacity: '1 !important'}} className="lazyload" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=cover,height=30,quality=25/https://nomadlist.com/assets/featured/google.png?1621061496" /><img src="./assets/pixel.gif" style={{transform: 'translateY(2%)', filter: 'none !important', opacity: '1 !important'}} className="lazyload" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=cover,height=30,quality=25/https://nomadlist.com/assets/featured/microsoft.png?1621077606" /><img src="./assets/pixel.gif" style={{transform: 'translateY(5%)', filter: 'none !important', opacity: '1 !important'}} className="lazyload" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=cover,height=30,quality=25/https://nomadlist.com/assets/featured/stripe.png?1621061496" /><img src="./assets/pixel.gif" style={{transform: 'translateY(-12%)', filter: 'none !important', opacity: '1 !important'}} className="lazyload" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=cover,height=30,quality=25/https://nomadlist.com/assets/featured/coinbase.png?1621071448" /><img src="./assets/pixel.gif" style={{transform: 'translateY(0%)', filter: 'none !important', opacity: '1 !important'}} className="lazyload" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=cover,height=30,quality=25/https://nomadlist.com/assets/featured/airbnb.png?1621061496" /><img src="./assets/pixel.gif" style={{transform: 'translateY(-2%)', filter: 'none !important', opacity: '1 !important'}} className="lazyload" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=cover,height=30,quality=25/https://nomadlist.com/assets/featured/slack.png?1621061496" /><img src="./assets/pixel.gif" style={{transform: 'translateY(0%)', filter: 'none !important', opacity: '1 !important'}} className="lazyload" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=cover,height=30,quality=25/https://nomadlist.com/assets/featured/twitter.png?1621061496" /><img src="./assets/pixel.gif" style={{transform: 'translateY(0%)', filter: 'none !important', opacity: '1 !important'}} className="lazyload" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=cover,height=30,quality=25/https://nomadlist.com/assets/featured/wordpress.png?1621257833" /><img src="./assets/pixel.gif" style={{transform: 'translateY(0%)', filter: 'none !important', opacity: '1 !important'}} className="lazyload" data-src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=cover,height=30,quality=25/https://nomadlist.com/assets/featured/ghost.png?1621257833" />
    </div>
  </div>
  <div className="backdrop modal-user-details-backdrop" />
  <div className="modal modal-user-details"><canvas id="profile-photo-facefinder-canvas" width={400} height={400} style={{display: 'none'}} />
    <div className="container">
      <div className="big-header">🥳 Welcome to Nomad List!</div>
      <div className="details-box">
        <div className="mini-header">Username*</div><input type="text" className="input_username" defaultValue placeholder="Username" maxLength={15} />
        <div className="subline">Your username is used across the site, for example in your profile URL:
          https://nomadlist.com/@username. You can change it later.</div>
        <div className="input_username_error input_error" />
        <div className="mini-header">Birth date*</div><input type="date" className="input_date_of_birth" placeholder="YYYY-MM-DD" defaultValue />
        <div className="subline">We use your birth date to better match you with other nomads and personalize
          destination recommendations to you. As well as measure the changing demographics of nomads.</div>
        <div className="mini-header">About you</div><textarea className="textarea_bio" placeholder="About you" maxLength={1000} defaultValue={""} />
        <div className="subline">Let people know things you like to do, where you're from, where you work, where you'd
          like to visit, what's your favorite food etc.!</div>
      </div>
      <div className="profile-photo-box">
        <div className="mini-header">Profile photo</div>
        <div className="profile-photo-preview-and-uploader"><img className="profile-photo-preview" src="./assets/no-profile-photo.png" /><input type="file" className="profile-photo-uploader" accept=".jpg,.jpeg,.png" /></div>
        <div className="button red">Upload an image</div>
        <div className="subline">Please set a real color profile photo of just your face.</div>
      </div>
      <div className="button reverse red action-modal-user-details-save">Save your profile</div>
    </div>
  </div>
  <div className="backdrop modal-welcome-backdrop" />
  <div className="modal modal-welcome">
    <div className="modal-welcome-head">Welcome to <img width={50} height={50} style={{verticalAlign: 'middle'}} alt="Nomad List" src="./assets/logo.svg" className="logo" /> Nomad List</div>
    <div className="container">
      <p><strong>💖 Thanks for signing up! I hope you like my site. I put a lot of effort into making it.</strong></p>
      <p>📬 First, please go to your email and click the confirm link first to verify your email address, check your
        spam folder if you can't find it</p>
      <p>💌 After you confirm your email we'll send you an email with more info</p>
      <p>👩‍💻 You can start using Nomad List's member-only features now!</p>
      <div className="button action-modal-welcome-close">Let's go</div>
    </div>
  </div>
  <link rel="preconnect" data-auto-collect="false" onload="saLoaded()" href="https://sa.nomadlist.com" />
  <div className="notice-sign-up-to-unblur">✨ To see all <span className="results-count" /> results <div className="button red reverse action-sign-up-via-notice-sign-up-to-unblur action-sign-up" data-membership-type="basic" style={{display: 'inline'}}>Join Nomad List</div>
  </div>
  <div className="im_popup ">
    <div className="conversations_list_heading">Messages</div>
    <div className="conversations">
      <div className="conversation placeholder" />
    </div>
    <div className="conversation_heading"><img alt="Open IM list" src="./assets/chevron-left.svg" className="action-im-open-conversation-list" /> <span className="username" /></div>
    <div className="messages" />
    <div className="im-textbox-container"><input type="text" className="im-textbox" tabIndex={-1} placeholder="Write a message..." />
      <div className="button re action-im-send">Send</div>
    </div>
  </div>


    </>
    );
  }
}

export default ModalSection;

