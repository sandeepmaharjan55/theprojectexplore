function consoleLog(msg) {
  if (typeof showConsoleLog !== "undefined") {
    if (window.location.hostname == "nomadlist.com" && !showConsoleLog) return;
  } else {
    if (window.location.hostname == "nomadlist.com") return;
  }
  console.log(msg);
}
var tooltipAjaxUserId;
var isLoggedIn = false;
var openItemModalLoadingSpinnerTimeout = setTimeout(function () {}, 0);
var modalItemFixBlurryOnNonRetinaBySettingExactPositioningResizeTimeout =
  setTimeout(function () {}, 10);
var activeSearch = null;
var previousSearch = "";
var modalCityCacheExpiry = strtotime("-72 hours");
var clickTabSignUpModalIncrementer = 0;
var gettingAutocompleteQueriesAJAX = false;
var tooltipUiTimeout = setTimeout(function () {}, 0);
var lazyloadTimeout;
var windowWidth = windowSize().width;
var windowHeight = windowSize().height;
if (typeof signUpAbTestVariation === "undefined") {
  var signUpAbTestVariation = "";
}
var defaultTab = "ranking";
if (typeof pageType === "undefined") pageType = "undefined";
if (typeof userLanguage === "undefined") {
  userLanguage = "EN";
}
var isChrome = navigator.userAgent.indexOf("Chrome") > -1;
var isIE = navigator.userAgent.indexOf("MSIE") > -1;
var isFirefox = navigator.userAgent.indexOf("Firefox") > -1;
var isSafari = navigator.userAgent.indexOf("Safari") > -1;
var isOpera = navigator.userAgent.indexOf("Presto") > -1;
var isMobile =
  /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
    navigator.userAgent.toLowerCase()
  );
if (isMobile) {
  document.documentElement.className += " is-mobile";
} else {
  document.documentElement.className += " is-not-mobile";
}
var isIOS = false;
if (isChrome && isSafari) {
  isSafari = false;
}
if (isMobile && isSafari) {
  isIOS = true;
}
var isSafariOSX = false;
if (!isIOS && isSafari) isSafariOSX = true;
var lazyloadItemTimeout = setTimeout(function () {}, 0);
var isIncognito = false;
function saLoaded() {
  if (window.sa_pageview) {
    window.sa_pageview();
  }
}
$(function () {
  if (
    !$("html").hasClass("logged-in") &&
    getCookie("visit-count") > showSignUpModalAfterVisitCount
  ) {
    $("html").addClass("limit-new-user-due-to-visit-count");
  }
  $("body").on(
    "click",
    ".action-show-sign-up-modal-if-limited-new-user",
    function (event) {
      if (
        !$("html").hasClass("logged-in") &&
        getCookie("visit-count") > showSignUpModalAfterVisitCount
      ) {
        $(".action-sign-up").click();
      }
    }
  );
  if (getQueryString("join") == "nomadlist") {
    $(".sign-up-notice-free-limit-reached").hide();
  }
  if (getQueryString("screenshot")) {
    $("html").addClass("screenshot");
  }
  try {
    if (getCookie("logged_in_hash")) {
      localStorage.setItem("logged_in_hash", getCookie("logged_in_hash"));
    }
    if (
      !getCookie("logged_in_hash") &&
      localStorage.getItem("logged_in_hash")
    ) {
      setCookie(
        "logged_in_hash",
        localStorage.getItem("logged_in_hash"),
        86400 * 365
      );
    }
  } catch (event) {}
  if ($(".notice-referral-discount-fixed").length) {
    $(".notice-referral-discount-fixed").bind("click", function () {
      $(this).fadeOut();
    });
    setTimeout(function () {
      $(".notice-referral-discount-fixed").fadeOut();
    }, 30000);
  }
  $("body").on("click", ".item-aux", function () {
    action = "ðŸŽŸ Clicked ad: " + $(this).find(".container").data("url");
    $.ajax({
      url: "/userApi.php",
      type: "POST",
      dataType: "json",
      data: {
        action: "log_user_activity",
        log_action: action,
        hash: md5(action + "xoyo"),
      },
      context: document.body,
    }).done(function (reply) {});
  });
  if (isSafari) $("html").addClass("isSafari");
  if (
    (getQueryString("join") == "nomadlist" ||
      getQueryString("upgrade") == "nomadlist") &&
    userUserType != "premium"
  ) {
    openSignUpModal("", "premium");
    if (getQueryString("email")) {
      $(".modal-pay .input_email").val(getQueryString("email"));
    }
    action =
      "ðŸ’³ Opened sign up modal via query string ?join=nomadlist " +
      "(AB variation: " +
      signUpAbTestVariation +
      ")";
    $.ajax({
      url: "/userApi.php",
      type: "POST",
      dataType: "json",
      data: {
        action: "log_user_activity",
        log_action: action,
        hash: md5(action + "xoyo"),
      },
      context: document.body,
    }).done(function (reply) {});
  }
  setTimeout(function () {
    lazyload();
  }, 500);
  if ($("html").hasClass("logged-in")) {
    isLoggedIn = true;
  }
  var userStoppedTypingInSearchInterval;
  if (getCookie("last_tested_internet_speed") != date("Y-m-d") + "_x") {
    setTimeout(function () {
      testUserInternetSpeed();
    }, 15000);
  } else {
  }
  $("body").on("dblclick", ".top-bar .brand", function (e) {
    window.location.href = "/";
  });
  $("body").on("dblclick", ".filter-actions .brand", function (e) {
    window.location.href = "/";
  });
  $("body").on("dblclick", ".top-bar .avatar", function (e) {
    if (typeof userUserType !== "undefined" && userUserType == "basic") {
      window.location.href = "/settings";
      return;
    }
    if (typeof userCompletedProfileSetup !== "undefined") {
      if (!userCompletedProfileSetup) {
        $(".action-complete-profile-setup").click();
        return;
      }
    }
    if (typeof userUsername !== "undefined") {
      window.location.href = "/@" + userUsername;
    }
  });
  $("body").on("click", ".action-modal-city-scroll-tabs-left", function () {
    consoleLog(
      $(".modal.item .tabs .ul").scrollLeft() +
        $(".modal.item .tabs .ul").width() +
        50,
      $(".modal.item .tabs .ul")[0].scrollWidth
    );
    if ($(".modal.item .tabs .ul").scrollLeft() - 250 <= 0) {
      $(".action-modal-city-scroll-tabs-left").hide();
    } else if (
      $(".modal.item .tabs .ul").scrollLeft() -
        250 +
        $(".modal.item .tabs .ul").width() +
        50 >
      0
    ) {
      $(".action-modal-city-scroll-tabs-left").show();
    }
    if (
      $(".modal.item .tabs .ul").scrollLeft() -
        250 +
        $(".modal.item .tabs .ul").width() +
        50 >=
      $(".modal.item .tabs .ul")[0].scrollWidth
    ) {
      $(".action-modal-city-scroll-tabs-right").hide();
    } else if (
      $(".modal.item .tabs .ul").scrollLeft() -
        250 +
        $(".modal.item .tabs .ul").width() +
        50 <=
      $(".modal.item .tabs .ul")[0].scrollWidth
    ) {
      $(".action-modal-city-scroll-tabs-right").show();
    }
    $(".modal.item .tabs .ul").animate(
      { scrollLeft: $(".modal.item .tabs .ul").scrollLeft() - 250 },
      function () {}
    );
  });
  $("body").on("click", ".action-modal-city-scroll-tabs-right", function () {
    consoleLog(
      $(".modal.item .tabs .ul").scrollLeft() +
        $(".modal.item .tabs .ul").width() +
        50,
      $(".modal.item .tabs .ul")[0].scrollWidth
    );
    if ($(".modal.item .tabs .ul").scrollLeft() + 250 <= 0) {
      $(".action-modal-city-scroll-tabs-left").hide();
    } else if (
      $(".modal.item .tabs .ul").scrollLeft() +
        250 +
        $(".modal.item .tabs .ul").width() +
        50 >
      0
    ) {
      $(".action-modal-city-scroll-tabs-left").show();
    }
    if (
      $(".modal.item .tabs .ul").scrollLeft() +
        250 +
        $(".modal.item .tabs .ul").width() +
        50 >=
      $(".modal.item .tabs .ul")[0].scrollWidth
    ) {
      $(".action-modal-city-scroll-tabs-right").hide();
    } else if (
      $(".modal.item .tabs .ul").scrollLeft() +
        250 +
        $(".modal.item .tabs .ul").width() +
        50 <=
      $(".modal.item .tabs .ul")[0].scrollWidth
    ) {
      $(".action-modal-city-scroll-tabs-right").show();
    }
    $(".modal.item .tabs .ul").animate(
      { scrollLeft: $(".modal.item .tabs .ul").scrollLeft() + 250 },
      function () {}
    );
  });
  $(".action-sign-up-via-notice-sign-up-to-unblur").bind("click", function () {
    openSignUpModal("", "basic");
    action =
      "ðŸ’³ Opened sign up modal via notice-sign-up-to-unblur " +
      "(AB variation: " +
      signUpAbTestVariation +
      ")";
    $.ajax({
      url: "/userApi.php",
      type: "POST",
      dataType: "json",
      data: {
        action: "log_user_activity",
        log_action: action,
        hash: md5(action + "xoyo"),
      },
      context: document.body,
    }).done(function (reply) {});
  });
  $(".new-user-hero .box input.email").bind("keyup", function (e) {
    if (e.which == 13) {
      $(".action-sign-up-via-new-user-hero").click();
    }
  });
  $(".action-sign-up-via-new-user-hero").bind("click", function () {
    $(".sign-up-notice-free-limit-reached").hide();
    $(".modal-pay .input_email").val($(".head-image .box input.email").val());
    $.ajax({
      url: "/userApi.php",
      type: "POST",
      dataType: "json",
      data: {
        action: "save_pre_signup_email",
        email: $(".head-image .box input.email").val(),
      },
      context: document.body,
    }).done(function (reply) {});
  });
  $(".backdrop-intro-video-player").bind("click", function () {
    $(".new-user-hero stream.bg").show();
    if (typeof $(".new-user-hero stream.bg")[0] !== "undefined") {
      if (typeof $(".new-user-hero stream.bg")[0].play !== "undefined") {
        $(".new-user-hero stream.bg")[0].play();
      }
    }
    $(".backdrop-intro-video-player").hide();
    $(".modal-intro-video-player").hide();
    if (typeof $(".modal-intro-video-player").get(0) !== "undefined") {
      if (typeof $(".modal-intro-video-player").get(0).pause !== "undefined") {
        $(".modal-intro-video-player").get(0).pause();
      }
    }
  });
  $(".action-open-intro-video").bind("click", function (event) {
    event.stopPropagation();
    $(".new-user-hero stream.bg").hide();
    if (typeof $(".new-user-hero stream.bg")[0] !== "undefined") {
      if (typeof $(".new-user-hero stream.bg")[0].play !== "undefined") {
        $(".new-user-hero stream.bg")[0].pause();
      }
    }
    $(".backdrop-intro-video-player").show();
    $(".modal-intro-video-player").show();
    if (!$(".modal-intro-video-player").attr("src")) {
      $(".modal-intro-video-player").attr(
        "src",
        $(".modal-intro-video-player source").data("src")
      );
      if (typeof $(".modal-intro-video-player")[0] !== "undefined") {
        if (typeof $(".modal-intro-video-player")[0].play !== "undefined") {
          $(".modal-intro-video-player")[0].play();
        }
      }
    } else {
      if (typeof $(".modal-intro-video-player")[0] !== "undefined") {
        if (typeof $(".modal-intro-video-player")[0].play !== "undefined") {
          $(".modal-intro-video-player")[0].play();
        }
      }
    }
  });
  $(".modal-intro-video-player").bind("ended", function () {
    $(".backdrop-intro-video-player").hide();
    $(".modal-intro-video-player").hide();
    $(".action-sign-up").click();
  });
  var newUserHeroVideoWentOutOfView = false;
  if ($(".new-user-hero").length > 0) {
    $(window).scroll(function () {
      if ($(window).scrollTop() > 600) {
        if (typeof $(".new-user-hero stream.bg")[0] !== "undefined") {
          if (typeof $(".new-user-hero stream.bg")[0].play !== "undefined") {
            consoleLog("paused header video because out of view");
            $(".new-user-hero stream.bg")[0].pause();
            $(".new-user-hero stream.bg").hide();
            newUserHeroVideoWentOutOfView = true;
          }
        }
      } else {
        if (
          typeof $(".new-user-hero stream.bg")[0] !== "undefined" &&
          newUserHeroVideoWentOutOfView
        ) {
          if (typeof $(".new-user-hero stream.bg")[0].play !== "undefined") {
            consoleLog("played header video because back in view");
            $(".new-user-hero stream.bg")[0].play();
            $(".new-user-hero stream.bg").show();
            newUserHeroVideoWentOutOfView = false;
          }
        }
      }
    });
  }
  $("body").on("click", ".action-open-city-modal", function (e) {
    slug = $(this).data("slug");
    if (!empty($(this).data("tab"))) {
      activeTab = $(this).data("tab");
      console.log(
        "changed activeTab to " +
          activeTab +
          " because user opened city modal and no activeTab was set in data(tab)"
      );
    }
    openItemModal(slug);
    e.preventDefault();
  });
  $("body").on("mouseleave", ".avatar", function (e) {
    $(".tooltip-ui").hide().removeClass("show");
    tooltipAjaxUserId = "";
  });
  $("body").on("mouseenter", ".avatar", function (e) {
    if ($(this).hasClass("no-tooltip")) return;
    var top = $(this).offset().top + $(this).outerHeight() + 50;
    if (top < 14) top = 14;
    var windowWidth = windowSize().width;
    $(".tooltip-ui").css({ top: top });
    var left =
      $(this).offset().left +
      $(this).outerWidth() / 2 -
      $(".tooltip-ui").outerWidth() / 2;
    if (left < 14) left = 14;
    if (left + $(".tooltip-ui").outerWidth() > windowWidth - 14)
      left = windowWidth - $(".tooltip-ui").outerWidth() - 28;
    $(".tooltip-ui").css({ left: left });
    if ($("body").hasClass("touch")) {
      clearTimeout(tooltipUiTimeout);
      tooltipUiTimeout = setTimeout(function () {
        $(".tooltip-ui").hide().removeClass("show");
      }, 4000);
    }
    if ($(this).data("tooltip")) {
      bodyText = $(this).data("tooltip");
    } else {
      bodyText = "";
    }
    if ($(this).data("user-id")) {
      tooltipText = "";
      if ($(this).data("tooltip")) {
        tooltipText = $(this).data("tooltip");
      }
      tooltipAjaxUserId = $(this).data("user-id");
      $.ajax({
        dataType: "json",
        url:
          "/userApi.php?action=get_user_info&user_id=" +
          $(this).data("user-id"),
        success: function (reply) {
          if (tooltipAjaxUserId != reply.user_id) {
            return false;
          }
          inLocationText = "";
          bioText = "";
          if (typeof reply.bio !== "undefined") {
            if (reply.bio != "null" && !empty(reply.bio)) {
              bioText = reply.bio;
            }
          }
          if (typeof reply.location !== "undefined") {
            if (!empty(reply.location)) {
              inLocationText = " in " + reply.location;
            }
          }
          if (bioText.length > 100) {
            bioText = bioText.substring(0, 100) + "...";
          }
          if (
            typeof userUserType !== "undefined" &&
            userUserType == "premium"
          ) {
            bodyText =
              "<strong>@" +
              reply.username +
              "</strong>" +
              inLocationText +
              "<br/>" +
              bioText;
            if (tooltipText) {
              bodyText =
                "<strong>@" +
                reply.username +
                "</strong>" +
                inLocationText +
                "<br/>" +
                tooltipText;
            }
            blurStyleHtml = "";
          } else if (
            typeof userUserType !== "undefined" &&
            userUserType == "basic"
          ) {
            bodyText =
              '<span style="filter:blur(5px);"><strong>@' +
              reply.username +
              "</strong>" +
              inLocationText +
              "<br/>" +
              bioText +
              "</span><br/>Hidden for Lite members due to privacy";
            if (tooltipText) {
              bodyText =
                '<span style="filter:blur(5px);"><strong>@' +
                reply.username +
                "</strong>" +
                inLocationText +
                "<br/></span>" +
                tooltipText +
                "<br/>Hidden for Lite members due to privacy";
            }
            blurStyleHtml = "filter:blur(5px);";
          } else if (
            !$("html").hasClass("logged-in") &&
            getCookie("visit-count") <= showSignUpModalAfterVisitCount
          ) {
            bodyText =
              "<strong>@" +
              reply.username +
              "</strong>" +
              inLocationText +
              "<br/>" +
              bioText;
            if (tooltipText) {
              bodyText =
                "<strong>@" +
                reply.username +
                "</strong>" +
                inLocationText +
                "<br/>" +
                tooltipText;
            }
            blurStyleHtml = "";
          } else {
            bodyText =
              '<span style="filter:blur(5px);"><strong>@' +
              reply.username +
              "</strong>" +
              inLocationText +
              "<br/>" +
              bioText +
              "</span><br/>Hidden for non-members due to privacy";
            if (tooltipText) {
              bodyText =
                '<span style="filter:blur(5px);"><strong>@' +
                reply.username +
                "</strong>" +
                inLocationText +
                "<br/></span>" +
                tooltipText +
                "<br/>Hidden for non-members due to privacy";
            }
            blurStyleHtml = "filter:blur(5px);";
          }
          $(".tooltip-ui")
            .html(
              '<div style="text-align:center;padding:7px;padding-top:0;font-size:14px;">' +
                '<a href="/@' +
                reply.username +
                '"><img width="150" height="150" src="' +
                reply.photo +
                '" style="' +
                blurStyleHtml +
                ';box-shadow:var(--box-shadow-central);left:calc(50%-50px);background:var(--input-background-color);position:relative;z-index:1;border:4px solid var(--input-background-color);width:150px;height:150px;border-radius:100%;object-fit:cover;margin-top:-75px;background-size:cover;background-image: url(data:image/gif;base64,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);"/></a><br/>' +
                bodyText +
                "</div>"
            )
            .show()
            .addClass("show");
          if (left + $(".tooltip-ui").outerWidth() > windowWidth - 14)
            left = windowWidth - $(".tooltip-ui").outerWidth() - 28;
          $(".tooltip-ui").css({ left: left });
        },
      });
    }
  });
  $(".backdrop.currency-switcher").bind("click", function () {
    $(".modal.currency-switcher").removeClass("show");
    $(".backdrop.currency-switcher").removeClass("show");
  });
  $(".modal.currency-switcher select.currency-switcher").bind(
    "change",
    function () {
      $(".modal.currency-switcher").removeClass("show");
      $(".backdrop.currency-switcher").removeClass("show");
      userCurrency = $(this).find(":selected").val().toUpperCase();
      setCookie("userCurrency", userCurrency, 86400 * 365);
      if (isLoggedIn) {
        $.ajax({
          dataType: "json",
          url: "/userApi.php?action=set_currency&currency=" + userCurrency,
          success: function (reply) {},
        });
      }
      localizePrices();
      $(".currency-switcher-floater div.currency").text(
        $(this).find(":selected").text()
      );
    }
  );
  $(".modal.currency-switcher select.units-switcher").bind(
    "change",
    function () {
      $(".modal.currency-switcher").removeClass("show");
      $(".backdrop.currency-switcher").removeClass("show");
      userUnits = $(this).find(":selected").val();
      setCookie("userUnits", userUnits, 86400 * 365);
      if (isLoggedIn) {
        $.ajax({
          dataType: "json",
          url: "/userApi.php?action=set_units&units=" + userUnits,
          success: function (reply) {},
        });
      }
      $("html")
        .removeClass("units-metric")
        .removeClass("units-imperial")
        .addClass("units-" + userUnits);
      $(".currency-switcher-floater div.units").text(
        $(this).find(":selected").text()
      );
    }
  );
  $(".modal.currency-switcher select.cost-mode-switcher").bind(
    "change",
    function () {
      $(".modal.currency-switcher").removeClass("show");
      $(".backdrop.currency-switcher").removeClass("show");
      activeCostMode = $(this).find(":selected").val();
      $(".currency-switcher-floater .cost-mode").text(
        capitalize(str_replace("cost_for_", "", activeCostMode))
      );
      setCookie("cost_mode", activeCostMode, 86400 * 365);
      if (isLoggedIn) {
        $.ajax({
          dataType: "json",
          url: "/userApi.php?action=set_cost_mode&units=" + activeCostMode,
          success: function (reply) {},
        });
      }
      if ($(".filter.cost .choice").length > 0) {
        showItemsLoading();
        makeFilters();
        updateItemsToMatchFilter();
      } else {
        processFilterReplyAndGenerateItems();
      }
    }
  );
  $(".action-change-localization").bind("click", function () {
    $(".modal.currency-switcher select.currency-switcher").focus();
    $(".modal.currency-switcher").addClass("show");
    $(".backdrop.currency-switcher").addClass("show");
  });
  $("img").bind("error", function () {
    $(this).css("opacity", 0);
  });
  $(document).keydown(function (event) {
    if (event.which == 13) {
      if ($(".autocomplete-box").is(":visible")) {
        $(".autocomplete-box").hide();
      }
    }
    if (event.which == 27) {
      if (pageType == "city") {
        window.location.href = "/";
        return;
      }
      if ($(".modal.item").hasClass("show")) {
        closeItemModal();
      }
      $(".modal").removeClass("show");
      $(".backdrop").removeClass("show");
      if (pageType == "cities" && $(".autocomplete-box").is(":visible")) {
        $("input.search").blur().val("").removeClass("active");
        $(".search-container").removeClass("active");
        $(".autocomplete-box").hide();
        $("input.search").removeClass("autocomplete-open");
        activeSearch = "";
        updateItemsToMatchFilter();
      }
      if ($("html").hasClass("city-modal-open")) {
        if (modalOpen == "item") {
          closeItemModal();
          $(".modal.item").html("");
          activeItemSlug = "";
          activeItemSlugLong = "";
          updateSlug();
          hideLoading();
        }
      }
    }
  });
  $(window).bind("resize", function (event) {
    windowWidth = windowSize().width;
    windowHeight = windowSize().height;
    if (typeof activeView == "undefined") return;
    if (typeof activeItemSlug !== "undefined") {
      if (activeItemSlug !== "") {
        clearTimeout(
          modalItemFixBlurryOnNonRetinaBySettingExactPositioningResizeTimeout
        );
        modalItemFixBlurryOnNonRetinaBySettingExactPositioningResizeTimeout =
          setTimeout(function () {
            modalItemFixBlurryOnNonRetinaBySettingExactPositioning();
          }, 250);
      }
    }
  });
  $(".backdrop.item").bind("click", function () {
    openingModalWasCanceled = true;
    updateSlug();
    if (typeof modalItemAJAXLoader !== "undefined") {
      if (!empty(modalItemAJAXLoader)) {
        modalItemAJAXLoader.abort();
      }
    }
    closeItemModal();
  });
  $(".modal.item").bind("scroll", function () {
    if (typeof lazyloadItemInModalTimeout !== "undefined") {
      clearTimeout(lazyloadItemInModalTimeout);
    }
    lazyloadItemInModalTimeout = setTimeout(function () {
      $(".modal.item .lazyload-item").each(function () {
        objectTop = $(this).offset().top;
        if (empty(objectTop)) {
          return;
        }
        scrollTop = $(".modal.item").scrollTop();
        edge = scrollTop + windowHeight;
        if (objectTop == scrollTop) {
          return;
        }
        if (objectTop < edge * 2) {
          size = 250;
          if ($(this).parent().parent().parent().hasClass("list")) {
            size = 100;
          }
          slug = $(this).parent().parent().data("slug");
          if (empty($(this).data("bg"))) {
            if ($(this).data("type") == "") type = "cities";
            url = "/assets/img/" + type + "/" + slug + "-" + size + "px.jpg";
          } else {
            url = $(this).data("bg");
          }
          $(this).prop("src", url);
          $(this).css("background-color", "rgb(38,38,38)");
          $(this).removeClass("lazyload-item");
        }
      });
    }, 250);
  });
  $("body").on("mouseleave", ".item.unfavorited", function (e) {
    $(this).removeClass("unfavorited");
  });
  $("body").on("click", ".autocomplete-box .action-follow", function (e) {
    e.stopPropagation();
    if (!$("html").hasClass("logged-in")) {
      openSignUpModal(
        "ðŸ‘‹ <b>Follow people on Nomad List</b> and make friends"
      );
      action =
        "ðŸ’³ Opened sign up modal via action-follow " +
        "(AB variation: " +
        signUpAbTestVariation +
        ")";
      $.ajax({
        url: "/userApi.php",
        type: "POST",
        dataType: "json",
        data: {
          action: "log_user_activity",
          log_action: action,
          hash: md5(action + "xoyo"),
        },
        context: document.body,
      }).done(function (reply) {});
      return;
    }
    $(this).parent().toggleClass("following");
    if ($(this).parent().hasClass("following")) {
      $(this).data("tooltip", "Follow this person");
      $.ajax({
        dataType: "json",
        url:
          "/userApi.php?action=follow_user&user_id=" +
          $(this).parent().data("user-id"),
        success: function (reply) {
          userFollowingUserIds = reply.following_userids;
        },
      });
    } else {
      $(this).data("tooltip", "Unfollow this person");
      $.ajax({
        dataType: "json",
        url:
          "/userApi.php?action=unfollow_user&user_id=" +
          $(this).parent().data("user-id"),
        success: function (reply) {
          userFollowingUserIds = reply.following_userids;
        },
      });
    }
  });
  $("body").on("click", ".action-like-user", function (e) {
    e.stopPropagation();
    if (!$("html").hasClass("logged-in")) {
      openSignUpModal("ðŸ‘‹ <b>Like people on Nomad List</b> and make friends");
      action =
        "ðŸ’³ Opened sign up modal via action-like-user " +
        "(AB variation: " +
        signUpAbTestVariation +
        ")";
      $.ajax({
        url: "/userApi.php",
        type: "POST",
        dataType: "json",
        data: {
          action: "log_user_activity",
          log_action: action,
          hash: md5(action + "xoyo"),
        },
        context: document.body,
      }).done(function (reply) {});
      return;
    }
    if (!$(this).data("liked")) {
      $(this).data("liked", "true");
      $(this).text("Liked").addClass("reverse");
      $.ajax({
        dataType: "json",
        url: "/userApi.php?action=like_user&user_id=" + $(this).data("user-id"),
        success: function (reply) {},
      });
    } else {
      $(this).removeData("liked");
      $(this).text("Like").removeClass("reverse");
      $.ajax({
        dataType: "json",
        url:
          "/userApi.php?action=unlike_user&user_id=" + $(this).data("user-id"),
        success: function (reply) {},
      });
    }
  });
  $("body").on("click", ".action-like-city", function (e) {
    e.stopPropagation();
    if (!$("html").hasClass("logged-in")) {
      openSignUpModal("ðŸ‘‹ <b>Like cities on Nomad List</b>");
      action =
        "ðŸ’³ Opened sign up modal via action-like-city " +
        "(AB variation: " +
        signUpAbTestVariation +
        ")";
      $.ajax({
        url: "/userApi.php",
        type: "POST",
        dataType: "json",
        data: {
          action: "log_user_activity",
          log_action: action,
          hash: md5(action + "xoyo"),
        },
        context: document.body,
      }).done(function (reply) {});
      return;
    }
    setCookie("liked_city_" + $(this).data("slug"), "x", 86400 * 365);
    if ($(this).parent().find(".action-dislike-city").length > 0) {
      $(this).parent().find(".action-dislike-city").eq(0).remove();
    }
    $(this).remove();
    $.ajax({
      dataType: "json",
      url: "/userApi.php?action=like_city&city_slug=" + $(this).data("slug"),
      success: function (reply) {},
    });
  });
  $("body").on("click", ".action-dislike-city", function (e) {
    e.stopPropagation();
    if (!$("html").hasClass("logged-in")) {
      openSignUpModal("ðŸ‘‹ <b>Dislike cities on Nomad List</b>");
      action =
        "ðŸ’³ Opened sign up modal via action-dislike-city " +
        "(AB variation: " +
        signUpAbTestVariation +
        ")";
      $.ajax({
        url: "/userApi.php",
        type: "POST",
        dataType: "json",
        data: {
          action: "log_user_activity",
          log_action: action,
          hash: md5(action + "xoyo"),
        },
        context: document.body,
      }).done(function (reply) {});
      return;
    }
    setCookie("disliked_city_" + $(this).data("slug"), "x", 86400 * 365);
    if ($(this).parent().find(".action-dislike-city").length > 0) {
      $(this).parent().find(".action-like-city").eq(0).remove();
    }
    $(this).remove();
    $.ajax({
      dataType: "json",
      url: "/userApi.php?action=dislike_city&city_slug=" + $(this).data("slug"),
      success: function (reply) {},
    });
  });
  $("body").on("click", ".autocomplete-box .action-favorite", function (e) {
    e.stopPropagation();
    if (!$("html").hasClass("logged-in")) {
      openSignUpModal("ðŸ’– <b>Add cities to your wishlist</b>");
      action =
        "ðŸ’³ Opened sign up modal via action-favorite " +
        "(AB variation: " +
        signUpAbTestVariation +
        ")";
      $.ajax({
        url: "/userApi.php",
        type: "POST",
        dataType: "json",
        data: {
          action: "log_user_activity",
          log_action: action,
          hash: md5(action + "xoyo"),
        },
        context: document.body,
      }).done(function (reply) {});
      return;
    }
    $(this).parent().toggleClass("favorited");
    slug = $(this).parent().data("slug");
    if ($(this).parent().hasClass("favorited")) {
      $(this).data("tooltip", "Favorite");
      $.ajax(
        {
          dataType: "json",
          url: "/userApi.php?action=favorite-city&slug=" + slug,
          success: function (reply) {
            userFavoritedCities = reply.favorited_cities;
          },
        },
        slug
      );
    } else {
      $(this).data("tooltip", "Unfavorite");
      $.ajax(
        {
          dataType: "json",
          url: "/userApi.php?action=unfavorite-city&slug=" + slug,
          success: function (reply) {
            userFavoritedCities = reply.favorited_cities;
          },
        },
        slug
      );
    }
  });
  $("body").on("click", ".grid .item .action-favorite", function (e) {
    if (!$("html").hasClass("logged-in")) {
      openSignUpModal("ðŸ’– <b>Save places to your favorites list</b>");
      action =
        "ðŸ’³ Opened sign up modal via action-favorite " +
        "(AB variation: " +
        signUpAbTestVariation +
        ")";
      $.ajax({
        url: "/userApi.php",
        type: "POST",
        dataType: "json",
        data: {
          action: "log_user_activity",
          log_action: action,
          hash: md5(action + "xoyo"),
        },
        context: document.body,
      }).done(function (reply) {});
      return;
    }
    $(this).parent().toggleClass("favorited");
    slug = $(this).parent().data("slug");
    if ($(this).parent().hasClass("favorited")) {
      $(this).data("tooltip", "Remove from your favorites");
      $.ajax(
        {
          dataType: "json",
          url: "/userApi.php?action=favorite-city&slug=" + slug,
          success: function (reply) {
            userFavoritedCities = reply.favorited_cities;
          },
        },
        slug
      );
    } else {
      $(this).data("tooltip", "Add to your favorites");
      $.ajax(
        {
          dataType: "json",
          url: "/userApi.php?action=unfavorite-city&slug=" + slug,
          success: function (reply) {
            userFavoritedCities = reply.favorited_cities;
          },
        },
        slug
      );
    }
  });
  $("body").on("click", ".modal.item .action-favorite", function (e) {
    $(this)
      .addClass("favorited")
      .removeClass("action-favorite")
      .addClass("action-unfavorite");
    slug = $(this).data("slug");
    $(this).text("Unfavorite");
    $.ajax(
      {
        dataType: "json",
        url: "/userApi.php?action=favorite-city&slug=" + slug,
        success: function (reply) {
          userFavoritedCities = reply.favorited_cities;
        },
      },
      slug
    );
  });
  $("body").on("click", ".modal.item .action-unfavorite", function (e) {
    $(this)
      .removeClass("favorited")
      .addClass("action-favorite")
      .removeClass("action-unfavorite");
    slug = $(this).data("slug");
    $(this).text("Favorite");
    $.ajax(
      {
        dataType: "json",
        url: "/userApi.php?action=unfavorite-city&slug=" + slug,
        success: function (reply) {
          userFavoritedCities = reply.favorited_cities;
        },
      },
      slug
    );
  });
  $("body").on(
    "touchend",
    ".modal.item .action-close-item-modal",
    function (event) {
      closeItemModal();
      event.stopPropagation();
      event.preventDefault();
    }
  );
  $(window).bind("popstate", function (event) {
    if (typeof pageType === "undefined") return;
    if (pageType == "cities" || pageType == "region" || pageType == "country") {
      closeItemModal();
    }
  });
  $("body").on(
    "click",
    ".modal.item .action-close-item-modal",
    function (event) {
      updateSlug();
      openingModalWasCanceled = true;
      closeItemModal();
      event.stopPropagation();
      event.preventDefault();
    }
  );
  $("body").on("click", ".modal.item .tab-near .item .click", function (event) {
    openItem($(this).closest(".item"));
    event.preventDefault();
    event.stopPropagation();
  });
  $("body").on("click", ".modal.item .tab-next .item .click", function (event) {
    openItem($(this).closest(".item"));
    event.preventDefault();
    event.stopPropagation();
  });
  $("body").on(
    "click",
    ".modal.item .tab-similar .item .click",
    function (event) {
      openItem($(this).closest(".item"));
      event.preventDefault();
      event.stopPropagation();
    }
  );
  $("body").on("click", ".backdrop.youtube", function () {
    $(".backdrop.youtube .loading.spinner").removeClass("show");
    $(".backdrop.youtube").removeClass("show");
    $(".modal.youtube").removeClass("show");
    $(".modal.youtube iframe").prop("src", "");
    if (rootUri == "vr") {
      hideLoading();
      closeItemModal();
      return;
    }
    if ($(".modal.item .tab.show").length == 0) {
      $('.modal.item li[data-tab="ranking"]').trigger("click");
    }
  });
  $("body").on("click", ".modal.item .action-play-youtube", function (event) {
    event.preventDefault();
    event.stopPropagation();
    $(".backdrop.youtube .loading.spinner").addClass("show");
    $(".backdrop.youtube").addClass("show");
    $(".modal.youtube").addClass("show");
    $(".modal.youtube iframe").prop(
      "src",
      "https://www.youtube.com/embed/" +
        $(this).data("videoid") +
        "?autoplay=1&mute=1&t=45s&start=45#t=45s"
    );
  });
  $("body").on(
    "click",
    ".modal.item .action-play-youtube-vr",
    function (event) {
      event.preventDefault();
      event.stopPropagation();
      $(".backdrop.youtube .loading.spinner").addClass("show");
      $(".backdrop.youtube").addClass("show");
      $(".modal.youtube").addClass("show");
      $(".modal.youtube iframe").prop(
        "src",
        "https://www.youtube.com/embed/" +
          $(this).data("videoid") +
          "?autoplay=1"
      );
    }
  );
  $("body").on("click", ".tab-chat .action-open-chat", function (event) {
    if (isLoggedIn && userUserType == "premium") {
      window.open(
        "https://nomadlist.slack.com/app_redirect?channel=" +
          $(".tab-chat").data("chat-channel-id")
      );
    } else {
      window.open(
        "https://nomadlist.com/chat/" + $(".tab-chat").data("chat-channel")
      );
    }
  });
  $("body").on("click", ".modal.item .tabs .ul .li", function (event) {
    event.preventDefault();
    event.stopPropagation();
    if ($(this).hasClass("dont-activate")) return;
    clickTabSignUpModalIncrementer++;
    if (typeof pageRef === "undefined") pageRef = "";
    if (
      typeof event.originalEvent !== "undefined" &&
      !isLoggedIn &&
      getCookie("visit-count") >= showSignUpModalAfterVisitCount &&
      clickTabSignUpModalIncrementer >= showSignUpModalAfterVisitCount &&
      !(pageRef.indexOf("google") > -1) &&
      !(pageRef.indexOf("bing") > -1) &&
      !(pageRef.indexOf("duck") > -1) &&
      !(pageRef.indexOf("yandex") > -1)
    ) {
      $(".sign-up-notice-free-limit-reached").show();
      openSignUpModal("", "basic");
      action =
        "ðŸ’³ Opened sign up modal when opening city tab after 3 city tab opens " +
        "(AB variation: " +
        signUpAbTestVariation +
        ")";
      $.ajax({
        url: "/userApi.php",
        type: "POST",
        dataType: "json",
        data: {
          action: "log_user_activity",
          log_action: action,
          hash: md5(action + "xoyo"),
        },
        context: document.body,
      }).done(function (reply) {});
      return;
    }
    if (
      activeTab == $(this).data("tab") &&
      $(".tab-" + activeTab).hasClass("show")
    )
      return;
    $(".modal.item .image .image .text .itemName").text(activeItemName);
    activeTab = $(this).data("tab");
    activeTabTitle = $(this).attr("title");
    activeTabLabel = $(this).text();
    console.log(
      "changed activeTab to " +
        activeTab +
        " because " +
        "$('body').on('click','.modal.item .tabs .ul .li',function(event) {" +
        " was hit"
    );
    $(".modal.item a.breadcrumb_5").text(
      activeTabLabel + " in " + activeItemName
    );
    $(".modal.item a.breadcrumb_5").attr(
      "href",
      "https://nomadlist.com/" + activeTab + "/" + activeItemSlug
    );
    consoleLog("tab changed to " + activeTab);
    if (activeTab == "chat") {
      if (empty($(".tab-chat iframe").prop("src"))) {
        $(".loading_spinner-item").addClass("show");
        $(".tab-chat iframe").prop("src", $(".tab-chat iframe").data("src"));
        $(".tab-chat iframe").on("load", function () {
          $(".loading_spinner-item").removeClass("show");
        });
      }
    }
    if (typeof activeTabTitle !== "undefined")
      $(".modal.item .head-image h1").text(activeTabTitle);
    if (typeof activeItemCountry !== "undefined")
      $(".modal.item .head-image h2").text(activeItemCountry);
    if (activeTab == "neighborhoods") {
      $(".sign-up-cta-bottom").hide();
    }
    $(".tab-" + activeTab + " .lazyload").each(function () {
      if ($(this).data("src")) $(this).prop("src", $(this).data("src"));
      $(this).prop("srcset", $(this).data("srcset"));
      $(this).removeClass("lazyload").addClass("lazyloaded_3");
    });
    $(".tab-" + activeTab + " .lazyload-item").each(function () {
      if ($(this).data("src")) $(this).prop("src", $(this).data("src"));
      $(this).prop("srcset", $(this).data("srcset"));
      $(this).removeClass("lazyload").addClass("lazyloaded_3");
    });
    if (activeTab == "flights") {
      getSkyPickerFlightsForRoute();
    }
    if (activeTab == "coworking") {
      if (empty($(".tab-coworking iframe").prop("src"))) {
        $(".loading_spinner-item").addClass("show");
        $(".tab-coworking iframe").prop(
          "src",
          $(".tab-coworking iframe").data("src")
        );
        $(".tab-coworking iframe").on("load", function () {
          $(".loading_spinner-item").removeClass("show");
        });
      }
    }
    if (activeTab == "neighborhoods") {
      if (empty($(".tab-neighborhoods iframe").prop("src"))) {
        $(".loading_spinner-item").addClass("show");
        $(".tab-neighborhoods iframe").prop(
          "src",
          $(".tab-neighborhoods iframe").data("src")
        );
        $(".tab-neighborhoods iframe").on("load", function () {
          $(".loading_spinner-item").removeClass("show");
        });
      }
    }
    $(this).parent().parent().find(".li").removeClass("active");
    $(this).addClass("active");
    $(this)
      .parent()
      .parent()
      .parent()
      .find(".tab")
      .removeClass("show")
      .removeClass("show-later")
      .hide();
    $(this)
      .parent()
      .parent()
      .parent()
      .find(".tab.tab-" + $(this).data("tab"))
      .show();
    setTimeout(
      function (that) {
        $(that)
          .parent()
          .parent()
          .parent()
          .find(".tab.tab-" + $(that).data("tab"))
          .addClass("show");
      },
      100,
      this
    );
    if (activeTab == "places-to-work" && !$(this).hasClass("map-loaded")) {
      loadPlacesMap("map-" + activeTab, placesCoordsWork);
      $(this).addClass("map-loaded");
    }
    if (activeTab == "hotels" && !$(this).hasClass("map-loaded")) {
      loadPlacesMap("map-" + activeTab, placesCoordsSleep);
      $(this).data("map-loaded", "true");
      $(this).addClass("map-loaded");
    }
    if (activeTab == startTab) {
      pageTitle = activeItemName + " for Digital Nomads";
    } else {
      pageTitle = $(this).find("a").attr("title");
    }
    if (event.originalEvent !== undefined) {
      trackEvent("pageview", pageUrl);
      trackEvent("action", pageUrl);
    }
    $(".modal.item").trigger("scroll");
    if (activeTab == startTab) {
      changeUrl(
        activeItemSlug,
        "",
        pageTitle,
        pageDescription,
        pageTweet,
        pageMedia,
        "replace"
      );
    } else {
      if (activeTab == "cost-of-living") {
        changeUrl(
          activeTab + "/in/" + activeItemSlug,
          "",
          pageTitle,
          pageDescription,
          pageTweet,
          pageMedia,
          "replace"
        );
      } else {
        changeUrl(
          activeTab + "/" + activeItemSlug,
          "",
          pageTitle,
          pageDescription,
          pageTweet,
          pageMedia,
          "replace"
        );
      }
    }
  });
  $("body").on("click", ".map.view .map-marker.clickable", function (event) {
    if (!empty($(this).data("url"))) {
      window.open($(this).data("url"));
    } else if (!empty($(this).data("slug"))) {
      openItemModal($(this).data("slug"));
    }
  });
  $(window).resize(function () {
    $(".autocomplete-box div").remove();
    $(".autocomplete-box").hide();
    $("input.search").removeClass("autocomplete-open");
  });
  $("body").on("click", function () {
    $(".autocomplete-box").hide();
    $("input.search").removeClass("autocomplete-open");
  });
  $("body").on("click", ".autocomplete-box div", function (event) {
    $("input.search").val("").removeClass("active").blur();
    $(".search-container").removeClass("active");
    $(".backdrop-search").hide();
    if (typeof pageType === "undefined") pageType = "";
    if (!empty($(this).data("filters-state")) && pageType == "cities") {
      consoleLog(
        "atob($(this).data('filters-state')",
        JSON.parse(atob($(this).data("filters-state")))
      );
      state = JSON.parse(atob($(this).data("filters-state")));
      consoleLog("state", state);
      $(".filters .choice").removeClass("active");
      $(".filters select").val("").removeClass("active");
      loadFiltersPageState(state);
      showItemsLoading();
      updateItemsToMatchFilter();
      if (activeView == "grid") {
        $(".grid-side").hide();
      }
      return;
    } else if (!empty($(this).data("slug"))) {
      openItemModal($(this).data("slug"));
      return;
    } else if (!empty($(this).data("url"))) {
      showLoading();
      if (typeof activeTab !== "undefined") {
        if (activeTab != "ranking") {
          if ($(this).data("item-type") == "city") {
            $(this).data("url", "/" + activeTab + $(this).data("url"));
          }
        }
      }
      $(".view").css("opacity", 0.5);
      if (isMetaOrShiftKeyPressed(event)) {
        window.open($(this).data("url"));
      } else {
        window.location.href = $(this).data("url");
      }
      return;
    }
  });
  $(".action-complete-profile-setup").bind("click", function () {
    if (typeof setProfilePhotoScriptLoaded === "undefined") {
      setProfilePhotoScriptLoaded = true;
      $.getScript(
        "/set_profile_photo.js?" + time(),
        function (data, textStatus, jqxhr) {}
      );
    } else if (!setProfilePhotoScriptLoaded) {
      setProfilePhotoScriptLoaded = true;
      $.getScript(
        "/set_profile_photo.js?" + time(),
        function (data, textStatus, jqxhr) {}
      );
    }
    $(".modal-user-details-backdrop").show();
    $(".modal-user-details").show();
  });
  if (typeof userUserType !== "undefined") {
    if (typeof userCompletedProfileSetup !== "undefined") {
      if (userUserType == "premium" && !userCompletedProfileSetup) {
        $(".action-complete-profile-setup").click();
      }
    }
  }
  $(".action-clear-search").bind("click", function () {
    $(".action-clear-search").hide();
    $(".search-container input")
      .val("")
      .blur()
      .removeClass("active")
      .trigger("keyup");
    $(".search-container").removeClass("active");
    $(".action-clear-all-filters").trigger("click");
    if (pageType == "cities" && activeSearch) {
      showItemsLoading();
      updateItemsToMatchFilter();
    }
    activeSearch = "";
  });
  $("input.search").bind("focus", function (event) {
    downloadAutocompleteQueries();
  });
  $("input.search").bind("keydown input change focus blur", function (event) {
    if ($(this).val() == "") {
      $(".action-clear-search").hide();
      $(".autocomplete-box").hide();
      $("input.search").removeClass("autocomplete-open");
    }
    if (!$("input.search").is(":focus")) {
      return;
    }
    if (event.which == 40) {
      consoleLog("arrow down");
      if ($(".autocomplete-box div.hover").length == 0) {
        $(".autocomplete-box div").eq(0).addClass("hover");
      } else {
        $(".autocomplete-box div.hover")
          .removeClass("hover")
          .next()
          .addClass("hover");
      }
      if ($(".autocomplete-box div.hover").length == 0) {
        $(".autocomplete-box div").eq(0).addClass("hover");
      }
      return;
    }
    if (event.which == 38) {
      consoleLog("arrow up");
      if ($(".autocomplete-box div.hover").length == 0) {
        $(".autocomplete-box div")
          .eq($(".autocomplete-box div").length - 1)
          .addClass("hover");
      } else {
        $(".autocomplete-box div.hover")
          .removeClass("hover")
          .prev()
          .addClass("hover");
      }
      if ($(".autocomplete-box div.hover").length == 0) {
        $(".autocomplete-box div")
          .eq($(".autocomplete-box div").length - 1)
          .addClass("hover");
      }
      return;
    }
    if (event.which == 27) {
      $("input.search").val("").blur();
      $(".action-clear-search").hide();
      $(".autocomplete-box div.hover").trigger("click");
      $(".autocomplete-box").hide();
      $("input.search").removeClass("autocomplete-open");
      return;
    }
    if (
      event.which != 8 &&
      event.which != 0 &&
      event.which <= 46 &&
      event.which != 13
    )
      return;
    if (event.which >= 91) return;
    if (userStoppedTypingInSearchInterval !== null) {
      clearInterval(userStoppedTypingInSearchInterval);
    }
    clearInterval(userStoppedTypingInSearchInterval);
    userStoppedTypingInSearchInterval = setInterval(
      function (event) {
        clearInterval(userStoppedTypingInSearchInterval);
        if (gettingAutocompleteQueriesAJAX) {
          return;
        }
        if (typeof event.which === "undefined") {
          return;
        } else if (
          event.which != 8 &&
          event.which != 0 &&
          event.which >= 48 &&
          event.which <= 57
        ) {
        } else if (
          event.which != 8 &&
          event.which != 0 &&
          event.which >= 65 &&
          event.which <= 90
        ) {
        } else if (event.which == 13) {
          $(".autocomplete-box").hide();
          $("input.search").removeClass("autocomplete-open");
          showItemsLoading();
          if ($(".autocomplete-box div.hover").length != 0) {
            $("input.search").val("").blur();
            $(".action-clear-search").hide();
            $(".autocomplete-box div.hover").trigger("click");
            return;
          }
        } else if (event.which != 0 && event.which != 8) {
          return;
        }
        if ($("input.search").val().trim().toLowerCase() == "south america") {
          $("input.search").val("latin america");
        }
        consoleLog($("input.search").val());
        if ($("input.search").val().trim()) {
          $(".action-clear-search").show();
        }
        $("input.search").val($("input.search").val());
        setCookie("new-user", "no", 86400 * 365);
        if (event.which == 13) {
          $("input.search").blur();
          $(".autocomplete-box").hide();
          $("input.search").removeClass("autocomplete-open");
          if (typeof pageType == "undefined") {
            window.location.href = "/search/" + $("input.search").val();
            $(".view").css("opacity", 0.5);
            showLoading();
            return;
          } else if (
            pageType != "cities" ||
            hasEmojis($("input.search").val())
          ) {
            window.location.href = "/search/" + $("input.search").val();
            $(".view").css("opacity", 0.5);
            showLoading();
          } else {
            engageSearch();
          }
          if (activeView == "grid") {
            $(".grid-side").hide();
          }
        }
        if (
          event.which != 8 &&
          event.which != 0 &&
          event.which > 90 &&
          event.which < 48
        ) {
          return;
        }
        if (activeSearch == $("input.search").val().trim()) return;
        $("input.search").addClass("active");
        $(".search-container").addClass("active");
        showAutocompleteQueries();
        if (hasEmojis($("input.search").val())) {
          window.location.href = "/search/" + $("input.search").val();
          $(".view").css("opacity", 0.5);
          showLoading();
          return;
        }
        if (pageType == "cities") {
        }
      },
      200,
      event
    );
  });
  $("body").on("click", ".faq .post-title", function (event) {
    event.stopPropagation();
    consoleLog("click");
    $(this).parent().parent().find(".action-forum-toggle-replies").click();
  });
  $("body").on("click", ".tab-faq .bg", function () {
    consoleLog("bg click");
    $(this).parent().parent().find(".action-forum-toggle-replies").click();
  });
  $("body").on("click", ".tab-faq .faq .click", function () {
    window.location.href =
      "/forum/t/" +
      $(this).parent().data("topic-slug") +
      "/" +
      $(this).parent().data("post-id");
  });
  $("body").on("click", ".action-open-forum-post-box", function (event) {
    if (userUserType != "premium") {
      openSignUpModal("", "premium");
      return;
    }
    $(".forum-post-box").show();
  });
  $("body").on("click", ".modal.item .action-modal-city-join", function () {
    users_now_count = 0;
    if (typeof itemsData !== "undefined") {
      if (typeof itemsData.cities !== "undefined") {
        for (var i = 0; i < itemsData.cities.length; i++) {
          if (itemsData.cities[i]["long_slug"] == activeItemSlugLong) {
            users_now_count = itemsData.cities[i]["users_now_count"];
            break;
          }
        }
        if (users_now_count > 1) {
          openSignUpModal(
            "ðŸ‘‹ <b>Learn how to work remotely</b> from " +
              number_format(users_now_count) +
              "+ remote workers in " +
              activeItemName +
              " on Nomad List"
          );
        } else {
          openSignUpModal(
            "ðŸ‘‹ <b>Learn how to work remotely</b> from " +
              activeItemName +
              " on Nomad List"
          );
        }
      } else {
        openSignUpModal(
          "ðŸ‘‹ <b>Learn how to work remotely</b> from " +
            activeItemName +
            " on Nomad List"
        );
      }
    } else {
      openSignUpModal(
        "ðŸ‘‹ Learn how to work remotely from " +
          activeItemName +
          " now on Nomad List"
      );
    }
    action =
      "ðŸ’³ Opened sign up modal via action-modal-city-join " +
      "(AB variation: " +
      signUpAbTestVariation +
      ")";
    $.ajax({
      url: "/userApi.php",
      type: "POST",
      dataType: "json",
      data: {
        action: "log_user_activity",
        log_action: action,
        hash: md5(action + "xoyo"),
      },
      context: document.body,
    }).done(function (reply) {});
  });
  $(".action-toggle-dark-mode").bind("click", function () {
    if (!isLoggedIn) {
      action =
        "ðŸ’³ Opened sign up modal via action-toggle-dark-mode " +
        "(AB variation: " +
        signUpAbTestVariation +
        ")";
      $.ajax({
        url: "/userApi.php",
        type: "POST",
        dataType: "json",
        data: {
          action: "log_user_activity",
          log_action: action,
          hash: md5(action + "xoyo"),
        },
        context: document.body,
      }).done(function (reply) {});
      openSignUpModal("ðŸŒ“ Use dark mode");
      return;
    }
    $("html").toggleClass("dark");
    if ($("html").hasClass("dark")) {
      setCookie("dark_mode", "on", 365);
      setCookie("dark_mode_js_test", "on", 365);
    } else {
      setCookie("dark_mode", "off", 365);
      setCookie("dark_mode_js_test", "off", 365);
    }
  });
  $("body").on("click", ".action-logout", function (event) {
    if (
      confirm(
        "Are you sure you want to log out? This only makes sense if you're on a public computer, otherwise it's probably easier to just stay logged in!"
      )
    ) {
      window.location.href = "/logout";
    }
  });
  $("body").on(
    "click",
    ".action-open-login-modal,.action-login",
    function (event) {
      trackEvent("pageview", "https://nomadlist.com/login");
      trackEvent("action", "https://nomadlist.com/login");
      if (!$(".login-container").length) {
        return;
      }
      $("html").removeClass("top-bar-dropdown-expanded");
      $(".modal-pay").removeClass("show");
      $(".modal-pay-backdrop").removeClass("show");
      event.preventDefault();
      event.stopPropagation();
      $(".login-container .bg").css(
        "background-image",
        "url('" + $(".login-container .bg").data("bg") + "')"
      );
      $(".login-container .bg-blur").css(
        "background-image",
        "url('" + $(".login-container .bg-blur").data("bg") + "')"
      );
      $(".modal.login").addClass("show");
      setCookie("login_url", document.URL, 99999);
    }
  );
  $("body").animate({ scrollTop: $("body").scrollTop() + 1 }, 0);
  if (isSafari) $("html").addClass("is_safari");
  if (isChrome) $("html").addClass("is_chrome");
  if (isIOS) $("html").addClass("is_ios");
  if (typeof visitCount !== "undefined") {
    setCookie("visit-count", visitCount, 7);
    if (typeof pageUri !== "undefined") {
      if (pageUri == "/") {
        location.reload();
      }
    }
  }
  if (empty(getCookie("visit-count"))) {
    setCookie("visit-count", 1, 7);
  } else {
    setCookie("visit-count", parseInt(getCookie("visit-count")) + 1, 7);
  }
  if (
    !$("html").hasClass("logged-in") &&
    (pageType == "cities" || pageType == "list")
  ) {
    $(window).scroll(function () {
      if (!isLoggedIn) {
        if (typeof data !== "undefined") {
          if (typeof data["filters"] !== "undefined") {
            if (!empty(data["filters"])) {
              scrollTop = $(window).scrollTop();
              if (scrollTop > 1500) {
                action = "ðŸ’³ Showed notice-sign-up-to-unblur";
                $.ajax({
                  url: "/userApi.php",
                  type: "POST",
                  dataType: "json",
                  data: {
                    action: "log_user_activity",
                    log_action: action,
                    hash: md5(action + "xoyo"),
                  },
                  context: document.body,
                }).done(function (reply) {});
                if (typeof itemsData !== "undefined") {
                  if (typeof itemsData.cities !== "undefined") {
                    $(".notice-sign-up-to-unblur .results-count").text(
                      number_format(itemsData.cities.length)
                    );
                  }
                }
                $(".notice-sign-up-to-unblur").show();
                $(".view.grid").css("pointer-events", "none");
                $(".view.grid").css(
                  "filter",
                  "blur(" + normalize(scrollTop, 1500, 2500) * 10 + "px)"
                );
              } else {
                $(".notice-sign-up-to-unblur").hide();
                $(".view.grid").css("pointer-events", "initial");
                $(".view.grid").css("filter", "none");
              }
            }
          }
        }
      } else {
        $(".notice-sign-up-to-unblur").hide();
        $(".view.grid").css("pointer-events", "initial");
        $(".view.grid").css("filter", "none");
      }
    });
  }
  $(window).scroll(function () {
    clearTimeout(lazyloadItemTimeout);
    lazyloadItemTimeout = setTimeout(function () {
      $(".item.show .lazyload-item").each(function () {
        objectTop = $(this).offset().top;
        if (empty(objectTop)) {
          return;
        }
        scrollTop = $(window).scrollTop();
        edge = scrollTop + windowHeight + 1000;
        if (objectTop == scrollTop) {
          return;
        }
        if (objectTop < edge) {
          url = $(this).data("src");
          $(this).prop("src", url);
          $(this).removeClass("lazyload-item");
          $(this).parent().addClass("lazyloaded_1");
        }
      });
    }, 250);
  });
  $("body").on("click", ".top-bar-dropdown-toggle.button", function (event) {
    event.stopPropagation();
    event.preventDefault();
    left =
      $(".top-bar-dropdown-toggle.button").offset().left +
      $(".top-bar-dropdown-toggle.button").outerWidth() -
      $(".top-bar-dropdown").outerWidth() / 2;
    $(".top-bar-dropdown").css("left", left + "px");
    $("html").toggleClass("top-bar-dropdown-expanded");
  });
  $("body").bind("click", function (event) {
    $("html").removeClass("top-bar-dropdown-expanded");
    $(".tooltip-ui").hide();
  });
  $("body").on("touchend", ".top-bar .brand", function (event) {
    event.preventDefault();
    event.stopPropagation();
    $(".top-bar .brand").trigger("click");
  });
  $("body").on("click", ".top-bar .top-bar-three-dots", function (event) {
    $(".tooltip-ui").hide();
    if ($(".top-bar-dropdown").length == 0) {
      window.top.location.href = "/";
      return;
    }
    event.preventDefault();
    event.stopPropagation();
    var top = $(".top-bar .brand").offset().top + 63;
    var left =
      14 +
      ($(".top-bar-three-dots").offset().left +
        $(".top-bar-three-dots").outerWidth() -
        $(".top-bar-dropdown").outerWidth());
    if (left < 14) left = 14;
    if (left > windowSize().width - 200) left = windowSize().width - 200;
    var top = top - 14;
    if (top < 14) top = 14;
    if (top > windowSize().height - 200) var top = windowSize().height - 200;
    $(".top-bar-dropdown").css("left", left + "px");
    $(".top-bar-dropdown").css("top", top + "px");
    $("html").toggleClass("top-bar-dropdown-expanded");
  });
  $("body").on("click", ".top-bar .brand", function (event) {
    $(".tooltip-ui").hide();
    if ($(".top-bar-dropdown").length == 0) {
      window.top.location.href = "/";
      return;
    }
    event.preventDefault();
    event.stopPropagation();
    var top = $(".top-bar .brand").offset().top + 63;
    var left = $(".top-bar .brand").offset().left;
    var left = left - 14;
    if (left < 14) left = 14;
    if (left > windowSize().width - 200) var left = windowSize().width - 200;
    var top = top - 14;
    if (top < 14) top = 14;
    if (top > windowSize().height - 200) var top = windowSize().height - 200;
    $(".top-bar-dropdown").css("left", left + "px");
    $(".top-bar-dropdown").css("top", top + "px");
    $("html").toggleClass("top-bar-dropdown-expanded");
  });
  $("body").on("click", ".filter-actions .brand", function (event) {
    $(".tooltip-ui").hide();
    event.preventDefault();
    event.stopPropagation();
    var top = $(".filter-actions .brand").offset().top + 70;
    var left = $(".filter-actions .brand").offset().left;
    var left = left - 14;
    if (left < 14) var left = 14;
    if (left > windowSize().width - 200) var left = windowSize().width - 200;
    var top = top - 14;
    if (top < 14) top = 14;
    if (top > windowSize().height - 200) var top = windowSize().height - 200;
    $(".top-bar-dropdown").css("left", left + "px");
    $(".top-bar-dropdown").css("top", top + "px");
    $("html").toggleClass("top-bar-dropdown-expanded");
  });
  $("body").on("click", ".top-bar-user-avatar", function (event) {
    event.preventDefault();
    event.stopPropagation();
    $(".top-bar-dropdown").css(
      "left",
      14 +
        ($(".top-bar-user-avatar").offset().left +
          $(".top-bar-user-avatar").outerWidth() -
          $(".top-bar-dropdown").outerWidth()) +
        "px"
    );
    $("html").toggleClass("top-bar-dropdown-expanded");
    $(".tooltip-ui").hide();
  });
  $(window).resize(function () {
    if (windowSize().width > 600) {
      $("html").removeClass("top-bar-dropdown-expanded");
    }
  });
  $(".action-close-cta").bind("click", function () {
    $(".sign-up-cta-bottom").hide();
  });
  $("body").on(
    "click",
    ".grid .item:not(.ignore-click) .click",
    function (event) {
      consoleLog(
        "1$('body').on('click','.grid .item:not(.ignore-click) .click',function(event) {"
      );
      consoleLog("1");
      if (!$(this).parent().data("slug") && $(this).parent().data("url")) {
        consoleLog("1");
        var url = $(this).parent().data("url");
      }
      if (!empty(url)) {
        consoleLog("2");
        event.preventDefault();
        if (typeof openItemAsNewTab === "undefined") {
          consoleLog("3");
          if (isMetaOrShiftKeyPressed(event)) {
            consoleLog("4");
            window.open(url);
          } else {
            consoleLog("5");
            window.location.href = url;
          }
        } else if (openItemAsNewTab) {
          consoleLog("6");
          window.open(url);
        } else {
          consoleLog("7");
          window.location.href = url;
        }
      }
    }
  );
  $("body").on("click", ".item-aux .container", function (event) {
    url = $(this).data("url");
    if (!empty(url)) {
      window.open(url);
    }
  });
  $("body").on("mousemove", ".grid .item", function (event) {
    offset = $(this).offset();
    x = event.pageX - offset.left;
    y = event.pageY - offset.top;
    w = $(this).width();
    h = $(this).height();
    propX = x / w;
    propY = y / h;
    $(this)
      .find(".blur")
      .css(
        "transform",
        "perspective(500px) translateZ(-50px) rotateX(" +
          15 * (propY - 0.5) +
          "deg) rotateY(" +
          15 * (0.5 - propX) +
          "deg)"
      );
  });
  $(window).resize(function () {
    var windowWidth = windowSize().width;
    var windowHeight = windowSize().height;
  });
  $(".prevent-default").bind("click", function (event) {
    event.preventDefault();
  });
  $(".action-expand-nav").bind("click", function () {
    $("body").toggleClass("nav-opened");
    if (
      $("body").hasClass("filter-opened") &&
      $("body").hasClass("nav-opened")
    ) {
      $("body").removeClass("filter-opened");
    }
  });
  insideTwitterButton = false;
  $(".twitter-follow-floating-container").bind("mouseenter", function () {
    if (!insideTwitterButton) {
      insideTwitterButton = true;
    }
  });
  $(".twitter-follow-floating-container").bind("mouseleave", function () {
    insideTwitterButton = false;
  });
  $(window).blur(function () {
    if (insideTwitterButton) {
      setCookie("twitter_followed", "true", 99999);
      setTimeout(function () {
        $(".twitter-follow-floating-container").hide();
      }, 1000);
    }
  });
  $(window).resize(function () {
    if (!empty(lazyloadTimeout)) {
      clearTimeout(lazyloadTimeout);
    }
    lazyloadTimeout = setTimeout(function () {
      lazyload();
    }, 300);
  });
  $(window).scroll(function () {
    $(".tooltip-ui").hide();
    if (!empty(lazyloadTimeout)) {
      clearTimeout(lazyloadTimeout);
    }
    lazyloadTimeout = setTimeout(function () {
      lazyload();
    }, 300);
  });
  $(".top-links").bind("change", function () {
    window.location.href = $(".top-links").find(":selected").data("href");
  });
  $(".aux form.mailchimp .button").bind("click", function () {
    $(this).parent().submit();
  });
  $(".backdrop").bind("click", function (event) {
    if ($(this).hasClass("not-clickable")) {
      return;
      event.stopPropagation();
      event.preventDefault();
    }
  });
  $(".tooltip").each(function () {
    if (!empty($(this).attr("title"))) {
      $(this).data("tooltip", $(this).attr("title"));
      $(this).attr("title", "");
      $(this).removeClass("tooltip");
      $(this).addClass("tooltip-set");
    }
  });
  $("body").append('<div class="tooltip-ui"></div>');
  $("body").on("mouseenter", ".tooltip-set", function () {
    if (isMobile) return;
    if (
      typeof $(this).data("tooltip") === "undefined" ||
      $(this).data("tooltip") == ""
    ) {
      return;
    }
    $(".tooltip-ui").html(
      str_replace("&#013;", "<br/>", $(this).data("tooltip"))
    );
    $(".tooltip-ui").html(str_replace("\\n", "<br/>", $(this).data("tooltip")));
    $(".tooltip-ui").removeClass("show").show().addClass("show");
    var top = $(this).offset().top + $(this).outerHeight();
    if (top < 14) top = 14;
    $(".tooltip-ui").css({ top: top });
    var windowWidth = windowSize().width;
    var left =
      $(this).offset().left +
      $(this).outerWidth() / 2 -
      $(".tooltip-ui").outerWidth() / 2;
    if (left < 14) left = 14;
    if (left + $(".tooltip-ui").outerWidth() > windowWidth - 14)
      left = windowWidth - $(".tooltip-ui").outerWidth() - 28;
    $(".tooltip-ui").css({ left: left });
    if ($("body").hasClass("touch")) {
      clearTimeout(tooltipUiTimeout);
      tooltipUiTimeout = setTimeout(function () {
        $(".tooltip-ui").hide().removeClass("show");
      }, 4000);
    }
  });
  $("body").on("mouseleave", ".tooltip-set", function () {
    clearTimeout(tooltipUiTimeout);
    $(".tooltip-ui").hide().removeClass("show");
  });
  $("body").on("click", ".tooltip-ui", function () {
    $(this).hide().removeClass("show");
  });
});
function downloadAutocompleteQueries() {
  consoleLog("downloadAutocompleteQueries");
  if (
    typeof autocompleteQueries == "undefined" &&
    !gettingAutocompleteQueriesAJAX
  ) {
    gettingAutocompleteQueriesAJAX = true;
    if (isLoggedIn) {
      autocompleteQueriesURL =
        "/assets/autocompleteQueriesForMembers.json?_" +
        "?2_" +
        date("Y-m-d") +
        "_" +
        Math.round(date("H") / 6);
    } else {
      autocompleteQueriesURL =
        "/assets/autocompleteQueries.json?2_" +
        date("Y-m-d") +
        "_" +
        Math.round(date("H") / 6);
    }
    $.getJSON(autocompleteQueriesURL, function (reply) {
      gettingAutocompleteQueriesAJAX = false;
      autocompleteQueries = reply;
      consoleLog("received new autocompleteQueries, ready for typing...");
    });
  }
}
function localizePrices() {
  if (typeof exchangeRatesUSD === "undefined") {
    return;
  }
  if ($(".price[data-usd]").length > 1) {
    $(".price[data-usd]").each(function () {
      var converted =
        $(this).data("usd") * exchangeRatesUSD[userCurrency.toUpperCase()];
      var formatted = "";
      if (exchangeRatesUSD[userCurrency.toUpperCase()] >= 1000) {
        converted = Math.round(converted / 1000) * 1000;
        if (converted < 10) {
          formatted = number_format(converted, 2);
        } else if (converted >= 1000000) {
          formatted = number_format(converted / 1000000, 2) + "M";
        } else if (converted >= 1000) {
          formatted = number_format(converted / 1000) + "k";
        }
      } else {
        if (converted < 10) {
          formatted = number_format(converted, 2);
        } else {
          formatted = number_format(converted);
        }
        if (formatted == "0.00") {
          formatted = number_format(converted, 4);
          if (formatted == "0.00") {
            formatted = number_format(converted, 8);
          }
        }
      }
      $(this).html(
        exchangeRatesSymbols[userCurrency.toUpperCase()] + "" + formatted
      );
    });
  }
}
function engageSearch(e) {
  $(".filters .choice").removeClass("active");
  search = $(".search").val().trim().toLowerCase();
  search = " " + search + " ";
  search = search.trim();
  searchParts = search.split(" ");
  activeSearch = search;
  if (generateItemsInJS) {
    var matchCount;
    $(".loading_spinner_2018.infinity-scroll").removeClass("show");
    updateItemsToMatchFilter(true, true);
  }
}
function lazyload() {
  var windowHeight = windowSize().height;
  var scrollTop = $(window).scrollTop();
  $(".lazyload").each(function () {
    edge = $(this).offset().top;
    if (edge + 300 >= scrollTop && edge <= scrollTop + windowHeight * 2) {
      if ($(this).is(":visible")) {
        if ($(this).data("bg")) {
          $(this).css("background-image", "url('" + $(this).data("bg") + "')");
          $(this).removeClass("lazyload");
          $(this).addClass("lazyloaded");
        }
        if ($(this).data("srcset")) {
          $(this).prop("srcset", $(this).data("srcset"));
          $(this).removeClass("lazyload");
          $(this).addClass("lazyloaded");
        }
        if ($(this).data("src")) {
          $(this).prop("src", $(this).data("src"));
          $(this).removeClass("lazyload");
          $(this).addClass("lazyloaded");
        }
      }
    }
  });
}
function getQueryString(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
  return results === null
    ? ""
    : decodeURIComponent(results[1].replace(/\+/g, " "));
}
function getHash(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.hash);
  return results === null
    ? ""
    : decodeURIComponent(results[1].replace(/\+/g, " "));
}
function isset() {
  var a = arguments,
    l = a.length,
    i = 0,
    undef;
  if (l === 0) {
    throw new Error("Empty isset");
  }
  while (i !== l) {
    if (a[i] === undef || a[i] === null) {
      return false;
    }
    i++;
  }
  return true;
}
function number_format(number, decimals, dec_point, thousands_sep) {
  number = (number + "").replace(/[^0-9+\-Ee.]/g, "");
  var n = !isFinite(+number) ? 0 : +number,
    prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
    sep = typeof thousands_sep === "undefined" ? "," : thousands_sep,
    dec = typeof dec_point === "undefined" ? "." : dec_point,
    s = "",
    toFixedFix = function (n, prec) {
      var k = Math.pow(10, prec);
      return "" + (Math.round(n * k) / k).toFixed(prec);
    };
  s = (prec ? toFixedFix(n, prec) : "" + Math.round(n)).split(".");
  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
  }
  if ((s[1] || "").length < prec) {
    s[1] = s[1] || "";
    s[1] += new Array(prec - s[1].length + 1).join("0");
  }
  return s.join(dec);
}
function htmlentities(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
function str_replace(search, replace, subject, count) {
  var i = 0,
    j = 0,
    temp = "",
    repl = "",
    sl = 0,
    fl = 0,
    f = [].concat(search),
    r = [].concat(replace),
    s = subject,
    ra = Object.prototype.toString.call(r) === "[object Array]",
    sa = Object.prototype.toString.call(s) === "[object Array]";
  s = [].concat(s);
  if (count) {
    this.window[count] = 0;
  }
  for (i = 0, sl = s.length; i < sl; i++) {
    if (s[i] === "") {
      continue;
    }
    for (j = 0, fl = f.length; j < fl; j++) {
      temp = s[i] + "";
      repl = ra ? (r[j] !== undefined ? r[j] : "") : r[0];
      s[i] = temp.split(f[j]).join(repl);
      if (count && s[i] !== temp) {
        this.window[count] += (temp.length - s[i].length) / f[j].length;
      }
    }
  }
  return sa ? s : s[0];
}
function windowSize() {
  var e = window,
    a = "inner";
  if (!("innerWidth" in window)) {
    a = "client";
    e = document.documentElement || document.body;
  }
  return { width: e[a + "Width"], height: e[a + "Height"] };
}
function sortBySubkey(array, key) {
  return array.sort(function (a, b) {
    var x = a[key];
    var y = b[key];
    if (is_numeric(x)) x = parseFloat(x);
    if (is_numeric(y)) y = parseFloat(y);
    return x < y ? -1 : x > y ? 1 : 0;
  });
}
function trackEvent(event, url) {
  url = url.replace("https://nomadlist.com/", "");
  url = url.replace("https://nomadlist.com", "");
  url = url.replace("http://nomadlist.com/", "");
  url = url.replace("http://nomadlist.com", "");
  var eventProperties = {};
  eventProperties.url = url;
  if (window.ga) {
    ga("send", event, url);
    ga("b.send", event, url);
  }
  if (window.sa_pageview) {
    window.sa_pageview(url);
  }
}
function explode(delimiter, string, limit) {
  if (
    arguments.length < 2 ||
    typeof delimiter === "undefined" ||
    typeof string === "undefined"
  )
    return null;
  if (delimiter === "" || delimiter === false || delimiter === null)
    return false;
  if (
    typeof delimiter === "function" ||
    typeof delimiter === "object" ||
    typeof string === "function" ||
    typeof string === "object"
  ) {
    return { 0: "" };
  }
  if (delimiter === true) delimiter = "1";
  delimiter += "";
  string += "";
  var s = string.split(delimiter);
  if (typeof limit === "undefined") return s;
  if (limit === 0) limit = 1;
  if (limit > 0) {
    if (limit >= s.length) return s;
    return s.slice(0, limit - 1).concat([s.slice(limit - 1).join(delimiter)]);
  }
  if (-limit >= s.length) return [];
  s.splice(s.length + limit);
  return s;
}
function isset(a) {
  var a = arguments;
  var l = a.length;
  var i = 0;
  var undef;
  if (l === 0) {
    throw new Error("Empty isset");
  }
  while (i !== l) {
    if (a[i] === undef || a[i] === null) {
      return false;
    }
    i++;
  }
  return true;
}
function empty(mixed_var) {
  if (typeof mixed_var === "undefined") return true;
  var undef, key, i, len;
  var emptyValues = [undef, null, false, 0, "", "0"];
  for (i = 0, len = emptyValues.length; i < len; i++) {
    if (mixed_var === emptyValues[i]) {
      return true;
    }
  }
  if (typeof mixed_var === "object") {
    for (key in mixed_var) {
      return false;
    }
    return true;
  }
  return false;
}
function strtotime(text, now) {
  var parsed,
    match,
    today,
    year,
    date,
    days,
    ranges,
    len,
    times,
    regex,
    i,
    fail = false;
  if (!text) {
    return fail;
  }
  text = text
    .replace(/^\s+|\s+$/g, "")
    .replace(/\s{2,}/g, " ")
    .replace(/[\t\r\n]/g, "")
    .toLowerCase();
  match = text.match(
    /^(\d{1,4})([\-\.\/\:])(\d{1,2})([\-\.\/\:])(\d{1,4})(?:\s(\d{1,2}):(\d{2})?:?(\d{2})?)?(?:\s([A-Z]+)?)?$/
  );
  if (match && match[2] === match[4]) {
    if (match[1] > 1901) {
      switch (match[2]) {
        case "-": {
          if (match[3] > 12 || match[5] > 31) {
            return fail;
          }
          return (
            new Date(
              match[1],
              parseInt(match[3], 10) - 1,
              match[5],
              match[6] || 0,
              match[7] || 0,
              match[8] || 0,
              match[9] || 0
            ) / 1000
          );
        }
        case ".": {
          return fail;
        }
        case "/": {
          if (match[3] > 12 || match[5] > 31) {
            return fail;
          }
          return (
            new Date(
              match[1],
              parseInt(match[3], 10) - 1,
              match[5],
              match[6] || 0,
              match[7] || 0,
              match[8] || 0,
              match[9] || 0
            ) / 1000
          );
        }
      }
    } else if (match[5] > 1901) {
      switch (match[2]) {
        case "-": {
          if (match[3] > 12 || match[1] > 31) {
            return fail;
          }
          return (
            new Date(
              match[5],
              parseInt(match[3], 10) - 1,
              match[1],
              match[6] || 0,
              match[7] || 0,
              match[8] || 0,
              match[9] || 0
            ) / 1000
          );
        }
        case ".": {
          if (match[3] > 12 || match[1] > 31) {
            return fail;
          }
          return (
            new Date(
              match[5],
              parseInt(match[3], 10) - 1,
              match[1],
              match[6] || 0,
              match[7] || 0,
              match[8] || 0,
              match[9] || 0
            ) / 1000
          );
        }
        case "/": {
          if (match[1] > 12 || match[3] > 31) {
            return fail;
          }
          return (
            new Date(
              match[5],
              parseInt(match[1], 10) - 1,
              match[3],
              match[6] || 0,
              match[7] || 0,
              match[8] || 0,
              match[9] || 0
            ) / 1000
          );
        }
      }
    } else {
      switch (match[2]) {
        case "-": {
          if (
            match[3] > 12 ||
            match[5] > 31 ||
            (match[1] < 70 && match[1] > 38)
          ) {
            return fail;
          }
          year = match[1] >= 0 && match[1] <= 38 ? +match[1] + 2000 : match[1];
          return (
            new Date(
              year,
              parseInt(match[3], 10) - 1,
              match[5],
              match[6] || 0,
              match[7] || 0,
              match[8] || 0,
              match[9] || 0
            ) / 1000
          );
        }
        case ".": {
          if (match[5] >= 70) {
            if (match[3] > 12 || match[1] > 31) {
              return fail;
            }
            return (
              new Date(
                match[5],
                parseInt(match[3], 10) - 1,
                match[1],
                match[6] || 0,
                match[7] || 0,
                match[8] || 0,
                match[9] || 0
              ) / 1000
            );
          }
          if (match[5] < 60 && !match[6]) {
            if (match[1] > 23 || match[3] > 59) {
              return fail;
            }
            today = new Date();
            return (
              new Date(
                today.getFullYear(),
                today.getMonth(),
                today.getDate(),
                match[1] || 0,
                match[3] || 0,
                match[5] || 0,
                match[9] || 0
              ) / 1000
            );
          }
          return fail;
        }
        case "/": {
          if (
            match[1] > 12 ||
            match[3] > 31 ||
            (match[5] < 70 && match[5] > 38)
          ) {
            return fail;
          }
          year = match[5] >= 0 && match[5] <= 38 ? +match[5] + 2000 : match[5];
          return (
            new Date(
              year,
              parseInt(match[1], 10) - 1,
              match[3],
              match[6] || 0,
              match[7] || 0,
              match[8] || 0,
              match[9] || 0
            ) / 1000
          );
        }
        case ":": {
          if (match[1] > 23 || match[3] > 59 || match[5] > 59) {
            return fail;
          }
          today = new Date();
          return (
            new Date(
              today.getFullYear(),
              today.getMonth(),
              today.getDate(),
              match[1] || 0,
              match[3] || 0,
              match[5] || 0
            ) / 1000
          );
        }
      }
    }
  }
  if (text === "now") {
    return now === null || isNaN(now)
      ? (new Date().getTime() / 1000) | 0
      : now | 0;
  }
  if (!isNaN((parsed = Date.parse(text)))) {
    return (parsed / 1000) | 0;
  }
  date = now ? new Date(now * 1000) : new Date();
  days = { sun: 0, mon: 1, tue: 2, wed: 3, thu: 4, fri: 5, sat: 6 };
  ranges = {
    yea: "FullYear",
    mon: "Month",
    day: "Date",
    hou: "Hours",
    min: "Minutes",
    sec: "Seconds",
  };
  function lastNext(type, range, modifier) {
    var diff,
      day = days[range];
    if (typeof day !== "undefined") {
      diff = day - date.getDay();
      if (diff === 0) {
        diff = 7 * modifier;
      } else if (diff > 0 && type === "last") {
        diff -= 7;
      } else if (diff < 0 && type === "next") {
        diff += 7;
      }
      date.setDate(date.getDate() + diff);
    }
  }
  function process(val) {
    var splt = val.split(" "),
      type = splt[0],
      range = splt[1].substring(0, 3),
      typeIsNumber = /\d+/.test(type),
      ago = splt[2] === "ago",
      num = (type === "last" ? -1 : 1) * (ago ? -1 : 1);
    if (typeIsNumber) {
      num *= parseInt(type, 10);
    }
    if (ranges.hasOwnProperty(range) && !splt[1].match(/^mon(day|\.)?$/i)) {
      return date["set" + ranges[range]](date["get" + ranges[range]]() + num);
    }
    if (range === "wee") {
      return date.setDate(date.getDate() + num * 7);
    }
    if (type === "next" || type === "last") {
      lastNext(type, range, num);
    } else if (!typeIsNumber) {
      return false;
    }
    return true;
  }
  times =
    "(years?|months?|weeks?|days?|hours?|minutes?|min|seconds?|sec" +
    "|sunday|sun\\.?|monday|mon\\.?|tuesday|tue\\.?|wednesday|wed\\.?" +
    "|thursday|thu\\.?|friday|fri\\.?|saturday|sat\\.?)";
  regex =
    "([+-]?\\d+\\s" + times + "|" + "(last|next)\\s" + times + ")(\\sago)?";
  match = text.match(new RegExp(regex, "gi"));
  if (!match) {
    return fail;
  }
  for (i = 0, len = match.length; i < len; i++) {
    if (!process(match[i])) {
      return fail;
    }
  }
  return date.getTime() / 1000;
}
function makeUrlSlugAndKeepEmojis(Text) {
  return Text.toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
}
function makeUrlSlug(text) {
  if (typeof text === "undefined") return "";
  text = text.trim();
  text = text
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
  if (text.substr(-1) == "-") {
    text = text.substr(0, text.length - 1);
  }
  if (text.substr(0, 1) == "-") {
    text = text.substr(1, text.length);
  }
  return text;
}
function date(format, timestamp) {
  var that = this;
  var jsdate, f;
  var txt_words = [
    "Sun",
    "Mon",
    "Tues",
    "Wednes",
    "Thurs",
    "Fri",
    "Satur",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  var formatChr = /\\?(.?)/gi;
  var formatChrCb = function (t, s) {
    return f[t] ? f[t]() : s;
  };
  var _pad = function (n, c) {
    n = String(n);
    while (n.length < c) {
      n = "0" + n;
    }
    return n;
  };
  f = {
    d: function () {
      return _pad(f.j(), 2);
    },
    D: function () {
      return f.l().slice(0, 3);
    },
    j: function () {
      return jsdate.getDate();
    },
    l: function () {
      return txt_words[f.w()] + "day";
    },
    N: function () {
      return f.w() || 7;
    },
    S: function () {
      var j = f.j();
      var i = j % 10;
      if (i <= 3 && parseInt((j % 100) / 10, 10) == 1) {
        i = 0;
      }
      return ["st", "nd", "rd"][i - 1] || "th";
    },
    w: function () {
      return jsdate.getDay();
    },
    z: function () {
      var a = new Date(f.Y(), f.n() - 1, f.j());
      var b = new Date(f.Y(), 0, 1);
      return Math.round((a - b) / 864e5);
    },
    W: function () {
      var a = new Date(f.Y(), f.n() - 1, f.j() - f.N() + 3);
      var b = new Date(a.getFullYear(), 0, 4);
      return _pad(1 + Math.round((a - b) / 864e5 / 7), 2);
    },
    F: function () {
      return txt_words[6 + f.n()];
    },
    m: function () {
      return _pad(f.n(), 2);
    },
    M: function () {
      return f.F().slice(0, 3);
    },
    n: function () {
      return jsdate.getMonth() + 1;
    },
    t: function () {
      return new Date(f.Y(), f.n(), 0).getDate();
    },
    L: function () {
      var j = f.Y();
      return ((j % 4 === 0) & (j % 100 !== 0)) | (j % 400 === 0);
    },
    o: function () {
      var n = f.n();
      var W = f.W();
      var Y = f.Y();
      return Y + (n === 12 && W < 9 ? 1 : n === 1 && W > 9 ? -1 : 0);
    },
    Y: function () {
      return jsdate.getFullYear();
    },
    y: function () {
      return f.Y().toString().slice(-2);
    },
    a: function () {
      return jsdate.getHours() > 11 ? "pm" : "am";
    },
    A: function () {
      return f.a().toUpperCase();
    },
    B: function () {
      var H = jsdate.getUTCHours() * 36e2;
      var i = jsdate.getUTCMinutes() * 60;
      var s = jsdate.getUTCSeconds();
      return _pad(Math.floor((H + i + s + 36e2) / 86.4) % 1e3, 3);
    },
    g: function () {
      return f.G() % 12 || 12;
    },
    G: function () {
      return jsdate.getHours();
    },
    h: function () {
      return _pad(f.g(), 2);
    },
    H: function () {
      return _pad(f.G(), 2);
    },
    i: function () {
      return _pad(jsdate.getMinutes(), 2);
    },
    s: function () {
      return _pad(jsdate.getSeconds(), 2);
    },
    u: function () {
      return _pad(jsdate.getMilliseconds() * 1000, 6);
    },
    e: function () {
      throw "Not supported (see source code of date() for timezone on how to add support)";
    },
    I: function () {
      var a = new Date(f.Y(), 0);
      var c = Date.UTC(f.Y(), 0);
      var b = new Date(f.Y(), 6);
      var d = Date.UTC(f.Y(), 6);
      return a - c !== b - d ? 1 : 0;
    },
    O: function () {
      var tzo = jsdate.getTimezoneOffset();
      var a = Math.abs(tzo);
      return (
        (tzo > 0 ? "-" : "+") + _pad(Math.floor(a / 60) * 100 + (a % 60), 4)
      );
    },
    P: function () {
      var O = f.O();
      return O.substr(0, 3) + ":" + O.substr(3, 2);
    },
    T: function () {
      return "UTC";
    },
    Z: function () {
      return -jsdate.getTimezoneOffset() * 60;
    },
    c: function () {
      return "Y-m-d\\TH:i:sP".replace(formatChr, formatChrCb);
    },
    r: function () {
      return "D, d M Y H:i:s O".replace(formatChr, formatChrCb);
    },
    U: function () {
      return (jsdate / 1000) | 0;
    },
  };
  this.date = function (format, timestamp) {
    that = this;
    jsdate =
      timestamp === undefined
        ? new Date()
        : timestamp instanceof Date
        ? new Date(timestamp)
        : new Date(timestamp * 1000);
    return format.replace(formatChr, formatChrCb);
  };
  return this.date(format, timestamp);
}
function setCookie(cname, cvalue, extimeDays) {
  var d = new Date();
  d.setTime(d.getTime() + extimeDays * 86400 * 1000);
  var expires = "expires=" + d.toGMTString();
  document.cookie =
    cname +
    "=" +
    cvalue +
    "; " +
    expires +
    "; secure;domain=.nomadlist.com;path=/; samesite=lax";
}
function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1);
    if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
  }
  return "";
}
jQuery.fn.outerHTML = function () {
  return jQuery("<div />").append(this.eq(0).clone()).html();
};
function time() {
  return Math.floor(new Date().getTime() / 1000);
}
function in_array(needle, haystack, argStrict) {
  var key = "",
    strict = !!argStrict;
  if (strict) {
    for (key in haystack) {
      if (haystack[key] === needle) {
        return true;
      }
    }
  } else {
    for (key in haystack) {
      if (haystack[key] == needle) {
        return true;
      }
    }
  }
  return false;
}
function ucwords(str) {
  return (str + "").replace(
    /^([a-z\u00E0-\u00FC])|\s+([a-z\u00E0-\u00FC])/g,
    function ($1) {
      return $1.toUpperCase();
    }
  );
}
function capitalize(str) {
  return properlyCapitalize(str);
}
function properlyCapitalize(string) {
  var lowers = [
    "vs",
    "vs.",
    "a",
    "an",
    "the",
    "and",
    "but",
    "or",
    "for",
    "nor",
    "as",
    "at",
    "by",
    "for",
    "from",
    "in",
    "into",
    "near",
    "of",
    "on",
    "onto",
    "to",
    "with",
  ];
  var uppers = [
    "usd",
    "gbp",
    "eur",
    "aqi",
    "lgbt",
    "lgbt",
    "edm",
    "gdp",
    "utc",
    "oecd",
  ];
  var stringParts = string.toLowerCase().split(" ");
  var newString = "";
  var i;
  for (i = 0, stringParts.length; i < stringParts.length; i++) {
    part = stringParts[i];
    if (in_array(part.toLowerCase(), uppers)) {
      newString = newString + " " + part.toUpperCase();
    } else if (in_array(part.toLowerCase(), lowers)) {
      newString = newString + " " + part.toLowerCase();
    } else {
      newString =
        newString + " " + part.charAt(0).toUpperCase() + part.slice(1);
    }
  }
  return newString;
}
function celsiusToFahrenheit(celsius) {
  var cTemp = celsius;
  var cToFahr = (cTemp * 9) / 5 + 32;
  return Math.round(cToFahr);
}
var monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
function timeAgoShort(epoch) {
  var secs = new Date().getTime() / 1000 - epoch;
  Math.floor(secs);
  var minutes = secs / 60;
  secs = Math.floor(secs % 60);
  if (minutes < 1) {
    return secs + (secs > 1 ? "s" : "s");
  }
  var hours = minutes / 60;
  minutes = Math.floor(minutes % 60);
  if (hours < 1) {
    return minutes + (minutes > 1 ? "m" : "m");
  }
  var days = hours / 24;
  hours = Math.floor(hours % 24);
  if (days < 1) {
    return hours + (hours > 1 ? "h" : "h");
  }
  var months = days / 30;
  days = Math.floor(days % 30);
  if (months < 1) {
    return days + (days > 1 ? "d" : "d");
  }
  var years = months / 12;
  months = Math.floor(months % 12);
  if (years < 1) {
    return months + (months > 1 ? "mo" : "mo");
  }
  years = Math.floor(years);
  return years + (years > 1 ? "y" : "y");
}
function unserialize(data) {
  var $global = typeof window !== "undefined" ? window : global;
  var utf8Overhead = function (str) {
    var s = str.length;
    for (var i = str.length - 1; i >= 0; i--) {
      var code = str.charCodeAt(i);
      if (code > 0x7f && code <= 0x7ff) {
        s++;
      } else if (code > 0x7ff && code <= 0xffff) {
        s += 2;
      }
      if (code >= 0xdc00 && code <= 0xdfff) {
        i--;
      }
    }
    return s - 1;
  };
  var error = function (type, msg, filename, line) {
    throw new $global[type](msg, filename, line);
  };
  var readUntil = function (data, offset, stopchr) {
    var i = 2;
    var buf = [];
    var chr = data.slice(offset, offset + 1);
    while (chr !== stopchr) {
      if (i + offset > data.length) {
        error("Error", "Invalid");
      }
      buf.push(chr);
      chr = data.slice(offset + (i - 1), offset + i);
      i += 1;
    }
    return [buf.length, buf.join("")];
  };
  var readChrs = function (data, offset, length) {
    var i, chr, buf;
    buf = [];
    for (i = 0; i < length; i++) {
      chr = data.slice(offset + (i - 1), offset + i);
      buf.push(chr);
      length -= utf8Overhead(chr);
    }
    return [buf.length, buf.join("")];
  };
  function _unserialize(data, offset) {
    var dtype;
    var dataoffset;
    var keyandchrs;
    var keys;
    var contig;
    var length;
    var array;
    var readdata;
    var readData;
    var ccount;
    var stringlength;
    var i;
    var key;
    var kprops;
    var kchrs;
    var vprops;
    var vchrs;
    var value;
    var chrs = 0;
    var typeconvert = function (x) {
      return x;
    };
    if (!offset) {
      offset = 0;
    }
    dtype = data.slice(offset, offset + 1).toLowerCase();
    dataoffset = offset + 2;
    switch (dtype) {
      case "i":
        typeconvert = function (x) {
          return parseInt(x, 10);
        };
        readData = readUntil(data, dataoffset, ";");
        chrs = readData[0];
        readdata = readData[1];
        dataoffset += chrs + 1;
        break;
      case "b":
        typeconvert = function (x) {
          return parseInt(x, 10) !== 0;
        };
        readData = readUntil(data, dataoffset, ";");
        chrs = readData[0];
        readdata = readData[1];
        dataoffset += chrs + 1;
        break;
      case "d":
        typeconvert = function (x) {
          return parseFloat(x);
        };
        readData = readUntil(data, dataoffset, ";");
        chrs = readData[0];
        readdata = readData[1];
        dataoffset += chrs + 1;
        break;
      case "n":
        readdata = null;
        break;
      case "s":
        ccount = readUntil(data, dataoffset, ":");
        chrs = ccount[0];
        stringlength = ccount[1];
        dataoffset += chrs + 2;
        readData = readChrs(data, dataoffset + 1, parseInt(stringlength, 10));
        chrs = readData[0];
        readdata = readData[1];
        dataoffset += chrs + 2;
        if (chrs !== parseInt(stringlength, 10) && chrs !== readdata.length) {
          error("SyntaxError", "String length mismatch");
        }
        break;
      case "a":
        readdata = {};
        keyandchrs = readUntil(data, dataoffset, ":");
        chrs = keyandchrs[0];
        keys = keyandchrs[1];
        dataoffset += chrs + 2;
        length = parseInt(keys, 10);
        contig = true;
        for (i = 0; i < length; i++) {
          kprops = _unserialize(data, dataoffset);
          kchrs = kprops[1];
          key = kprops[2];
          dataoffset += kchrs;
          vprops = _unserialize(data, dataoffset);
          vchrs = vprops[1];
          value = vprops[2];
          dataoffset += vchrs;
          if (key !== i) {
            contig = false;
          }
          readdata[key] = value;
        }
        if (contig) {
          array = new Array(length);
          for (i = 0; i < length; i++) {
            array[i] = readdata[i];
          }
          readdata = array;
        }
        dataoffset += 1;
        break;
      default:
        error("SyntaxError", "Unknown / Unhandled data type(s): " + dtype);
        break;
    }
    return [dtype, dataoffset - offset, typeconvert(readdata)];
  }
  return _unserialize(data + "", 0)[2];
}
function urlencode(str) {
  str = str + "";
  return encodeURIComponent(str)
    .replace(/!/g, "%21")
    .replace(/'/g, "%27")
    .replace(/\(/g, "%28")
    .replace(/\)/g, "%29")
    .replace(/\*/g, "%2A")
    .replace(/%20/g, "+");
}
function is_numeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
(function ($) {
  "use strict";
  function safeAdd(x, y) {
    var lsw = (x & 0xffff) + (y & 0xffff);
    var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
    return (msw << 16) | (lsw & 0xffff);
  }
  function bitRotateLeft(num, cnt) {
    return (num << cnt) | (num >>> (32 - cnt));
  }
  function md5cmn(q, a, b, x, s, t) {
    return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
  }
  function md5ff(a, b, c, d, x, s, t) {
    return md5cmn((b & c) | (~b & d), a, b, x, s, t);
  }
  function md5gg(a, b, c, d, x, s, t) {
    return md5cmn((b & d) | (c & ~d), a, b, x, s, t);
  }
  function md5hh(a, b, c, d, x, s, t) {
    return md5cmn(b ^ c ^ d, a, b, x, s, t);
  }
  function md5ii(a, b, c, d, x, s, t) {
    return md5cmn(c ^ (b | ~d), a, b, x, s, t);
  }
  function binlMD5(x, len) {
    x[len >> 5] |= 0x80 << len % 32;
    x[(((len + 64) >>> 9) << 4) + 14] = len;
    var i;
    var olda;
    var oldb;
    var oldc;
    var oldd;
    var a = 1732584193;
    var b = -271733879;
    var c = -1732584194;
    var d = 271733878;
    for (i = 0; i < x.length; i += 16) {
      olda = a;
      oldb = b;
      oldc = c;
      oldd = d;
      a = md5ff(a, b, c, d, x[i], 7, -680876936);
      d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
      c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
      b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
      a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
      d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
      c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
      b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
      a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
      d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
      c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
      b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
      a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
      d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
      c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
      b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
      a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
      d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
      c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
      b = md5gg(b, c, d, a, x[i], 20, -373897302);
      a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
      d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
      c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
      b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
      a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
      d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
      c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
      b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
      a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
      d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
      c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
      b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
      a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
      d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
      c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
      b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
      a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
      d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
      c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
      b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
      a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
      d = md5hh(d, a, b, c, x[i], 11, -358537222);
      c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
      b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
      a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
      d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
      c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
      b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);
      a = md5ii(a, b, c, d, x[i], 6, -198630844);
      d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
      c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
      b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
      a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
      d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
      c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
      b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
      a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
      d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
      c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
      b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
      a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
      d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
      c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
      b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);
      a = safeAdd(a, olda);
      b = safeAdd(b, oldb);
      c = safeAdd(c, oldc);
      d = safeAdd(d, oldd);
    }
    return [a, b, c, d];
  }
  function binl2rstr(input) {
    var i;
    var output = "";
    var length32 = input.length * 32;
    for (i = 0; i < length32; i += 8) {
      output += String.fromCharCode((input[i >> 5] >>> i % 32) & 0xff);
    }
    return output;
  }
  function rstr2binl(input) {
    var i;
    var output = [];
    output[(input.length >> 2) - 1] = undefined;
    for (i = 0; i < output.length; i += 1) {
      output[i] = 0;
    }
    var length8 = input.length * 8;
    for (i = 0; i < length8; i += 8) {
      output[i >> 5] |= (input.charCodeAt(i / 8) & 0xff) << i % 32;
    }
    return output;
  }
  function rstrMD5(s) {
    return binl2rstr(binlMD5(rstr2binl(s), s.length * 8));
  }
  function rstrHMACMD5(key, data) {
    var i;
    var bkey = rstr2binl(key);
    var ipad = [];
    var opad = [];
    var hash;
    ipad[15] = opad[15] = undefined;
    if (bkey.length > 16) {
      bkey = binlMD5(bkey, key.length * 8);
    }
    for (i = 0; i < 16; i += 1) {
      ipad[i] = bkey[i] ^ 0x36363636;
      opad[i] = bkey[i] ^ 0x5c5c5c5c;
    }
    hash = binlMD5(ipad.concat(rstr2binl(data)), 512 + data.length * 8);
    return binl2rstr(binlMD5(opad.concat(hash), 512 + 128));
  }
  function rstr2hex(input) {
    var hexTab = "0123456789abcdef";
    var output = "";
    var x;
    var i;
    for (i = 0; i < input.length; i += 1) {
      x = input.charCodeAt(i);
      output += hexTab.charAt((x >>> 4) & 0x0f) + hexTab.charAt(x & 0x0f);
    }
    return output;
  }
  function str2rstrUTF8(input) {
    return unescape(encodeURIComponent(input));
  }
  function rawMD5(s) {
    return rstrMD5(str2rstrUTF8(s));
  }
  function hexMD5(s) {
    return rstr2hex(rawMD5(s));
  }
  function rawHMACMD5(k, d) {
    return rstrHMACMD5(str2rstrUTF8(k), str2rstrUTF8(d));
  }
  function hexHMACMD5(k, d) {
    return rstr2hex(rawHMACMD5(k, d));
  }
  function md5(string, key, raw) {
    if (!key) {
      if (!raw) {
        return hexMD5(string);
      }
      return rawMD5(string);
    }
    if (!raw) {
      return hexHMACMD5(key, string);
    }
    return rawHMACMD5(key, string);
  }
  if (typeof define === "function" && define.amd) {
    define(function () {
      return md5;
    });
  } else if (typeof module === "object" && module.exports) {
    module.exports = md5;
  } else {
    $.md5 = md5;
  }
})(this);
function ucfirst(str) {
  str += "";
  var f = str.charAt(0).toUpperCase();
  return f + str.substr(1);
}
function makeRandomString() {
  var text = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < 16; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
}
function showLoading() {
  document.body.style.cursor = "wait";
  $("html").addClass("wait");
  $(".loading_spinner-general").addClass("show");
  $(".backdrop.loading span").hide();
}
function hideLoading() {
  document.body.style.cursor = "default";
  $("html").removeClass("wait");
  $(".backdrop.loading span").hide();
  $(".loading_spinner-general").removeClass("show");
  $(".backdrop.loading").removeClass("show");
}
function getDistanceBetweenTwoGPSCoords(lat1, lon1, lat2, lon2) {
  var R = 6371;
  var dLat = deg2rad(lat2 - lat1);
  var dLon = deg2rad(lon2 - lon1);
  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c;
  return d;
}
function deg2rad(deg) {
  return deg * (Math.PI / 180);
}
function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}
function emojify(string) {
  var emoji = new EmojiConvertor();
  emoji.img_set = "apple";
  emoji.init_env();
  var auto_mode = emoji.replace_mode;
  emoji.use_sheet = true;
  emoji.replace_mode = "img";
  emoji.text_mode = false;
  var string = emoji.replace_colons(string);
  return string;
}
function hasEmojis(string) {
  var regex =
    /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|[\ud83c[\ude01\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|[\ud83c[\ude32\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|[\ud83c[\ude50\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;
  if (string.replace(regex, "") != string) {
    return true;
  } else {
    return false;
  }
}
function utf8_encode(argString) {
  if (argString === null || typeof argString === "undefined") {
    return "";
  }
  var string = argString + "";
  var utftext = "";
  var start;
  var end;
  var stringl = 0;
  start = end = 0;
  stringl = string.length;
  for (var n = 0; n < stringl; n++) {
    var c1 = string.charCodeAt(n);
    var enc = null;
    if (c1 < 128) {
      end++;
    } else if (c1 > 127 && c1 < 2048) {
      enc = String.fromCharCode((c1 >> 6) | 192, (c1 & 63) | 128);
    } else if ((c1 & 0xf800) !== 0xd800) {
      enc = String.fromCharCode(
        (c1 >> 12) | 224,
        ((c1 >> 6) & 63) | 128,
        (c1 & 63) | 128
      );
    } else {
      if ((c1 & 0xfc00) !== 0xd800) {
        throw new RangeError("Unmatched trail surrogate at " + n);
      }
      var c2 = string.charCodeAt(++n);
      if ((c2 & 0xfc00) !== 0xdc00) {
        throw new RangeError("Unmatched lead surrogate at " + (n - 1));
      }
      c1 = ((c1 & 0x3ff) << 10) + (c2 & 0x3ff) + 0x10000;
      enc = String.fromCharCode(
        (c1 >> 18) | 240,
        ((c1 >> 12) & 63) | 128,
        ((c1 >> 6) & 63) | 128,
        (c1 & 63) | 128
      );
    }
    if (enc !== null) {
      if (end > start) {
        utftext += string.slice(start, end);
      }
      utftext += enc;
      start = end = n + 1;
    }
  }
  if (end > start) {
    utftext += string.slice(start, stringl);
  }
  return utftext;
}
function validateEmail(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
function normalize(val, min, max) {
  if (min < 0) {
    max += 0 - min;
    val += 0 - min;
    min = 0;
  }
  val = val - min;
  max = max - min;
  return Math.max(0, Math.min(1, val / max));
}
function array_unique(array) {
  return array.filter(function (el, index, arr) {
    return index == arr.indexOf(el);
  });
}
var openItemModalSignUpModalIncrementer = 0;
function openItemModal(slug) {
  clearTimeout(showSignUpModalAfter30sTimer);
  openItemModalSignUpModalIncrementer++;
  clickTabSignUpModalIncrementer = 0;
  if (typeof pageRef === "undefined") pageRef = "";
  if (
    !isLoggedIn &&
    (getCookie("visit-count") >= showSignUpModalAfterVisitCount ||
      openItemModalSignUpModalIncrementer >= showSignUpModalAfterVisitCount) &&
    !(pageRef.indexOf("google") > -1) &&
    !(pageRef.indexOf("bing") > -1) &&
    !(pageRef.indexOf("duck") > -1) &&
    !(pageRef.indexOf("yandex") > -1)
  ) {
    $(".sign-up-notice-free-limit-reached").show();
    openSignUpModal(
      'ðŸ”‘ <strong>Unlock the <div style="margin-left:7px;margin-right:7px;display:inline-block;font-weight:bold;border-radius:6px; background:var(--input-background-color);box-shadow:0 1px 2px 0 rgba(0, 0, 0, 0.1) !important;padding:7px;padding-left:14px;padding-right:14px;box-shadow:0 0 0 1px var(--input-border-color), 0 2px 4px 0 rgb(0 0 0 / 7%), 0 1px 1.5px 0 rgb(0 0 0 / 5%) !important;">' +
        "ðŸŒ‡ City pages" +
        "</div></strong> and 200+ other features",
      "basic"
    );
    action =
      "ðŸ’³ Opened sign up modal when opening city after " +
      showSignUpModalAfterVisitCount +
      "+ visit count " +
      "(AB variation: " +
      signUpAbTestVariation +
      ")";
    $.ajax({
      url: "/userApi.php",
      type: "POST",
      dataType: "json",
      data: {
        action: "log_user_activity",
        log_action: action,
        hash: md5(action + "xoyo"),
      },
      context: document.body,
    }).done(function (reply) {});
    return;
  }
  openingModalWasCanceled = false;
  activeItemSlug = slug;
  activeItemSlugLong = $("." + activeItemSlug).data("slug-long");
  $(".backdrop.loading span").hide();
  if (!$("html").hasClass("pageType-city")) {
  }
  if (typeof rootUri == "undefined") {
    rootUri = str_replace("https://nomadlist.com/", "", document.URL);
  }
  if (typeof startTab == "undefined") {
    startTab = "ranking";
  }
  if (typeof pageUrl == "undefined") {
    pageUrl = document.URL;
  }
  if (typeof rootUrl == "undefined") {
    rootUrl = document.URL;
  }
  if (typeof rootTitle == "undefined") {
    rootTitle = document.title;
  }
  if (typeof rootDescription == "undefined") {
    rootDescription = "";
  }
  if (typeof rootMedia == "undefined") {
    rootMedia = "";
  }
  if (typeof rootTweet == "undefined") {
    rootTweet = "";
  }
  if (typeof pageTitle == "undefined") {
    pageTitle = document.title;
  }
  if (typeof pageDescription == "undefined") {
    pageDescription = "";
  }
  if (typeof pageTweet == "undefined") {
    pageTweet = "";
  }
  if (typeof pageMedia == "undefined") {
    pageMedia = "";
  }
  pageHash = window.location.hash.slice(1);
  htmlScrollTop = $("html").scrollTop();
  if (
    $(".view.grid .item." + slug)
      .prev()
      .hasClass("template") ||
    $(".view.grid .item." + slug).prev().length == 0
  ) {
    $(".modal-item-nav-left").hide();
  } else {
    $(".modal-item-nav-left").show();
  }
  if (
    $(".view.grid .item." + slug)
      .next()
      .hasClass("template") ||
    $(".view.grid .item." + slug).next().length == 0
  ) {
    $(".modal-item-nav-right").hide();
  } else {
    $(".modal-item-nav-right").show().focus();
  }
  if (typeof activeView !== "undefined") {
    if (activeView == "grid") {
      alreadyLoadedCityImage = $(
        ".view." + activeView + " .item." + activeItemSlug + " .bg"
      ).attr("src");
      if (empty(alreadyLoadedCityImage) && !empty(activeItemSlugLong)) {
        alreadyLoadedCityImage =
          "/assets/img/places/" + activeItemSlugLong + "-1000px.jpg";
      }
    } else if (activeView == "list" && !empty(activeItemSlugLong)) {
      alreadyLoadedCityImage =
        "/assets/img/places/" + activeItemSlugLong + "-1000px.jpg";
    } else if (activeView == "map" && !empty(activeItemSlugLong)) {
      alreadyLoadedCityImage =
        "/assets/img/places/" + activeItemSlugLong + "-1000px.jpg";
    } else {
      alreadyLoadedCityImage = "";
    }
  } else {
    alreadyLoadedCityImage = "";
    activeView = "";
  }
  if ($("html").hasClass("pageType-city")) {
    $("body").css("opacity", 0.5);
  }
  if (typeof alreadyLoadedCityImage === "undefined") {
    alreadyLoadedCityImage = "";
  }
  if (rootUri == "vr") {
    $(".modal.item").removeClass("show");
    $(".loading_spinner-item").addClass("show");
  }
  modalOpen = "item";
  loadTimeout = setTimeout(function () {
    $(".backdrop.loading span").show();
  }, 5000);
  if (typeof itemType === "undefined") itemType = "city";
  if (typeof activeTab === "undefined") {
    activeTab = startTab;
    console.log(
      "changed activeTab to startTab " +
        activeTab +
        " because activeTab was undefined in openItemModal()"
    );
  }
  if (activeTab != defaultTab) {
    pageTitle = $('.modal.item .tabs h3[data-tab="' + activeTab + '"] a').attr(
      "title"
    );
    changeUrl(
      activeTab + "/" + activeItemSlug,
      "",
      pageTitle,
      pageDescription,
      pageTweet,
      pageMedia
    );
  } else {
    changeUrl(
      activeItemSlug,
      "",
      pageTitle,
      pageDescription,
      pageTweet,
      pageMedia
    );
  }
  if (empty(itemType)) itemType = "city";
  if (empty(activeTab)) {
    activeTab = startTab;
    console.log(
      "changed activeTab to startTab " +
        activeTab +
        " because activeTab was empty in openItemModal()"
    );
  }
  var url =
    "/modal/city/" +
    activeItemSlug +
    "?" +
    date("Y-m-d") +
    "_12_" +
    Math.round(date("H") / 6);
  if (!$("html").hasClass("city-modal-open")) {
    placeholderHtml =
      '<div style="width:100%;height:43px;background-color:var(--global-background-color);"></div><div class="placeholder"></div><div class="placeholder"></div><div class="placeholder"></div><div class="placeholder"></div><div class="placeholder"></div><div class="placeholder"></div><div class="placeholder"></div><div class="placeholder"></div><div class="placeholder"></div><div class="placeholder"></div><div class="placeholder"></div><div class="placeholder"></div><div class="placeholder"></div><div class="placeholder"></div><div class="placeholder"></div><div class="placeholder"></div><div class="placeholder"></div><div class="placeholder"></div><div class="placeholder"></div><div class="placeholder"></div><div class="placeholder"></div><div class="placeholder"></div><div class="placeholder"></div><div class="placeholder"></div>';
    activeItemName = "";
    activeItemNameShort = "";
    if (activeView == "map") {
      activeItemName = $(".map-marker-label." + activeItemSlug).text();
      activeItemNameShort = $(".map-marker-label." + activeItemSlug).text();
    } else if (activeView == "grid") {
      if ($(".view.grid ." + activeItemSlug + " .itemName").length > 0) {
        activeItemName = $(
          ".view.grid ." + activeItemSlug + " .itemName"
        ).html();
        activeItemNameShort = $(".view.grid ." + activeItemSlug + " .itemName")
          .html()
          .split("<span")[0];
      }
    }
    activeItemSub = "";
    if (activeView == "grid") {
      activeItemSub = $(".view.grid ." + activeItemSlug + " .itemSub").html();
    }
    if (typeof activeItemName === "undefined") activeItemName = "";
    if (typeof activeItemSub === "undefined") activeItemSub = "";
    if (typeof alreadyLoadedCityImage === "undefined")
      alreadyLoadedCityImage =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";
    if (empty(alreadyLoadedCityImage))
      alreadyLoadedCityImage =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";
    $(".modal.item").html(
      '<div class="preloaded-image image"><div class="text"><h1 class="itemName">' +
        activeItemName +
        '</h1><h2 class="itemSub">' +
        activeItemSub +
        '</h2></div><div class="modal-item-header-buttons" style="z-index:100"><div class="button red reverse" style="width:150px;"></div></div><div class="dimmer-dark"></div><img class="bg-preloaded" src="' +
        alreadyLoadedCityImage +
        '" /></div><div class="fa fa-times close" style="z-index:10000;"></div><div class="expandBelow loading">' +
        placeholderHtml +
        "</div></div></div>"
    );
    if (typeof pageType === "undefined") pageType = "";
    if (pageType != "city") {
      $(".modal.item").addClass("show");
      modalItemFixBlurryOnNonRetinaBySettingExactPositioning();
      $(".backdrop.item").addClass("show");
    } else {
    }
  } else if ($("html").hasClass("city-modal-open")) {
    $(".modal.item .tab").css("opacity", 0.5);
    showLoading();
  }
  if (!$("html").hasClass("pageType-city")) {
    $("html").addClass("city-modal-open");
  }
  if (typeof modalCityCache !== "undefined") {
    if (typeof modalCityCache[activeItemSlug] !== "undefined") {
      if (
        modalCityCache[activeItemSlug]["epoch"] > modalCityCacheExpiry &&
        !empty(modalCityCache[activeItemSlug]["html"])
      ) {
        showLoading();
        $(".modal.item").addClass("show");
        fakeLoadTimeout = 0;
        setTimeout(function () {
          if ($("html").hasClass("pageType-city")) {
            $("body").css("opacity", 1);
          }
          if (activeTab != "flights") {
            hideLoading();
          }
          if (typeof modalCityCache[activeItemSlug] === "undefined") return;
          html = modalCityCache[activeItemSlug]["html"];
          if (activeTab != startTab) {
            html = replaceHTMLToLoadActiveTab(html);
          }
          $(".modal.item").html(html);
          $(".modal.item .tab").css("opacity", 1);
          if (!$("html").hasClass("pageType-city")) {
            $(".item.backdrop").addClass("show");
          }
          $(".preloaded-image .bg-preloaded").attr(
            "src",
            alreadyLoadedCityImage
          );
          $(".modal.item .bg-modal").css("opacity", 0);
          $(".modal.item .bg-modal").on("load", function () {
            $(this).css("opacity", 1);
          });
          if (rootUri == "vr") {
            $(".loading_spinner-item").removeClass("show");
          }
          if (!$("html").hasClass("pageType-city")) {
            $(".modal.item").addClass("show");
            modalItemFixBlurryOnNonRetinaBySettingExactPositioning();
          }
          hideLoading();
          $(".body").addClass("individualItemPage");
          lazyload();
          $(".modal.item").trigger("scroll");
          if (in_array(activeItemSlugLong, userFavoritedCities)) {
            $(".modal.item .button.action-favorite").hide();
          } else {
            $(".modal.item .button.action-unfavorite").hide();
          }
          pageTitle =
            "Cost of Living in " +
            activeItemName +
            ". Prices Updated " +
            date("M Y") +
            ".";
          activeItemTitle = pageTitle;
          if (windowSize().width > 800 && !isMobile) {
            document.title = pageTitle;
          }
          if (activeTab != "flights") {
            $(".loading_spinner-item").removeClass("show");
            $(".modal.item").addClass("loaded");
          }
          trackEvent("pageview", pageUrl);
          trackEvent("visit", pageUrl);
          trackEvent("action", pageUrl);
          localizePrices();
        }, fakeLoadTimeout);
        return;
      }
    }
  }
  slug = activeItemSlug;
  openItemModalLoadingSpinnerTimeout = setTimeout(function () {
    $(".loading_spinner-item").addClass("show");
  }, 1000);
  activeAjaxCity = $.ajax({
    url: url,
    success: function (html) {
      clearTimeout(openItemModalLoadingSpinnerTimeout);
      if ($("html").hasClass("pageType-city")) {
        $("body").css("opacity", 1);
      }
      $(".modal.item .bg-modal").css("opacity", 0);
      $(".modal.item .bg-modal").on("load", function () {
        $(this).css("opacity", 1);
      });
      if (openingModalWasCanceled) {
        $(".modal.item").html("");
        updateSlug();
        $(".loading_spinner-item").removeClass("show");
        $(".modal.item").addClass("loaded");
        return false;
      }
      if (activeTab != startTab) {
        html = replaceHTMLToLoadActiveTab(html);
      }
      $(".modal.item").html(html);
      $(".modal.item .tab").css("opacity", 1);
      localizePrices();
      if (typeof modalCityCache === "undefined") {
        modalCityCache = {};
      }
      if (typeof modalCityCache[slug] === "undefined") {
        modalCityCache[activeItemSlug] = {};
      }
      modalCityCache[activeItemSlug]["epoch"] = time();
      modalCityCache[activeItemSlug]["html"] = html.slice(0);
      try {
        localStorage.setItem("modalCityCache3", JSON.stringify(modalCityCache));
      } catch (event) {
        if (event.code == 22) {
          localStorage.clear();
        }
      }
      if (activeTab != "flights") {
        hideLoading();
      }
      $(".preloaded-image .bg-preloaded").css(
        "background-image",
        alreadyLoadedCityImage
      );
      $(".modal.item .bg-modal").hide();
      $(".modal.item .bg-modal").show();
      if (rootUri == "vr") {
        $(".loading_spinner-item").removeClass("show");
      }
      if (!$("html").hasClass("pageType-city")) {
        $(".item.backdrop").addClass("show");
        $(".modal.item").addClass("show");
        modalItemFixBlurryOnNonRetinaBySettingExactPositioning();
      }
      $(".body").addClass("individualItemPage");
      lazyload();
      $(".modal.item").trigger("scroll");
      pageTitle = activeItemName + " for Digital Nomads";
      if (in_array(activeItemSlugLong, userFavoritedCities)) {
        $(".modal.item .button.action-favorite").hide();
      } else {
        $(".modal.item .button.action-unfavorite").hide();
      }
      activeItemTitle = pageTitle;
      if (windowSize().width > 800 && !isMobile) {
        document.title = pageTitle;
      }
      if (activeTab != "flights") {
        $(".loading_spinner-item").removeClass("show");
      }
      $(".modal.item").addClass("loaded");
      trackEvent("pageview", pageUrl);
      trackEvent("visit", pageUrl);
      trackEvent("action", pageUrl);
    },
  });
}
function closeItemModal() {
  hideLoading();
  $(".loading_spinner-item").removeClass("show");
  hideLoading();
  $("html").removeClass("city-modal-open");
  $(".modal.item").removeClass("loaded");
  if (pageType == "city") {
    $(".modal.item").css("opacity", 0.5);
    window.location.href = "/";
    $(".loading_spinner-item").addClass("show");
    if (!$("html").hasClass("pageType-city")) {
      $(".backdrop.item").addClass("show");
      $(".backdrop.item").addClass("not-clickable");
    }
    return;
  }
  $(".modal-item-nav-left").hide();
  $(".modal-item-nav-right").hide();
  if (empty(activeItemSlug)) {
    return;
  }
  openingModalWasCanceled = true;
  openingModalSlug = "";
  activeItemSlug = "";
  activeItemSlugLong = "";
  modalOpen = "";
  $(".modal.item").removeClass("show").removeClass("show-later");
  $(".backdrop.item").removeClass("show").removeClass("show-later");
  if (!$("html").hasClass("pageType-city")) {
  }
  $(".body").removeClass("individualItemPage");
  updateSlug();
  changeUrl(pageUri, pageHash, rootTitle);
}
function modalItemFixBlurryOnNonRetinaBySettingExactPositioning() {
  if (pageType == "city") return;
  $(".modal.item").css("transform", "none");
  $(".modal.item").css("-webkit-transform", "none");
  $(".modal.item").css(
    "left",
    window.innerWidth / 2 - $(".modal.item").width() / 2
  );
  $(".modal.item").css(
    "top",
    window.innerHeight / 2 - $(".modal.item").height() / 2
  );
}
function changeUrl(
  url,
  hash,
  title,
  description,
  tweet,
  media,
  replaceStateOrPushState
) {
  if (typeof url === "undefined") url = "";
  if (typeof pageUrl === "undefined") pageUrl = "";
  url = url.replace(/\//g, "/");
  url = str_replace("//", "/", url);
  if (url.substr(0, 1) == "/") url = url.substr(1, url.length);
  if (empty(url)) {
    pageTitle = rootTitle;
    pageDescription = rootDescription;
    pageUrl = rootUrl;
    pageUrl = pageUrl.replace(/^\/|\/$/g, "");
    pageTweet = rootTweet;
    pageMedia = rootMedia;
    if (!empty(hash)) {
      pageUrl = pageUrl;
    }
  } else {
    pageTitle = title;
    pageDescription = description;
    pageTweet = tweet;
    pageMedia = media;
    pageUrl = pageUrl.replace(/^\/|\/$/g, "");
    if (typeof hostname === "undefined") hostname = "";
    pageUrl = hostname + "/" + url;
    if (!empty(hash)) {
      pageUrl = pageUrl;
    }
  }
  if (windowSize().width > 800 && !isMobile) {
    document.title = pageTitle;
  }
  $('meta[name="title"]').attr("content", pageTitle);
  $('meta[property="og:title"]').attr("content", pageTitle);
  $('meta[name="twitter:title"]').attr("content", pageTitle);
  $('meta[name="description"]').attr("content", pageDescription);
  $('meta[property="og:description"]').attr("content", pageDescription);
  $('meta[name="twitter:description"]').attr("content", pageDescription);
  $('link[rel="canonical"]').attr("content", pageUrl);
  $('meta[property="og:url"]').attr("content", pageUrl);
  $('meta[name="twitter:url"]').attr("content", pageUrl);
  $('link[rel="image_src"]').attr("content", pageMedia);
  $('meta[property="og:image"]').attr("content", pageMedia);
  $('meta[name="twitter:image:src"]').attr("content", pageMedia);
  if (empty(replaceStateOrPushState)) {
    state = "push";
  } else {
    state = "replace";
  }
  if (window.navigator.standalone) {
    return;
  }
  if (document.documentURI != pageUrl) {
    if (state == "replace") {
      consoleLog("replaceState", null, title, pageUrl);
      history.replaceState(null, title, pageUrl);
    }
    if (state == "push") {
      consoleLog("pushState", null, title, pageUrl);
      history.pushState(null, title, pageUrl);
    }
  }
}
function openItem(that, event) {
  consoleLog("openItem", that, event);
  openingModalWasCanceled = false;
  openingModalSlug = $(that).data("slug");
  if (typeof pageRef === "undefined") pageRef = "";
  if (
    !isLoggedIn &&
    (parseInt(getCookie("visit-count")) >= showSignUpModalAfterVisitCount ||
      openItemModalSignUpModalIncrementer >= showSignUpModalAfterVisitCount) &&
    !(pageRef.indexOf("google") > -1) &&
    !(pageRef.indexOf("bing") > -1) &&
    !(pageRef.indexOf("duck") > -1) &&
    !(pageRef.indexOf("yandex") > -1)
  ) {
    $(".sign-up-notice-free-limit-reached").show();
    openSignUpModal("", "basic");
    action =
      "ðŸ’³ Opened sign up modal when opening city after " +
      showSignUpModalAfterVisitCount +
      "+ city opens " +
      "(AB variation: " +
      signUpAbTestVariation +
      ")";
    $.ajax({
      url: "/userApi.php",
      type: "POST",
      dataType: "json",
      data: {
        action: "log_user_activity",
        log_action: action,
        hash: md5(action + "xoyo"),
      },
      context: document.body,
    }).done(function (reply) {});
    return;
  }
  if (typeof openItemAsModal === "undefined") {
    openItemAsModal = false;
  }
  if (openItemAsModal) {
    if (!empty(event)) {
      if (isMetaOrShiftKeyPressed(event)) {
        window.open("https://nomadlist.com/" + $(that).data("slug"));
      } else {
        openItemModal($(that).data("slug"));
      }
    } else {
      openItemModal($(that).data("slug"));
    }
  } else if (!empty($(that).data("url"))) {
    if (isMetaOrShiftKeyPressed(event)) {
      window.open($(that).data("url"));
    } else {
      window.location.href = $(that).data("url");
    }
  } else if (!empty($(that).data("href"))) {
    if (isMetaOrShiftKeyPressed(event)) {
      window.open($(that).data("href"));
    } else {
      window.location.href = $(that).data("href");
    }
  } else {
  }
}
function showAutocompleteQueries() {
  consoleLog("showAutocompleteQueries 1");
  if (typeof autocompleteQueries == "undefined") return;
  consoleLog("showAutocompleteQueries 2");
  $(".autocomplete-box").hide();
  $(".autocomplete-box div").remove();
  $(".autocomplete-box").css("left", $("input.search").offset().left);
  $(".autocomplete-box").css(
    "min-width",
    Math.round($("input.search").outerWidth())
  );
  $(".autocomplete-box").css(
    "top",
    $("input.search").offset().top + $("input.search").outerHeight()
  );
  if (!$("input.search").val().trim()) {
    return;
  }
  searchQuery = $("input.search").val().trim();
  consoleLog("showAutocompleteQueries 2a");
  matches = 0;
  autocompleteQueriesToAdd = [];
  for (var i = 0; i < autocompleteQueries.length; i++) {
    if (empty(autocompleteQueries[i])) continue;
    search = autocompleteQueries[i]["search"];
    if (i < 10) {
    }
    if (
      empty(searchQuery) ||
      search.trim().toLowerCase().substr(0, searchQuery.length) ==
        searchQuery.toLowerCase()
    ) {
      autocompleteQueriesToAdd.push(autocompleteQueries[i]);
    }
  }
  for (var i = 0; i < autocompleteQueries.length; i++) {
    if (empty(autocompleteQueries[i])) continue;
    search = autocompleteQueries[i]["search"];
    if (search.trim().toLowerCase().indexOf(searchQuery.toLowerCase()) > -1) {
      autocompleteQueriesToAdd.push(autocompleteQueries[i]);
    }
  }
  autocompleteQueriesToAdd = array_unique(autocompleteQueriesToAdd);
  consoleLog(
    "autocompleteQueriesToAdd.length",
    autocompleteQueriesToAdd.length
  );
  if (autocompleteQueriesToAdd.length == 0) {
    $(".autocomplete-box").hide();
    $("input.search").removeClass("autocomplete-open");
    return;
  }
  var dupeRemover = [];
  for (var i = 0; i < autocompleteQueriesToAdd.length; i++) {
    if (i > 10) break;
    name = autocompleteQueriesToAdd[i]["name"];
    if (empty(name)) continue;
    if (
      makeUrlSlug(autocompleteQueriesToAdd[i]["search"]) ==
      makeUrlSlug(searchQuery)
    ) {
      name = "<strong>" + name + "</strong>";
    }
    short_slug = "";
    if (!empty(autocompleteQueriesToAdd[i]["slug"])) {
      short_slug = autocompleteQueriesToAdd[i]["slug"];
    }
    url = "";
    if (!empty(autocompleteQueriesToAdd[i]["url"])) {
      url = autocompleteQueriesToAdd[i]["url"];
    }
    if ((pageType !== "cities") & !empty(short_slug)) {
      url = "/" + short_slug;
      short_slug = "";
    }
    img = "";
    if (!empty(autocompleteQueriesToAdd[i]["image"])) {
      img =
        '<img onerror="this.style.opacity=0"/ src="' +
        autocompleteQueriesToAdd[i]["image"] +
        '" />';
    }
    grayText = "";
    if (!empty(autocompleteQueriesToAdd[i]["in"])) {
      grayText = "<span> in " + autocompleteQueriesToAdd[i]["in"] + "</span>";
    }
    filtersState = "";
    if (!empty(autocompleteQueriesToAdd[i]["filters"])) {
      filtersState = autocompleteQueriesToAdd[i]["filters"];
    }
    if (!empty(url) && in_array(url, dupeRemover)) {
      continue;
    }
    if (!empty(url)) {
      dupeRemover.push(url);
    }
    followAction = "";
    favoriteAction = "";
    if (autocompleteQueriesToAdd[i]["type"] == "city") {
      favoriteAction =
        '<span class="action-favorite tooltip-set" data-tooltip="Favorite"><svg aria-hidden="true" width="25" focusable="false" data-icon="heart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path></svg></span>';
    } else if (autocompleteQueriesToAdd[i]["type"] == "user") {
      followAction =
        '<span class="action-follow tooltip-set" data-tooltip="Follow this person"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 320 300" xml:space="preserve"><path d="M150,0C67.159,0,0.001,67.159,0.001,150c0,82.838,67.157,150.003,149.997,150.003S300.002,232.838,300.002,150	C300.002,67.159,232.839,0,150,0z M213.281,166.501h-48.27v50.469c-0.003,8.463-6.863,15.323-15.328,15.323 c-8.468,0-15.328-6.86-15.328-15.328v-50.464H87.37c-8.466-0.003-15.323-6.863-15.328-15.328c0-8.463,6.863-15.326,15.328-15.328 l46.984,0.003V91.057c0-8.466,6.863-15.328,15.326-15.328c8.468,0,15.331,6.863,15.328,15.328l0.003,44.787l48.265,0.005 c8.466-0.005,15.331,6.86,15.328,15.328C228.607,159.643,221.742,166.501,213.281,166.501z"/></svg></span>';
    }
    classes = "";
    if (typeof userFavoritedCities !== "undefined") {
      if (
        in_array(autocompleteQueriesToAdd[i]["slug_long"], userFavoritedCities)
      ) {
        classes = classes + " favorited";
      }
    }
    if (typeof userFollowingUserIds !== "undefined") {
      if (
        in_array(autocompleteQueriesToAdd[i]["user_id"], userFollowingUserIds)
      ) {
        classes = classes + " following";
      }
    }
    if (empty(url)) {
      consoleLog("empty url for ", autocompleteQueriesToAdd[i]);
    }
    jsonFilterState = "";
    if (!empty(filtersState)) {
      jsonFilterState = btoa(JSON.stringify(filtersState));
    }
    $(".autocomplete-box").append(
      '<div class="' +
        classes +
        '" data-item-type="' +
        autocompleteQueriesToAdd[i]["type"] +
        '" data-user-id="' +
        autocompleteQueriesToAdd[i]["user_id"] +
        '" data-url="' +
        url +
        '" data-filters-state="' +
        jsonFilterState +
        '" data-slug="' +
        short_slug +
        '">' +
        img +
        name +
        grayText +
        favoriteAction +
        followAction +
        "</div>"
    );
    consoleLog("added autocomplete query: " + name);
  }
  if ($(".autocomplete-box div").length) {
    consoleLog("showAutocompleteQueries 3");
    $(".autocomplete-box").show();
  }
  consoleLog("showAutocompleteQueries 4");
}
function reloadPropertyDataModal() {
  url = $(".modal.property").data("url");
  showLoading();
  $(".modal.property").load(url + "?modal=true", function () {
    $(".modal.property").data("url", url);
    hideLoading();
  });
}
function replaceHTMLToLoadActiveTab(html) {
  html = str_replace(
    '<h3 class="li active" data-tab="',
    '<h3 class="li" data-tab="',
    html
  );
  html = str_replace(
    '<h3 class="li " data-tab="' + activeTab + '">',
    '<h3 class="li active" data-tab="' + activeTab + '">',
    html
  );
  html = str_replace(
    'show"><table class="details">',
    '"><table class="details">',
    html
  );
  html = str_replace(
    '<div class="tab tab-' + activeTab,
    '<div class="tab tab-' + activeTab + " show",
    html
  );
  if (
    activeTab == "chat" ||
    activeTab == "neighborhoods" ||
    activeTab == "coworking"
  ) {
    html = str_replace(
      'tab-loads-on-click"><iframe data-src="',
      'tab-loads-on-click"><iframe src="',
      html
    );
  }
  return html;
}
function loadFiltersPageState(state) {
  consoleLog("function loadFiltersPageState(state) {", state);
  if (typeof state === "undefined") return;
  if (empty(state)) return;
  consoleLog("state", state);
  for (var i = 0; i < state.length; i += 1) {
    key = state[i]["key"];
    value = state[i]["value"];
    key = str_replace("cost_for_nomad", activeCostMode, key);
    key = str_replace("cost_for_expat", activeCostMode, key);
    key = str_replace("cost_for_local", activeCostMode, key);
    key = str_replace("cost_for_family", activeCostMode, key);
    latestFilterTargetSelected = key;
    if (key == "view") continue;
    if (empty(value)) continue;
    if (typeof value == "undefined") return;
    if (value == "North America") value = "Northern America";
    if (key == "temperature") key = "temperatureC";
    if (key == "city") {
      openItemModal(value);
    }
    if (key == "tab") {
      activeTab = value;
    }
    if (key == "zoom") {
      mapZoomPrespecifiedFromQuery = parseInt(value);
      if (typeof map !== "undefined") {
        map.setZoom(value);
      }
    }
    if (key == "latitude") {
      mapLatitudePrespecifiedFromQuery = parseInt(value);
    }
    if (key == "longitude") {
      mapLongitudePrespecifiedFromQuery = parseInt(value);
    }
    x = 0;
    if (key == "visa_free_for") {
      $(".filters .filter.visa_free_for select.choices option").each(
        function () {
          if (empty($(this).data("filter-value"))) return;
          if (typeof $(this).data("filter-value") == "undefined") return;
          if (value == makeUrlSlug($(this).data("filter-value"))) {
            $(this).prop("selected", true);
            $(this).parent().addClass("active");
            return false;
          }
        }
      );
    }
    if (key == "visa_free_for_partner") {
      $(".filters .filter.visa_free_for_partner select.choices option").each(
        function () {
          if (empty($(this).data("filter-value"))) return;
          if (typeof $(this).data("filter-value") == "undefined") return;
          if (value == makeUrlSlug($(this).data("filter-value"))) {
            $(this).prop("selected", true);
            $(this).parent().addClass("active");
            return false;
          }
        }
      );
    }
    if (key == "visa_free_for_friend") {
      $(".filters .filter.visa_free_for_friend select.choices option").each(
        function () {
          if (empty($(this).data("filter-value"))) return;
          if (typeof $(this).data("filter-value") == "undefined") return;
          if (value == makeUrlSlug($(this).data("filter-value"))) {
            $(this).prop("selected", true);
            $(this).parent().addClass("active");
            return false;
          }
        }
      );
    }
    $('.filters .choice[data-filter-target="' + key + '"]').each(function () {
      equalsA = false;
      equalsB = false;
      equalsC = false;
      equalsD = false;
      equalsE = false;
      if (
        key == "distance" &&
        value.substr(0, 4) == "near" &&
        $(this).text().toLowerCase().indexOf("near") > -1
      ) {
        $(this).addClass("active");
        nearFilterActive = true;
        return;
      }
      if (!empty($(this).find("span").data("original-text")))
        equalsA =
          makeUrlSlug(
            $(this).find("span").data("original-text").toLowerCase()
          ) == makeUrlSlug(value.toLowerCase());
      if (!empty($(this).text()))
        equalsB = $(this).text().toLowerCase() == value.toLowerCase();
      if (!empty($(this).find("span").data("original-text")))
        equalsC =
          makeUrlSlug(
            $(this).find("span").data("original-text").toLowerCase()
          ) == makeUrlSlug(value.toLowerCase());
      if (!empty($(this).text()))
        equalsD =
          makeUrlSlug($(this).text().toLowerCase()) ==
          makeUrlSlug(value.toLowerCase());
      if (!empty($(this).text()))
        equalsE =
          trimChar(makeUrlSlug($(this).text().toLowerCase()), "-") ==
          trimChar(makeUrlSlug(value.toLowerCase()), "-");
      if (key.indexOf("timezone") > -1) {
        consoleLog(
          "hotfix tz",
          $(this).text().toLowerCase(),
          "==",
          value.toLowerCase(),
          equalsB
        );
        equalsA = false;
        equalsC = false;
        equalsD = false;
        equalsE = false;
      }
      if (equalsA || equalsB || equalsC || equalsD || equalsE) {
        showResultsImmediatelyGlobal = true;
        $(this).addClass("active");
        if (key == "country") {
          countryFilterActive = true;
        }
        if (key == "region") {
          regionFilterActive = true;
        }
        if (key == "near") {
          nearFilterActive = true;
        }
        return false;
      }
    });
  }
}
function isWebGLEnabled() {
  try {
    var canvas = document.createElement("canvas");
    return (
      !!window.WebGLRenderingContext &&
      (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch (event) {
    return false;
  }
}
function updateSlug() {
  if ($("html").hasClass("flights")) return;
  if (
    $(".filters .filter.month .choice.active").length > 0 &&
    $(".filters .filter.region .choice.active").length > 0
  ) {
    slug = "";
  }
  firstTemperatureDoneAlready = false;
  firstAirQualityDoneAlready = false;
  firstWithDoneAlready = false;
  firstRegionDoneAlready = false;
  firstCountryDoneAlready = false;
  beforeIsSelected = false;
  firstMonthDoneAlready = false;
  beforeSlugPart = "";
  afterSlugPart = "";
  monthSlugPart = "";
  temperatureSlugPart = "";
  countrySlugPart = "";
  regionSlugPart = "";
  withSlugPart = "";
  timeSlugPart = "";
  visaFreePart = "";
  slug = "";
  $(".filters .filter .choice.active").each(function () {
    key = $(this).data("filter-target");
    filterSlug = $(this).data("filter-slug");
    filterSlugPosition = $(this).data("filter-slug-position");
    if (!empty($(this).data("filter-slug"))) {
      value = $(this).data("filter-slug");
      consoleLog("value", value);
    } else if (!empty($(this).data("text"))) {
      value = $(this).data("text");
    } else {
      value = $(this).text();
    }
    value = str_replace("-", " ", makeUrlSlug(value));
    value = value.trim();
    if (key == "temperatureC_feels_like" || key == "temperatureC") {
      if (!firstTemperatureDoneAlready) {
        firstTemperatureDoneAlready = true;
        temperatureSlugPart =
          temperatureSlugPart + "-" + makeUrlSlug(value.toLowerCase());
      } else {
        temperatureSlugPart =
          temperatureSlugPart + "-or-" + makeUrlSlug(value.toLowerCase()) + "-";
      }
    } else if (key == "air_quality" && !firstTemperatureDoneAlready) {
      monthsSelectedSlug = "in-";
      $(".filters .filter.month .choice.active").each(function () {
        monthsSelectedSlug =
          monthsSelectedSlug +
          makeUrlSlug($(this).data("filter-slug")) +
          "-and-";
      });
      monthsSelectedSlug = monthsSelectedSlug.substr(
        0,
        monthsSelectedSlug.length - 4
      );
      if (monthsSelectedSlug == "in-") monthsSelectedSlug = "";
      if (!firstAirQualityDoneAlready) {
        firstAirQualityDoneAlready = true;
        withSlugPart =
          withSlugPart +
          "with-" +
          makeUrlSlug(value.toLowerCase()) +
          "-" +
          monthsSelectedSlug;
      } else {
        withSlugPart =
          withSlugPart + makeUrlSlug(value.toLowerCase()) + "-" + "or-";
      }
    } else if (key == "24_hour") {
      timeSlugPart = timeSlugPart + "-" + filterSlug;
    } else if (key == "month") {
      if (
        $(".filters .filter.temperature .choice.active").length == 0 &&
        $(".filters .filter.air_quality .choice.active").length == 0 &&
        $(".filters .filter.humidity .choice.active").length == 0 &&
        $(".filters .filter.users_count .choice.active").length == 0 &&
        $(".filters .filter.month .choice.active").length > 0
      ) {
        value =
          "to-visit-in-" +
          $(".filters .filter.month .choice.active").data("filter-slug");
        monthSlugPart =
          monthSlugPart + "-" + makeUrlSlug(value.toLowerCase()) + "-";
      } else if ($(".filters .filter.month .choice.active").length > 0) {
        value =
          "in-" +
          $(".filters .filter.month .choice.active").data("filter-slug");
        monthSlugPart =
          monthSlugPart + "-" + makeUrlSlug(value.toLowerCase()) + "-";
      }
    } else if (key == "country") {
      if (
        $(".filters .filter.country .choice.active").length ==
        $(".filters .filter.country .choice").length - 1
      ) {
        if (!firstCountryDoneAlready) {
          firstCountryDoneAlready = true;
          value = $(".filters .filter.country .choice:not(.active)").text();
          countrySlugPart =
            countrySlugPart +
            "outside-" +
            makeUrlSlug(value.toLowerCase()) +
            "-";
        }
      } else {
        if (!firstCountryDoneAlready) {
          firstCountryDoneAlready = true;
          if ($(".filters .filter.country .choice.active").length == 1) {
            countrySlugPart =
              countrySlugPart + "in-" + makeUrlSlug(value.toLowerCase()) + "-";
          } else {
            countrySlugPart =
              countrySlugPart + "in-" + makeUrlSlug(value.toLowerCase()) + "-";
          }
        } else {
          countrySlugPart =
            countrySlugPart + "or-" + makeUrlSlug(value.toLowerCase()) + "-";
        }
      }
    } else if (key == "region") {
      if (
        $(".filters .filter.region .choice.active").length ==
        $(".filters .filter.region .choice").length - 1
      ) {
        if (!firstRegionDoneAlready) {
          firstRegionDoneAlready = true;
          value = $(".filters .filter.region .choice:not(.active)").text();
          regionSlugPart =
            regionSlugPart +
            "outside-" +
            makeUrlSlug(value.toLowerCase()) +
            "-";
        }
      } else if (
        $(".filters .filter.region .choice.active").length ==
        $(".filters .filter.region .choice").length - 2
      ) {
        if (!firstRegionDoneAlready) {
          firstRegionDoneAlready = true;
          i = 0;
          $(".filters .filter.region .choice:not(.active)").each(function () {
            value = $(this).text();
            if (i == 0) {
              regionSlugPart =
                regionSlugPart +
                "outside-" +
                makeUrlSlug(value.toLowerCase()) +
                "-";
            } else {
              regionSlugPart =
                "or-" + makeUrlSlug(value.toLowerCase()) + "-" + regionSlugPart;
            }
            i++;
          });
        }
      } else {
        if (!firstRegionDoneAlready) {
          firstRegionDoneAlready = true;
          if ($(".filters .filter.region .choice.active").length == 1) {
            regionSlugPart =
              regionSlugPart + "-in-" + makeUrlSlug(value.toLowerCase()) + "-";
          } else {
            regionSlugPart =
              regionSlugPart + "-in-" + makeUrlSlug(value.toLowerCase()) + "-";
          }
        } else {
          regionSlugPart =
            regionSlugPart + "-or-" + makeUrlSlug(value.toLowerCase()) + "-";
        }
      }
    } else if (filterSlugPosition == "before") {
      if (!empty(filterSlug)) {
        beforeSlugPart = beforeSlugPart + "-" + filterSlug + "-";
      } else {
        beforeSlugPart =
          beforeSlugPart + "-" + makeUrlSlug(value.toLowerCase());
      }
    } else if (filterSlugPosition == "after") {
      if (!empty(filterSlug)) {
        afterSlugPart = afterSlugPart + "-" + filterSlug + "-";
      } else {
        afterSlugPart = afterSlugPart + "-" + makeUrlSlug(value.toLowerCase());
      }
    } else if (!empty(filterSlug)) {
      afterSlugPart = afterSlugPart + "-" + filterSlug + "-";
    } else {
      if (!firstWithDoneAlready) {
        firstWithDoneAlready = true;
        if (empty(filterSlug)) {
          withSlugPart =
            withSlugPart + "-with-" + makeUrlSlug(value.toLowerCase()) + "-";
        } else {
          withSlugPart = withSlugPart + "-with-" + filterSlug + "-";
        }
      } else {
        if (empty(filterSlug)) {
          withSlugPart =
            withSlugPart + "and-" + makeUrlSlug(value.toLowerCase()) + "-";
        } else {
          withSlugPart = withSlugPart + "and-" + filterSlug + "-";
        }
      }
    }
  });
  visaFreePart = "";
  $(".filters .filter.visa_free_for select.choices.active").each(function () {
    if (empty(visaFreePart)) {
      visaFreePart =
        visaFreePart +
        "-" +
        $(this).find(":selected").data("filter-slug") +
        "-";
    } else if (!empty(visaFreePart)) {
      visaFreePart = visaFreePart + "-and";
    }
  });
  $(".filters .filter.visa_free_for_partner select.choices.active").each(
    function () {
      if (empty(visaFreePart)) {
        visaFreePart =
          visaFreePart +
          "-" +
          $(this).find(":selected").data("filter-slug") +
          "-";
      } else if (!empty(visaFreePart)) {
        visaFreePart = visaFreePart + "-and";
        visaFreePart =
          visaFreePart +
          "-" +
          str_replace(
            "visa-free-for-citizens-of",
            "",
            $(this).find(":selected").data("filter-slug")
          ) +
          "-";
      }
    }
  );
  $(".filters .filter.visa_free_for_friend select.choices.active").each(
    function () {
      if (empty(visaFreePart)) {
        visaFreePart =
          visaFreePart +
          "-" +
          $(this).find(":selected").data("filter-slug") +
          "-";
      } else if (!empty(visaFreePart)) {
        visaFreePart = visaFreePart + "-and";
        visaFreePart =
          visaFreePart +
          "-" +
          str_replace(
            "visa-free-for-citizens-of",
            "",
            $(this).find(":selected").data("filter-slug")
          ) +
          "-";
      }
    }
  );
  slug = slug.substr(0, slug.length - 1);
  slug = str_replace("--", "-", slug);
  slug = slug.trim("-");
  if (slug.substr(0, 1) == "-") slug = slug.substr(1, slug.length);
  if (slug.substr(slug.length - 1, slug.length) == "-")
    slug = slug.substr(0, slug.length - 1);
  if (!empty(activeSearch)) {
    slug = "search";
  }
  if (slug == "places") {
    slug = "";
  }
  itemTypeSlugPart = "places";
  if (itemType == "city") {
    itemTypeSlugPart = "places";
  }
  if (itemType == "country") {
    itemTypeSlugPart = "countries";
  }
  if (itemType == "region") {
    itemTypeSlugPart = "continents";
  }
  slug =
    temperatureSlugPart +
    beforeSlugPart +
    timeSlugPart +
    "-" +
    itemTypeSlugPart +
    "-" +
    afterSlugPart +
    countrySlugPart +
    regionSlugPart +
    withSlugPart +
    monthSlugPart +
    visaFreePart;
  slug = str_replace("----", "-", slug);
  slug = str_replace("---", "-", slug);
  slug = str_replace("--", "-", slug);
  if (!empty(activeSearch)) {
    slug = "search";
    value = activeSearch;
    if (hasEmojis(value)) {
      slug = slug + "/" + value;
    } else {
      slug = slug + "/" + makeUrlSlug(value.toLowerCase());
    }
  }
  if (countrySlugPart.substr(0, 1) == "-")
    countrySlugPart = countrySlugPart.substr(1, countrySlugPart.length);
  if (
    countrySlugPart.substr(
      countrySlugPart.length - 1,
      countrySlugPart.length
    ) == "-"
  )
    countrySlugPart = countrySlugPart.substr(0, countrySlugPart.length - 1);
  if (regionSlugPart.substr(0, 1) == "-")
    regionSlugPart = regionSlugPart.substr(1, regionSlugPart.length);
  if (
    regionSlugPart.substr(regionSlugPart.length - 1, regionSlugPart.length) ==
    "-"
  )
    regionSlugPart = regionSlugPart.substr(0, regionSlugPart.length - 1);
  if (slug.substr(0, 1) == "-") slug = slug.substr(1, slug.length);
  if (slug.substr(slug.length - 1, slug.length) == "-")
    slug = slug.substr(0, slug.length - 1);
  if (
    slug == "places-" + countrySlugPart ||
    slug == "places" + countrySlugPart
  ) {
    slug = countrySlugPart.substr(2, countrySlugPart.length);
  }
  if (
    slug == "places-" + regionSlugPart ||
    slug == "-places-" + regionSlugPart
  ) {
    slug = regionSlugPart.substr(2, regionSlugPart.length);
  } else if (slug == "-places" + regionSlugPart) {
    slug = regionSlugPart.substr(3, regionSlugPart.length);
  }
  if (slug.substr(0, 1) == "-") slug = slug.substr(1, slug.length);
  if (slug.substr(slug.length - 1, slug.length) == "-")
    slug = slug.substr(0, slug.length - 1);
  if (slug.substr(0, 11) == "places-for-") {
    slug = "best-" + slug;
  }
  if (slug == "places") slug = "";
  if (
    $(".filters .choice.active").length == 1 &&
    $(".filters .region .choice.active").length == 1 &&
    slug.substr(0, "countries-in-".length) == "countries-in-"
  ) {
    slug = str_replace("countries-in-", "", slug);
  }
  if (slug.indexOf("-with-") > -1) {
    var withParts = explode("-with-", slug);
    firstWithPart = withParts[0];
    slug = firstWithPart + "-with-";
    for (var i = 0; i < withParts.length; i++) {
      if (i > 0 && i + 1 < withParts.length) {
        slug = slug + withParts[i] + "-and-";
      } else if (i + 1 == withParts.length) {
        slug = slug + withParts[i];
      }
      consoleLog("slug", slug);
      consoleLog("withParts[i]", withParts[i]);
    }
  }
  consoleLog("slug", slug);
  if ($(".filter.cost .choice.active").length > 0) {
    if (activeCostMode == "cost_for_expat") {
      slug = slug + "-for-expats";
    } else if (activeCostMode == "cost_for_family") {
      slug = slug + "-for-families";
    } else if (activeCostMode == "cost_for_local") {
      slug = slug + "-for-locals";
    }
  }
  consoleLog("slug", slug);
  if (
    isLoggedIn &&
    !empty(userUsername) &&
    (slug == "best-places-in-my-favorites" || slug == "places-in-my-favorites")
  ) {
    slug = "/@" + userUsername + "/saved";
    pageTitle = "@" + userUsername + "'s favorites";
  }
  consoleLog("slug", slug);
  pageUri = slug;
  rootUri = slug;
  if (typeof activeView === "undefined") {
    activeView = "";
  }
  if (typeof activeSort === "undefined") {
    activeSort = "";
  }
  if (typeof defaultSort === "undefined") {
    defaultSort = "total_score";
  }
  if (activeView == "map-3d") {
    slug = slug + "/3d";
  } else if (activeView == "map") {
    slug = slug + "/map";
  } else if (activeView == "chart") {
    if (!empty(activeSortAttributeToShow) && !empty(activeChartX)) {
      slug =
        slug + "/chart?chart_x=" + activeChartX + "&chart_y=" + activeChartY;
      if ($(".chart-hide-outliers-x input").prop("checked")) {
        slug = slug + "&hide_outliers_x=true";
      }
      if ($(".chart-hide-outliers-y input").prop("checked")) {
        slug = slug + "&hide_outliers_y=true";
      }
      if ($(".chart-show-labels input").prop("checked")) {
        slug = slug + "&show_labels=true";
      }
      if ($(".chart-show-population-as-bubble-size input").prop("checked")) {
        slug = slug + "&show_population_as_bubble_size=true";
      }
      if ($(".chart-show-nomad-score-as-bubble-size input").prop("checked")) {
        slug = slug + "&show_nomad_score_as_bubble_size=true";
      }
      if ($(".chart-logarithmic-x input").prop("checked")) {
        slug = slug + "&log_x=true";
      }
      if ($(".chart-logarithmic-y input").prop("checked")) {
        slug = slug + "&log_y=true";
      }
    } else {
      slug = slug + "/chart";
    }
  }
  slugWithoutSlashActiveView = explode("/", slug)[0];
  if (empty(slugWithoutSlashActiveView)) {
    pageTitle = "Nomad List";
  } else {
    pageTitle = properlyCapitalize(
      str_replace("-", " ", str_replace("/", " ", slugWithoutSlashActiveView))
    );
  }
  if (activeView == "chart") {
    pageTitle =
      $(
        '.sort-by.sort-by-chart-x option[data-sort="' + activeChartX + '"]'
      ).val() +
      " vs. " +
      $('.sort-by option[data-sort="' + activeChartY + '"]').val();
  }
  if (
    $(".filters .filter .choice.active").length == 1 &&
    $(".filters .filter.country .choice.active").length == 1
  ) {
    if (
      !empty($(".filters .filter.country .choice.active").data("filter-title"))
    ) {
      pageTitle = $(".filters .filter.country .choice.active").data(
        "filter-title"
      );
    }
  }
  if (
    $(".filters .filter .choice.active").length == 1 &&
    $(".filters .filter.region .choice.active").length == 1
  ) {
    if (
      !empty($(".filters .filter.region .choice.active").data("filter-title"))
    ) {
      pageTitle = $(".filters .filter.region .choice.active").data(
        "filter-title"
      );
    }
  }
  if (typeof activeSortOrder !== "undefined") {
    if (activeSort != defaultSort && activeView != "chart") {
      value = makeUrlSlug($(".sort-by select").find(":selected").text());
      slug = slug + "?sort=" + activeSort + "&order=" + activeSortOrder;
    }
  }
  pageUri = slug;
  changeUrl(pageUri, pageHash, pageTitle);
  trackEvent("pageview", window.location.href);
  trackEvent("visit", window.location.href);
  trackEvent("action", window.location.href);
  return [slug, pageTitle];
}
function trimChar(string, charToRemove) {
  while (string.charAt(0) == charToRemove) {
    string = string.substring(1);
  }
  while (string.charAt(string.length - 1) == charToRemove) {
    string = string.substring(0, string.length - 1);
  }
  return string;
}
function openSignUpModal(benefit, membership_type) {
  consoleLog("openSignUpModal", benefit, membership_type);
  $(".sign-up-cta-bottom").hide();
  membership_type = "premium";
  hideLoading();
  if (typeof modalPayIsOpen === "undefined") modalPayIsOpen = false;
  if (modalPayIsOpen) return;
  if (pageType !== "settings" && typeof pageType === "undefined") {
    if (typeof userUserType !== "undefined" && userUserType == "basic") {
      window.location.href = "/?upgrade=nomadlist";
    } else {
      if ($(".box input.email").val()) {
        window.location.href =
          "/?join=nomadlist&email=" +
          encodeURIComponent($(".box input.email").val());
      } else {
        window.location.href = "/?join=nomadlist";
      }
    }
    return;
  }
  if (pageType !== "settings" && pageType != "cities") {
    if (typeof userUserType !== "undefined" && userUserType == "basic") {
      window.location.href = "/?upgrade=nomadlist";
    } else {
      if ($(".box input.email").val()) {
        window.location.href =
          "/?join=nomadlist&email=" +
          encodeURIComponent($(".box input.email").val());
      } else {
        window.location.href = "/?join=nomadlist";
      }
    }
    return;
  }
  $("html").removeClass("top-bar-dropdown-expanded");
  trackEvent("pageview", "https://nomadlist.com/?join=nomadlist");
  trackEvent("action", "https://nomadlist.com/?join=nomadlist");
  $(".modal-pay img.lazyload").each(function () {
    $(this)
      .attr("src", $(this).data("src"))
      .removeClass("lazyload")
      .addClass("lazyloaded");
    $(this)
      .attr("srcset", $(this).data("srcset"))
      .removeClass("lazyload")
      .addClass("lazyloaded");
  });
  $(".modal-pay-backdrop").show();
  $(".modal-pay").show();
  modalPayIsOpen = true;
  initiateStripe();
  if (!setProfilePhotoScriptLoaded) {
    setProfilePhotoScriptLoaded = true;
    $.getScript(
      "/set_profile_photo.js?" + time(),
      function (data, textStatus, jqxhr) {}
    );
  }
  consoleLog("3");
  $(".modal-pay .plans .plan").removeClass("active");
  $(".modal-pay-backdrop").show();
  if (typeof membership_type === "undefined") {
    membership_type = "premium";
  }
  consoleLog("membership_type", membership_type);
  consoleLog("4");
  if (membership_type == "basic") {
    $(".modal-pay .plans").removeClass("active");
    $(".modal-pay .plans.basic").addClass("active");
    consoleLog("$('.modal-pay .plans.basic .plan.best').click();");
    $(".modal-pay-container")
      .addClass("basic-plan-selected")
      .removeClass("premium-plan-selected");
    setTimeout(function () {
      $(".modal-pay .plans.basic .plan.best").click();
    }, 100);
  }
  if (membership_type == "premium") {
    $(".modal-pay .plans").removeClass("active");
    $(".modal-pay .plans.premium").addClass("active");
    $(".modal-pay-container")
      .addClass("premium-plan-selected")
      .removeClass("basic-plan-selected");
    consoleLog("$('.modal-pay .plans.premium .plan.best').click();");
    setTimeout(function () {
      $(".modal-pay .plans.premium .plan.best").click();
    }, 100);
  }
  consoleLog("5");
  $(".modal-pay").show();
  if (windowWidth > 600) {
    $(".modal-pay .input_email").focus();
  }
  $(".modal-pay-featured img.lazyload").each(function () {
    hideLoading();
    initiateStripe();
    $(this)
      .attr("src", $(this).data("src"))
      .removeClass("lazyload")
      .addClass("lazyloaded_2");
  });
  if (typeof benefit === "undefined") {
    benefit = "";
    $(".modal-pay-list-item-first").hide();
  } else {
    $(".modal-pay-top-bg-head").html(benefit);
    $(".modal-pay-list-item-first").html(benefit);
    $(".modal-pay-list-item-first").show();
  }
}
function showNoItemsFound() {
  $(".view.grid .item:not(.template):not(.not-a-place)").remove();
  $(".grid-side").hide();
  $(".notice-no-items-found").show();
  $(".notice-no-items-found img").prop(
    "src",
    $(".notice-no-items-found img").data("src")
  );
}
function showItemsLoading() {
  showLoading();
  document.body.style.cursor = "wait";
  if (typeof activeView === "undefined") activeView = "";
  if (activeView != "grid") {
    $(".loading_spinner-general .loading_message").hide();
    $(".loading_spinner-general").addClass("show");
  }
  if (activeView != "grid") {
    $(".view.map").css("opacity", 0.5);
    $(".view.grid .item").css("opacity", 0.5);
  } else {
    $(".view").css("opacity", 0.5);
  }
}
function hideItemsLoading() {
  document.body.style.cursor = "default";
  $(".loading_spinner-general .loading_message").text("");
  $(".loading_spinner-general .loading_message").hide();
  $(".loading_spinner-general").removeClass("show");
  if (activeView == "map") {
    $(".view.map").css("opacity", 1);
    $(".view.grid .item").css("opacity", 1);
  } else {
    $(".view").css("opacity", 1);
  }
}
var showConsoleLog = false;
if (typeof userIsAdmin !== "undefined") {
  if (userIsAdmin) {
    showConsoleLog = true;
  }
}
function similar_text(s1, s2) {
  var longer = s1;
  var shorter = s2;
  if (s1.length < s2.length) {
    longer = s2;
    shorter = s1;
  }
  var longerLength = longer.length;
  if (longerLength == 0) {
    return 1.0;
  }
  return (
    (longerLength - similar_text_editDistance(longer, shorter)) /
    parseFloat(longerLength)
  );
}
function similar_text_editDistance(s1, s2) {
  s1 = s1.toLowerCase();
  s2 = s2.toLowerCase();
  var costs = new Array();
  for (var i = 0; i <= s1.length; i++) {
    var lastValue = i;
    for (var j = 0; j <= s2.length; j++) {
      if (i == 0) costs[j] = j;
      else {
        if (j > 0) {
          var newValue = costs[j - 1];
          if (s1.charAt(i - 1) != s2.charAt(j - 1))
            newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
          costs[j - 1] = lastValue;
          lastValue = newValue;
        }
      }
    }
    if (i > 0) costs[s2.length] = lastValue;
  }
  return costs[s2.length];
}
function isMetaOrShiftKeyPressed(event) {
  if (typeof event !== "undefined") {
    if (typeof event.metaKey !== "undefined") {
      if (event.metaKey) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
}
function testUserInternetSpeed() {
  setCookie("last_tested_internet_speed", date("Y-m-d") + "_x", 86400 * 365);
  var cacheBuster = "?date=" + date("Y-m-d");
  var startTime, endTime;
  var startTime = new Date().getTime();
  var download = new Image();
  download.src =
    "https://nomadlist.com/assets/file_for_speedtest.jpg" + cacheBuster;
  download.onload = function () {
    var downloadSize = 1042592;
    endTime = new Date().getTime();
    var duration = (endTime - startTime) / 1000;
    var bitsLoaded = downloadSize * 8;
    var speedBps = (bitsLoaded / duration).toFixed(2);
    var speedKbps = (speedBps / 1024).toFixed(2);
    var download_speed = (speedKbps / 1024).toFixed(2);
    latency = "";
    if (typeof navigator.connection !== "undefined") {
      if (typeof navigator.connection.rtt !== "undefined") {
        if (navigator.connection.rtt != 100 && navigator.connection.rtt != 0) {
          latency = navigator.connection.rtt;
        }
      }
    }
    $.ajax({
      dataType: "json",
      url:
        "/userApi.php?action=sis&d=" +
        encodeURIComponent(btoa(download_speed)) +
        "&l=" +
        encodeURIComponent(btoa(latency)),
      success: function (reply) {},
    });
  };
  download.onerror = function (err, msg) {};
}
$(function () {
  window.onerror = function (messageOrEvent, source, lineno, colno, error) {
    try {
      console.log("window.onerror hit: " + messageOrEvent);
      var params = [],
        ___guid =
          window.onerror___guid ||
          (window.onerror___guid =
            new Date().getTime() + "-" + new Date().getTime()),
        ___logError = function (___url) {
          ___domScript = document.getElementById(___guid);
          if (!___domScript) {
            var ___head =
                document.head || document.getElementsByTagName("head")[0],
              ___domScript = document.createElement("script");
            ___domScript.id = ___guid;
            ___domScript.dataType = "json";
            ___domScript.async = "async";
            ___head.insertBefore(___domScript, ___head.firstChild);
          }
          ___domScript.src = ___url;
        };
      $.ajax({
        url: "/userApi.php?action=report_error",
        type: "POST",
        data: {
          platform: "javascript",
          browser:
            navigator.userAgent +
              "|" +
              navigator.vendor +
              "|" +
              navigator.platform +
              "|" +
              navigator.platform || "",
          lineNumber: lineno || "",
          colNumber: colno || "",
          source: source || "",
          error: error || "",
          messageOrEvent: messageOrEvent || "",
          url: window.location.href || "",
          html: document.documentElement.outerHTML || "",
        },
        context: document.body,
      }).done(function (reply) {});
      ___logError("/userApi.php?action=report_error&" + params.join("&"));
    } catch (e) {
      consoleLog(e);
    }
    return false;
  };
});
