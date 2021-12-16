if(typeof defaultSort==='undefined')defaultSort='total_score';if(typeof defaultSortOrder==='undefined')defaultSortOrder='desc';if(typeof activeChartX==='undefined')activeChartX='internet_speed';if(typeof activeChartY==='undefined')activeChartY='total_score';if(typeof showSignUpModalAfterVisitCount==='undefined')showSignUpModalAfterVisitCount=10;if(getQueryString('chart_x'))activeChartX=getQueryString('chart_x');if(getQueryString('chart_y'))activeChartY=getQueryString('chart_y');var searchFiltersWasEnterPressed;var dataToUse=[];var lastTouchedItemSlug='';var lastTouchedStartItemSlug='';var chart;var latestFilterTargetSelected=false;var doNotClusterMarkers=false;var onlyClusterLabels=false;var nearFilterActive=false;var regionFilterActive=false;var countryFilterActive=false;var chartBorderColor='rgba(0,0,0,0.25)';var mapFitBoundsEnabled=true;var monthSelected;var monthIsSelected=false;var haveFiltersBeenChangedSinceOpeningFiltersPane=false;var map3dBounds;var mapboxStyleDark='mapbox://styles/nomadlist/ck9t0tbyr01ph1ioe2sb2n1mp?optimize=true&cache=1';var mapboxStyleLight='mapbox://styles/nomadlist/ckaic2fv30rx81ipm8ci6evvn?optimize=true&cache=1';if(getQueryString('satellite')){var mapboxStyleLight='mapbox://styles/nomadlist/cjq1zvu0p7b402rocqgstwiwt';var mapboxStyleDark='mapbox://styles/nomadlist/cjq1zvu0p7b402rocqgstwiwt';}
var startTime=performance.now();var mapboxStyleURL='';var leftPaddingBounds=0;var rightPaddingBounds=0;var microEpochMapIsLoaded=0;var mapIs3d=false;var current3dDataMapID='';;var mapIs3dCountries=false;var current3dCountriesDataMapID='';;var selfReviews={};var bodyScrollTop=0;var sortingBasedOnFilter=false;var windowWidth=windowSize().width;var windowHeight=windowSize().height;if(windowHeight<400){var itemsToAddPerInfinityLoad=8;}
else if(windowHeight<800){var itemsToAddPerInfinityLoad=12;}
else if(windowHeight<1400){var itemsToAddPerInfinityLoad=24;}
else{var itemsToAddPerInfinityLoad=32;}
var userHasSeenLoginCTAForFiltersLimit;var defaultItemsData=[];var mapMarkers=[];var mapboxMarkers=[];var userHasChangedDefaultSort=false;var itemsData=[];var weAreInfinityScrolling=false;var removeWords=[',','','','','in','af','mountain','mountains','hills','hill','with','and','you','can','worldwide','world','best','will','we','for','i','want','will','would','like','or','if','are','that','which','internet','wifi','has','cities','high','low','moderate','city','place','good','to','many','more','a lot','of','much','air','quality','levels','level','go','do','stuff','things','great','bad','nice','countries','weather','places','have','are','where','there','people','is','were','was','a','an','the '];var defaultAttributesDisplayedInMapView=['name','name_chinese','state_chinese','country_chinese','state','state_code','country',defaultSort,'latitude','longitude','short_slug','long_slug'];var defaultAttributesDisplayedInChartView=['name','name_chinese','state_chinese','country_chinese','state','state_code','country','region',defaultSort,'population','short_slug','long_slug'];var defaultAttributesToAlwaysLoad=['region','population','descriptionFromReview','slug','short_slug','long_slug','users_now_count','users_now_count_est','users_been_count','users_been_count_est','boost','last_2_year_growth','slug','image','name_chinese','name','country_chinese','air_quality_now','air_quality','latitude','longitude','country','country_code','country_slug','state_code','state_chinese','state','internet_speed','air_quality_score','air_quality_now_score','humidity'];var defaultAttributesDisplayedInItemBox=['rank','internet_speed','weather_icon','weather_emoji','temperatureC','temperatureF','temperatureC_feels_like','temperatureF_feels_like','cost_for_nomad_in_usd','cost_for_expat_in_usd','cost_for_local_in_usd','cost_for_family_in_usd'];var defaultAttributesDisplayedInItemAttributesBox=['total_score',defaultSort,'cost_score','internet_score','leisure_quality','safety_level'];var firstTapOnTouchOnMapIsSlug='';var htmlBufferOfItemsRemovedAfterFiltering='';var googleMapsLoaderInterval;var sliderTimeout;var selectedSortOrderForUserBasedOnFilterSelected=false;var infinityTimeout;var hoodmapsLat=0;var mapMarkersInBoundsClustered=[];var hoodmapsLng=0;var hoodmapsPlaces=[];var hoodmapsLowZoomPaths=[];var flightPriceFilterIsEnabled=false;var hoodmapsHighZoomPaths=[];var filterId=0;var mapZoomendTimeout=setTimeout(function(){},0);var originContainerTimeout=setTimeout(function(){},0);var showLaterTimeout;var openingModalWasCanceled=false;var skyPickerFlightPricesClientSideCache;var whenToFlyEpoch=strtotime("+1 month");var getFlightPricesClientSide=true;var lazyloadItemTimeout;var lazyloadItemInModalTimeout;var onFirstPageLoadGetItemsDataTimeout=setTimeout(function(){},0);var onFirstPageLoadGetItemsDataStarted=false;var startedLoadingMaps;var modalItemAJAXLoader;var loadTimeout;var weHaventLoadedTheItemsYetAfterPageLoad=true;if(typeof defaultSort==='undefined')defaultSort='';if(typeof pageUri==='undefined')pageUri='';if(typeof pageUrl==='undefined')pageUrl='';if(typeof modalCityCache==='undefined')modalCityCache='';if(typeof activeView==='undefined')activeView='';if(typeof generateItemsInJS==='undefined')generateItemsInJS='';if(typeof userCity==='undefined')userCity='';if(typeof itemType==='undefined')itemType='cities';if(typeof openItemAsModal==='undefined')openItemAsModal='';if(typeof activeSort==='undefined')activeSort='';if(typeof activeSortSlug==='undefined')activeSortSlug='';if(typeof activeSortAttributeDefaultOrder==='undefined')activeSortAttributeDefaultOrder='desc';if(typeof activeSortAttributeToShow==='undefined')activeSortAttributeToShow=defaultSort;if(typeof activeSortOrder==='undefined')activeSortOrder='desc';if(typeof activeSortDataType==='undefined')activeSortDataType='score';if(typeof activeSortTextPrefix==='undefined')activeSortTextPrefix='';if(typeof activeSortTextPostfix==='undefined')activeSortTextPostfix='';var defaultSortText='â­ï¸ Total score';if(typeof activeSortText==='undefined')activeSortText=defaultSortText;var map;var mapAlreadyFiredIdle;var mapHasStartedToLoad;var mapZoomPrespecifiedFromQuery;var mapLatitudePrespecifiedFromQuery;var mapLongitudePrespecifiedFromQuery;var markerMapTooltip;var auxCounter;var markerPlacesTooltip;var bounds;var placesMapMarkers=[];var placesMapMarkersIndex=[];var mapMarkersIndex=[];var mapAuxRotator=null;var userMarker;var showResultsImmediatelyGlobal;var hoodmapsAjax=false;var activeAjaxID=0;var activeAjax=null;var activeAjax2=null;var activeAjax3=null;var activeAjax4=null;var activeAjax5=null;var activeAjaxCity=false;var modalOpen;var mapExists=false;if(typeof startTab==='undefined')startTab='ranking';if(typeof activeTab==='undefined'){var activeTab=startTab;}
var activeItems;var activeItemSlug;var activeItemSlugLong;var hostname=window.location.protocol+"//"+window.location.hostname;var activeItemName;var isGoogleMapsLoading=false;var chartJSIsLoaded=false;var mapIsLoaded=false;var checkMapBoxIsLoaded=setTimeout(function(){},100);var searchUserFinishedTypingTimeout=null;var searchUserStartedTypingAgainKillEachLoop=false;var dragging=false;var months=['January','February','March','April','May','June','July','August','Septemeber','October','November','December'];var startLatitude=null;var startLongtiude=null;if(typeof userCurrency==='undefined')userCurrency='USD';if(empty(userCurrency))userCurrency='USD';if(getQueryString('latitude')){var startLatitude=getQueryString('latitude');var startLongitude=getQueryString('longitude');}
var compassHeading=null;if(getQueryString('view')=='map'&&pageType=='cities'){document.getElementsByTagName('html')[0].className=str_replace('grid-view','map-view',document.getElementsByTagName('html')[0].className);}
if(getQueryString('ref')=='producthunt'){document.getElementsByTagName('html')[0].className+=' producthunt';}
var detectPullUpOnTouchCountedZeros=0;var filterActionsOffsetTop=0;var filterActionsFloating=false;if(activeSort!=defaultSort){userHasChangedDefaultSort=true;}
$(function(){jQuery.event.special.touchstart={setup:function(_,ns,handle){this.addEventListener("touchstart",handle,{passive:true});}};localizePrices();if($('.filter .choice').length){$('.filter.temperature .choice').each(function(){$(this).find('span').data('original-text',$(this).find('span').text());$(this).data('original-filter-target',$(this).data('filter-target'));});$('.filter.air_quality .choice').each(function(){$(this).find('span').data('original-text',$(this).find('span').text());$(this).data('original-filter-target',$(this).data('filter-target'));});$('.filter.humidity .choice').each(function(){$(this).find('span').data('original-text',$(this).find('span').text());$(this).data('original-filter-target',$(this).data('filter-target'));});$('.filter.users_count .choice').each(function(){$(this).find('span').data('original-text',$(this).find('span').text());$(this).data('original-filter-target',$(this).data('filter-target'));});}
if(getQueryString('show_population_as_bubble_size')){$('.chart-show-population-as-bubble-size input').prop('checked',true);$('.chart-show-nomad-score-as-bubble-size input').prop('checked',false);}
else if(getQueryString('show_nomad_score_as_bubble_size')){$('.chart-show-nomad-score-as-bubble-size input').prop('checked',true);$('.chart-show-population-as-bubble-size input').prop('checked',false);}
else{$('.chart-show-nomad-score-as-bubble-size input').prop('checked',false);$('.chart-show-population-as-bubble-size input').prop('checked',false);}
if(getQueryString('log_x'))$('.chart-logarithmic-x input').prop('checked',true);if(getQueryString('log_y'))$('.chart-logarithmic-y input').prop('checked',true);if(getQueryString('show_labels'))$('.chart-show-labels input').prop('checked',true);if(getQueryString('hide_outliers_x'))$('.chart-hide-outliers-x input').prop('checked',true);if(getQueryString('hide_outliers_y'))$('.chart-hide-outliers-y input').prop('checked',true);if(pageType=='list'&&$('.view.grid .item:not(.template)').length==0){updateItemsToMatchFilter();}
if($('.view.grid .item.template').length==0){}
$('.chart-branding').data('html',$('.chart-branding').html());if(typeof preloadedFiltersOnPageState!=='undefined'){if(!empty(preloadedFiltersOnPageState)){loadFiltersPageState(preloadedFiltersOnPageState);updateActiveFiltersBox();updateItemsToMatchFilter();}
else if(empty(itemsData)){setTimeout(function(){onFirstPageLoadGetItemsData();},10000);}}
else if(empty(itemsData)){setTimeout(function(){onFirstPageLoadGetItemsData();},10000);}
try{selfReviews=JSON.parse(localStorage.getItem('selfReviews'));}catch(e){}
if(typeof selfReviews==='undefined'){selfReviews={};}
if(empty(selfReviews)){selfReviews={};}
if(windowSize().width<900)$('.hide-before-900px').hide();if(windowSize().width<700)$('.hide-before-800px').hide();if(windowSize().width<600)$('.hide-before-600px').hide();if(windowSize().width<350)$('.hide-before-350px').hide();if(windowSize().width<700){$('html').removeClass('new-user');}
$('body').on('click','.action-close-notification',function(){$.ajax({dataType:'json',url:'/userApi.php?action=close_notification&notification_id='+$(this).parent().data('notification-id')});$(this).parent().remove();});$('.notice-show-all-markers').bind('click',function(){if($(this).hasClass('clustering')){showItemsLoading();if(confirm("Do you want to disable clustering and show all markers? This can be very heavy and might slow down the site.")){$(this).toggleClass('clustering');hideItemsLoading();clusterMarkersMapbox();}
else{hideItemsLoading();return;}}
else{$(this).toggleClass('clustering');clusterMarkersMapbox();}});if(!empty(activeChartX)&&!empty(activeChartY)){$('.sort-by.sort-by-chart-x option[data-sort="'+activeChartX+'"]').prop('selected',true);$('.sort-by:not(.sort-by-chart-x) option[data-sort="'+activeChartY+'"]').prop('selected',true);}
$('body').on('click','.filter .choice.in_winter',function(e){$('.filter.month .choice').removeClass('active');$('.filter .choice.all_year').removeClass('active');});$('body').on('click','.filter .choice.all_year',function(e){$('.filter.month .choice').removeClass('active');$('.filter .choice.in_winter').removeClass('active');});$('body').on('click','.filter.month .choice',function(e){$('.filter .choice.all_year').removeClass('active');$('.filter .choice.in_winter').removeClass('active');});$('body').on('click','.filter.region .choice',function(e){e.preventDefault();e.stopPropagation();if(!$(this).hasClass('active')){regionFilterActive=true;if(nearFilterActive){nearFilterActive=false;$('.filter.near .choice').removeClass('active');}
if(countryFilterActive){countryFilterActive=false;$('.filter.country .choice').removeClass('active');}}
else{regionFilterActive=false;}});$('body').on('click','.filter.near .choice',function(e){e.preventDefault();e.stopPropagation();if(!$(this).hasClass('active')){nearFilterActive=true;if(regionFilterActive){$('.filter.region .choice').removeClass('active');regionFilterActive=false;showItemsLoading();updateItemsToMatchFilter();}}
else{nearFilterActive=false;}});$('body').on('click','.filter.country .choice',function(e){e.preventDefault();e.stopPropagation();if(!$(this).hasClass('active')){countryFilterActive=true;if(nearFilterActive){nearFilterActive=false;$('.filter.near .choice').removeClass('active');}
if(regionFilterActive){regionFilterActive=false;$('.filter.region .choice').removeClass('active');}}
else{nearFilterActive=false;}});$('.chart-logarithmic-x').bind('click',function(e){if(!$('.chart-logarithmic-x input').prop('checked')){$('.chart-logarithmic-x input').prop('checked',true);}
else{$('.chart-logarithmic-x input').prop('checked',false);}
$('.view').css('opacity',0.5);showLoading();setTimeout(processFilterReplyAndGenerateChart,100);});$('.chart-logarithmic-y').bind('click',function(e){if(!$('.chart-logarithmic-y input').prop('checked')){$('.chart-logarithmic-y input').prop('checked',true);}
else{$('.chart-logarithmic-y input').prop('checked',false);}
$('.view').css('opacity',0.5);showLoading();setTimeout(processFilterReplyAndGenerateChart,100);});$('.chart-hide-outliers-x').bind('click',function(e){if(!$('.chart-hide-outliers-x input').prop('checked')){$('.chart-hide-outliers-x input').prop('checked',true);}
else{$('.chart-hide-outliers-x input').prop('checked',false);}
$('.view').css('opacity',0.5);showLoading();setTimeout(processFilterReplyAndGenerateChart,100);});$('.chart-hide-outliers-y').bind('click',function(e){if(!$('.chart-hide-outliers-y input').prop('checked')){$('.chart-hide-outliers-y input').prop('checked',true);}
else{$('.chart-hide-outliers-y input').prop('checked',false);}
$('.view').css('opacity',0.5);showLoading();setTimeout(processFilterReplyAndGenerateChart,100);});$('.chart-show-nomad-score-as-bubble-size').bind('click',function(e){if(!$('.chart-show-nomad-score-as-bubble-size input').prop('checked')){$('.chart-show-nomad-score-as-bubble-size input').prop('checked',true);$('.chart-show-population-as-bubble-size input').prop('checked',false);}
else{$('.chart-show-nomad-score-as-bubble-size input').prop('checked',false);}
$('.view').css('opacity',0.5);showLoading();setTimeout(processFilterReplyAndGenerateChart,100);});$('.chart-show-population-as-bubble-size').bind('click',function(e){if(!$('.chart-show-population-as-bubble-size input').prop('checked')){$('.chart-show-population-as-bubble-size input').prop('checked',true);$('.chart-show-nomad-score-as-bubble-size input').prop('checked',false);}
else{$('.chart-show-population-as-bubble-size input').prop('checked',false);}
$('.view').css('opacity',0.5);showLoading();setTimeout(processFilterReplyAndGenerateChart,100);});$('.chart-show-labels').bind('click',function(e){if(!$('.chart-show-labels input').prop('checked')){$('.chart-show-labels input').prop('checked',true);}
else{$('.chart-show-labels input').prop('checked',false);}
$('.view').css('opacity',0.5);showLoading();setTimeout(processFilterReplyAndGenerateChart,100);});$('body').on('click','.active-filters-box div.active-filter',function(){key=$(this).data('filter-target');text=$(this).data('text');consoleLog('Removing active filter: '+key+' '+text);if($('.filters select.choices[data-filter-target="'+key+'"]').length>0){$('.filters select.choices[data-filter-target="'+key+'"]').val('');$('.filters select.choices[data-filter-target="'+key+'"]').removeClass('active');}
else{$('.filters .choice[data-filter-target="'+key+'"]').each(function(){if($(this).text()==text){$(this).removeClass('active');}});}
showLoading();showItemsLoading();updateItemsToMatchFilter();$(this).remove();});$('html').bind('keyup',function(e){if(!mapIs3d)return;if(e.keyCode==17){$('.notice-hold-control-to-drag-3d-map').hide();}});$('body').on('click','.grid .item .action-hide-item',function(){$(this).parent().fadeOut(function(){$('.item.not-a-place').each(function(){html=$(this)[0].outerHTML;$(this).next('.item').after(html);$(this).remove();});});});$('body').on('click','.tab-reviews .action-add-review',function(){if(empty($('.tab-reviews .review-editor').val()))return;data={};data['action']='change';data['slug']=activeItemSlugLong;data['key']='review';data['value']=$('.tab-reviews .review-editor').val();data['value']=str_replace(activeItemName.toLowerCase(),activeItemName,data['value']);$(this).text('Edit review');if(!empty(userUserId)){md5UserId=md5(userUserId+'1986');$('.tab-reviews .review.'+md5UserId).remove();}
else{md5UserId='';}
$('.tab-reviews .review.self').remove();$('.tab-reviews .review-editor').parent().after('<div class="review self '+md5UserId+'">'+
'<div class="votes">'+
'</div>'+
'<div class="review-text">'+
data['value']+
'</div>'+
'</div>');if(typeof selfReviews==='undefined'){selfReviews={};}
selfReviews[activeItemSlug]=data['value'];try{localStorage.setItem('selfReviews',JSON.stringify(selfReviews));}catch(e){}
if($('.tab-reviews .review-editor').val().length>100){activeAjax=$.ajax({async:true,url:'/api/v2/change/',type:'POST',dataType:'json',data:data}).done(function(reply){if(typeof reply.message!=='undefined'){alert(reply.message);}
if(typeof reply.spam_detected!=='undefined'){setCookie('spammer','true',86400*365);}});}
if(typeof noticeAutoReviewCityAfterVisitingSlugLong!=='undefined'){if(data['slug']==noticeAutoReviewCityAfterVisitingSlugLong){$('.notice-auto-review-city-after-visiting').remove();setCookie('auto_review_city_after_visiting_hide_'+noticeAutoReviewCityAfterVisitingSlugLong,'true',86400*7);}}
setTimeout(function(){alert("Thanks so much for contributing, I saved your review! It will take a day or so to update the city page and show your review everywhere and people will be able to read it! Meanwhile you can keep editing your review and it will be resubmitted as an edit.");},100);})
$('body').on('click','.modal.item table.details tr',function(e){$(this).find('.action-open-property-modal').trigger('click');});$('body').on('click','.action-open-property-modal',function(e){e.preventDefault();e.stopPropagation();$('.modal.property').html('');$('.backdrop.property').addClass('show');$('.modal.property').addClass('show');url=$(this).attr('href');$('.modal.property').html('<iframe src='+url+' style="border:none;width:100%;height:100%" />');});$('body').on('click','.backdrop.property',function(e){$('.backdrop.property').removeClass('show');$('.modal.property').removeClass('show');});$('body').on('click','.link-to-map-circle',function(e){if($('html').hasClass('pageType-city')){return;}
e.preventDefault();e.stopPropagation();if(activeSearch){activeSearch='';$('input.search').val('');updateItemsToMatchFilter();}
if(empty($(this).data('latitude'))||empty($(this).data('longitude'))){return;}
if(activeView=='map'){if($('html').hasClass('filters-folded')){map.setCenter(new mapboxgl.LngLat($(this).data('longitude'),$(this).data('latitude')));}
else{map.setCenter(map.unproject([map.project(new mapboxgl.LngLat($(this).data('longitude'),$(this).data('latitude')),map.getZoom()).x-(leftPaddingBounds),map.project(new mapboxgl.LngLat($(this).data('longitude'),$(this).data('latitude')),map.getZoom()).y]));}
map.setZoom(5);if(windowSize().width<600){map.setZoom(map.getZoom()+1);}
closeItemModal();return;}
$('html').removeClass('grid-view').removeClass('map-view').removeClass('map-3d-view').removeClass('list-view').addClass(activeView+'-view');if(!mapIsLoaded)loadMap($(this).data('longitude'),$(this).data('latitude'),4,false);activeView='map';startLatitude=$(this).data('latitude');startLongitude=$(this).data('longitude');$('.action-clear-all-filters').trigger('click');closeItemModal();});$('body').on('mouseenter touchstart','.item',function(){var slug=$(this).data('slug');if(itemType!='city')return;if(empty(slug))return;if(typeof modalCityCache[slug]!=='undefined')return;var url='/modal/city/'+slug+'?'+date('Y-m-d')+'_12_'+Math.round(date('H')/6);preloadAjax=$.ajax({url:url,success:function(html){if(typeof html!=='undefined'){if(!empty(html)){modalCityCache[slug]={};modalCityCache[slug]['epoch']=time();modalCityCache[slug]['html']=html.slice(0);}}}},slug);});document.addEventListener('gesturestart',function(e){e.preventDefault();});if(itemType=='city'||itemType=='region'||itemType=='country'){if(defaultSortOrder!=activeSortOrder){$('.action-select-sort-order div').removeClass('active');$('.action-select-sort-order div.'+activeSortOrder).addClass('active');}
if(activeSort!=defaultSort){consoleLog('activeSort!=defaultSort',activeSort,defaultSort);userHasChangedDefaultSort=true;consoleLog("4	$('.head-image').hide();");$('.sort-by option[data-sort="'+activeSort+'"]').prop('selected',true);consoleLog('.sort-by option[data-sort="'+activeSort+'"]');$('.sort-by').trigger('change');activeSortText=$('.sort-by select').find(':selected').text();activeSortAttributeDefaultOrder=$('.sort-by select').find(':selected').data('sort');activeSortAttributeToShow=$('.sort-by select').find(':selected').data('sort');activeSortDataType=$('.sort-by select').find(':selected').data('type');activeSortTextPrefix=$('.sort-by select').find(':selected').data('prefix');activeSortSlug=$('.sort-by select').find(':selected').data('slug');activeSortTextPostfix=$('.sort-by select').find(':selected').data('postfix');updateItemsToMatchFilter();}}
modalCityCache={};try{localStorage.setItem('modalCityCache3',JSON.stringify(modalCityCache));}catch(e){}
$('.filter.flight_price_usd .choice').each(function(){$(this).data('original-tooltip',$(this).data('tooltip'));});if(!empty(userCity)){userCityShort=explode(', ',userCity);userCityShort=userCityShort[0];$('.sort-by select option[data-sort="'+'distance'+'"]').text('Distance to '+userCityShort);$('.sort-by select option[data-sort="'+'flight_time'+'"]').text('Flight time from '+userCityShort);$('.filter.near .choice span').text(userCountryEmoji+' Near '+userCountry);$('.filter.near .choice').data('filter-slug','near-'+userCountrySlug);if(typeof userCitySlug!=='undefined'){$('.filter.near .choice').data('filter-target','near-'+userCountrySlug);$('.filter.near .choice').data('filter-min',1);$('.filter.near .choice').data('filter-type','greater-than');}
$('.filters .filter-origin-container input').val(userCityShort);$('.sort-by select option[data-sort="'+'flight_price_usd'+'"]').text('âœˆï¸ flight price ('+userCityShort+')');$('.filter.flight_price_usd .choice').each(function(){$(this).data('tooltip',str_replace('{userCity}',userCityShort,$(this).data('original-tooltip')));});setSelfMapMarker();}
if(getFlightPricesClientSide){flightPriceFilterIsEnabled=false;if($('.filter.flight_price_usd .choice.active').length>0){flightPriceFilterIsEnabled=true;}
if(activeSort=='flight_price_usd'){flightPriceFilterIsEnabled=true;}
if(flightPriceFilterIsEnabled){if(empty(skyPickerFlightPricesClientSideCache)){showItemsLoading();getSkyPickerFlights();}
else{processSkyPickerFlightPricesReply();}}}
if(!empty(getQueryString('date'))){whenToFlyEpoch=strtotime(getQueryString('date'));skyPickerFlightPricesClientSideCache=null;try{localStorage.setItem('skyPickerFlightPricesClientSideCache',null);}catch(e){}
$('.option.sort-by option[data-sort="flight_price_usd"]').text('Flight price ('+date('Y-m-d',whenToFlyEpoch)+')');}
if($('html').hasClass('grid-view')){activeView='grid';}
if($('html').hasClass('map-3d-view')){activeView='map-3d';consoleLog('loadMap 3d 6');loadMap(null,null,null,true);}
if($('html').hasClass('map-view')){activeView='map';loadMap();}
if($('html').hasClass('chart-view')){activeView='chart';}
$('.action-change-view').val(activeView);if(activeView=='chart'){processFilterReplyAndGenerateChart();}
if(!generateItemsInJS){activeView='grid';}
if(activeView=='map'){loadMap();}
if(activeView=='map-3d'){consoleLog('loadMap 3d 5');loadMap(null,null,null,true);}
$('body').on('click','.modal.item .tab.tab-flights table tr',function(e){window.open($(this).data('url'),'_new');e.stopPropagation();e.preventDefault();});try{modalCityCacheLocalStorage=localStorage.getItem('modalCityCache3');}catch(e){}
if(typeof modalCityCacheLocalStorage!=='undefined'){if(!empty(modalCityCacheLocalStorage)){modalCityCacheLocalStorage=JSON.parse(modalCityCacheLocalStorage);if(!empty(modalCityCacheLocalStorage)){newmodalCityCacheLocalStorage={};for(var key in modalCityCacheLocalStorage){if(!empty(modalCityCache[key])){continue;}
if(modalCityCacheLocalStorage[key]['epoch']<modalCityCacheExpiry){continue;}
else{newmodalCityCacheLocalStorage[key]=modalCityCacheLocalStorage[key];}}
for(var key in modalCityCache){newmodalCityCacheLocalStorage[key]=modalCityCache[key];}
modalCityCache=newmodalCityCacheLocalStorage;try{localStorage.setItem('modalCityCache3',JSON.stringify(modalCityCache));}catch(e){if(e.code==22){localStorage.clear();}}}
else{try{localStorage.setItem('modalCityCache3',JSON.stringify(modalCityCache));}catch(e){if(e.code==22){localStorage.clear();}}}}
else{try{localStorage.setItem('modalCityCache3',JSON.stringify(modalCityCache));}catch(e){if(e.code==22){localStorage.clear();}}}}
$('body').on('click','.action-enable-3d-countries',function(e){mapIs3dCountries=true;load3dCountriesMap();});$('body').on('click','.action-change-to-3d-cities',function(e){mapIs3dCountries=false;$('html').removeClass('map-3d-countries');if(!empty(current3dCountriesDataMapID)){map.removeLayer(current3dCountriesDataMapID);map.removeLayer(current3dCountriesDataMapID+'_highlight');map.removeSource('highlight');current3dCountriesDataMapID='';}
hideLoading();showItemsLoading();updateItemsToMatchFilter();});$('body').on('click','.action-enable-3d-map',function(e){action='ðŸ‘€ Opened 3d map view';$.ajax({url:"/userApi.php",type:'POST',dataType:'json',data:{action:'log_user_activity',log_action:action,hash:md5(action+'xoyo')},context:document.body}).done(function(reply){});if(!mapIsLoaded){showLoading();activeView='map-3d';$('html').removeClass('grid-view').removeClass('map-view').removeClass('chart-view').addClass('map-3d-view').removeClass('list-view').removeClass('grid-view');loadMap(false,false,false,true);$('.sort-by.sort-by-chart-x').remove();return;}
if(!$('html').hasClass('map-3d-view')){clearAllMapMarkers();map.setPitch(45);map.setZoom(1);if(windowSize().width<600){map.setZoom(map.getZoom()+1);}
map.resize();mapIs3d=true;activeView='map-3d';$('.view.'+activeView).addClass('show');$('html').removeClass('grid-view').removeClass('map-view').removeClass('chart-view').removeClass('map-3d-view').removeClass('list-view').addClass(activeView+'-view');$(this).find('div').addClass('active');$('.map.view').addClass('show');if($('html').hasClass('dark')){mapboxStyleURL=mapboxStyleDark;map.setStyle(mapboxStyleURL);}
else{mapboxStyleURL=mapboxStyleLight;map.setStyle(mapboxStyleURL);}
waitUntilStyleIsLoadedToPut3dItemsDataOnMap();}
else{mapIs3d=false;activeView='map';$('html').removeClass('map-3d-view');$('.view.'+activeView).addClass('show');$('html').removeClass('grid-view').removeClass('map-view').removeClass('chart-view').removeClass('map-3d-view').removeClass('list-view').addClass(activeView+'-view');$(this).find('div').removeClass('active');if(!empty(current3dDataMapID)){map.removeLayer(current3dDataMapID);map.removeLayer(current3dDataMapID+'_highlight');map.removeSource('highlight');current3dDataMapID='';}
if($('html').hasClass('dark')){mapboxStyleURL=mapboxStyleDark;map.setStyle(mapboxStyleURL);}
else{mapboxStyleURL=mapboxStyleLight;map.setStyle(mapboxStyleURL);}
map.setPitch(0);map.setZoom(1);if(windowSize().width<600){map.setZoom(map.getZoom()+1);}
updateItemsToMatchFilter();}});$('body').on('change','.action-change-view',function(e){if($(this).val()=='csv'){downloadCSV();$(this).val(activeView);return false;}
consoleLog("5	$('.head-image').hide();");$('.head-image').hide();$('.new-user-hero').hide();$('.new-user-hero-press-featured').hide();activeView=$(this).val();consoleLog('activeView',activeView);$('html').removeClass('has-head-image').removeClass('grid-view').removeClass('map-view').removeClass('chart-view').removeClass('map-3d-view').addClass(activeView+'-view');$('.sort-by.sort-by-chart-x').remove();updateItemsToMatchFilter();if($(this).val()=='grid'){lazyload();}
else if($(this).val()=='chart'){}
else if($(this).val()=='map'){mapIs3d=false;loadMap();}
else if($(this).val()=='map-3d'){mapIs3d=true;loadMap(null,null,null,true);}
action='ðŸ‘€ Opened '+activeView+' view';$.ajax({url:"/userApi.php",type:'POST',dataType:'json',data:{action:'log_user_activity',log_action:action,hash:md5(action+'xoyo')},context:document.body}).done(function(reply){});});$('.action-download-csv').bind('touchend mouseup',function(e){e.stopPropagation();e.preventDefault();$(this).blur();downloadCSV();});$('.action-toggle-filters').bind('touchend mouseup',function(e){$('.tooltip-ui').hide();$('.vitrage-container').remove();e.stopPropagation();e.preventDefault();if($('.filters .lazyload').length){$('.filters .lazyload').each(function(){$(this).attr('src',$(this).data('src'));$(this).removeClass('lazyload');});}
$(this).blur();action='ðŸ” Opened filters';$.ajax({url:"/userApi.php",type:'POST',dataType:'json',data:{action:'log_user_activity',log_action:action,hash:md5(action+'xoyo')},context:document.body}).done(function(reply){});if(isLoggedIn)$('html').removeClass('show-grid-side');$('html').removeClass('has-head-image').removeClass('pageType-country').removeClass('pageType-list').removeClass('pageType-region').addClass('pageType-cities');consoleLog("6	$('.head-image').hide();");if($('.head-image').length){$('.head-image').hide();}
if($('.new-user-hero').length){$('.new-user-hero').hide();$('.new-user-hero-press-featured').hide();}
if($('html').hasClass('new-user')){$('html').removeClass('new-user');setCookie('new-user','no',86400*365);if(windowSize().height>1000){if(!empty(itemsData)){$('.view-'+activeView+'.infinity-scroll').show();processFilterReplyAndGenerateItems(0,true);$('.view-'+activeView+'.infinity-scroll').hide();}
else{updateItemsToMatchFilter(true,true);}}}
if($('html').hasClass('filters-folded')){haveFiltersBeenChangedSinceOpeningFiltersPane=false;openFilters();}
else{closeFilters();lazyload();}});$('body').on('click','.action-cta-for-non-user',function(e){if(!$('html').hasClass('logged-in')){e.preventDefault();e.stopPropagation();if(!empty($(this).data('cta-url'))){window.open($(this).data('cta-url'),'_new');}
else{window.open('https://nomadlist.com/?join=nomadlist','_new');}}
else{if(!empty($(this).data('cta-url'))){window.open($(this).data('cta-url'),'_new');}
else{$('.action-open-chat').trigger('click');}}});$('.above-filter').html($('.below-filter').html());$('.above-filter .sort-by span').text("Color");if(typeof mapType==='undefined'){var mapType='hybrid';}});var compassHeading=null;function updateUserLocationOnMapIfMapExists(){return;}
$(function(){if(activeView=='grid'){}
$('body').on('click','.list .aux .sponsored',function(e){window.open('https://nomadlist.com/promote','_new');e.stopPropagation();e.preventDefault();});$('body').on('click','.map-marker-data',function(e){if(itemType=='city'){openItemModal($(this).data('slug'));}
else if(itemType=='country'||itemType=='region'){window.open('/'+$(this).data('slug')+'/map');}});$('body').on('click','.map-marker-label',function(e){if(itemType=='city'){openItemModal($(this).data('slug'));}
else if(itemType=='country'||itemType=='region'){window.open('/'+$(this).data('slug')+'/map');}});$('.action-select-view .choice').removeClass('active');$('.action-select-view .choice[data-view="'+activeView+'"]').addClass('active');$('body').on('click','.action-select-view div',function(e){if(!userHasChangedDefaultSort&&$(this).data('view')=='map'){activeSort='cost_for_nomad_in_usd';$('.sort-by select option[data-sort="'+activeSort+'"]').prop('selected',true);$('.sort-by select option[data-sort="'+activeSort+'"]').trigger('change');userHasChangedDefaultSort=false;}
if(!userHasChangedDefaultSort&&$(this).data('view')=='grid'){activeSort=defaultSort;activeSortAttributeDefaultOrder=defaultSortOrder;$('.sort-by select option[data-sort="'+activeSort+'"]').prop('selected',true);$('.sort-by select option[data-sort="'+activeSort+'"]').trigger('change');userHasChangedDefaultSort=false;}
e.stopPropagation();e.preventDefault();offsetItemsNumber=1;if(activeView==$(this).data('view')){return;}
$('.view.'+activeView).removeClass('show');activeView=$(this).data('view');$('.action-select-view div.active').removeClass('active');$('.action-select-view div[data-view="'+activeView+'"]').addClass('active');$('.filters').removeClass('all').removeClass('medium').addClass('compact');$('.view.'+activeView).addClass('show');$('html').removeClass('grid-view').removeClass('map-view').removeClass('map-3d-view').removeClass('list-view').addClass(activeView+'-view');updateItemsToMatchFilter();if($('html').hasClass('flights')){}
else{setCookie('activeView',activeView,86400*365);}
showItemsLoading();if(activeView==='map'){$('.filters').addClass('all');showLoading();loadMap();}
else{if(!empty(mapAuxRotator)){clearInterval(mapAuxRotator);}}
trackEvent('pageview',pageUrl);trackEvent('action',pageUrl);});$('body').on('click','.action-add-to-collection',function(){$('.modal.add-to-collection').addClass('show');});$('.action-select-sort-order').bind('click',function(e){e.stopPropagation();if(activeSortOrder=='asc'){order='desc';}
else{order='asc';}
$('.action-select-sort-order div').removeClass('active');$('.action-select-sort-order div.'+order).addClass('active');activeSortOrder=order;showItemsLoading();updateItemsToMatchFilter(true);});$('body').on('change','.sort-by select',function(){consoleLog('1 showItemsLoading');showItemsLoading();showLoading();$('html').removeClass('has-head-image').removeClass('pageType-country').removeClass('pageType-list').removeClass('pageType-region').addClass('pageType-cities');consoleLog("1	$('.head-image').hide();");$('.head-image').hide();$('.new-user-hero').hide();$('.new-user-hero-press-featured').hide();if($(this).parent().hasClass('sort-by-chart-x')){activeChartX=$(this).find(':selected').data('sort');updateItemsToMatchFilter(true,false);return;}
else{activeChartY=$(this).find(':selected').data('sort');}
if($(this).find(':selected').data('sort')=='personal_score'&&empty(userUsername)){alert("Members only: unlock this and 50+ other filters by signing up to Nomad List");$('.sort-by select option[data-sort="'+activeSort+'"]').prop('selected',true);return;}
selectedSortOrderForUserBasedOnFilterSelected=false;sort=$(this).find(':selected').data('sort');activeSortDataType=$(this).find(':selected').data('type');activeSortText=$(this).find(':selected').text();if(!empty($(this).find(':selected').data('slug'))){rootUri=$(this).find(':selected').data('slug');}
if(activeSortText==defaultSortText){userHasChangedDefaultSort=false;}
else{userHasChangedDefaultSort=true;}
activeSortTextPrefix=$(this).find(':selected').data('prefix');activeSortTextPostfix=$(this).find(':selected').data('postfix');order=$(this).find(':selected').data('order');selected=$(this).find(':selected');if(!empty($(this).find(':selected').data('tab'))){activeTab=$(this).find(':selected').data('tab');}
if(!empty(selected.data('asc'))){val=selected.data('asc');}
else{}
if(!empty(selected.data('desc'))){val=selected.data('desc');}
else{}
$('.action-select-sort-order div').removeClass('active');$('.action-select-sort-order div.'+order).addClass('active');activeSort=sort;activeSortAttributeToShow=sort;activeSortOrder=order;activeSortAttributeDefaultOrder=order;if(mapIs3dCountries){load3dCountriesMap();return;}
updateItemsToMatchFilter(true,false);});if(activeView=='map'){$('.sort-by select option[data-sort="'+activeSort+'"]').prop('selected',true);$('.sort-by select option[data-sort="'+activeSort+'"]').prop('selected',true);}
$('body').on('change','.sort-by select',function(){$(this).blur();});$('.sign-up-cta-bottom .action-close-cta').bind('click',function(){$('.sign-up-cta-bottom').hide();setCookie('hide-cta-'+$(this).parent().data('cta'),'true',86400);});$('.backdrop.item').bind('click',function(){if($(this).hasClass('do-not-allow-close')){window.location.href='/';return;}
updateSlug();hideLoading();openingModalWasCanceled=true;$(this).removeClass('show');$('.modal').removeClass('show');});$('.action-close-new-user-hero').bind('click',function(e){e.preventDefault();e.stopPropagation();$('html').removeClass('new-user');setCookie('new-user-hero-closed','yes',86400*365);setCookie('new-user','no',86400*365);$('.new-user-hero').hide();if(windowSize().width>700){$('html').removeClass('filters-folded');}});$('body').on('click','.action-close-chat',function(e){$('.modal.chat').removeClass('show');$('.backdrop.chat').removeClass('show');hideLoading();title=activeItemName;url=activeItemSlug;changeUrl(url,'',title);});$('body').on('click','.action-open-places',function(e){$('.modal.places iframe').prop('src','');e.preventDefault();e.stopPropagation();if(!empty($(this).data('href'))){href=$(this).data('href');}
else{href=$(this).attr('href');}
showLoading();$('.modal.places iframe').bind('load',function(){hideLoading();})
$('.modal.places iframe').prop('src',href);$('.modal.places').addClass('show');$('.backdrop.places').addClass('show');});$('body').on('click','.action-close-places',function(e){$('.modal.places').removeClass('show');hideLoading();$('.backdrop.places').removeClass('show');});$('body').on('click','.action-open-trips',function(e){$('.modal.trips iframe').prop('src','');if(isMobile)return;e.preventDefault();e.stopPropagation();if(!empty($(this).data('href'))){href=$(this).data('href');}
else{href=$(this).attr('href');}
$('.modal.trips iframe').bind('load',function(){})
$('.modal.trips iframe').prop('src',href+'?hide-branding=true');$('.modal.trips').addClass('show');$('.backdrop.trips').addClass('show');});$('body').on('click','.action-close-trips',function(e){$('.modal.trips').removeClass('show');$('.backdrop.trips').removeClass('show');});$('.backdrop.trips').bind('click',function(){$('.modal.trips iframe').prop('src','');$('.modal.trips').removeClass('show');$('.backdrop.trips').removeClass('show');});$('.backdrop.chat').bind('click',function(){$('.modal.chat iframe').prop('src','');$('.modal.chat').removeClass('show');$('.backdrop.chat').removeClass('show');title=activeItemName;url=activeItemSlug;changeUrl(url,'',title);});$('.backdrop.places').bind('click',function(){$('.modal.places iframe').prop('src','');$('.modal.places').removeClass('show');$('.backdrop.places').removeClass('show');});$("body").on("touchmove",function(){dragging=true;});$('body').on('touchend','.filters .choice',function(e){if(dragging)return;$(this).trigger('click');e.preventDefault();});$('body').on('mouseenter touchstart','.view .item .click',function(e){slug=$(this).parent().data('slug');if(!empty(modalCityCache[slug]))return;});$('body').on('touchstart','.view .item .click',function(e){lastTouchedStartItemSlug=$(this).parent().data('slug');if(!dragging){$('.view .item.hover').removeClass('hover');return;}});$(window).scroll(function(){$('.view .item.hover').removeClass('hover');});$('body').on('touchend','.view .item .click',function(e){consoleLog('.view .item .click','touchend');if(dragging){$('.view .item.hover').removeClass('hover');return;}
if($(this).hasClass('do-not-open-on-click'))return;thisTouchedItemSlug=$(this).parent().data('slug');if(lastTouchedItemSlug==thisTouchedItemSlug&&lastTouchedStartItemSlug==thisTouchedItemSlug){openItem($(this).parent(),e);if(!empty(lastTouchedItemSlug))$('.view .item.'+lastTouchedItemSlug+' .container').removeClass('hover');lastTouchedItemSlug='';lastTouchedStartItemSlug='';}
else{e.preventDefault();$(this).parent().addClass('hover');lastTouchedItemSlug=thisTouchedItemSlug;}
e.preventDefault();e.stopPropagation();});$('body').bind('touchend',function(e){$('.view .item').removeClass('hover');dragging=false;});$('body').on('click','.view .item .click',function(e){if($(this).hasClass('do-not-open-on-click'))return;if(itemType=='city'){if(!isLoggedIn){if($(this).parent().parent().hasClass('members-only')){$('.action-sign-up').click();return;}}
openItem($(this).parent(),e);e.stopPropagation();e.preventDefault();}});$('body').on('click','.view.list tbody .itemSub',function(e){e.stopPropagation();e.preventDefault();if(isMobile)return;url=$(this).attr('href');window.open(url,'_new');});$('body').on('click','.view.list tbody tr.item',function(e){if(isMobile)return;openItem($(this).find('a.itemName'),e);e.stopPropagation();e.preventDefault();});$('body').on('click','.view.list tbody a.itemName',function(e){openItem($(this),e);e.stopPropagation();e.preventDefault();});$("body").on("touchstart",function(){dragging=false;});$('body').on('click','.list .item .itemSub a',function(e){e.stopPropagation();})
$('body').on('click','.view.list .head td',function(e){$('.view.list .head td').removeClass('active');$(this).addClass('active');sortItems($(this).data('sort'),$(this).data('order'));e.preventDefault();e.stopPropagation();})
$('body').on('click','.aux .bsa ._default_',function(e){e.stopPropagation();});$('body').on('click','.view .item-aux',function(e){if($(this).find('.bsa').length>0){e.preventDefault();e.stopPropagation();url=$(this).find('a').attr('href');window.open(url,'_new');}
else if(!empty($(this).data('url'))){url=$(this).data('url');window.open(url,'_new');e.stopPropagation();e.preventDefault();}});$('body').on('click','.modal.item .tab.with-map .item .click',function(e){e.stopPropagation();e.preventDefault();url=$(this).parent().parent().parent().data('url');if(!empty(url)){window.open(url,'_new');}});$('body').on('mousemove','.modal.item.add-city .rating',function(e){percentageSet=(e.pageX-$(this).offset().left)/$(this).outerWidth();rating=Math.round(percentageSet*100/20);$(this).removeClass().addClass('rating').addClass('r'+rating);$(this).find('.filling').css('width',(percentageSet*100));if(empty(rating)||rating==0)$(this).find('.filling').text('');if(rating==1)$(this).find('.filling').text('bad');if(rating==2)$(this).find('.filling').text('bad');if(rating==3)$(this).find('.filling').text('okay');if(rating==4)$(this).find('.filling').text('good');if(rating==5)$(this).find('.filling').text('great');});$('body').on('click','.modal.item.add-city .rating',function(){$(this).parent().parent().parent().removeClass('focus');percentageSet=(e.pageX-$(this).offset().left)/$(this).outerWidth();rating=Math.round(percentageSet*100/20);$(this).removeClass().addClass('rating').addClass('r'+rating);$(this).find('.filling').css('width','');$(this).data('rating',rating);if(empty(rating)||rating==0)$(this).find('.filling').text('');if(rating==1)$(this).find('.filling').text('bad');if(rating==2)$(this).find('.filling').text('bad');if(rating==3)$(this).find('.filling').text('okay');if(rating==4)$(this).find('.filling').text('good');if(rating==5)$(this).find('.filling').text('great');$(this).parent().parent().parent().addClass('completed');percentageCompleted=($('.modal.item.add-city tr.editable.completed').length)/$('.modal.item.add-city tr.editable').length;$('.modal.item.add-city .progress-bar .filling').css('width',percentageCompleted*100);$(this).parent().parent().parent().next('tr:not(.completed)').addClass('focus');if($(this).parent().parent().parent().next('tr:not(.completed)').length==0){$('.modal.item .tabs ul li[data-tab="info"]').addClass('focus');}});$('body').on('mouseleave','.modal.item.add-city .rating',function(){rating=$(this).data('rating');$(this).removeClass().addClass('rating').addClass('r'+rating);$(this).find('.filling').css('width','');if(empty(rating)||rating==0)$(this).find('.filling').text('');if(rating==1)$(this).find('.filling').text('bad');if(rating==2)$(this).find('.filling').text('bad');if(rating==3)$(this).find('.filling').text('okay');if(rating==4)$(this).find('.filling').text('good');if(rating==5)$(this).find('.filling').text('great');});$('.origin-container input').bind('focus',function(){$(this).select();});$('.origin-container input').bind('keyup',function(e){if(e.keyCode==38){if($('.origin-container .autocomplete div.hover').length>0){$('.origin-container .autocomplete div.hover').removeClass('hover').prev('div').addClass('hover');}
else{$('.origin-container .autocomplete div').eq(0).addClass('hover');}
return;}
if(e.keyCode==40){if($('.origin-container .autocomplete div.hover').length>0){$('.origin-container .autocomplete div.hover').removeClass('hover').next('div').addClass('hover');}
else{$('.origin-container .autocomplete div').eq(0).addClass('hover');}
return;}
if(e.keyCode==13){$(this).blur();if($('.origin-container .autocomplete div.hover').length>0){$('.origin-container .autocomplete div.hover').trigger('click');$('.origin-container .autocomplete div').remove();$('.origin-container .autocomplete').hide();}
else if($('.origin-container .autocomplete div').eq(0).length>0){$('.origin-container .autocomplete div').eq(0).trigger('click');$('.origin-container .autocomplete div').remove();$('.origin-container .autocomplete').hide();}
else{return;}
return;}
if(e.keyCode<48&&e.keyCode>90)return;clearTimeout(originContainerTimeout);originContainerTimeout=setTimeout(function(){query=$('.origin-container input').val();if(empty(query)){$('.origin-container .autocomplete div').remove();$('.origin-container .autocomplete').hide();}
activeAjax=$.ajax({async:true,url:'/userApi.php?action=geocode',type:'GET',dataType:'json',data:{query:query}}).done(function(autocompletes){if(autocompletes.results.length==0)return;$('.origin-container .autocomplete div').remove();for(var i=0;i<autocompletes.results.length;i+=1){autocomplete=autocompletes.results[i];$('.origin-container .autocomplete').append('<div data-name="'+autocomplete.name+'" data-latitude="'+autocomplete.latitude+'" data-longitude="'+autocomplete.longitude+'">'+autocomplete.emoji+' '+autocomplete.name+'</div>')}
if(autocompletes.results.length>0){$('.origin-container .autocomplete').show();}
else{$('.origin-container .autocomplete').hide();}});},100);});$('body').on('click','.origin-container .autocomplete div',function(){cityName=$(this).data('name');cityLatitude=$(this).data('latitude');cityLongitude=$(this).data('longitude');$('.origin-container input').val(cityName);$('.origin-container .autocomplete').hide();userCity=cityName;userLatitude=cityLatitude;userLongitude=cityLongitude;modalCityCache={};try{localStorage.setItem('modalCityCache3',JSON.stringify(modalCityCache));}catch(e){}
$('.sort-by select option[data-sort="'+'distance'+'"]').text('Distance to '+userCountry);$('.filter.near .choice span').text(userCountryEmoji+' Near '+userCountry);$('.filter.near .choice').data('filter-slug','near-'+userCountrySlug);if(typeof userCitySlug!=='undefined'){$('.filter.near .choice').data('filter-target','near-'+userCountrySlug);$('.filter.near .choice').data('filter-min',1);$('.filter.near .choice').data('filter-type','greater-than');}
$('.filter.flight_price_usd .choice').each(function(){$(this).data('tooltip',str_replace('{userCity}',userCountry,$(this).data('original-tooltip')));});setSelfMapMarker();setTimeout(function(){getSkyPickerFlights();clearAllMapMarkers();showItemsLoading();showLoading();},1000);});var timeoutUserWaitForupdateItemsToMatchFilter=setTimeout(function(){},0);choiceDragMouseDown=false;choiceDragActive=true;$('body').on('click','.filters .choice',function(e){if(typeof pageRef==='undefined')pageRef='';if(!$(this).hasClass('active')&&getCookie('visit-count')>=showSignUpModalAfterVisitCount&&$('.filters .choice.active').length>=showSignUpModalAfterFilterCount&&!$('html').hasClass('logged-in')&&!(pageRef.indexOf('google')>-1)&&!(pageRef.indexOf('bing')>-1)&&!(pageRef.indexOf('duck')>-1)&&!(pageRef.indexOf('yandex')>-1)){action='ðŸ’³ Opened sign up modal when using filters '+'('+signUpAbTestVariation+')';$.ajax({url:"/userApi.php",type:'POST',dataType:'json',data:{action:'log_user_activity',log_action:action,hash:md5(action+'xoyo')},context:document.body}).done(function(reply){});openSignUpModal('ðŸ”‘ <strong>Unlock the <div style="margin-left:7px;margin-right:7px;display:inline-block;font-weight:bold;border-radius:6px; background:var(--input-background-color);box-shadow:0 1px 2px 0 rgba(0, 0, 0, 0.1) !important;padding:7px;padding-left:14px;padding-right:14px;box-shadow:0 0 0 1px var(--input-border-color), 0 2px 4px 0 rgb(0 0 0 / 7%), 0 1px 1.5px 0 rgb(0 0 0 / 5%) !important;">'+$(this).text()+'</div></strong> and 200+ other filters','basic');$('.sign-up-notice-free-limit-reached').show();$('.sign-up-cta-bottom').show();$('.action-close-modal-pay').bind('click',function(){setTimeout(function(){$('.sign-up-cta-bottom').show();},15000);})
$('.modal-pay-backdrop').bind('click',function(){setTimeout(function(){$('.sign-up-cta-bottom').show();},15000);})
userHasSeenLoginCTAForFiltersLimit=true;return false;}
consoleLog("2	$('.head-image').hide();");$('.head-image').hide();$('.new-user-hero').hide();$('.new-user-hero-press-featured').hide();$('html').removeClass('has-head-image');$('.notice').remove();latestFilterTargetSelected=$(this).data('filter-target');activeSearch='';$('input.search').val('');if(!$('html').hasClass('logged-in')){if($(this).hasClass('members-only')||$(this).parent().hasClass('members-only')||$(this).parent().parent().hasClass('members-only')||$(this).parent().parent().parent().hasClass('members-only')||$(this).parent().parent().parent().parent().hasClass('members-only')||$(this).parent().parent().parent().parent().parent().hasClass('members-only')){action='ðŸ’³ Opened sign up modal when clicking members-only filters '+'('+signUpAbTestVariation+')';$.ajax({url:"/userApi.php",type:'POST',dataType:'json',data:{action:'log_user_activity',log_action:action,hash:md5(action+'xoyo')},context:document.body}).done(function(reply){});$('.sign-up-notice-free-limit-reached').show();openSignUpModal('ðŸ”‘ <strong>Unlock the <div style="margin-left:7px;margin-right:7px;display:inline-block;font-size:0.9em;font-weight:bold;border-radius:6px;border:1px solid var(--input-border-color);padding:7px;padding-left:14px;padding-right:14px;box-shadow:0 0 0 1px var(--input-border-color), 0 2px 4px 0 rgb(0 0 0 / 7%), 0 1px 1.5px 0 rgb(0 0 0 / 5%) !important;">'+$(this).text()+'</div></strong> and 200+ other filters','basic');consoleLog('This filter is limited to members only, shown due to visit count > '+getCookie('visit-count'));return false;}}
if($(this).parent().hasClass('single-choice')&&!$(this).hasClass('active')){$(this).parent().find('.choice.active').removeClass('active');}
$(this).toggleClass('active');if(activeView=='grid'){showItemsLoading();showLoading();}
if(windowSize().width<600){$('.grid-side').hide();haveFiltersBeenChangedSinceOpeningFiltersPane=true;clearTimeout(timeoutUserWaitForupdateItemsToMatchFilter);timeoutUserWaitForupdateItemsToMatchFilter=setTimeout(function(){updateItemsToMatchFilter(true);},1000);}
else{updateItemsToMatchFilter(true);}});$('.filters select.choices').bind('change',function(){if(!empty($(this).find(':selected').data('filter-type'))){$(this).addClass('active');}
else{$(this).removeClass('active');}
showItemsLoading();updateItemsToMatchFilter();});setTimeout(function(){lazyload();},100);trackEvent('pageview',pageUrl);trackEvent('visit',pageUrl);trackEvent('action',pageUrl);if(typeof pageHash==='undefined')pageHash='';if(!empty(window.location.hash)||!empty(pageHash)){if(!empty(pageHash)){var hash=pageHash;}
else{var hash=window.location.hash.slice(1);}
var array=hash.split("&");var values,query_data={};for(var i=0;i<array.length;i+=1){values=array[i].split("=");key=urldecode(values[0]);value=urldecode(values[1]);if(empty(value))continue;if(key=='sort'&&$('.sort-by select').find(':selected').data('sort')!=value){activeSort=value;$('.sort-by select option[data-sort="'+activeSort+'"]').prop('selected',true);$('.sort-by select').trigger('change');updateItemsToMatchFilter();}
if(key=='temperature')key='temperatureC_feels_like';if(key=='order'){activeSortOrder=value;$('.action-select-sort-order .'+value).trigger('click');}
if(key=='view'){if(value=='map'){activeView='map';loadMap();}}
if(key=='city'){openItemModal(value);}
if(key=='tab'){activeTab=value;}
if(key=='q'||key=='search'){$('input.search').val(value);$('input.search').addClass('active');$('.search-container').addClass('active');$('.search-icon').addClass('active');activeSearch=value;}
if(key=='zoom'){mapZoomPrespecifiedFromQuery=parseInt(value);if(typeof map!=='undefined'){map.setZoom(value);}}
if(key=='latitude'){mapLatitudePrespecifiedFromQuery=parseInt(value);}
if(key=='longitude'){mapLongitudePrespecifiedFromQuery=parseInt(value);}
x=0;$('.filters .choice[data-filter-target="'+key+'"]').each(function(){equalsA=false;equalsB=false;if(!empty($(this).find('span').data('original-text')))equalsA=($(this).find('span').data('original-text').toLowerCase()==value.toLowerCase());if(!empty($(this).text()))equalsB=($(this).text().toLowerCase()==value.toLowerCase());if(equalsA||equalsB){showResultsImmediatelyGlobal=true;$(this).trigger('click');if(!$(this).is(':visible')){$('.filters').removeClass('compact').addClass('medium');if(!$(this).is(':visible')){$('.filters').removeClass('medium').addClass('all');}}}
x++;});}
updateItemsToMatchFilter(true,true);}
if(typeof(activeUnit)=='undefined'){activeUnit='metric';}
$('.action-select-unit .choice').removeClass('active');$('.action-select-unit .choice[data-unit="'+activeUnit+'"]').addClass('active');$('.action-select-unit .choice').bind('click',function(){activeUnit=$(this).data('unit');$('html').removeClass('units-metric').removeClass('units-imperial').addClass('units-'+activeUnit);});$('.action-show-filter').bind('click',function(){$('.filters').removeClass('collapsed');$(this).hide();$('.action-expand-filter').show();$('.action-clear-all-filters').show();});$('.action-expand-filter').bind('click',function(){if($('.filters').hasClass('compact')){if(isMobile){$('.filters').removeClass('compact').addClass('medium');$(this).html('<i class="fa-minus fa"></i> Less');}
else{$('.filters').removeClass('compact').addClass('medium');$(this).html('<i class="fa-plus fa"></i> More')}}
else if($('.filters').hasClass('medium')){if(isMobile){$('.filters').removeClass('medium').addClass('compact');$(this).html('<i class="fa-plus fa"></i> More')}
else{$('.filters').removeClass('medium').addClass('all');$(this).html('<i class="fa-minus fa"></i> Less')}}
else if($('.filters').hasClass('all')){$('.filters').removeClass('all').addClass('compact');$(this).html('<i class="fa-plus fa"></i> More')}});$('body').on('click','.filters .action-apply-filter',function(){if(!$(this).hasClass('engage'))return;$('.action-apply-filter').removeClass('engage');refreshFilter();});var searchFiltersTimeout=setTimeout(function(){},0);$('body').on('keyup click','.input-search-filters',function(event){consoleLog("$('body').on('keyup click','.input-search-filters',function(event) {");event.stopPropagation();$(this).attr('placeholder','Type to search');$('.input-search-filters-plus-icon-circle').hide();if(event.which==27){$('.input-search-filters').val('').attr('placeholder','Search or filter').blur();$('.input-search-filters-plus-icon-circle').show();$('.search-filters-results').hide();return;}
if(event.which==39){consoleLog('arrow right');var index=$('.search-filters-results .search-filters-results-column div.search-filters-result.hover').index();if($('.search-filters-results .search-filters-results-column div.search-filters-result.hover').parent().next().length){nextOne=$('.search-filters-results .search-filters-results-column div.search-filters-result.hover').parent().next().find('div.search-filters-result').eq(index);}
else{nextOne=$('.search-filters-results .search-filters-results-column').eq(0).find('div.search-filters-result').eq(index);}
$('.search-filters-results .search-filters-results-column div.search-filters-result.hover').removeClass('hover');nextOne.addClass('hover');}
else if(event.which==37){consoleLog('arrow left');var index=$('.search-filters-results .search-filters-results-column div.search-filters-result.hover').index();if($('.search-filters-results .search-filters-results-column div.search-filters-result.hover').parent().prev().length){prevOne=$('.search-filters-results .search-filters-results-column div.search-filters-result.hover').parent().prev().find('div.search-filters-result').eq(index);}
else{prevOne=$('.search-filters-results .search-filters-results-column').eq($('.search-filters-results .search-filters-results-column').length-1).find('div.search-filters-result').eq(index);}
$('.search-filters-results .search-filters-results-column div.search-filters-result.hover').removeClass('hover');prevOne.addClass('hover');}
else if(event.which==40){consoleLog('arrow down');if($('.search-filters-results div.search-filters-result.hover').length==0){$('.search-filters-results div.search-filters-result').eq(0).addClass('hover');}
else{$('.search-filters-results div.search-filters-result.hover').removeClass('hover').next().addClass('hover');}
if($('.search-filters-results div.search-filters-result.hover').length==0){$('.search-filters-results div.search-filters-result').eq(0).addClass('hover');}}
else if(event.which==38){consoleLog('arrow up');if($('.search-filters-results div.search-filters-result.hover').length==0){$('.search-filters-results div.search-filters-result').eq($('.search-filters-results div.search-filters-result').length-1).addClass('hover');}
else{$('.search-filters-results div.search-filters-result.hover').removeClass('hover').prev().addClass('hover');}
if($('.search-filters-results div.search-filters-result.hover').length==0){$('.search-filters-results div.search-filters-result').eq($('.search-filters-results div.search-filters-result').length-1).addClass('hover');}}
else if(event.which==13){if($('.search-filters-results div.hover').length==1){$('.search-filters-results div.hover').click();return;}
else{searchFiltersWasEnterPressed=true;consoleLog('press enter, select first autocomplete result');$('.search-filters-results div.search-filters-result').eq(0).addClass('hover');$('.search-filters-results div.search-filters-result').eq(0).click();return;}}
else{searchFiltersTimeout=setTimeout(function(that){var query=$(that).val().toLowerCase();if(windowSize().width<800){var maxResults=20;}
else{var maxResults=30;}
var i=0;$('.search-filters-results').hide();$('.search-filters-results').html('');labelDupes=[];var matches=[];if(!empty(query)){if(typeof autocompleteQueries==='undefined'){downloadAutocompleteQueries();}else{var cityMatchesCount=0;var searchQuery=query;var autocompleteQueriesToAdd=[];for(var i=0;i<autocompleteQueries.length;i++){if(empty(autocompleteQueries[i]))continue;if(empty(autocompleteQueries[i]['search']))continue;if(typeof autocompleteQueries[i]['type']==='undefined')continue;if(autocompleteQueries[i]['type']!='city')continue;targetQuery=autocompleteQueries[i]['search'];if(targetQuery.trim().toLowerCase().indexOf(searchQuery.toLowerCase())>-1){match={};match['labelQuery']=autocompleteQueries[i]['name'];if(typeof autocompleteQueries[i]['emoji']!=='undefined'&&!empty(autocompleteQueries[i]['emoji'])){match['label']=autocompleteQueries[i]['emoji']+' '+autocompleteQueries[i]['name'];}
else{match['label']=autocompleteQueries[i]['name'];}
match['tooltip']='';match['type']='city';match['slug']=autocompleteQueries[i]['slug'];matches.push(match);cityMatchesCount++;}
if(cityMatchesCount>=5){break;}}
consoleLog(autocompleteQueriesToAdd);}}
var i=0;$('.filters .choice:not(.active)').each(function(){if(i>maxResults)return true;if($(this).parent().hasClass('month'))return true;if(empty(query)){if(Math.round(Math.random()*10)!=1){return true;}}
var label=$(this).html();var labelQuery=$(this).text().toLowerCase();var filterTarget=$(this).data('filter-target');var targetQuery=label.toLowerCase();var tooltip='';if($(this).data('add-active-filter-text')){label=$(this).data('add-active-filter-text')+label;}
if(typeof $(this).data('tooltip')!=='undefined'){var tooltip=$(this).data('tooltip');var targetQuery=targetQuery+' '+tooltip.toLowerCase();}
else if(typeof $(this).parent().data('tooltip')!=='undefined'){var tooltip=$(this).parent().data('tooltip');var targetQuery=targetQuery+' '+tooltip.toLowerCase();}
var targetQuery=targetQuery+' '+filterTarget.toLowerCase();if(in_array(labelDupes,labelQuery))return true;labelDupes.push(labelQuery);if(targetQuery.indexOf(query)>-1){var match={};match['score']=similar_text(targetQuery,query);var targetQueryWithoutEmoji=explode(' ',targetQuery)[1];if(empty(query)){match['score']=100-i;}
if(targetQueryWithoutEmoji.substr(0,query.length)==query){match['score']=match['score']+10;}
match['labelQuery']=labelQuery;match['label']=label;match['tooltip']=tooltip;match['type']='filter';matches.push(match);i++;}});consoleLog('matches',matches);if(query.indexOf('timez')>-1){consoleLog('timezone search');}
else{sortBySubkey(matches,'score');matches=matches.reverse();}
var rowInColumnCounter=0;var rowHTML='';if(empty(matches)){$('.search-filters-results').hide();$('.search-filters-results').html('');}
var dupeFinder=[];for(var i=0;i<matches.length;i++){match=matches[i];if(in_array(match['labelQuery'],dupeFinder)){continue;}
dupeFinder.push(match['labelQuery']);if(rowInColumnCounter==10){$('.search-filters-results').append('<div class="search-filters-results-column">'+rowHTML+'</div>');rowHTML='';rowInColumnCounter=0;}
if(match['type']=='filter'){rowHTML=rowHTML+'<div data-label="'+match['labelQuery']+'" data-tooltip="'+match['tooltip']+'" class="search-filters-result tooltip-set">'+match['label']+'</div>';}
else if(match['type']=='city'){rowHTML=rowHTML+'<div data-label="'+match['labelQuery']+'" data-city-slug="'+match['slug']+'" class="search-filters-result">'+match['label']+'</div>';}
rowInColumnCounter++;if((i+1)==maxResults)break;}
if(rowInColumnCounter<=10){$('.search-filters-results').append('<div class="search-filters-results-column">'+rowHTML+'</div>');rowHTML='';rowInColumnCounter=0;}
if($('.search-filters-results div').length==0){$('.search-filters-results').hide();$('.search-filters-results').html('');return;}
$('.search-filters-results').css('position','absolute');$('.search-filters-results').css('left',($(that).offset().left-$('.filter-actions').offset().left)+'px');$('.search-filters-results-column').css('width',($('.input-search-filters-container').width()-1)+'px');$('.search-filters-results').css('top',($(that).outerHeight()+$(that).offset().top-$('.filter-actions').offset().top-1)+'px');consoleLog('top',$(that).offset().top,$('.filter-actions').offset().top);$('.search-filters-results').find('.lazyload').each(function(){$(this).attr('src',$(this).data('src'));});if($('.search-filters-results div.search-filters-result').length){$('.search-filters-results').show();}
else{$('.search-filters-results').hide();}
hideLoading();},200,this);}});$('body').on('click',function(event){consoleLog("$('body').on('click',function(event) {);");$('.input-search-filters').val('').attr('placeholder','Search or filter').blur();$('.input-search-filters-plus-icon-circle').show();$('.search-filters-results').hide();});$('body').on('click','.search-filters-result',function(event){event.stopPropagation();$('.search-filters-results').hide();$('.vitrage-container').remove();$('.input-search-filters-plus-icon-circle').show();if(!searchFiltersWasEnterPressed){$('.input-search-filters').val('').attr('placeholder','Search or filter').blur();}
searchFiltersWasEnterPressed=false;$('.input-search-filters').val('').attr('placeholder','Search or filter').blur();var resultLabel=$(this).data('label');if($(this).data('city-slug')){openItemModal($(this).data('city-slug'));return;}
$('.filters .choice').each(function(){var label=$(this).html();var labelQuery=$(this).text().toLowerCase();if(labelQuery==resultLabel){$(this).click();return false;}});});$('body').on('click','.action-clear-all-filters',function(e){showItemsLoading();showLoading();e.preventDefault();e.stopPropagation();rootUri='/';rootUrl='https://nomadlist.com';consoleLog("3	$('.head-image').hide();");$('.head-image').hide();$('.new-user-hero').hide();$('.new-user-hero-press-featured').hide();if(isLoggedIn)$('html').removeClass('show-grid-side');$('html').removeClass('has-head-image').removeClass('pageType-country').removeClass('pageType-list').removeClass('pageType-region').addClass('pageType-cities');$('.backdrop-search').hide();$('.active-filters-box').html('');$('.filters .choice').removeClass('active');$('.filters select').val('').removeClass('active');$('input.search').val('');$('input.search').removeClass('active');$('.search-icon').removeClass('active');activeSearch='';setTimeout(function(){updateItemsToMatchFilter();},100);});var firstOptionHtml;$('.filter-pane select.filter').each(function(){selectId=Math.random().toString(36).substr(2)+Math.random().toString(36).substr(2);optionSelectedHtml='';optionsHtml='';firstOption=true;$(this).find('option').each(function(){optionId=Math.random().toString(36).substr(2)+Math.random().toString(36).substr(2);$(this).attr('id',optionId);attributesHtml='';attributes={};$.each($(this).get(0).attributes,function(i,attribute){attributesHtml=attributesHtml+attribute.name+'="'+attribute.value+'" ';});text=$(this).text();if($(this).is(':selected')){optionSelectedHtml='<span selected data-text="'+text+'" class="selected" '+attributesHtml+' id="'+optionId+'">'+text+'</span>';}
else{optionsHtml=optionsHtml+'<div data-text="'+text+'" '+attributesHtml+' id="'+optionId+'" class="option">&nbsp;&nbsp;&nbsp;'+text+'</div>';}
if(firstOption){firstOptionId=optionId;firstOptionHtml='<div data-text="'+text+'" '+attributesHtml+' id="'+optionId+'" class="option">&nbsp;&nbsp;&nbsp;Reset</div>';firstOption=false;}});newHtml='<div data-first="'+firstOptionId+'" id="'+selectId+'">';newHtml=newHtml+optionSelectedHtml+'<div class="dropdown">'+firstOptionHtml+optionsHtml;newHtml=newHtml+'</div>';newHtml=newHtml+'<div class="remove">&times;</div>';newHtml=newHtml+'</div>';$(this).after(newHtml);classList=$(this).attr('class').split(/\s+/);$.each(classList,function(index,item){$('#'+selectId).addClass(item);});$('#'+selectId).addClass('select');$(this).attr('style','display:none !important');$(this).attr('id',selectId);});$('.select .remove').bind('click',function(){$(this).parent().hide();e.stopPropagation();});$('.select').bind('click',function(e){$('.select:not(#'+$(this).attr('id')+')').removeClass('open');$(this).toggleClass('open');e.stopPropagation();})
$('.select .dropdown .option').bind('click',function(){attributesHtml='';firstOptionId=$(this).parent().parent().data('first');text=$(this).data('text');value=$(this).data('value');attributesHtml='';attributes={};$.each($(this).get(0).attributes,function(i,attribute){attributesHtml=attributesHtml+attribute.name+'="'+attribute.value+'" ';});$(this).parent().parent().addClass('active');selectId=$(this).parent().parent().attr('id');optionId=$(this).attr('id');if(optionId==firstOptionId){$(this).parent().parent().removeClass('active');}
$('#'+optionId).prop('selected',true);$('#'+selectId).trigger('change');$(this).parent().parent().find('span').remove();$(this).parent().parent().prepend('<span selected '+attributesHtml+'>'+text+'</span>');});$('body').bind('click',function(){$('.select').removeClass('open');})
$('.action-zoom-in').bind('touchstart mousedown',function(e){e.stopPropagation();e.preventDefault();if(!mapIsLoaded)return;map.setZoom(map.getZoom()+1);})
$('.action-zoom-out').bind('touchstart mousedown',function(e){e.stopPropagation();e.preventDefault();if(!mapIsLoaded)return;map.setZoom(map.getZoom()-1);})
$('.grid-scroller').bind('scroll',function(){clearTimeout(lazyloadItemInModalTimeout);lazyloadItemInModalTimeout=setTimeout(function(){$('.grid-scroller .lazyload-item').each(function(){objectTop=$(this).offset().top;if(empty(objectTop)){return;}
scrollTop=$('.grid-scroller').scrollTop();edge=scrollTop+windowHeight;if(objectTop==scrollTop){return;}
if(objectTop<edge*2){url=$(this).data('bg');$(this).prop('src',url);$(this).find('.bg').prop('src',url);$(this).css('background-color',"rgb(38,38,38)");$(this).removeClass('lazyload-item');}});},250);});$('.modal.item').bind('scroll',function(){clearTimeout(lazyloadItemInModalTimeout);lazyloadItemInModalTimeout=setTimeout(function(){$('.modal.item .lazyload').each(function(){objectTop=$(this).offset().top;if(empty(objectTop)){return;}
scrollTop=$('.modal.item .lazyload').scrollTop();edge=scrollTop+windowHeight;if(objectTop==scrollTop){return;}
if(objectTop<edge*2){$(this).prop('srcset',$(this).data('srcset'));$(this).removeClass('lazyload').addClass('lazyloaded_4');}});},250);});$('body').on('click','.view.list thead td',function(e){if(activeSort==$(this).data('sort')){if(activeSortOrder=='asc')activeSortOrder='desc';else if(activeSortOrder=='desc')activeSortOrder='asc';}
activeSort=$(this).data('sort');$('.sort-by select option[data-sort="'+activeSort+'"]').prop('selected',true);$('.sort-by select option[data-sort="'+activeSort+'"]');if(!empty(selected.data('asc'))){val=selected.data('asc');}
else{}
if(!empty(selected.data('desc'))){val=selected.data('desc');}
else{}
updateItemsToMatchFilter(true,false);});$('body').on('touchend','.modal.item .close',function(e){if(dragging)return;$(this).trigger('click');e.preventDefault();});$('body').on('click','.modal.item .people .person',function(){$('li[data-tab="people"]').trigger('click');})
$('body').on('click','.action-join-chat',function(){var eventProperties={};eventProperties.citySlug=activeItemSlug;amplitude.logEvent('action-join-chat',eventProperties);})
$('body').on('click','.action-buy-guide',function(){var eventProperties={};eventProperties.citySlug=activeItemSlug;amplitude.logEvent('action-buy-guide',eventProperties);})
$(window).bind('keydown',function(e){if(($('input:focus').length+$('textarea:focus').length)==0){if(e.keyCode===37){$('.modal-item-nav-left').trigger('click');}
else if(e.keyCode===39){$('.modal-item-nav-right').trigger('click');}}})
$('.modal-item-nav-left').bind('click',function(){if(!empty(activeItemSlug)){if($('.item.'+activeItemSlug).prev().length==0)return false;if($('.item.'+activeItemSlug).prev().hasClass('template')||$('.item.'+activeItemSlug).prev().hasClass('item-aux')||$('.item.'+activeItemSlug).prev().hasClass('no-items-found')){if($('.item.'+activeItemSlug).prev().prev().hasClass('template')||$('.item.'+activeItemSlug).prev().prev().hasClass('item-aux')||$('.item.'+activeItemSlug).prev().prev().hasClass('no-items-found')){if($('.item.'+activeItemSlug).prev().prev().prev().hasClass('template')||$('.item.'+activeItemSlug).prev().prev().hasClass('item-aux')||$('.item.'+activeItemSlug).prev().prev().hasClass('no-items-found')){$('.item.'+activeItemSlug).prev().prev().prev().prev().find('.click').trigger('click');}
else{$('.item.'+activeItemSlug).prev().prev().prev().find('.click').trigger('click');}}
else{$('.item.'+activeItemSlug).prev().prev().find('.click').trigger('click');}
return;}
else{$('.item.'+activeItemSlug).prev().find('.click').trigger('click');return;}
$('.item.'+activeItemSlug).prev().find('.click').trigger('click');}});$('.modal-item-nav-right').bind('click',function(){if(!empty(activeItemSlug)){if($('.item.'+activeItemSlug).next().length==0||$('.item.'+activeItemSlug).next().next().length==0||$('.item.'+activeItemSlug).next().next().next().length==0){if(activeView=='grid'){if(typeof($('.view.grid .item:not(.template):not(.item-aux)')!=='undefined')){processFilterReplyAndGenerateItems(($('.view.grid .item:not(.template):not(.item-aux)').length));}}
if(activeView=='list'){if(typeof($('.view.list tr:not(.template):not(.item-aux)')!=='undefined')){processFilterReplyAndGenerateItems(($('.view.list tr:not(.template):not(.item-aux)').length));}}}
if($('.item.'+activeItemSlug).next().hasClass('template')||$('.item.'+activeItemSlug).next().hasClass('item-aux')||$('.item.'+activeItemSlug).next().hasClass('no-items-found')){if($('.item.'+activeItemSlug).next().next().hasClass('template')||$('.item.'+activeItemSlug).next().next().hasClass('item-aux')||$('.item.'+activeItemSlug).next().next().hasClass('no-items-found')){if($('.item.'+activeItemSlug).next().next().next().hasClass('template')||$('.item.'+activeItemSlug).next().next().hasClass('item-aux')||$('.item.'+activeItemSlug).next().next().hasClass('no-items-found')){$('.item.'+activeItemSlug).next().next().next().next().find('.click').trigger('click');}
else{$('.item.'+activeItemSlug).next().next().next().find('.click').trigger('click');}}
else{$('.item.'+activeItemSlug).next().next().find('.click').trigger('click');}
return;}
else{$('.item.'+activeItemSlug).next().find('.click').trigger('click');return;}
$('.item.'+activeItemSlug).next().find('.click').trigger('click');}});});function loadMap(centerLongitude,centerLatitude,zoom,threeDimensional){consoleLog('loadMap',centerLongitude,centerLatitude,zoom,threeDimensional);startTime=performance.now();if(!isWebGLEnabled()){alert("âš ï¸ You have WebGL disabled in your browser, please enable it to load the map. Google \"enable WebGL\" to learn how. Nomad List does not work properly without WebGL enabled.");return;}
var latitude;var longitude;if(threeDimensional){$('html').removeClass('chart-view').removeClass('grid-view').removeClass('map-view').addClass('map-3d-view');}
else{$('html').removeClass('chart-view').removeClass('grid-view').removeClass('map-3d-view').addClass('map-view');}
if(activeSort==defaultSort){}
if(windowSize().width>700&&empty(startLatitude)){openFilters();}
else{closeFilters();}
if($('#map-div').length==0)return;if($('.mapboxgl-canary').length>0)return;showLoading();if(typeof map!=='object'&&!startedLoadingMaps){startedLoadingMaps=true;$('body').append("<link href='https://api.tiles.mapbox.com/mapbox-gl-js/v1.10.1/mapbox-gl.css' rel='stylesheet' />");window.loading_maps=$.getScript('https://api.tiles.mapbox.com/mapbox-gl-js/v1.10.1/mapbox-gl.js');window.loading_maps.done(function(){loadMap(centerLongitude,centerLatitude,zoom,threeDimensional);});return;}
if(typeof L==='undefined'&&!startedLoadingMaps){startedLoadingMaps=true;return;}
if(typeof mapboxgl==='undefined'){setTimeout(loadMap,100);return;}
if(mapIsLoaded&&typeof mapboxgl!=='undefined'){microEpochMapIsLoaded=performance.now();setTimeout(function(){map.resize();},100);return;}
if(!isset(zoom)||!is_numeric(zoom)){var zoom=1.5;}
else{var zoom=zoom;}
mapPitch=0;mapboxgl.accessToken=mapBoxKey;minZoom=1.5;if(windowSize().width<700){minZoom=0;}
longitude=userLongitude;latitude=userLatitude;consoleLog('centerLatitude',centerLatitude);consoleLog('centerLongitude',centerLongitude);if(!empty(centerLatitude)){longitude=centerLatitude;latitude=centerLongitude;}
else{latitude=50.4659772;longitude=4.850151;}
if(mapIsLoaded){map.resize();updateItemsToMatchFilter(true,true);map.setZoom(zoom);map.setCenter(new mapboxgl.LngLat(longitude,latitude));clusterMarkersMapbox();map.resize();setTimeout(function(){map.resize();},500);setTimeout(function(){map.resize();},1000);setTimeout(function(){map.resize();},2000);return;}
if($('html').hasClass('dark')){mapboxStyleURL=mapboxStyleDark;}
else{mapboxStyleURL=mapboxStyleLight;}
if($('.mapboxgl-canvas-container').length){return;}
map=new mapboxgl.Map({container:'map-div',style:mapboxStyleURL,center:new mapboxgl.LngLat(longitude,latitude),zoom:zoom,minZoom:minZoom,pitch:mapPitch,antialias:true});map.resize();if(threeDimensional){map.setPitch(45);}
else{map.setPitch(0);}
map.on('dragstart',function(e){});map.on('zoomstart',function(e){$('.map-marker').removeClass('show');});map.on('dragend',function(e){if(!mapIs3d&&(performance.now()-microEpochMapIsLoaded)>1000){refreshMarkersViewport();}});map.on('load',function(e){});map.on('zoomend',function(e){if(!mapIs3d&&(performance.now()-microEpochMapIsLoaded)>1000){clusterMarkersMapbox();refreshMarkersViewport();}
var x=0;while(x<20){$('html').removeClass('map-zoom-'+x);x++;}
$('html').addClass('map-zoom-'+Math.floor(map.getZoom()));});if($('html').hasClass('map-3d-view')){$('html').removeClass('grid-view').addClass('map-3d-view');}
else{$('html').removeClass('grid-view').addClass('map-view');}
openingModalWasCanceled=false;consoleLog('Set interval checkMapBoxIsLoaded');clearInterval(checkMapBoxIsLoaded);checkMapBoxIsLoaded=setInterval(function(){consoleLog('Checking if map is loaded...',typeof map,mapIsLoaded);if(typeof map==='object'&&mapIsLoaded){consoleLog('Loaded! clearInterval checkMapBoxIsLoaded')
clearInterval(checkMapBoxIsLoaded);}
if(typeof map==='object'&&!mapIsLoaded){consoleLog('Map object available!');if(map.loaded()){microEpochMapIsLoaded=performance.now();consoleLog('mapIsLoaded=true');mapIsLoaded=true;clearInterval(checkMapBoxIsLoaded);consoleLog('Map loaded!');map.resize();$(window).trigger('resize');setTimeout(function(){map.resize();$(window).trigger('resize');},500);setTimeout(function(){map.resize();$(window).trigger('resize');},1000);setTimeout(function(){map.resize();$(window).trigger('resize');},2000);setTimeout(function(){map.resize();$(window).trigger('resize');},3000);setTimeout(function(){map.resize();$(window).trigger('resize');},5000);setTimeout(function(){map.resize();$(window).trigger('resize');},7500);setTimeout(function(){map.resize();$(window).trigger('resize');},10000);if(!empty(itemsData)){consoleLog('C processFilterReplyAndGenerateItems');processFilterReplyAndGenerateItems();}
else{updateItemsToMatchFilter(true,true);}}}},100);mapExists=true;updateUserLocationOnMapIfMapExists();}
function load3dCountriesMap(){$('html').addClass('map-3d-countries');updateLegend();if(!empty(current3dDataMapID)){map.removeLayer(current3dDataMapID);map.removeLayer(current3dDataMapID+'_highlight');map.removeSource('highlight');current3dDataMapID='';}
previous3dCountriesDataMapID=current3dCountriesDataMapID;current3dCountriesDataMapID=Math.random().toString(36).substring(7);map.addSource(current3dCountriesDataMapID,{type:'geojson',data:'/geojson.php?key='+activeSort+'&order='+activeSortAttributeDefaultOrder});hideLoading();hideItemsLoading();if(!empty(previous3dCountriesDataMapID)){map.removeLayer(previous3dCountriesDataMapID);map.removeLayer(previous3dCountriesDataMapID+'_highlight');map.removeSource('highlight');previous3dCountriesDataMapID='';}
map.addLayer({"id":current3dCountriesDataMapID,"type":"fill-extrusion","source":current3dCountriesDataMapID,"paint":{"fill-extrusion-color":'#191a1a',"fill-extrusion-color":{type:'identity',property:'color'},"fill-extrusion-opacity":0.75,"fill-extrusion-base":0,"fill-extrusion-height":{type:'identity',property:'height'},'fill-extrusion-height-transition':{duration:2000,delay:0},},"filter":["==","$type","Polygon"]});map.addSource('highlight',{'type':'geojson','data':{'type':'FeatureCollection','features':[]}});map.addLayer({'id':current3dCountriesDataMapID+'_highlight','type':'fill-extrusion','source':'highlight','layout':{},'paint':{'fill-extrusion-color':'#ffffff','fill-extrusion-height':{type:'identity',property:'height'},'fill-extrusion-base':0,'fill-extrusion-opacity':1}});}
function drawHoodmaps(){canvas=document.getElementById("map-canvas");if(typeof canvas==='undefined')return;ctx=canvas.getContext("2d");if(typeof ctx==='undefined')return;zoom=map.getZoom();if(zoom<=9){$('html').removeClass('hoodmaps');ctx.clearRect(0,0,canvas.width,canvas.height);return;}
colors={};colors['hipsters']='#ffc924';colors['tourists']='#ff4742';colors['suits']='#42a5ff';colors['rich']='#2BDE73';colors['uni']='#1c5182';colors['normies']='#999';coordinateRange=1;if(Math.abs(hoodmapsLng-map.getCenter().lng)>(coordinateRange/4)||Math.abs(hoodmapsLat-map.getCenter().lat)>(coordinateRange/4)){hoodmapsLng=map.getCenter().lng;hoodmapsLat=map.getCenter().lat;url='https://hoodmaps.com/index.php?action=get_data&latitude='+map.getCenter().lat+'&longitude='+map.getCenter().lng;try{if(typeof hoodmapsAjax!=='undefined'){hoodmapsAjax.abort();}}
catch(e){}
setTimeout(function(){showLoading();},100);hoodmapsAjax=$.ajax({async:true,url:url,type:'GET',dataType:'json'}).done(function(reply){hideLoading();$('html').addClass('hoodmaps');if(reply.success==true||reply.success=='true'){hoodmapsLowZoomPaths=reply.oneDecimalLessAllUsersPaths;hoodmapsHighZoomPaths=reply.highZoomUsersPaths;hoodmapsPlaces=reply.cafes;drawHoodmaps();}}).fail(function(reply){});;return;}
$('html').addClass('hoodmaps');ctx.clearRect(0,0,canvas.width,canvas.height);width=$('.map_container').width();height=$('.map_container').height();$('.map-canvas').attr('width',width);$('.map-canvas').attr('height',height);ctx.width=width;ctx.height=height;ne_lng_bound=map.getBounds()._ne.lng;ne_lat_bound=map.getBounds()._ne.lat;sw_lng_bound=map.getBounds()._sw.lng;sw_lat_bound=map.getBounds()._sw.lat;y=0;brushMultiplierY=1.5;lat=map.getCenter().lat;lng=map.getCenter().lng;if(lat>53){brushMultiplierY=1.6;}
if(lat>57){brushMultiplierY=1.8;}
if(lat>63){brushMultiplierY=2.1;}
if(lat<-30){brushMultiplierY=1.1;}
if(lat<35){brushMultiplierY=1.1;}
if(lat<50){brushMultiplierY=1.4;}
zoom=map.getZoom();mapBounds=map.getBounds();if(typeof hoodmapsPlaces!='undefined'){for(var i=0 in hoodmapsPlaces){place=hoodmapsPlaces[i];lngLat=new mapboxgl.LngLat(place['longitude'],place['latitude']);if(place['latitude']<(bounds._ne.lat+1)&&place['longitude']<(bounds._ne.lng+5)&&place['latitude']>(bounds._sw.lat-1)&&place['longitude']>(bounds._sw.lng-5)){}
else{continue;}
point=map.project(lngLat);x=point.x;y=point.y;labelHtml='';dataUrl='';if(!empty(place['url'])){dataUrl='data-url="'+place['url']+'?ref=nomadlist"';}
if(zoom>14)labelHtml='<div '+dataUrl+' class="marker marker-label-solid" style="left:'+Math.round(x)+'px;top:'+(Math.round(y)+10)+'px;">'+place['name']+'</div>';emoji='ðŸ“';$('.map-markers').append('<div class="marker marker-place" style="left:'+Math.round(x)+'px;top:'+Math.round(y)+'px;">'+emoji+'</div>'
+
labelHtml);}}
for(var i=0 in hoodmapsLowZoomPaths){path=hoodmapsLowZoomPaths[i];if(path['category']=='void')continue;if(empty(path))continue;if(isNaN(path['longitude'])||isNaN(path['latitude'])||(empty(path['longitude'])&&path['longitude']!=0)||(empty(path['latitude'])&&path['latitude']!=0)){continue;}
lngLat=new mapboxgl.LngLat(path['longitude'],path['latitude']);if(path['latitude']<(bounds._ne.lat+1)&&path['longitude']<(bounds._ne.lng+5)&&path['latitude']>(bounds._sw.lat-1)&&path['longitude']>(bounds._sw.lng-5)){}
else{continue;}
point=map.project(lngLat);ctx.fillStyle=colors[path['category']];ctx.strokeStyle=colors[path['category']];if(colors[path['category']]=='skip')continue;thisBrushSize=Math.pow(2,zoom+1)/125;ctx.lineWidth=1;x=point.x;y=point.y;ctx.fillRect(x-(thisBrushSize/2),y-(thisBrushSize/2),thisBrushSize,thisBrushSize*brushMultiplierY);y++;}
y=0;for(var i=0 in hoodmapsHighZoomPaths){path=hoodmapsHighZoomPaths[i];if(path['category']=='void')continue;if(empty(path))continue;if(isNaN(path['longitude'])||isNaN(path['latitude'])||(empty(path['longitude'])&&path['longitude']!=0)||(empty(path['latitude'])&&path['latitude']!=0))continue;lngLat=new mapboxgl.LngLat(path['longitude'],path['latitude']);if(path['latitude']<(bounds._ne.lat+1)&&path['longitude']<(bounds._ne.lng+5)&&path['latitude']>(bounds._sw.lat-1)&&path['longitude']>(bounds._sw.lng-5)){}
else{continue;}
point=map.project(lngLat);ctx.fillStyle=colors[path['category']];ctx.strokeStyle=colors[path['category']];if(colors[path['category']]=='skip')continue;ctx.lineWidth=1;x=point.x;y=point.y;thisBrushSize=Math.pow(2,zoom+1)/1250;ctx.fillRect(x-(thisBrushSize/2),y-(thisBrushSize/2),thisBrushSize,thisBrushSize*brushMultiplierY);y++;}}
function refreshMarkersViewport(){if(!mapIsLoaded)return;if(mapIs3d)return;mapWidth=$('#map-div').width();mapHeight=$('#map-div').height();if(doNotClusterMarkers&&onlyClusterLabels){$('.map-marker:not(.map-marker-label)').removeClass('show');}
else{$('.map-marker').removeClass('show');}
var mapMarkersClusteredInViewportCount=0;for(var i=0;i<mapMarkers.length;i++){marker=mapMarkers[i];if(empty(marker['short_slug'])){consoleLog('short_slug markers are empty, breaking!');break;}
p=map.project(new mapboxgl.LngLat(marker['longitude'],marker['latitude']));markerX=p.x;markerY=p.y;if(p.x>0&&p.x<mapWidth&&p.y>0&&p.y<mapHeight){if($('.map-marker.'+marker['short_slug']).hasClass('clustered')){if(doNotClusterMarkers&&onlyClusterLabels){$('.map-marker.'+marker['short_slug']+':not(.map-marker-label)').addClass('show');}
else{$('.map-marker.'+marker['short_slug']).addClass('show');}
mapMarkersClusteredInViewportCount++;}}}}
function clusterMarkersMapbox(){consoleLog('clusterMarkersMapbox');if(!mapIsLoaded)return;if(mapIs3d)return;doNotClusterMarkers=false;if(typeof(data['filters'])!=='undefined'){if(typeof data['filters']['country']!=='undefined'){doNotClusterMarkers=true;}}
if(mapMarkers.length<50){doNotClusterMarkers=true;onlyClusterLabels=false;}
if(pageType=='country')doNotClusterMarkers=true;if(map.getZoom()>5){doNotClusterMarkers=true;onlyClusterLabels=true;}
if(map.getZoom()>7){doNotClusterMarkers=true;onlyClusterLabels=false;}
if(doNotClusterMarkers&&!onlyClusterLabels){$('.map-marker').removeClass('clustered').removeClass('show');}
else{$('.map-marker').removeClass('show');$('.map-marker-data').addClass('clustered');}
mapWidth=$('#map-div').width();mapHeight=$('#map-div').height();mapWidthInLat=360;mapHeightInLng=180;mapStartLat=90;mapEndLat=-90;mapStartLng=-180;mapEndLng=180;clusterWidth=50;clusterHeight=50;clusterAsLatLngMin=map.unproject([0,0]);clusterAsLatLngMax=map.unproject([clusterWidth,clusterHeight]);clusterSizeInLat=Math.abs(clusterAsLatLngMax['lng']-clusterAsLatLngMin['lng']);clusterSizeInLng=Math.abs(clusterAsLatLngMax['lat']-clusterAsLatLngMin['lat'])*4;clustersHorizontal=mapWidthInLat/clusterSizeInLat;clustersVertical=mapHeightInLng/clusterSizeInLng;markersInClusterCount=[];mapMarkersClustered=[];if(doNotClusterMarkers&&!onlyClusterLabels){$('.map-marker').addClass('clustered').addClass('show');return;}
else if(doNotClusterMarkers&&onlyClusterLabels){$('.map-marker:not(.map-marker-label)').addClass('clustered').addClass('show');$('.map-marker.map-marker-label').removeClass('clustered').removeClass('show');}
else{$('.map-marker').removeClass('clustered').removeClass('show');}
markersInClusterCount=[];markersInClusters=[];var mapMarkersClusteredCount=0;var mapMarkersClusteredShowingCount=0;p1=map.unproject([0,0]);p2=map.unproject([$('.map').width(),$('.map').height()]);mapViewportLatMin=p1['lat'];mapViewportLngMin=p1['lng'];mapViewportLatMax=p2['lat'];mapViewportLngMax=p2['lng'];for(var i=0;i<mapMarkers.length;i++){marker=mapMarkers[i];clusterX=Math.round(normalize(parseInt(marker['latitude'])+(clusterSizeInLat/2),mapStartLat,mapEndLat)*clustersHorizontal);clusterY=Math.round(normalize(parseInt(marker['longitude'])+(clusterSizeInLng/2),mapStartLng,mapEndLng)*clustersVertical);if(typeof markersInClusterCount[clusterX+','+clusterY]==='undefined')markersInClusterCount[clusterX+','+clusterY]=0;markersInClusterCount[clusterX+','+clusterY]++;if(markersInClusterCount[clusterX+','+clusterY]>1){continue;}
if(parseInt(marker['latitude'])<mapViewportLatMin&&parseInt(marker['latitude'])>mapViewportLatMax&&parseInt(marker['longitude'])>mapViewportLngMin&&parseInt(marker['longitude'])<mapViewportLngMax){}
else{if(doNotClusterMarkers&&onlyClusterLabels){$('.map-marker.'+marker['short_slug']+'.map-marker-label').addClass('clustered');}
else{$('.map-marker.'+marker['short_slug']).addClass('clustered');}
mapMarkersClusteredCount++;continue;}
if(doNotClusterMarkers&&onlyClusterLabels){$('.map-marker.'+marker['short_slug']+'.map-marker-label').addClass('clustered').addClass('show');}
else{$('.map-marker.'+marker['short_slug']).addClass('clustered').addClass('show');}
mapMarkersClusteredShowingCount++;mapMarkersClusteredCount++;}
if(((performance.now()-startTime)/1000)<10000){}
endTime=performance.now();}
function drawMarkersMapboxMapbox(){return;if(!activeView=='map'){return;}
if(typeof mapboxgl==='undefined'){return;}
$('.map-marker').hide();drawHoodmaps();setSelfMapMarker();mapMarkersInBounds=[];mapBounds=map.getBounds();for(var i=0;i<mapMarkers.length;i++){marker=mapMarkers[i];latitude=marker['latitude'];longitude=marker['longitude'];custom=marker['custom'];if(typeof custom==='undefined')continue;if(latitude<(map.getBounds()._ne.lat+1)&&longitude<(map.getBounds()._ne.lng+5)&&latitude>(map.getBounds()._sw.lat-1)&&longitude>(map.getBounds()._sw.lng-5)){mapMarkersInBounds.push(marker);}
else{continue;}}
mapMarkersInBoundsClustered=mapMarkersInBoundsClustered.reverse();for(var i=0;i<mapMarkersInBoundsClustered.length;i++){marker=mapMarkersInBoundsClustered[i];addMarkerToMapboxMap(marker);}
hideLoading();hideItemsLoading();return true;}
function addMarkerOnMapForItem(long_slug,short_slug,name,state_code,country,latitude,longitude,score,image_last_mod,custom,type){marker={};marker['long_slug']=long_slug;marker['short_slug']=short_slug;marker['name']=name;marker['state_code']=state_code;marker['country']=country;marker['latitude']=latitude;marker['longitude']=longitude;marker['score']=score;marker['custom']=custom;marker['type']=type;markerHtml='';latitude=marker['latitude'];longitude=marker['longitude'];if(empty(latitude)||empty(longitude)){return;}
short_slug=marker['short_slug'];long_slug=marker['long_slug'];type=marker['type'];custom=marker['custom'];name=marker['name'];if(marker['state_code']){name=marker['name']+', '+marker['state_code'];}
country=marker['country'];score=marker['score'];lngLat=new mapboxgl.LngLat(longitude,latitude);pos=map.project(lngLat);zIndex=Math.round(score/5*100);if(zIndex<0)zIndex=0;normalizedScore=((score/5*100));normalizedScore=Math.round(normalizedScore/10)*10;if(normalizedScore<0)normalizedScore=0;if(normalizedScore>100)normalizedScore=100;if(isNaN(normalizedScore))normalizedScore='';if(score>=4){markerImageSize=40;}
else if(score>=3){markerImageSize=30;}
else{markerImageSize=20;}
if(type=='users_now'||type=='users_been'){avatarsUserIds=JSON.parse(custom);avatarImgString='';zoom=map.getZoom();zIndex=Math.round(180-(latitude+90));if($('html').hasClass('map-3d-view')){mapIs3d=true;}
else{mapIs3d=false;}
zoomMultiplier=zoom;if(zoomMultiplier<1)zoomMultiplier=1;for(b=0;b<avatarsUserIds.length;b++){avatar=avatarsUserIds[b];if(zoom<5||mapIs3d){if(mapIs3d){avatarImgString=avatarImgString+'<div class="avatar" style="z-index:'+zIndex+';position:absolute;left:0px;top:'+(-4*b^(zoomMultiplier))+'px;background-image:url(\'https://nomadlist.com/cdn-cgi/image/format=auto,fit=cover,width=100,height=100,quality='+imgQ+'/https://nomadlist.com/assets/img/users/'+avatar+'.jpg\')"></div>';}
else{avatarImgString=avatarImgString+'<div class="avatar" style="z-index:'+zIndex+';position:absolute;left:'+(-0.5*b)+'px;top:'+(-4*b)+'px;background-image:url(\'https://nomadlist.com/cdn-cgi/image/format=auto,fit=cover,width=100,height=100,quality='+imgQ+'/https://nomadlist.com/assets/img/users/'+avatar+'.jpg\')"></div>';}}
else{avatarImgString=avatarImgString+'<div class="avatar" style="background-image:url(\'https://nomadlist.com/cdn-cgi/image/format=auto,fit=cover,width=100,height=100,quality='+imgQ+'/https://nomadlist.com/assets/img/users/'+avatar+'.jpg\')"></div>';}}
custom=avatarImgString;labelHtml='';labelHtml='<div data-slug="'+short_slug+'" data-slug-long="'+long_slug+'" class="map-marker map-marker-label '+short_slug+'  score-'+normalizedScore+'"><img src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=cover,width=100,height=100,quality='+imgQ+'/https://nomadlist.com/assets/img/places/'+long_slug+'.jpg?'+image_last_mod+'" /> '+name+'</div>';extraStyles='';if(custom.length>3)extraStyles='border-radius:21px;';markerHtml='<div data-slug="'+short_slug+'" data-slug-long="'+long_slug+'" class="map-marker map-marker-avatar '+short_slug+' " style="z-index:'+(zIndex+100)+';'+extraStyles+'">'+
custom
+'</div>';}
else{labelHtml='';labelHtml='<div data-slug="'+short_slug+'" class="map-marker map-marker-label '+short_slug+'  score-'+normalizedScore+'" ><img src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=cover,width=100,height=100,quality='+imgQ+'/https://nomadlist.com/assets/img/places/'+long_slug+'.jpg?'+image_last_mod+'" /> '+name+'</div>';extraStyles='';if(custom.length>3)extraStyles='border-radius:21px;';markerHtml='<div data-slug="'+short_slug+'" data-slug-long="'+long_slug+'" class="map-marker map-marker-data score-'+normalizedScore+' '+short_slug+' " style="'+extraStyles+'">'+custom+'</div>'+labelHtml;}
var el=document.createElement('div');el.innerHTML=markerHtml;el.className='marker';el.style.zIndex=zIndex+100;mapboxMarker=new mapboxgl.Marker(el).setLngLat([marker['longitude'],marker['latitude']]).addTo(map);mapboxMarkers.push(mapboxMarker);mapMarkers.push(marker);}
function placeAuxItems(){return;}
function localize(){}
function urlencode(str){str=str_replace('-',' ',makeUrlSlug(str));str=str.trim();str=(str+'').toString();return encodeURIComponent(str).replace(/!/g,'%21').replace(/'/g,'%27').replace(/\(/g,'%28').replace(/\)/g,'%29').replace(/\*/g,'%2A').replace(/%20/g,'+');}
function urldecode(str){return decodeURIComponent((str+'').replace(/%(?![\da-f]{2})/gi,function(){return '%25';}).replace(/\+/g,'%20').replace(/%20/g,' '));}
function makeFilters(){consoleLog('====');consoleLog('makeFilters');consoleLog('====');var filters={};alreadyAddedFilters=[];var filterI=0;$('.filters .filter select.choices.active').each(function(){filter={};if(isset($(this).find(':selected').data('filter-target')))filter['target']=$(this).find(':selected').data('filter-target');if(isset($(this).find(':selected').data('filter-type')))filter['type']=$(this).find(':selected').data('filter-type');if(isset($(this).find(':selected').data('filter-value')))filter['value']=$(this).find(':selected').data('filter-value');if(isset($(this).find(':selected').data('filter-min')))filter['min']=$(this).find(':selected').data('filter-min');if(isset($(this).find(':selected').data('filter-max')))filter['max']=$(this).find(':selected').data('filter-max');filters[$(this).find(':selected').data('filter-target')+'_'+filterI]=filter;filterI++;});var filterI=0;$('.filters .filter').each(function(){$(this).find('.choice.active').each(function(){filter={};if(isset($(this).data('filter-target')))filter['target']=$(this).data('filter-target');if(isset($(this).data('filter-type')))filter['type']=$(this).data('filter-type');if(isset($(this).data('filter-value')))filter['value']=$(this).data('filter-value');if(isset($(this).data('filter-min')))filter['min']=$(this).data('filter-min');if(isset($(this).data('filter-max')))filter['max']=$(this).data('filter-max');if(getFlightPricesClientSide&&filter['target']=='flight_price_usd'){return;}
if(filter['target']=='month'){return;}
if(filter['target']=='in_winter'){if($('.filters .filter.temperature .choice.active').length==0&&$('.filters .filter.humidity .choice.active').length==0&&$('.filters .filter.users_count .choice.active').length==0){$('.filters .filter.temperature .choice').eq($('.filters .filter.temperature .choice').length-1).addClass('active');}
filters['in_winter']={};filters['in_winter']['filters']=[];filters['in_winter']['type']='multiple-choice-and';if($('.filters .filter.temperature .choice.active').length==1){unifiedMin=$('.filters .filter.temperature .choice.active').data('filter-min');unifiedMax=$('.filters .filter.temperature .choice.active').data('filter-max');}
else if($('.filters .filter.temperature .choice.active').length>1){unifiedMin=999;unifiedMax=-999;temperatureFilterI=0;while(temperatureFilterI<$('.filters .filter.temperature .choice.active').length){if($('.filters .filter.temperature .choice.active').eq(temperatureFilterI).data('filter-min')<unifiedMin){unifiedMin=$('.filters .filter.temperature .choice.active').eq(temperatureFilterI).data('filter-min');}
if($('.filters .filter.temperature .choice.active').eq(temperatureFilterI).data('filter-max')>unifiedMax){unifiedMax=$('.filters .filter.temperature .choice.active').eq(temperatureFilterI).data('filter-max');}
if(empty($('.filters .filter.temperature .choice.active').eq(temperatureFilterI).data('filter-max'))){unifiedMax=999;}
if(empty($('.filters .filter.temperature .choice.active').eq(temperatureFilterI).data('filter-min'))){unifiedMin=-999;}
temperatureFilterI++;}}
monthsToDo=[12,1,2];for(var monthsToDoI=0;monthsToDoI<monthsToDo.length;monthsToDoI++){monthI=monthsToDo[monthsToDoI];var monthIString=monthI;if(monthI<10){monthIString='0'+monthI;}
if($('.filters .filter.temperature .choice.active').length>0){filter={};filter['target']='climate_temperatureC_feels_like_month_'+monthIString;filter['type']=$('.filters .filter.temperature .choice.active').eq(0).data('filter-type');filter['min']=unifiedMin;filter['max']=unifiedMax;filters['in_winter']['filters'].push(filter);}
if($('.filters .filter.air_quality .choice.active').length>0){filter={};filter['target']='air_quality_month_'+monthIString;filter['type']=$('.filters .filter.air_quality .choice.active').eq(0).data('filter-type');filter['min']=$('.filters .filter.air_quality .choice.active').eq(0).data('filter-min');;filter['max']=$('.filters .filter.humidity .choice.active').eq(0).data('filter-max');filters['in_winter']['filters'].push(filter);}
if($('.filters .filter.humidity .choice.active').length>0){filter={};filter['target']='climate_humidity_month_'+monthIString;filter['type']=$('.filters .filter.humidity .choice.active').eq(0).data('filter-type');filter['min']=$('.filters .filter.humidity .choice.active').eq(0).data('filter-min');filter['max']=$('.filters .filter.humidity .choice.active').eq(0).data('filter-max');filters['in_winter']['filters'].push(filter);}
if($('.filters .filter.users_count .choice.active').length>0){filter={};filter['target']='users_month_'+monthIString+'_count';filter['type']=$('.filters .filter.users_count .choice.active').eq(0).data('filter-type');filter['min']=$('.filters .filter.users_count .choice.active').eq(0).data('filter-min');filter['max']=$('.filters .filter.users_count .choice.active').eq(0).data('filter-max');filters['in_winter']['filters'].push(filter);}
filterI++;}
return;}
if(filter['target']=='all_year'){if($('.filters .filter.temperature .choice.active').length==0&&$('.filters .filter.humidity .choice.active').length==0&&$('.filters .filter.users_count .choice.active').length==0){$('.filters .filter.temperature .choice').eq($('.filters .filter.temperature .choice').length-1).addClass('active');}
filters['all_year']={};filters['all_year']['filters']=[];filters['all_year']['type']='multiple-choice-and';monthI=1;if($('.filters .filter.temperature .choice.active').length==1){unifiedMin=$('.filters .filter.temperature .choice.active').data('filter-min');unifiedMax=$('.filters .filter.temperature .choice.active').data('filter-max');}
else if($('.filters .filter.temperature .choice.active').length>1){unifiedMin=999;unifiedMax=-999;temperatureFilterI=0;while(temperatureFilterI<$('.filters .filter.temperature .choice.active').length){if($('.filters .filter.temperature .choice.active').eq(temperatureFilterI).data('filter-min')<unifiedMin){unifiedMin=$('.filters .filter.temperature .choice.active').eq(temperatureFilterI).data('filter-min');}
if($('.filters .filter.temperature .choice.active').eq(temperatureFilterI).data('filter-max')>unifiedMax){unifiedMax=$('.filters .filter.temperature .choice.active').eq(temperatureFilterI).data('filter-max');}
if(!isset($('.filters .filter.temperature .choice.active').eq(temperatureFilterI).data('filter-max'))){unifiedMax=999;}
if(!isset($('.filters .filter.temperature .choice.active').eq(temperatureFilterI).data('filter-min'))){unifiedMin=-999;}
temperatureFilterI++;}}
while(monthI<=12){monthIString=monthI;if(monthI<10){monthIString='0'+monthI;}
if($('.filters .filter.temperature .choice.active').length>0){filter={};filter['target']='climate_temperatureC_feels_like_month_'+monthIString;filter['type']=$('.filters .filter.temperature .choice.active').eq(0).data('filter-type');filter['min']=unifiedMin;filter['max']=unifiedMax;filters['all_year']['filters'].push(filter);}
if($('.filters .filter.air_quality .choice.active').length>0){filter={};filter['target']='air_quality_month_'+monthIString;filter['type']=$('.filters .filter.air_quality .choice.active').eq(0).data('filter-type');filter['min']=$('.filters .filter.air_quality .choice.active').eq(0).data('filter-min');;filter['max']=$('.filters .filter.air_quality .choice.active').eq(0).data('filter-max');;filters['all_year']['filters'].push(filter);}
if($('.filters .filter.humidity .choice.active').length>0){filter={};filter['target']='climate_humidity_month_'+monthIString;filter['type']=$('.filters .filter.humidity .choice.active').eq(0).data('filter-type');filter['min']=$('.filters .filter.humidity .choice.active').eq(0).data('filter-min');filter['max']=$('.filters .filter.humidity .choice.active').eq(0).data('filter-max');filters['all_year']['filters'].push(filter);}
if($('.filters .filter.users_count .choice.active').length>0){filter={};filter['target']='users_month_'+monthIString+'_count';filter['type']=$('.filters .filter.users_count .choice.active').eq(0).data('filter-type');filter['min']=$('.filters .filter.users_count .choice.active').eq(0).data('filter-min');filter['max']=$('.filters .filter.users_count .choice.active').eq(0).data('filter-max');filters['all_year']['filters'].push(filter);}
filterI++;monthI++;}
return;}
if(filter['target']=='air_quality'){if($('.filters .filter.month .choice.active').length>0){filter['target']='air_quality';}
if($('.filters .filter.month .choice.active').length==0){filter['target']='air_quality_now';}}
var filterTarget=$(this).data('filter-target');if($(this).data('filter-multiple-choice')==true||$(this).data('filter-multiple-choice')=='true'){if($(this).data('filter-multiple-choice-type')=='and'){if(typeof filters[filterTarget]==='undefined'){filters[filterTarget]={};filters[filterTarget]['target']=filterTarget;filters[filterTarget]['type']='multiple-choice-and';filters[filterTarget]['filters']=[];}
consoleLog('1 filters[$(this).data(filter-target)][filters]',filters);consoleLog('1 filters[$(this).data(filter-target)][filters]',filterTarget);consoleLog('1 typeof filters[$(this).data(filter-target)]',typeof filters[filterTarget]);filters[filterTarget]['filters'].push(filter);}
else if($(this).data('filter-multiple-choice-type')=='or'){if(typeof filters[filterTarget]==='undefined'){filters[filterTarget]={};filters[filterTarget]['target']=filterTarget;filters[filterTarget]['type']='multiple-choice-or';filters[filterTarget]['filters']=[];}
consoleLog('2 filters[$(this).data(filter-target)][filters]',filters);consoleLog('2 filters[$(this).data(filter-target)][filters]',filterTarget);consoleLog('2 typeof filters[$(this).data(filter-target)]',typeof filters[filterTarget]);filters[filterTarget]['filters'].push(filter);}}
else{if(typeof filters[filterTarget]==='undefined'){filters[filterTarget]=filter;}
else{filters['filter_'+filterI]=filter;}}});filterI++;});y=0;if(typeof filters['pollen_free']!=='undefined'){if($('.filters .filter.month .choice.active').length>0){monthSelected=$('.filters .filter.month .choice.active').data('filter-value');$('.filters .filter.month .choice.active').removeClass('active');$('.filters .filter.month .choice[data-filter-value="'+monthSelected+'"]').addClass('active');}
else{monthSelected=date('m')}
filters['pollen_free_month_'+monthSelected]=filters['pollen_free'];filters['pollen_free_month_'+monthSelected]['target']='pollen_free_month_'+monthSelected;delete filters['pollen_free'];if(typeof filters['month']!=='undefined'){delete filters['month'];}}
if(typeof filters['temperatureC']!=='undefined'&&$('.filters .filter .choice[data-filter-target="all_year"].active').length>0){newFilters=Object.assign({},filters)
delete newFilters['temperatureC'];filters=Object.assign({},newFilters)}
if(typeof filters['temperatureC_feels_like']!=='undefined'&&$('.filters .filter .choice[data-filter-target="all_year"].active').length>0){newFilters=Object.assign({},filters)
delete newFilters['temperatureC_feels_like'];filters=Object.assign({},newFilters)}
if(typeof filters['humidity']!=='undefined'&&$('.filters .filter .choice[data-filter-target="all_year"].active').length>0){newFilters=Object.assign({},filters)
delete newFilters['humidity'];filters=Object.assign({},newFilters)}
if(typeof filters['air_quality_now']!=='undefined'&&$('.filters .filter .choice[data-filter-target="all_year"].active').length>0){newFilters=Object.assign({},filters)
delete newFilters['air_quality_now'];filters=Object.assign({},newFilters)}
if(typeof filters['users_now_count']!=='undefined'&&$('.filters .filter .choice[data-filter-target="all_year"].active').length>0){newFilters=Object.assign({},filters)
delete newFilters['users_now_count'];filters=Object.assign({},newFilters)}
if(typeof filters['temperatureC']!=='undefined'&&$('.filters .filter .choice[data-filter-target="in_winter"].active').length>0){newFilters=Object.assign({},filters)
delete newFilters['temperatureC'];filters=Object.assign({},newFilters)}
if(typeof filters['temperatureC_feels_like']!=='undefined'&&$('.filters .filter .choice[data-filter-target="in_winter"].active').length>0){newFilters=Object.assign({},filters)
delete newFilters['temperatureC_feels_like'];filters=Object.assign({},newFilters)}
if(typeof filters['humidity']!=='undefined'&&$('.filters .filter .choice[data-filter-target="in_winter"].active').length>0){newFilters=Object.assign({},filters)
delete newFilters['humidity'];filters=Object.assign({},newFilters)}
if(typeof filters['air_quality_now']!=='undefined'&&$('.filters .filter .choice[data-filter-target="in_winter"].active').length>0){newFilters=Object.assign({},filters)
delete newFilters['air_quality_now'];filters=Object.assign({},newFilters)}
if(typeof filters['users_now_count']!=='undefined'&&$('.filters .filter .choice[data-filter-target="in_winter"].active').length>0){newFilters=Object.assign({},filters)
delete newFilters['users_now_count'];filters=Object.assign({},newFilters)}
if(typeof filters['temperatureC']!=='undefined'&&$('.filters .filter .choice[data-filter-target="month"].active').length>0){newFilters=Object.assign({},filters)
delete newFilters['temperatureC'];$('.filters .filter.month').find('.choice.active').each(function(){filter={};if(!empty($(this).data('filter-target')))filter['target']=$(this).data('filter-target');if(!empty($(this).data('filter-type')))filter['type']=$(this).data('filter-type');if(!empty($(this).data('filter-value')))filter['value']=$(this).data('filter-value');if(!empty($(this).data('filter-min')))filter['min']=$(this).data('filter-min');if(!empty($(this).data('filter-max')))filter['max']=$(this).data('filter-max');monthSelected=filter['value'];newTarget='climate_temperatureC'+'_month_'+monthSelected;newTemperatureFilterWrapper={};newTemperatureFilterWrapper['target']=newTarget;newTemperatureFilterWrapper['type']='multiple-choice-or';newTemperatureFilterWrapper['filters']=[];for(i=0;i<filters['temperatureC']['filters'].length;i++){newTemperatureFilter={};newTemperatureFilter=Object.assign({},filters['temperatureC']['filters'][i])
newTemperatureFilter['target']=newTarget;newTemperatureFilterWrapper['filters'].push(newTemperatureFilter);newFilters['climate_temperatureC'+monthSelected]=Object.assign({},newTemperatureFilterWrapper)}
y++;});filters=Object.assign({},newFilters)}
if(typeof filters['humidity']!=='undefined'&&$('.filters .filter .choice[data-filter-target="month"].active').length>0){filters['humidity']['target']='climate_humidity'+'_month_'+monthSelected;}
if(typeof filters['air_quality_now']!=='undefined'&&$('.filters .filter .choice[data-filter-target="month"].active').length>0){filters['air_quality_now']['target']='air_quality'+'_month_'+monthSelected;}
if(typeof filters['temperatureC_feels_like']!=='undefined'&&$('.filters .filter .choice[data-filter-target="month"].active').length>0){newFilters=Object.assign({},filters)
delete newFilters['climate_temperatureC_feels_like'];$('.filters .filter.month').find('.choice.active').each(function(){filter={};if(!empty($(this).data('filter-target')))filter['target']=$(this).data('filter-target');if(!empty($(this).data('filter-type')))filter['type']=$(this).data('filter-type');if(!empty($(this).data('filter-value')))filter['value']=$(this).data('filter-value');if(!empty($(this).data('filter-min')))filter['min']=$(this).data('filter-min');if(!empty($(this).data('filter-max')))filter['max']=$(this).data('filter-max');monthSelected=filter['value'];newTarget='climate_temperatureC_feels_like'+'_month_'+monthSelected;newTemperatureFilterWrapper={};newTemperatureFilterWrapper['target']=newTarget;newTemperatureFilterWrapper['type']='multiple-choice-or';newTemperatureFilterWrapper['filters']=[];for(i=0;i<filters['temperatureC_feels_like']['filters'].length;i++){newTemperatureFilter={};newTemperatureFilter=Object.assign({},filters['temperatureC_feels_like']['filters'][i])
newTemperatureFilter['target']=newTarget;newTemperatureFilterWrapper['filters'].push(newTemperatureFilter);newFilters['climate_temperatureC_feels_like'+monthSelected]=Object.assign({},newTemperatureFilterWrapper)}
y++;});filters=Object.assign({},newFilters)}
if(!empty(activeSearch)){filter={};filter['target']='search';filter['type']='all-words-match';filter['value']=activeSearch;filters[filter['target']]=filter;}
consoleLog('filters',filters);return filters;}
var filteredItemSlugs;if(generateItemsInJS&&empty(window.location.hash)){onFirstPageLoadGetItemsDataTimeout=setTimeout(function(){if($(window).scrollTop()>window.innerHeight){$('.loading_spinner_2018.infinity-scroll').addClass('show');if(empty(itemsData)){onFirstPageLoadGetItemsData();}}},10000);}
function onFirstPageLoadGetItemsData(callback){consoleLog('onFirstPageLoadGetItemsData');if(activeView=='map')return;if(onFirstPageLoadGetItemsDataStarted)return;onFirstPageLoadGetItemsDataStarted=true;$('.loading_spinner_2018.infinity-scroll').addClass('show');data={};data['view']=activeView;data['filters']=makeFilters();if(activeView=='chart'){data['return']=[];data['return']=data['return'].concat(defaultAttributesDisplayedInChartView);data['return'].push(activeChartX);data['return'].push(activeChartY);}
else if(activeView=='map'){data['return']=[];data['return']=data['return'].concat(defaultAttributesDisplayedInMapView);data['return'].push(activeSort);}
else{data['return']=defaultAttributesToAlwaysLoad;data['return']=data['return'].concat(defaultAttributesDisplayedInItemBox);data['return']=data['return'].concat(defaultAttributesDisplayedInItemAttributesBox);data['return'].push(activeSort);data['return'].push(activeChartX);data['return'].push(activeSortAttributeToShow);}
data['sort']=activeSort;data['order']=activeSortOrder;data['item_type']=itemType;$.ajax({async:true,url:'/api/v2/filter/all?onFirstPageLoadGetItemsData&php8',type:'POST',dataType:'json',data:{data:messUpString((JSON.stringify(data).split("").join(""))+'Gt8SkZ31e6'+(md5(JSON.stringify(data)+''+(Math.round(Math.floor(new Date().getTime()/1000)/100000))+'nomadlist')))}}).done(function(reply){if(typeof(reply)==='undefined'){alert("Something went wrong with the server, try filtering again. If it still doesn't work, let me know in the feedback box in the bottom right of the screen, thanks!");return;}
if(!reply.success){alert(reply.message);return;}
if(empty(defaultItemsData)&&empty(data['filters'])){defaultItemsData=reply;}
if(empty(itemsData)){itemsData=reply;updateActiveFiltersBox();}
if(typeof callback==='function'){callback();}});}
function updateHash(){if($('html').hasClass('flights'))return;hash='';if(activeView!=defaultView){key='view';value=activeView;hash=hash+
urlencode(key.toLowerCase())+
'='+
urlencode(value)+
'&';}
trackEvent('pageview',window.location.href);trackEvent('visit',window.location.href);trackEvent('action',window.location.href);}
function makeFiltersOnPageState(){filtersOnPageState=[];$('.filters .filter .choice.active').each(function(){key=$(this).data('filter-target');if($(this).data('original-filter-target')){key=$(this).data('original-filter-target');}
value=$(this).text();if(!empty($(this).find('span').data('original-text'))){value=$(this).find('span').data('original-text');}
if(key.indexOf('timezone')>-1){value=value;}
else{value=makeUrlSlug(value);}
filtersOnPageState.push({'key':key,'value':value});});$('.filters .filter select.choices.active').each(function(){key=$(this).find(':selected').data('filter-target');value=$(this).find(':selected').data('filter-value');value=makeUrlSlug(value);filtersOnPageState.push({'key':key,'value':value});});key='sort';value=activeSort;filtersOnPageState.push({'key':key,'value':value});key='order';value=activeSortOrder;filtersOnPageState.push({'key':key,'value':value});if(!empty(activeSearch)){key='search';value=activeSearch;filtersOnPageState.push({'key':key,'value':value});}
return filtersOnPageState;}
function updateActiveFiltersBox(){html='';$('.filters .filter .choice.active').each(function(){thisHtml=$(this).html();if($(this).data('add-active-filter-text')){thisHtml=$(this).data('add-active-filter-text')+thisHtml;}
tooltipText='';if($(this).data('tooltip')){tooltipText='class="tooltip-set" data-tooltip="'+$(this).data('tooltip')+'"';}
else if($(this).parent().data('tooltip')){tooltipText='class="tooltip-set" data-tooltip="'+$(this).parent().data('tooltip')+'"';}
html=html+'<div class="active-filter tooltip-set" '+tooltipText+' data-text="'+$(this).text()+'" data-filter-target="'+$(this).data('filter-target')+'">'+thisHtml+'<img class="action-remove-this-filter" src="/assets/times-circle.svg">'+'</div>';consoleLog('<div class="active-filter tooltip-set" '+tooltipText+' data-text="'+$(this).text()+'" data-filter-target="'+$(this).data('filter-target')+'">'+thisHtml+'<img class="action-remove-this-filter" src="/assets/times-circle.svg">'+'</div>');});$('.filters .filter select.choices.active').each(function(){if(!empty($(this).find(':selected').data('filter-target'))){thisHtml='ðŸ›‚ Visa free for citizens of '+$(this).find(':selected').html();html=html+'<div class="active-filter" data-text="'+$(this).find(':selected').text()+'" data-filter-target="'+$(this).find(':selected').data('filter-target')+'">'+thisHtml+'<img class="action-remove-this-filter" src="/assets/times-circle.svg"/>'+'</div>';}});count='';if(itemType=='city'){if(typeof itemsData!=='undefined'){if(typeof itemsData.cities!=='undefined'){count=itemsData.cities.length;}}}
else if(itemType=='country'){if(typeof itemsData!=='undefined'){if(typeof itemsData.countries!=='undefined'){count=itemsData.countries.length;}}}
else if(itemType=='region'){if(typeof itemsData!=='undefined'){if(typeof itemsData.regions!=='undefined'){count=itemsData.regions.length;}}}
if(count==0)count='';if(new Date().getHours()<7||new Date().getHours()>20){emoji='ðŸŒƒ';}
else if(new Date().getHours()<11||new Date().getHours()>17){emoji='ðŸŒ‡';}
else{emoji='ðŸŒ†';}
if(html!=''&&count==0){html=html+'<div class="action-clear-all-filters">Clear results</div>';}
else if(html!=''){html=html+'<div class="action-clear-all-filters">Clear '+number_format(count)+' results</div>';}
else{}
$('.active-filters-box').html(html);$('.active-filters-box').find('.lazyload').each(function(){$(this).attr('src',$(this).data('src'));});if(typeof latestFilterTargetSelected!=='undefined'){if($('.active-filters-box div.active-filter[data-filter-target="'+latestFilterTargetSelected+'"]').length>0){$('.active-filters-box').animate({scrollLeft:($('.active-filters-box div.active-filter[data-filter-target="'+latestFilterTargetSelected+'"]').offset().left-$('.active-filters-box').offset().left)},0);}}}
function updateItemsToMatchFilter(){consoleLog('updateItemsToMatchFilter');if(hasEmojis(activeSearch))return;var latitude;var longitude;$('.view-container-heading').hide();$('.notice-no-items-found').hide();if(activeView=='grid'&&windowSize().width>600&&dataToUse.length>0){$('.grid-side').show();}
monthIsSelected=false;if($('.filters .filter.month .choice.active').length>0)monthIsSelected=true;monthSelected=$('.filter.month .choice.active').data('filter-value');data={};data['view']=activeView;data['filters']=makeFilters();if(activeView!='grid'){showLoading();}
if(empty(data['filters'])){$('.action-clear-all-filters').removeClass('show');}
else{$('.action-clear-all-filters').addClass('show');}
data['sort']=activeSort;data['order']=activeSortOrder;inWinterOrAllYearIsSelected=false;if($('.filter .choice.in_winter.active').length>0){dateModifierText=' in the winter';dateModifierSlug='in-the-winter';inWinterOrAllYearIsSelected=true;}
else if($('.filter .choice.all_year.active').length>0){dateModifierText=' all year';dateModifierSlug='-all-year';inWinterOrAllYearIsSelected=true;}
else if($('.filter.month .choice.active').length>1){monthText=' then';monthSlug='-then';}
else if($('.filter.month .choice.active').length==1){monthText=' in '+$('.filter.month .choice.active').text();monthSlug='-in-'+$('.filter.month .choice.active').data('filter-slug');}
else{monthText=' now';monthSlug='';}
if(inWinterOrAllYearIsSelected){$('.filter.temperature .choice span').each(function(){$(this).text(str_replace(' now','',$(this).data('original-text'))+dateModifierText);});$('.filter.air_quality .choice span').each(function(){$(this).text(str_replace(' now','',$(this).data('original-text'))+dateModifierText);});$('.filter.humidity .choice span').each(function(){$(this).text(str_replace(' now','',$(this).data('original-text'))+dateModifierText);});$('.filter.users_count .choice span').each(function(){$(this).text(str_replace(' now','',$(this).data('original-text'))+dateModifierText);});}
else if(monthIsSelected){$('.filter.temperature .choice span').each(function(){$(this).text(str_replace(' now','',$(this).data('original-text'))+monthText);});$('.filter.air_quality .choice span').each(function(){$(this).text(str_replace(' now','',$(this).data('original-text'))+monthText);});$('.filter.humidity .choice span').each(function(){$(this).text(str_replace(' now','',$(this).data('original-text'))+monthText);});$('.filter.users_count .choice span').each(function(){$(this).text(str_replace(' now','',$(this).data('original-text'))+monthText);});if(!userHasChangedDefaultSort){$('.sort-by select option.nomad_score').data('sort','nomad_score_month_'+monthSelected);$('.sort-by select option.nomad_score').text('Nomad Score'+monthText);$('.sort-by select option.nomad_score').data('sort','nomad_score_month_'+monthSelected);$('.sort-by select option.temperature').data('sort','climate_temperatureC_month_'+monthSelected)
$('.sort-by select option.temperature').text('Temperature'+monthText);$('.sort-by select option[data-sort="users_now_count"]').data('sort','users_month_'+monthSelected+'_count');$('.sort-by select option[data-sort="users_now_count"]').text('Nomads'+monthText);}
$('.filter.users_count .choice').data('filter-target','users_month_'+monthSelected+'_count');$('.filter.humidity .choice').data('filter-target','climate_humidity_month_'+monthSelected);$('.filter.air_quality .choice').data('filter-target','air_quality_month_'+monthSelected);}
else{$('.filter.temperature .choice').each(function(){$(this).find('span').text($(this).find('span').data('original-text'));$(this).data('filter-target',$(this).data('original-filter-target'));});$('.filter.air_quality .choice').each(function(){$(this).find('span').text($(this).find('span').data('original-text'));$(this).data('filter-target',$(this).data('original-filter-target'));});$('.filter.humidity .choice').each(function(){$(this).find('span').text($(this).find('span').data('original-text'));$(this).data('filter-target',$(this).data('original-filter-target'));});$('.filter.users_count .choice').each(function(){$(this).find('span').text($(this).find('span').data('original-text'));$(this).data('filter-target',$(this).data('original-filter-target'));});$('.sort-by select option[data-sort="users_now_count_est"]').data('sort','users_now_count_est');$('.sort-by select option[data-sort="users_now_count_est"]').text('Nomads there now');$('.sort-by select option.temperature').data('sort','temperatureC');$('.sort-by select option.temperature').text('Temperature');$('.sort-by select option.nomad_score').text('Nomad Score');if(activeSort==defaultSort)activeSortText='Nomad Score';}
foundFilterInSortDropdown=false;flightPriceFilterIsEnabled=false;if($('.filter.flight_price_usd .choice.active').length>0){flightPriceFilterIsEnabled=true;}
if(activeSort=='flight_price_usd'){flightPriceFilterIsEnabled=true;}
sortingBasedOnFilter=false;if(monthIsSelected&&$('.filter.users_count .choice.active').length>0&&!userHasChangedDefaultSort){activeSort='users_month_'+monthSelected+'_count';$('.sort-by select option.users_count').prop('selected',true);that='.sort-by select option.users_count';activeSortTextPrefix=$(that).data('prefix');activeSortTextPostfix=$(that).data('postfix');activeSortAttributeToShow=$(that).data('sort');activeSortText=$(that).text();activeSortDataType=$(that).data('type');activeSortOrder=$(that).data('order');activeSortAttributeDefaultOrder=$(that).data('order');data['sort']=activeSort;}
else if(monthIsSelected&&!userHasChangedDefaultSort){activeSort='nomad_score_month_'+monthSelected;$('.sort-by select option.nomad_score').prop('selected',true);that='.sort-by select option.nomad_score';activeSortTextPrefix=$(that).data('prefix');activeSortTextPostfix=$(that).data('postfix');activeSortAttributeToShow=$(that).data('sort');activeSortText=$(that).text();activeSortDataType=$(that).data('type');activeSortAttributeDefaultOrder=$(that).data('order');data['sort']=activeSort;data['order']=activeSortOrder;}
if(!userHasChangedDefaultSort&&selectedSortOrderForUserBasedOnFilterSelected==true&&(!foundFilterInSortDropdown||(lengthOfFilters!=1))){activeSort=defaultSort;data['sort']=defaultSort;activeSortOrder=defaultSortOrder;activeSortText=defaultSortText;selectedSortOrderForUserBasedOnFilterSelected=false;activeSortTextPrefix='';activeSortTextPostfix='';activeSortAttributeToShow=defaultSort;activeSortDataType='score'
data['order']=defaultSortOrder;$('.sort-by select option[data-sort="'+activeSort+'"]').prop('selected',true);}
if(activeView=='grid'){}
if(activeView=='list'){}
if(activeView=='map'){clearAllMapMarkers();}
if(generateItemsInJS){templateItemHtml=$('.view.grid .item.template').outerHTML();}
updateActiveFiltersBox();if(getFlightPricesClientSide&&activeSort=='flight_price_usd'){data['sort']=defaultSort;}
if(data['sort']=='users_now'){data['sort']='users_now_count_est';data['order']='desc';}
if(data['sort']=='users_been'){data['sort']='users_been_count';data['order']='desc';}
geoRequest=true;if($('.filter.near .choice.active').length>0){geoRequest=true;}
if(geoRequest){data['user_latitude']=userLatitude;data['user_longitude']=userLongitude;}
if(activeView=='chart'){data['return']=[];data['return']=data['return'].concat(defaultAttributesDisplayedInChartView);data['return'].push(activeChartX);data['return'].push(activeChartY);}
else if(activeView=='map'){data['return']=[];data['return']=data['return'].concat(defaultAttributesDisplayedInMapView);data['return'].push(activeSort);}
else{data['return']=defaultAttributesToAlwaysLoad;data['return']=data['return'].concat(defaultAttributesDisplayedInItemBox);data['return']=data['return'].concat(defaultAttributesDisplayedInItemAttributesBox);data['return'].push(activeSort);data['return'].push(activeChartX);data['return'].push(activeSortAttributeToShow);}
if(monthIsSelected){data['return'].push('climate_temperatureC_month_'+monthSelected);data['return'].push('climate_temperatureC_feels_like_month_'+monthSelected);data['return'].push('climate_temperatureF_month_'+monthSelected);data['return'].push('climate_temperatureF_feels_like_month_'+monthSelected);data['return'].push('climate_humidity_month_'+monthSelected);data['return'].push('air_quality_month_'+monthSelected);data['return'].push('users_month_'+monthSelected+'_count');}
if($('.filter.personal_score .choice.active').length>0)data['no_cache']=true;if($('.filter.near_me .choice.active').length>0)data['no_cache']=true;if($('.filter.user_has_been .choice.active').length>0)data['no_cache']=true;if(activeSort=='distance')data['no_cache']=true;if(activeSort=='personal_score')data['no_cache']=true;returnArray=updateSlug();if(typeof returnArray!=='undefined'){if(typeof returnArray[0]!=='undefined'){data['filter_slug']=returnArray[0];data['filter_title']=returnArray[1];}}
updateHash();data['filters_on_page_state']=JSON.stringify(makeFiltersOnPageState());$('.action-apply-filter').html('<i class="fa fa-circle-o-notch fa-spin fa-fw"></i>')
$('.action-apply-filter').removeClass('engage');if(activeView=='map'){$('.map-markers .marker').remove();}
try{if(typeof activeAjax!=='undefined'){activeAjax.abort();}}
catch(e){}
flightPriceFilterIsEnabled=false;if($('.filter.flight_price_usd .choice.active').length>0){flightPriceFilterIsEnabled=true;}
if(activeSort=='flight_price_usd'){flightPriceFilterIsEnabled=true;}
if(flightPriceFilterIsEnabled){if(empty($('.filters .filter-origin-container input').val())){$('.filters .filter-origin-container input').focus();}}
else{}
clearTimeout(onFirstPageLoadGetItemsDataTimeout);activeAjaxID=performance.now();data['activeAjaxID']=activeAjaxID;data['item_type']=itemType;if(activeView=='map'){data['normalize']=1;}
activeAjax=$.ajax({url:'/api/v2/filter/all?php8',type:'POST',dataType:'json',data:{data:messUpString((JSON.stringify(data).split("").join(""))+'Gt8SkZ31e6'+(md5(JSON.stringify(data)+''+(Math.round(Math.floor(new Date().getTime()/1000)/100000))+'nomadlist')))}}).done(function(reply){if(typeof reply==='undefined'){window.location.reload();return;}
consoleLog('runtime',reply.runtime.total);$('.runtime').text(Math.round(reply.runtime.total)+'ms');$('.runtime').show();if(!reply.success){alert(reply.message);return;}
if(reply.activeAjaxID!=activeAjaxID){return;}
activeAjaxID=0;updateItemsToMatchFilterAJAXCallback(reply);});}
function updateItemsToMatchFilterAJAXCallback(updateItemsToMatchFilterAJAXCallbackReply){itemsData=updateItemsToMatchFilterAJAXCallbackReply;if(itemsData.cities.length){if(new Date().getHours()<7||new Date().getHours()>20){emoji='ðŸŒƒ';}
else if(new Date().getHours()<11||new Date().getHours()>17){emoji='ðŸŒ‡';}
else{emoji='ðŸŒ†';}
$('.active-filters-box .results-count').text(emoji+' '+number_format(itemsData.cities.length)+' cities');$('.active-filters-box .results-count').show();}
if(itemType=='country'){dataToUse=itemsData.countries;}
else if(itemType=='region'){dataToUse=itemsData.regions;}
else{dataToUse=itemsData.cities;}
consoleLog("$('.grid-side').show(); OR NOT");if(activeView=='grid'&&windowSize().width>600&&dataToUse.length>0){$('.grid-side').show();}
$('.notice-no-items-found').hide();if(empty(dataToUse)){document.title='Nomad List';if(rootUri=='/')rootUri='';history.replaceState(null,null,'/'+rootUri);$('.chart').hide();$('.info-box-container').hide();$('.item.placeholder').remove();showNoItemsFound();hideLoading();}
else if(dataToUse.length==0){document.title='Nomad List';if(rootUri=='/')rootUri='';history.replaceState(null,null,'/'+rootUri);$('.chart').hide();$('.info-box-container').hide();$('.item.placeholder').remove();showNoItemsFound();hideLoading();}
else{$('.chart').show();processFilterReplyAndGenerateItems();if(pageTitle!='Nomad List'){if(itemsData.cities.length==1){pageTitle=str_replace('Cities','City',pageTitle);}
if(windowSize().width>700&&!isMobile){document.title=pageTitle;}}}}
function refreshFilter(){showLoading();$('.backdrop.loading').addClass('show');setTimeout(function(){processFilterReply(filteredItemSlugs);},100);}
if(generateItemsInJS&&activeView=='grid'){if(($(window).scrollTop()+window.innerHeight)>=($(document).height())){consoleLog('infinity scroll: init');processFilterReplyAndGenerateItems()}
$(window).scroll(function(){if(modalOpen)return;if(!empty(infinityTimeout)){clearTimeout(infinityTimeout);}
if($(window).scrollTop()>window.innerHeight){$('.loading_spinner_2018.infinity-scroll').addClass('show');}
infinityTimeout=setTimeout(function(){if(activeView=='map')return;if(($(window).scrollTop()+window.innerHeight*4)>=($(document).height())){consoleLog('infinity scroll: a');if(typeof itemsData==='undefined'){onFirstPageLoadGetItemsData();return;}
if(typeof itemsData.cities==='undefined'){onFirstPageLoadGetItemsData();return;}
if(typeof $('.view.'+activeView+' .item:not(.template):not(.item-aux):not(.not-a-place)')==='undefined')return;if(itemType=='country'){dataToUse=itemsData.countries;}
else if(itemType=='region'){dataToUse=itemsData.regions;}
else{dataToUse=itemsData.cities;}
if(dataToUse.length==$('.view.'+activeView+' .item:not(.template):not(.item-aux):not(.not-a-place)').length){$('.loading_spinner_2018.infinity-scroll').removeClass('show').addClass('loaded-all-items-already');consoleLog('infinity scroll: already showed ALL items from the return data! don\'t infinity scroll');return;}
setTimeout(function(){if(activeView=='grid'&&(itemType=='city'||itemType=='region'||itemType=='country')){if(typeof($('.view.grid .item:not(.template):not(.item-aux):not(.not-a-place)')!=='undefined')){consoleLog('infinity scroll: hit processFilterReplyAndGenerateItems',$('.view.'+activeView+' .item:not(.template):not(.item-aux):not(.not-a-place)').length);processFilterReplyAndGenerateItems(($('.view.'+activeView+' .item:not(.template):not(.item-aux):not(.not-a-place)').length));}}
else{$('.loading_spinner_2018.infinity-scroll').removeClass('show').addClass('loaded-all-items-already');}},250);}},250);});}
function processFilterReplyAndGenerateItems(offsetItemsNumber,forceFitBounds){consoleLog('processFilterReplyAndGenerateItems');if(empty(itemsData)){onFirstPageLoadGetItemsData(processFilterReplyAndGenerateItems);return;}
weAreInfinityScrolling=false;if(activeView=='map'||activeView=='map-3d'){if(typeof map!=='object'||!mapIsLoaded){consoleLog('processFilterReplyAndGenerateItems cancelled because map not loaded yet');return;}}
if(activeView=='map-3d'){consoleLog('1 put3dItemsDataOnMap');put3dItemsDataOnMap();hideItemsLoading();return;}
if(activeView=='map'){if(!empty(current3dDataMapID)){try{map.removeLayer(current3dDataMapID);map.removeLayer(current3dDataMapID+'_highlight');map.removeSource('highlight');}catch(error){}}
current3dDataMapID='';}
infoBoxArray={"trip_length_average":"The average duration of a trip to each place is calculated from Nomad List members' trips","internet_speed":"Internet speed is measured by sourcing most internet speed testing sites and analyzing connections of people visiting Nomad List","personal_score":"This recommends places by analyzing your trips history to find places that other people that visit similar places to you have also visited, and excludes places you've already visited (if you're a member)",'safety_level':"Safety data is sourced from national and city crime statistics from different data sets, and also includes ongoing armed conflict and terrorism","legal_weed":"âš ï¸ Places shown here are where cannabis use is fully legal OR decriminalized OR unenforced. <strong>Always double check legality so to not get yourself in trouble. Many countries have the death penalty for drug use.</strong> Watch out","legal_weed_for_medical_use":"âš ï¸ Places shown here are where cannabis use is fully legal OR <strong>legal for medical use with a prescription</strong> OR decriminalized OR unenforced. <strong>Always double check legality so to not get yourself in trouble. Many countries have the death penalty for drug use.</strong> Watch out","cost_for_nomad_in_usd":"The cost per month shown here is Nomad Costâ„¢: this the typical cost for a digital nomad. To adjust the cost for a local or expat, select the dropdown and go to Cost","users_been_count_gender_ratio":"The ratio of men vs. women nomads visiting a place based on Nomad List trips data. A number above 1 means more men than women. Based on 100,000+ trips","users_been_count_gender_ratio_female":"The ratio of women vs. men nomads visiting a place based on Nomad List trips data. A number above 1 means more women than men. Based on 100,000+ trips","likes_score":"After Nomad List members visit a place, they're asked if they liked or disliked it","dislikes_score":"After Nomad List members visit a place, they're asked if they liked or disliked it","likes_ratio":"After Nomad List members visit a place, they're asked if they liked or disliked it. The ratio shows the amount of people who liked it vs. who disliked it","likes_percentage":"After Nomad List members visit a place, they're asked if they liked or disliked it","air_quality":"Air quality is sourced from 10,000+ air sensors stationed around the world. We provide a median value based on data from all sensors in a city, updated daily","return_rate":"Return rate is based on how many people on Nomad List go to a place and then return there over 6 months later. Based on 100,000+ trips","airbnb_median_price_in_usd":"Airbnb prices represent the median price of a private bedroom in a city a month from now and are updated from Airbnb weekly","apartment_cost_in_usd":"Rent prices represent median prices and are sourced from government data sets and updated annually","snowmad_score":"The Snowmad Score is the same as the Nomad Score, but rates the city on having surrounding snow resorts and a current temperature suitable for snow","promad_score":"The Promad Score is the same as the Nomad Score, but without taking into account the cost of living, so it doesn't rank places lower for being expensive","wildmad_score":"The Wildmad Score is the same as the Nomad Score, but without taking into account safety, so it doesn't rank places lower for being less safe. Instead doing the opposite","users_now_count":"Nomad count is calculated by counting how many Nomad List users are currently checked in. Based on 100,000+ trips","users_been_count":"Nomad count is calculated by counting how many Nomad List users have checked in here. Based on 100,000+ trips","users_now_count_est":"Nomad count is calculated by counting how many Nomad List users have checked in here and extrapolating how many nomads in total are probably there. Based on 100,000+ trips","weather_score":"Weather score represents how comfortable the weather is. The sweet spot is at <span class=\"metric\">25Â°C</span><span class=\"imperial\">77Â°F</span>, not much rain and a comfortable humidity of 45%","internet_speed_vs_population_ratio":"Internet speed vs. population divides a city's internet speed by its population, telling us byte per citizen",'corona':'COVID data is updated every 6 hours from <a href=\"https://www.worldometers.info/coronavirus/\">Worldometers</a>'};$('.info-box-container').html('');for(var key in data['filters']){keyInActiveFilter=data['filters'][key]['target'];consoleLog('keyInActiveFilter',keyInActiveFilter);if(empty(keyInActiveFilter))continue;if(empty(infoBoxArray[keyInActiveFilter]))continue;consoleLog(keyInActiveFilter,infoBoxArray[keyInActiveFilter]);$('.info-box-container').append(infoBoxArray[keyInActiveFilter]+'. ');}
if(activeView=='chart'){if(infoBoxArray[activeChartX]){$('.info-box-container').append(infoBoxArray[activeChartX]+'. ');}
if(infoBoxArray[activeChartY]){$('.info-box-container').append(infoBoxArray[activeChartY]+'. ');}}
else{if(infoBoxArray[activeSort]){$('.info-box-container').append(infoBoxArray[activeSort]+'. ');}}
if(activeSort.indexOf('corona')>-1||activeChartX.indexOf('corona')>-1||activeChartY.indexOf('corona')>-1){$('.info-box-container').append(infoBoxArray['corona']+'. ');}
if($('.sort-by select').find(':selected').data('info-box')){$('.info-box-container').append($('.sort-by select').find(':selected').data('info-box')+'. ');}
if(!empty($('.info-box-container').html())){$('.info-box-container').show();}
else{$('.info-box-container').hide();}
if(activeView!='chart'){$('.info-box-container').hide();}
if(flightPriceFilterIsEnabled){$('html').addClass('flightPriceFilterIsEnabled');}
else{$('html').removeClass('flightPriceFilterIsEnabled');}
hideItemsLoading();$('.view.'+activeView).show();if($('.html').hasClass('flights')){}
else if(empty(itemsData.slugs)){document.title='Nomad List';history.replaceState(null,null,rootUri);showNoItemsFound();}
else if(itemsData.slugs.length==0){document.title='Nomad List';history.replaceState(null,null,rootUri);showNoItemsFound();}
else{if(pageTitle!='Nomad List'){if(itemsData.slugs.length==1){pageTitle=str_replace('Cities','City',pageTitle);}
if(windowSize().width>700&&!isMobile){document.title=pageTitle;}}}
phpGeneratesFirstItemsAmount=0;auxCounter=0;filteredItemSlugs=itemsData;$('.results-amount').addClass('active');slugs=itemsData.slugs;if(slugs.length==0){$('.action-apply-filter').text('No results found');hideLoading();}
else{if(!generateItemsInJS){citiesThatAreAResultAndAreOnThisPage=0;for(i=0;i<slugs.length;i++){if($('.item.'+slugs[i]).length>0){citiesThatAreAResultAndAreOnThisPage++;}}}else{citiesThatAreAResultAndAreOnThisPage=itemsData.slugs.length;}
hideLoading();if(citiesThatAreAResultAndAreOnThisPage==0){$('.action-apply-filter').text('No cities found');$('.view .item').removeClass('show').removeClass('show-now');}
else{$('.action-apply-filter').addClass('engage');$('.action-apply-filter').text('Show '+citiesThatAreAResultAndAreOnThisPage+' results');}}
setTimeout(function(){$('.results-amount').removeClass('active');},1000);if(generateItemsInJS){if(typeof forceFitBounds==='undefined')forceFitBounds=true;}
else{return;}
$('.loading_spinner_2018.infinity-scroll').removeClass('show');if(activeView=='grid'||activeView=='map'){if($('.view.grid .item.template').length==0){}
templateItemHtml=$('.view.grid .item.template').outerHTML();var gridSideHtml=$('.grid-side').outerHTML();auxBannerHtml=$('.aux-top-banner').outerHTML();consoleLog('gridSideHtml',gridSideHtml);if(empty(offsetItemsNumber)){offsetItemsNumber=phpGeneratesFirstItemsAmount;}
else{}}
else if(activeView=='map'){clearAllMapMarkers();}
if(!empty(activeSortText)){$('.view.list thead .custom').data('sort',activeSort);$('.view.list thead .custom').text(properlyCapitalize(activeSortText));}
if(in_array(activeSortAttributeToShow,defaultAttributesDisplayedInItemBox)){$('.view.list thead .custom').data('sort',defaultSort);$('.view.list thead tr .custom').text('ðŸŽ’ Nomad<span class="hide-on-mobile"> Score</span>');}
if(windowSize().width<700&&!$('html').hasClass('filters-folded')){if(itemsData.cities.length==0){$('.filter-actions .action-toggle-filters-show-cities').text('No cities found');}
else{$('.filter-actions .action-toggle-filters-show-cities').text('Show '+number_format(itemsData.cities.length)+' results');}}
if(empty(itemsData))return;z=0;flightPriceFilterIsEnabled=false;if($('.filter.flight_price_usd .choice.active').length>0){flightPriceFilterIsEnabled=true;}
if(activeSort=='flight_price_usd'){flightPriceFilterIsEnabled=true;}
if(activeView=='map'){bounds=new mapboxgl.LngLatBounds();}
if(activeView=='chart'){processFilterReplyAndGenerateChart(itemsData);return;}
if(itemsData.cities.length<32){$('.loading_spinner_2018.infinity-scroll').removeClass('show');}
if(monthIsSelected){var monthText=' '+date('M',strtotime('2000-'+monthSelected+'-01'));}
viewGridHtmlBuffer='';updateLegend();itemsGeneratedCount=0;if(itemType=='country'){dataToUse=itemsData.countries;}
else if(itemType=='region'){dataToUse=itemsData.regions;}
else{dataToUse=itemsData.cities;}
if(empty(dataToUse)){showNoItemsFound();hideLoading();hideItemsLoading();return;}
$('.no-items').removeClass('show');consoleLog('offsetItemsNumber',offsetItemsNumber);for(i=offsetItemsNumber;i<dataToUse.length;i++){item=dataToUse[i];if(empty(activeSearch)){item['rank']=i+1;}
if(activeView=='grid'){if((i+1)<=dataToUse.length&&(i+1)<=(offsetItemsNumber+itemsToAddPerInfinityLoad)){itemTemplated=templateItemHtml.slice(0);itemTemplated=itemTemplated.replace('template','')
if(itemType=='country'||itemType=='region'){if(activeSort!=defaultSort){itemTemplated=itemTemplated.replace('{data-url}','/'+item['short_slug']+'?sort='+activeSort+'&order='+activeSortOrder);}
else{itemTemplated=itemTemplated.replace('{data-url}','/'+item['short_slug']);}}
if(!empty(userCitySlug)&&userCitySlug==item['long_slug']){itemTemplated=itemTemplated.replace('{slugAsClassName}','{slugAsClassName} userIsCurrentlyInThisCity');}
if(typeof userFavoritedCities==='undefined'){itemTemplated=itemTemplated.replace('{slugAsClassName}',item['short_slug']);}
else if(empty(userFavoritedCities)){itemTemplated=itemTemplated.replace('{slugAsClassName}',item['short_slug']);}
else if(in_array(item['long_slug'],userFavoritedCities)){itemTemplated=itemTemplated.replace('{slugAsClassName}','favorited '+item['short_slug']);}
else{itemTemplated=itemTemplated.replace('{slugAsClassName}',item['short_slug']);}
bgSrcset='https://nomadlist.com/cdn-cgi/image/format=auto,fit=cover,width=300,height=150,quality='+imgQ+'/https://nomadlist.com/assets/img/places/'+item['long_slug']+'.jpg?'+item['image_lastmod']+' 300w,'+
'https://nomadlist.com/cdn-cgi/image/format=auto,fit=cover,width=600,height=300,quality='+imgQ+'/https://nomadlist.com/assets/img/places/'+item['long_slug']+'.jpg?'+item['image_lastmod']+' 600w';view='grid';itemTemplated=itemTemplated.replace('{bg-data-srcset}',bgSrcset);if(!empty(item[activeCostMode+'_in_usd'])){var converted=item[activeCostMode+'_in_usd']*exchangeRatesUSD[userCurrency.toUpperCase()];if(exchangeRatesUSD[userCurrency.toUpperCase()]>=1000){converted=Math.round(converted/1000)*1000;if(converted>=1000000){converted=number_format(converted/1000000,2)+'M';}
if(converted>=1000){converted=number_format(converted/1000)+'k';}}
else{converted=number_format(converted);}
if(userLanguage=='ZH'){itemTemplated=itemTemplated.replace('{bottom-right}','<span class="price" data-usd="'+item[activeCostMode+'_in_usd']+'">'+exchangeRatesSymbols[userCurrency.toUpperCase()]+''+converted+'</span> / æœˆ');}
else{itemTemplated=itemTemplated.replace('{bottom-right}','<span class="price" data-usd="'+item[activeCostMode+'_in_usd']+'">'+exchangeRatesSymbols[userCurrency.toUpperCase()]+''+converted+'</span>Â /Â mo');}}
else{itemTemplated=itemTemplated.replace('{bottom-right}','');}
airQualityExclamationMark='';aqiRedIfBad='';if(monthIsSelected){if(item['air_quality_month_'+monthSelected]>75){aqiRedIfBad='red';airQualityExclamationMark='<span class="smog-emoji">ðŸ˜·</span>';}
aqi=Math.round(item['air_quality_month_'+monthSelected]);}
if(!monthIsSelected){if(item['air_quality_now']>75){aqiRedIfBad='red';airQualityExclamationMark='<span class="smog-emoji">ðŸ˜·</span>';}
aqi=Math.round(item['air_quality_now']);}
temperatureRedIfTooHot='';if(item['temperatureC_feels_like']>35)temperatureRedIfTooHot='red';aqiHtml='';if(!empty(aqi)&&aqi!='null'&&aqi!=null){aqiHtml='<span class="air_quality '+aqiRedIfBad+'"><span class="above">AQI</span><span class="value">'+aqi+'</span></span>'+airQualityExclamationMark;}
sweatEmoji='';if(!monthIsSelected){if((item['temperatureC']>=26&&item['humidity']>=70)||item['temperatureC']>=30){sweatEmoji='<span class="sweat-emoji" data-humidity="'+item['humidity']+'">ðŸ¥µ</span>';}}
else{if((item['climate_temperatureC_month_'+monthSelected]>=26&&item['climate_humidity_month_'+monthSelected]>=70)||item['climate_temperatureC_month_'+monthSelected]>=30){sweatEmoji='<span class="sweat-emoji">ðŸ¥µ</span>';}}
if(!empty(monthIsSelected)){temperatureRedIfTooHot='';if(!isset(itemsData.temperaturesC)){console.error("Month is selected but temperature data is not returned by API for cities");}
else{item['temperatureC_feels_like']=itemsData.temperaturesC[item['slug']];if(item['temperatureC_feels_like']>35)temperatureRedIfTooHot='red';}
itemTemplated=itemTemplated.replace('{bottom-left}','<span class="weather-emoji">'+item['weather_emoji']+'</span>&nbsp;<span class="temperature '+temperatureRedIfTooHot+'" data-value="'+item['temperatureC_feels_like']+'">'+
'<span class="label-heat-index">Feels&nbsp;'
+'<span class="value unit metric">'+item['climate_temperatureC_feels_like_month_'+monthSelected]+'&deg;</span>&nbsp;'
+'<span class="value unit imperial">'+item['climate_temperatureF_feels_like_month_'+monthSelected]+'&deg;</span>'
+'</span>'+'<span class="unit metric">'+number_format(item['climate_temperatureC_month_'+monthSelected])+'Â°</span><span class="unit imperial">'+number_format(item['climate_temperatureF_month_'+monthSelected])+'Â°</span></span>'+sweatEmoji+aqiHtml+monthText);}
else{if(isset(item['temperatureC_feels_like'])){itemTemplated=itemTemplated.replace('{bottom-left}','<span class="weather-emoji">'+item['weather_emoji']+'</span>&nbsp;<span class="temperature '+temperatureRedIfTooHot+'" data-value="'+item['temperatureC_feels_like']+'">'+
'<span class="label-heat-index">Feels&nbsp;'
+'<span class="value unit metric">'+item['temperatureC_feels_like']+'&deg;</span>&nbsp;'
+'<span class="value unit imperial">'+item['temperatureF_feels_like']+'&deg;</span>'
+'</span>'+'<span class="unit metric">'+Math.round(number_format(item['temperatureC']))+'Â°</span><span class="unit imperial">'+Math.round(number_format(item['temperatureF']))+'Â°</span></span>'+sweatEmoji+aqiHtml);}
else{itemTemplated=itemTemplated.replace('{bottom-left}','');}}
if(!in_array(activeSortAttributeToShow,defaultAttributesDisplayedInItemBox)&&activeSort!=defaultSort){if(typeof item[activeSortAttributeToShow]==='undefined'){displayText='n/a';}
else{displayText=item[activeSortAttributeToShow];if(item[activeSortAttributeToShow]=='false'||item[activeSortAttributeToShow]==false)displayText='';if(is_numeric(item[activeSortAttributeToShow])&&activeSortDataType=='ratio'){displayText=number_format((item[activeSortAttributeToShow]),2);}
else if(is_numeric(item[activeSortAttributeToShow])&&activeSortDataType!='score'){displayText=number_format((item[activeSortAttributeToShow]));}
else if(is_numeric(item[activeSortAttributeToShow])&&activeSortDataType=='score'){displayText=(number_format(item[activeSortAttributeToShow]/5*100,0))+'%';}
else if(is_numeric(item[activeSortAttributeToShow])&&activeSortDataType=='percentage'){displayText=number_format(Math.round(item[activeSortAttributeToShow]))+'%';}
if(!empty(activeSortTextPrefix)&&isset(displayText)){displayText=activeSortTextPrefix+displayText;}
if(!empty(activeSortTextPostfix)&&isset(displayText)&&activeView!='map'){displayText=displayText+activeSortTextPostfix;}}
displayText='<span class="activeSortText">'+activeSortText+'</span>'+displayText;consoleLog('activeSortText',activeSortText);itemTemplated=itemTemplated.replace('{top-right}',displayText);}
else{if(!empty(item['internet_speed'])){itemTemplated=itemTemplated.replace('{top-right}','<span class="left" style="position:relative;padding-left:1.25em;padding-bottom:1em;">'+
'<svg width="25" class="wifi-svg" aria-hidden="true" data-prefix="fas" data-icon="wifi" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="svg-inline--fa fa-wifi fa-w-20 fa-9x"><path fill="currentColor" d="M634.91 154.88C457.74-8.99 182.19-8.93 5.09 154.88c-6.66 6.16-6.79 16.59-.35 22.98l34.24 33.97c6.14 6.1 16.02 6.23 22.4.38 145.92-133.68 371.3-133.71 517.25 0 6.38 5.85 16.26 5.71 22.4-.38l34.24-33.97c6.43-6.39 6.3-16.82-.36-22.98zM320 352c-35.35 0-64 28.65-64 64s28.65 64 64 64 64-28.65 64-64-28.65-64-64-64zm202.67-83.59c-115.26-101.93-290.21-101.82-405.34 0-6.9 6.1-7.12 16.69-.57 23.15l34.44 33.99c6 5.92 15.66 6.32 22.05.8 83.95-72.57 209.74-72.41 293.49 0 6.39 5.52 16.05 5.13 22.05-.8l34.44-33.99c6.56-6.46 6.33-17.06-.56-23.15z" class=""></path></svg>'+
'</span>'+
'<span class="right">'+
'<span class="value">'+Math.round(item['internet_speed'])+'</span>'+
'<span class="mbps">Mbps</span>'+
'</span>');}
else{itemTemplated=itemTemplated.replace('{top-right}','');}}
$('.view.'+view+' .dynamic-item-'+i+'').addClass(item['short_slug']);if(!empty(item['descriptionFromReview'])){itemTemplated=itemTemplated.replace('{descriptionFromReview}',item['descriptionFromReview']);}
else{itemTemplated=itemTemplated.replace('{descriptionFromReview}','');}
itemTemplated=itemTemplated.replace('{long-slug}',item['slug']);itemTemplated=itemTemplated.replace('{slug}',item['short_slug']);if(windowWidth>600){if(!empty(item['state_code'])&&item['state_code'].length<3){itemTemplated=itemTemplated.replace('{itemName}',item['name']+', <span class="state">'+item['state_code']+'</span>');}
else if(!empty(item['state_code'])){itemTemplated=itemTemplated.replace('{itemName}',item['name']+', <span class="state long">'+item['state_code']+'</span>');}
else{itemTemplated=itemTemplated.replace('{itemName}',item['name']);}}
else{itemTemplated=itemTemplated.replace('{itemName}',item['name']);}
itemTemplated=itemTemplated.replace('{bgItemName}',item['name']+' for a Digital Nomad');itemTemplated=itemTemplated.replace('{itemAlt}',item['name']+' for a Digital Nomad');itemTemplated=itemTemplated.replace('{bgItemAlt}',item['name']+' for a Digital Nomad');itemTemplated=itemTemplated.replace('{itemURL}','/'+item['short_slug']);if(itemType!='country'&&itemType!='region'){itemTemplated=itemTemplated.replace('{itemSubAlt}',item['country']);itemTemplated=itemTemplated.replace('{itemSub}',item['country']);}
else{itemTemplated=itemTemplated.replace('{itemSubAlt}','');itemTemplated=itemTemplated.replace('{itemSub}','');}
if(activeSortDataType=='score'&&!in_array(activeSort,defaultAttributesDisplayedInItemAttributesBox)){itemTemplated=itemTemplated.replace('{label-main-score}',properlyCapitalize(activeSortText));itemTemplated=itemTemplated.replace('{rating-main-score-width}',(item[activeSort]/5*100)+'%');itemTemplated=itemTemplated.replace('{rating-main-score-r}',Math.round(item[activeSort]));}
else{itemTemplated=itemTemplated.replace('{label-main-score}','â­ï¸ <span class="hide-before-400px">Overall</span><span class="show-before-400px">All</span>');itemTemplated=itemTemplated.replace('{rating-main-score-width}',(item['total_score']/5*100)+'%');itemTemplated=itemTemplated.replace('{rating-main-score-r}',Math.round(item['total_score']));}
itemTemplated=itemTemplated.replace('{rating-internet-score-r}',(Math.round(item['internet_score'])));itemTemplated=itemTemplated.replace('{rating-internet-score-width}',(item['internet_score']/5*100)+'%');itemTemplated=itemTemplated.replace('{rating-cost-score-r}',(Math.round(item['cost_score'])));itemTemplated=itemTemplated.replace('{rating-cost-score-width}',(item['cost_score']/5*100)+'%');itemTemplated=itemTemplated.replace('{rating-fun-score-r}',(Math.round(item['leisure_quality'])));itemTemplated=itemTemplated.replace('{rating-fun-score-width}',(item['leisure_quality']/5*100)+'%');itemTemplated=itemTemplated.replace('{rating-safety-score-r}',(Math.round(item['safety_level'])));itemTemplated=itemTemplated.replace('{rating-safety-score-width}',(item['safety_level']/5*100)+'%');if(itemType=='country'&&item['users_now_count']>=50){itemTemplated=itemTemplated.replace('{badge}','<div class="popular-city-badge"></div>');}
else if(itemType=='city'&&item['users_now_count']>=30){itemTemplated=itemTemplated.replace('{badge}','<div class="popular-city-badge"></div>');}
else if(itemType=='city'&&item['last_2_year_growth']>=10){itemTemplated=itemTemplated.replace('{badge}','<div class="growing-city-badge"></div>');}
else if(itemType=='city'&&item['boost']>0){itemTemplated=itemTemplated.replace('{badge}','<div class="boosted-city-badge"></div>');}
itemTemplated=itemTemplated.replace('{top-left}','<div class="rank">'+item['rank']+'</div>');viewGridHtmlBuffer=viewGridHtmlBuffer+itemTemplated;itemsGeneratedCount++;}}
else if(activeView=='map'){view='map';if(!empty(activeSortAttributeToShow)){displayText=item[activeSortAttributeToShow];if(is_numeric(item[activeSortAttributeToShow])&&activeSortDataType!='score'){displayText=number_format(Math.round(item[activeSortAttributeToShow]))+activeSortTextPostfix;}
else if(is_numeric(item[activeSortAttributeToShow])&&activeSortDataType=='score'){displayText=number_format(number_format(item[activeSortAttributeToShow]),2);}
if(!empty(activeSortTextPrefix)&&!empty(displayText)){displayText=activeSortTextPrefix+displayText;}
else if(!empty(activeSortTextPostfix)&&!empty(displayText)&&activeSortTextPostfix==' US AQI'){displayText=number_format(item[activeSortAttributeToShow]);}
else if(is_numeric(item[activeSortAttributeToShow])&&activeSortDataType=='percentage'){displayText=number_format(Math.round(item[activeSortAttributeToShow]))+'%';}
if(activeSortDataType=='score'){displayText=number_format(item[activeSortAttributeToShow],1);}
if(!empty(item[activeSortAttributeToShow])){if(activeSortAttributeToShow=='climate_koppen_name'){if(item[activeSortAttributeToShow]=='Tropical')score=0;if(item[activeSortAttributeToShow]=='Dry')score=2;if(item[activeSortAttributeToShow]=='Temperature')score=3;if(item[activeSortAttributeToShow]=='Temperate')score=3;if(item[activeSortAttributeToShow]=='Continental')score=4;if(item[activeSortAttributeToShow]=='Polar')score=5;addMarkerOnMapForItem(item['long_slug'],item['short_slug'],item['name'],'',item['latitude'],item['longitude'],score,item['image_last_mod'],displayText,activeSortAttributeToShow);}
else if(activeSortOrder=='asc'){if(activeSortDataType=='score'){addMarkerOnMapForItem(item['long_slug'],item['short_slug'],item['name'],item['state_code'],'',item['latitude'],item['longitude'],5-item[activeSortAttributeToShow+'_normalized']*5,item['image_last_mod'],displayText,activeSortAttributeToShow);}
else if(activeSortDataType=='value'){addMarkerOnMapForItem(item['long_slug'],item['short_slug'],item['name'],item['state_code'],'',item['latitude'],item['longitude'],5-item[activeSortAttributeToShow+'_normalized']*5,item['image_last_mod'],displayText,activeSortAttributeToShow);}
else{addMarkerOnMapForItem(item['long_slug'],item['short_slug'],item['name'],item['state_code'],'',item['latitude'],item['longitude'],5-item[activeSortAttributeToShow+'_normalized']*5,item['image_last_mod'],displayText,activeSortAttributeToShow);}}
else{if(activeSortDataType=='score'){addMarkerOnMapForItem(item['long_slug'],item['short_slug'],item['name'],item['state_code'],'',item['latitude'],item['longitude'],item[activeSortAttributeToShow+'_normalized']*5,item['image_last_mod'],displayText,activeSortAttributeToShow);}
else if(activeSortDataType=='value'){addMarkerOnMapForItem(item['long_slug'],item['short_slug'],item['name'],item['state_code'],'',item['latitude'],item['longitude'],item[activeSortAttributeToShow+'_normalized']*5,item['image_last_mod'],displayText,activeSortAttributeToShow);}
else{addMarkerOnMapForItem(item['long_slug'],item['short_slug'],item['name'],item['state_code'],'',item['latitude'],item['longitude'],item[activeSortAttributeToShow+'_normalized']*5,item['image_last_mod'],displayText,activeSortAttributeToShow);}}}}
else{displayText=number_format(item[defaultSort],1,1);addMarkerOnMapForItem(item['long_slug'],item['short_slug'],item['name'],item['state_code'],'',item['latitude'],item['longitude'],item['nomad_score_normalized']*5,item['image_last_mod'],displayText,activeSortAttributeToShow);}
if(JSON.stringify(data['filters']).indexOf('Antarctica')===-1&&(item['latitude']<-55||item['latitude']>55)){}
else{if(!empty(item['latitude'])||!empty(item['longitude'])){bounds.extend(new mapboxgl.LngLat(item['longitude'],item['latitude']));}}
if((i+1)==dataToUse.length){hideLoading();leftPaddingBounds=0;if(!$('html').hasClass('filters-folded')&&windowSize().width>700){leftPaddingBounds=$('.filters').width()/2;}
if(mapFitBoundsEnabled&&!empty(data['filters'])&&typeof bounds!=='undefined'){consoleLog('2 map.fitBounds(bounds, {');consoleLog('bounds:');consoleLog(bounds);consoleLog('--:');map.fitBounds(bounds,{animate:false,padding:{top:100,bottom:100,left:(100+leftPaddingBounds),right:100},duration:0});if(!isMobile){map.setZoom(map.getZoom()-1);}
center=map.getCenter();if(map.getZoom()>8){map.setZoom(8);}
else if(!empty(data['filters'])){}
else if(empty(data['filters'])){map.setZoom(2);}
if(windowSize().width<600){map.setZoom(map.getZoom()+1);}}
mapFitBoundsEnabled=true;clusterMarkersMapbox();}}
z++;}
if(activeView=='grid'){count='';if(itemType=='city'){if(typeof itemsData.cities!=='undefined'){count=itemsData.cities.length;}}
else if(itemType=='country'){if(typeof itemsData.countries!=='undefined'){count=itemsData.countries.length;}}
else if(itemType=='region'){if(typeof itemsData.regions!=='undefined'){count=itemsData.regions.length;}}
if(count==0){$('.action-clear-all-filters').text('Clear results');}
else{$('.action-clear-all-filters').text('Clear '+number_format(count)+' results');}
if(offsetItemsNumber){consoleLog('append items due to offsetItemsNumber='+offsetItemsNumber);$('.view.grid').append(viewGridHtmlBuffer);placeAuxItems();}
else{$('.view.grid').html(gridSideHtml+viewGridHtmlBuffer+templateItemHtml);placeAuxItems();}
$('.view.grid').css('opacity',100);}
hideLoading();lazyload();}
function downloadCSV(){consoleLog('downloadCSV');action='âŒ— Downloaded CSV export';$.ajax({url:"/userApi.php",type:'POST',dataType:'json',data:{action:'log_user_activity',log_action:action,hash:md5(action+'xoyo')},context:document.body}).done(function(reply){});if(!$('html').hasClass('logged-in')){action='ðŸ’³ Opened sign up modal when downloading CSV '+'('+signUpAbTestVariation+') '+'(AB variation: '+signUpAbTestVariation+')';$.ajax({url:"/userApi.php",type:'POST',dataType:'json',data:{action:'log_user_activity',log_action:action,hash:md5(action+'xoyo')},context:document.body}).done(function(reply){});openSignUpModal('ðŸ“— <b>Export data to a spreadsheet file</b> and continue your research yourself','basic');return;}
if(empty(itemsData)){onFirstPageLoadGetItemsData(downloadCSV);return;}
contents='';if(itemType=='city'){contents+='City'+",";}
contents+='Country'+",";if(activeView=='chart'){if(!empty(activeChartY)){contents+=capitalize(str_replace('_',' ',$('.sort-by option[data-sort="'+activeChartY+'"]').val()))+",";}
if(!empty(activeChartX)){contents+=capitalize(str_replace('_',' ',$('.sort-by option[data-sort="'+activeChartX+'"]').val()))+",";}}
else{if(activeSort!=defaultSort){contents+=activeSortText+",";}
contents+=defaultSortText+",";contents+='Temperature (Â°C)'+",";contents+='Temperature (Â°F)'+",";contents+='Internet Speed (Mbps)'+",";contents+='Nomad Cost ($ monthly)'+",";contents+='Fun (out of 5)'+",";contents+='Safety (out of 5)'+",";}
contents+=",";contents+="Source: Nomad List (generated "+date('Y-m-d')+" from "+document.documentURI+")";contents+="\n";var CSVDataToUse;if(activeView=='chart'){if(isCountryLevelDataX||isCountryLevelDataY){CSVDataToUse=sortBySubkey(itemsData.countries,activeChartY).reverse();}}
if(itemType=='city'){CSVDataToUse=sortBySubkey(itemsData.cities,activeSort).reverse();}
else if(itemType=='region'){CSVDataToUse=sortBySubkey(itemsData.regions,activeSort).reverse();}
else if(itemType=='country'){CSVDataToUse=sortBySubkey(itemsData.countries,activeSort).reverse();}
for(var i=0;i<CSVDataToUse.length;i++){itemData=CSVDataToUse[i];consoleLog(itemData['name']);contents+='"'+itemData['name']+'"'+",";if(itemType=='city'){contents+='"'+itemData['country']+'"'+",";}
if(activeView=='chart'){if(!empty(activeChartX)){contents+='"'+number_format(itemData[activeChartX],2)+'"'+",";}
if(!empty(activeChartY)){contents+='"'+number_format(itemData[activeChartY],2)+'"'+",";}}
else{if(activeSort!=defaultSort){contents+='"'+number_format(itemData[activeSort],2)+'"'+",";}
else{contents+='"'+number_format(itemData[defaultSort],2)+'"'+",";}
if(itemData['temperatureC']==null){contents+='"'+'0Â°C'+'"'+",";}
else{contents+='"'+number_format(itemData['temperatureC'],0)+"Â°C"+'"'+",";}
if(itemData['temperatureF']==null){contents+='"'+'0Â°F'+'"'+",";}
else{contents+='"'+number_format(itemData['temperatureF'],0)+"Â°F"+'"'+",";}
contents+='"'+number_format(itemData['internet_speed'],0)+'"'+","
contents+='"'+number_format(itemData['cost_for_nomad_in_usd'])+'"'+","
contents+='"'+number_format(itemData['leisure_quality'],2)+'"'+","
contents+='"'+number_format(itemData['safety_level'],2)+'"';}
contents+="\n";}
try{var element=document.createElement('a');element.setAttribute('href','data:text/csv;charset=utf-8,'+encodeURIComponent(contents));element.setAttribute('download','nomadlist-'+date('Y-m-d-h-i-s')+'.csv');element.style.display='none';document.body.appendChild(element);element.click();document.body.removeChild(element);}catch(error){}}
function updateLegend(){if(activeView=='map'||activeView=='map-3d'){consoleLog('updateLegend');if(typeof activeSortTextPrefix==='undefined')activeSortTextPrefix='';if(typeof activeSortTextPostfix==='undefined')activeSortTextPostfix='';decimalCount=2;if(itemsData.legend.maximum==null){$('.map_legend').hide();return;}
$('.map_legend').show();if(itemsData.legend.maximum>10&&itemsData.legend.average>10&&itemsData.legend.minimum>10)decimalCount=0;if(empty(itemsData.legend.maximum.toString().split('.')[1])&&empty(itemsData.legend.average.toString().split('.')[1])&&empty(itemsData.legend.minimum.toString().split('.')[1]))decimalCount=0;$('.map_legend .label_green').text(activeSortTextPrefix+number_format(Math.floor(itemsData.legend.maximum*10)/10,decimalCount)+activeSortTextPostfix);$('.map_legend .label_yellow').text(activeSortTextPrefix+number_format(Math.floor(itemsData.legend.average*10)/10,decimalCount)+activeSortTextPostfix);$('.map_legend .label_red').text(activeSortTextPrefix+number_format(Math.floor(itemsData.legend.minimum*10)/10,decimalCount)+activeSortTextPostfix);}}
function processFilterReply(reply){if(generateItemsInJS){processFilterReplyAndGenerateItems(reply);return;}
$('.meetup-cta').hide();$('.sign-up-cta').hide();if(activeView=='map'){clearAllMapMarkers();}
else{$('.view.'+activeView+' .item:not(.head)').removeClass('show').removeClass('show-now').removeClass('show-later');layoutItemsReset();}
maxItemsToDisplay=25;html='';slugs=reply.slugs;if(!empty(reply.temperaturesC)){temperaturesC=reply.temperaturesC;month=$('.filter.month .choice.active').text();for(var key in temperaturesC){$('.item.'+key+' .temperature .metric').text(temperaturesC[key]+'Â°C in '+month);$('.item.'+key+' .temperature .imperial').text(celsiusToFahrenheit(temperaturesC[key])+'Â°F in '+month);}}
filteredSlugsThatAreActuallyOnThisPage=[];for(i=0;i<slugs.length;i++){slug=slugs[i];if(pageItems.indexOf(slug)>-1){filteredSlugsThatAreActuallyOnThisPage.push(slug);}}
slugs=filteredSlugsThatAreActuallyOnThisPage;for(i=0;i<slugs.length;i++){slug=slugs[i];if(activeView=='map'){}
else{if(activeSort!=defaultSort||activeSortOrder!=defaultSortOrder){that='.view.'+activeView+' .item.'+slug+'';var thatElement=$(that);thatElement.find('.rank').text(i+1);html=html+"\n"+thatElement.outerHTML();}
else{that='.view.'+activeView+' .item.'+slug+'';var thatElement=$(that);thatElement.find('.rank').text(i+1);if(i<10){thatElement.addClass('show show-now')}
else if(i<maxItemsToDisplay){thatElement.addClass('show show-now');}
else{thatElement.addClass('show show-later');}}}
if((i+1)==slugs.length){hideLoading();if(activeView=='map'){}
else{if(activeSort!=defaultSort&&activeSortOrder!=defaultSortOrder){htmlBufferOfItemsRemovedAfterFiltering=$('.view.'+activeView+' .item:not(.show-now)').html();$('.view.'+activeView+' .item:not(.show-now)').remove();}
refreshLayout();}}}}
function clearAllMapMarkersMapbox(){if(empty(mapboxMarkers))return;mapboxMarkers.forEach(function(marker){marker.remove();});mapboxMarkers=[];mapMarkers=[];}
function clearAllMapMarkers(){clearAllMapMarkersMapbox();return;}
function messUpString(string){string=btoa(unescape(encodeURIComponent(string)));splitString=string.split('');newString='';possible="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";for(var i=0;i<splitString.length;i+=1){newString=newString+splitString[i]+possible.charAt(Math.floor(Math.random()*possible.length));}
return newString;}
function emojiToUnicode(str){str=str.replace(/\ufe0f|\u200d/gm,'');var i=0,c=0,p=0,r=[];while(i<str.length){c=str.charCodeAt(i++);if(p){r.push((65536+(p-55296<<10)+(c-56320)).toString(16));p=0;}else if(55296<=c&&c<=56319){p=c;}else{r.push(c.toString(16));}}
return r.join('-');}
function translateRatingToWord(rating){if(rating<2){return 'bad';}
else if(rating<3){return 'bad';}
else if(rating<4){return 'okay';}
else if(rating<5){return 'good';}
else if(rating<6){return 'great';}}
function arrayToObject(arr){var rv={};for(var i=0;i<arr.length;++i)
rv[i]=arr[i];return rv;}
function clone(obj){if(null==obj||"object"!=typeof obj)return obj;var copy=obj.constructor();for(var attr in obj){if(obj.hasOwnProperty(attr))copy[attr]=clone(obj[attr]);}
return copy;}
function removeOutliers(someArray){var values=someArray.concat();values.sort(function(a,b){return a-b;});var q1=values[Math.floor((values.length/4))];var q3=values[Math.ceil((values.length*(3/4)))];var iqr=q3-q1;var maxValue=q3+iqr*1.5;var minValue=q1-iqr*1.5;var filteredValues=values.filter(function(x){return(x<maxValue)&&(x>minValue);});return filteredValues;}
function setSelfMapMarker(){if(!mapIsLoaded)return;if(activeView!='map')return;$('.self-map-marker').remove();if(empty(userLatitude)||empty(userLongitude)){consoleLog('Empty lngLat for user');return;}
lngLat=new mapboxgl.LngLat(userLongitude,userLatitude);pos=map.project(lngLat);x=pos.x;y=pos.y;$('.map-markers').append('<div class="marker self-map-marker" style="left:'+x+'px;top:'+y+'px;"></div>');}
function normalize(val,min,max){if(min<0){max+=0-min;val+=0-min;min=0;}
val=val-min;max=max-min;return Math.max(0,Math.min(1,val/max));}
function openFilters(){$('html').removeClass('filters-folded');setCookie('filters-folded','no',86400*365);$('html').animate({scrollTop:$('html').scrollTop()-$('body').css('padding-top')},0);}
function closeFilters(){$('html').addClass('filters-folded');setCookie('filters-folded','yes',86400*365);}
function preloadImage(source,destElem){var image=new Image();image.src=source;image.onload=function(){var cssBackground='url('+image.src+')';$(destElem).css('background-image',cssBackground);};}
window.addEventListener("message",receiveMessage,false);function receiveMessage(e){if(e.data=='login'){$('.action-open-login-modal').trigger('click');}}
function put3dItemsDataOnMap(){consoleLog('put3dItemsDataOnMap');if(!mapIsLoaded){consoleLog('put3dItemsDataOnMap: map not loaded yet');return;}
if(!empty(current3dDataMapID)){consoleLog('put3dItemsDataOnMap: 3d layer already exists: '+current3dDataMapID);try{map.removeLayer(current3dDataMapID);map.removeLayer(current3dDataMapID+'_highlight');map.removeSource('highlight');}catch(error){}
current3dDataMapID='';}
clearAllMapMarkers();if(empty(itemsData)){consoleLog('put3dItemsDataOnMap: itemsData empty');return;}
if(empty(itemsData.cities)){consoleLog('put3dItemsDataOnMap: itemsData.cities empty');return;}
if(!$('html').hasClass('filters-folded')&&windowSize().width>700){leftPaddingBounds=$('.filters').width()/2;}
current3dDataMapID='_nomadlist_fill_'+time();features=[];var alreadyUsedLngLat={};map3dBounds=new mapboxgl.LngLatBounds();minNormalizedScore=Infinity;maxNormalizedScore=-Infinity;if(itemType=='city'){var dataToUse=itemsData.cities;}
else if(itemType=='region'){var dataToUse=itemsData.regions;}
else if(itemType=='country'){var dataToUse=itemsData.countries;}
for(var i=0;i<dataToUse.length;i+=1){item=dataToUse[i];if(activeSortOrder=='asc'){score=5-item[activeSortAttributeToShow+'_normalized']*5;}
else{score=item[activeSortAttributeToShow+'_normalized']*5;}
normalizedScore=((score/5*100));if(normalizedScore<minNormalizedScore){minNormalizedScore=normalizedScore;}
if(normalizedScore>maxNormalizedScore){maxNormalizedScore=normalizedScore;}}
for(var i=0;i<dataToUse.length;i+=1){item=dataToUse[i];longitude=parseFloat(item['longitude']);latitude=parseFloat(item['latitude']);data=item[activeSortAttributeToShow];color='';if(activeSortOrder=='asc'){score=5-item[activeSortAttributeToShow+'_normalized']*5;}
else{score=item[activeSortAttributeToShow+'_normalized']*5;}
normalizedScore=((score/5*100));normalizedScoreNotRounded=normalizedScore;normalizedScore=Math.round(normalizedScore/10)*10;if(normalizedScore>100)normalizedScore=100;if(normalizedScore<0)normalizedScore=0;if(isNaN(normalizedScore))normalizedScore=100
if(normalizedScoreNotRounded<10)normalizedScoreNotRounded=10;normalizedScoreNotRounded=Math.pow(normalizedScoreNotRounded,1.2);normalizedScoreColor=normalizedScore;if(activeSortAttributeDefaultOrder!=activeSortOrder){normalizedScoreColor=100-normalizedScoreColor;}
colors={'100':'#2bde73','90':'#6ff066','80':'#91e861','70':'#b3de58','60':'#d6d552','50':'#f9cd4a','40':'#f9b54a','30':'#f99d4c','20':'#f9874e','10':'#fa6f4c','0':'#ff4742'};color=colors[normalizedScoreColor];if(isNaN(normalizedScoreNotRounded))continue;if(empty(normalizedScoreNotRounded))continue;if(item['latitude']<-55||item['latitude']>55){}
else{if(empty(item['latitude'])||empty(item['longitude'])){consoleLog('Empty lngLat for item '+item['name']);continue;}
map3dBounds.extend(new mapboxgl.LngLat(item['longitude'],item['latitude']));}
height=parseInt(normalizedScoreNotRounded*5000);if(activeSortAttributeToShow=='altitude'){height=item[activeSortAttributeToShow]*200;}
feature={'type':'Feature','properties':{'name':item['name'],'data':data,'short_slug':item['short_slug'],'height':height,'opacity:':normalizedScoreNotRounded,'color':color},'geometry':{'coordinates':[[[longitude+1,latitude+1],[longitude-1,latitude+1],[longitude-1,latitude-1],[longitude+1,latitude-1],[longitude+1,latitude+1]]],'type':'Polygon'}};features.push(feature);}
try{if(map.getLayer(current3dDataMapID)){map.removeLayer(current3dDataMapID);}
map.addLayer({'id':current3dDataMapID,'type':'fill-extrusion','source':{'type':'geojson','data':{'type':'FeatureCollection','features':features}},'layout':{},'paint':{'fill-extrusion-color':{type:'identity',property:'color'},'fill-extrusion-height':{type:'identity',property:'height'},'fill-extrusion-base':0,'fill-extrusion-opacity':0.75}});if(map.getSource('highlight')){map.removeSource('highlight');}
map.addSource('highlight',{'type':'geojson','data':{'type':'FeatureCollection','features':[]}});if(map.getLayer(current3dDataMapID+'_highlight')){map.removeLayer(current3dDataMapID+'_highlight');}
map.addLayer({'id':current3dDataMapID+'_highlight','type':'fill-extrusion','source':'highlight','layout':{},'paint':{'fill-extrusion-color':'#ffffff','fill-extrusion-height':{type:'identity',property:'height'},'fill-extrusion-base':0,'fill-extrusion-opacity':1}});}catch(error){}
map.on('dragstart',function(e){$('.tooltip-ui').hide();})
map.on('mousemove',function(e){if(!mapIs3d)return;if(mapIs3dCountries){features=map.queryRenderedFeatures(e.point,{layers:[current3dCountriesDataMapID]});}
else if(mapIs3d){features=map.queryRenderedFeatures(e.point,{layers:[current3dDataMapID]});}
if(empty(features)){$('.tooltip-ui').hide();map.getSource('highlight').setData({'type':'FeatureCollection','features':[]});$('.mapboxgl-canvas-container').removeClass('cursor-pointer');return;}
$('.mapboxgl-canvas-container').addClass('cursor-pointer');feature=features[0];displayText=feature['properties']['data'];if(is_numeric(displayText)&&activeSortDataType=='ratio'){displayText=number_format((displayText),2);}
else if(is_numeric(displayText)&&activeSortDataType!='score'){displayText=number_format((displayText));}
else if(is_numeric(displayText)&&activeSortDataType=='score'){displayText=(number_format(displayText,2))+'/5';}
else if(is_numeric(displayText)&&activeSortDataType=='percentage'){displayText=number_format(Math.round(displayText))+'%';}
if(!empty(activeSortTextPrefix)&&isset(displayText)){displayText=activeSortTextPrefix+displayText;}
if(!empty(activeSortTextPostfix)&&isset(displayText)){displayText=displayText+activeSortTextPostfix;}
map.getSource('highlight').setData(feature);if(typeof displayText==='undefined'){displayText='No data';}
$('.tooltip-ui').text(feature['properties']['name']+': '+displayText);$('.tooltip-ui').css('top',e.point.y);$('.tooltip-ui').css('left',e.point.x-($('.tooltip-ui').width()/2));$('.tooltip-ui').show();});map.on('click',function(e){consoleLog('map.on(click, function(e){');if(!mapIs3d)return;if($('html').hasClass('city-modal-open'))return;features=map.queryRenderedFeatures(e.point,{layers:[current3dDataMapID]});if(empty(features)){return;}
feature=features[0];if(itemType=='city'){if(!empty(feature['properties']['short_slug'])){openItemModal(feature['properties']['short_slug']);}}
else if(itemType=='country'||itemType=='region'){window.open('/map/'+feature['properties']['short_slug']);}});if(map.getZoom()>8){map.setZoom(8);}
if(windowSize().width<600){map.setZoom(map.getZoom()+1);}
if(typeof centerLatitude==='undefined')centerLatitude='';if(typeof centerLongitude==='undefined')centerLongitude='';if(empty(centerLatitude)&&empty(centerLongitude)){map.fitBounds(map3dBounds,{animate:false,padding:{top:100,bottom:100,left:(100+leftPaddingBounds),right:100},duration:0});}}
function waitUntilStyleIsLoadedToPut3dItemsDataOnMap(){consoleLog('waitUntilStyleIsLoadedToPut3dItemsDataOnMap');setTimeout(function(){if(map.isStyleLoaded()){put3dItemsDataOnMap();}
else{waitUntilStyleIsLoadedToPut3dItemsDataOnMap();}},100);}
function hasEmojis(string){if(empty(string))return false;var regex=/(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|[\ud83c[\ude01\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|[\ud83c[\ude32\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|[\ud83c[\ude50\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;stringWithoutEmojis=string.replace(regex,'');if(string==stringWithoutEmojis)return false;return true;}
function processFilterReplyAndGenerateChart(){consoleLog('processFilterReplyAndGenerateChart');if(activeChartX=='users_now')activeChartX=activeChartX+'_count';if(activeChartX=='users_been')activeChartX=activeChartX+'_count';if(activeChartY=='users_now')activeChartY=activeChartY+'_count';if(activeChartY=='users_been')activeChartY=activeChartY+'_count';$('.view').css('opacity',0.5);if(!chartJSIsLoaded){$.getScript('/chartjs-with-datalabels.js',function(data,textStatus,jqxhr){chartJSIsLoaded=true;processFilterReplyAndGenerateChart();});return;}
if(chart)chart.destroy();$('#chart-container').text('');var ctx=document.getElementById("chart-container").getContext('2d');document.getElementById("chart-container").onclick=function(evt){var activePoint=chart.getElementAtEvent(evt);if(typeof activePoint!=='undefined'){if(typeof activePoint[0]!=='undefined'){var short_slug=chart_config['data']['datasets'][activePoint[0]['_datasetIndex']]['data'][activePoint[0]['_index']]['short_slug'];if(itemType=='country'||itemType=='region'||isCountryLevelData||isCountryLevelDataX||isCountryLevelDataY){window.open('/'+short_slug+'/chart?chart_x='+activeChartX+'&chart_y='+activeChartY);}
else if(!empty(short_slug)&&itemType=='city'){openItemModal(short_slug);}}}};if($('.sort-by').length==1){$('.filter-actions .sort-by').before(str_replace('sort-by','sort-by sort-by-chart-x',$('.sort-by').outerHTML()));$('.sort-by.sort-by-chart-x option[data-sort="'+activeChartX+'"]').prop('selected',true);}
if(empty(itemsData.cities)){updateItemsToMatchFilter();return;}
if(itemType=='city'){chartDataToUse=itemsData.cities.concat(0);}
else if(itemType=='country'){chartDataToUse=itemsData.countries.concat(0);}
else if(itemType=='region'){chartDataToUse=itemsData.regions.concat(0);}
isCountryLevelData=false;isCountryLevelDataX=false;isCountryLevelDataY=false;if(itemType=='city'&&itemsData.cities.length>1){itemsDataByCountryX={};itemsDataByCountryY={};itemsDataByCountry=[];itemsByCountry={};isCountryLevelData=false;isCountryLevelDataX=true;isCountryLevelDataY=true;for(var i=0;i<itemsData.cities.length;i++){thisCityData=itemsData.cities[i];var x=parseFloat(thisCityData[activeChartX]);var y=parseFloat(thisCityData[activeChartY]);if(!is_numeric(x)||!is_numeric(y)){continue;}
if(thisCityData['name']=='Hong Kong'||thisCityData['name']=='Macau'||thisCityData['name']=='Liberia'){continue;}
if(typeof itemsByCountry[thisCityData['country']]==='undefined'){itemsByCountry[thisCityData['country']]=[];}
itemsByCountry[thisCityData['country']].push(thisCityData);if(typeof itemsDataByCountryX[thisCityData['country']]!=='undefined'){if(parseFloat(itemsDataByCountryX[thisCityData['country']])!=x){isCountryLevelDataX=false;}
else{itemsDataByCountryX[thisCityData['country']]=x;}}
else{itemsDataByCountryX[thisCityData['country']]=x;}
if(typeof itemsDataByCountryY[thisCityData['country']]!=='undefined'){if(parseFloat(itemsDataByCountryY[thisCityData['country']])!=y){isCountryLevelDataY=false;}
else{itemsDataByCountryY[thisCityData['country']]=y;}}
else{itemsDataByCountryY[itemsData.cities[i]['country']]=y;}}
if(isCountryLevelDataX&&!isCountryLevelDataY){$('.chart-note').html("Note: data for "+$('.sort-by.sort-by-chart-x select').find(':selected').text()+' is limited to country data, but data for '+$('.sort-by:not(.sort-by-chart-x) select').find(':selected').text()+' is city data.<br/>');}
else if(!isCountryLevelDataX&&isCountryLevelDataY){$('.chart-note').html("Note: data for "+$('.sort-by:not(.sort-by-chart-x) select').find(':selected').text()+' is limited to country data, but data for '+$('.sort-by.sort-by-chart-x select').find(':selected').text()+' is city data.<br/>');}
else{$('.chart-note').text('');}
if(isCountryLevelDataX||isCountryLevelDataY){chartDataToUse=itemsData.countries.concat(0);}}
var data=[];var dataPerRegion=[];var dataX=[];var dataY=[];var labels=[];var short_labels=[];var short_slugs=[];var regionLabels=[];var colors=[];outlierSize=1.5;bubbleHasDynamicSize=false;showPopulationAsBubble=false;showNomadScoreAsBubble=false;if($('.chart-show-population-as-bubble-size input').prop('checked')){var showPopulationAsBubble=true;var bubbleHasDynamicSize=true;}
else if($('.chart-show-nomad-score-as-bubble-size input').prop('checked')){var showNomadScoreAsBubble=true;var bubbleHasDynamicSize=true;}
if($('.chart-show-labels input').prop('checked')){var showLabels=true;}
else{var showLabels=false;}
windowWidth=windowSize().width;windowHeight=windowSize().height;if(windowWidth<700){minimumPointSize=normalize(windowWidth,0,700)*5;}
else{minimumPointSize=5;}
for(var i=0;i<chartDataToUse.length;i++){var x=parseFloat(chartDataToUse[i][activeChartX]);var y=parseFloat(chartDataToUse[i][activeChartY]);if(isNaN(x)){consoleLog(chartDataToUse[i]['name'],activeChartX+'='+x,chartDataToUse[i]);continue;}
if(isNaN(y)){consoleLog(chartDataToUse[i]['name'],activeChartY+'='+y,chartDataToUse[i]);continue;}
if(!isset(x))continue;if(!isset(y))continue;if(empty(chartDataToUse[i]['name']))continue;if(showPopulationAsBubble){if(itemType=='region'){var r=Math.pow(normalize(chartDataToUse[i]['population'],1000000,50000000000),0.5)*20*minimumPointSize+3;}
else if(isCountryLevelDataX||isCountryLevelDataY||itemType=='country'){var r=Math.pow(normalize(chartDataToUse[i]['population'],1000000,500000000),0.5)*14*minimumPointSize+3;}
else{var r=normalize(chartDataToUse[i]['population'],100000,10000000)*7*minimumPointSize+3;}
if(empty(chartDataToUse[i]['population']))r=minimumPointSize;}
else if(showNomadScoreAsBubble){var r=Math.pow(chartDataToUse[i][defaultSort],5)/40;if(empty(chartDataToUse[i][defaultSort]))r=minimumPointSize;}
else{r=minimumPointSize;}
if(activeChartX=='users_now')x=chartDataToUse[i][activeChartX+'_count'];if(activeChartX=='users_been')x=chartDataToUse[i][activeChartX+'_count'];if(activeChartY=='users_now')y=chartDataToUse[i][activeChartY+'_count'];if(activeChartY=='users_been')y=chartDataToUse[i][activeChartY+'_count'];var label='';var short_label='';if(!empty(chartDataToUse[i]['state_code'])){var short_label=chartDataToUse[i]['name']+', '+chartDataToUse[i]['state_code'];}
else{var short_label=chartDataToUse[i]['name'];}
if(isCountryLevelData){var short_slug=chartDataToUse[i]['short_slug'];var label=chartDataToUse[i]['name'];}
else{var short_slug=chartDataToUse[i]['short_slug'];if(!empty(chartDataToUse[i]['country'])){var label=short_label+', '+chartDataToUse[i]['country'];}}
if(chartDataToUse[i]['name']==chartDataToUse[i]['country']){var label=chartDataToUse[i]['country'];}
var region=chartDataToUse[i]['region'];var opacity=0.75;if(isCountryLevelData){var opacity=0.65;}
var color='rgba(255,71,66,'+opacity+')';if(chartDataToUse[i]['region']=='Europe')color='rgba(66,150,255,'+opacity+')';if(chartDataToUse[i]['region']=='Asia')color='rgba(255,71,66,'+opacity+')';if(chartDataToUse[i]['region']=='Africa')color='rgba(255,201,36,'+opacity+')';if(chartDataToUse[i]['region']=='Middle East')color='rgba(255,66,153,'+opacity+')';if(chartDataToUse[i]['region']=='Latin America')color='rgba(39,140,80,'+opacity+')';if(chartDataToUse[i]['region']=='North America')color='rgba(43,222,115,'+opacity+')';if(chartDataToUse[i]['region']=='Oceania')color='rgba(44,47,149,'+opacity+')';if(chartDataToUse[i]['region']=='Antarctica')color='rgba(238,238,238,'+opacity+')';if(typeof dataPerRegion[region]==='undefined')dataPerRegion[region]=[];if(!is_numeric(x)||!is_numeric(y)){if(!is_numeric(x)){consoleLog('x is not numeric: ',activeChartX,chartDataToUse[i][activeChartX],x)}
if(!is_numeric(y)){consoleLog('y is not numeric: ',activeChartY,chartDataToUse[i][activeChartY],y)}
continue;}
data.push({'x':x,'y':y,'r':r,'color':color,'label':label,'short_slug':short_slug,'short_label':short_label,'region':region});dataPerRegion[region].push({'x':x,'y':y,'r':r,'color':color,'short_slug':short_slug,'short_label':short_label,'label':label,'region':region});dataX.push(x);dataY.push(y);labels.push(label);short_slugs.push(short_slug);short_labels.push(short_label);regionLabels.push(region);colors.push(color);}
if(empty(data)){consoleLog("No data available for this chart combo");$('.chart-branding').text("No data");hideLoading();$('.view').css('opacity',1);return;}
else{if($('.chart-branding').data('html')){$('.chart-branding').html($('.chart-branding').data('html'));}}
if($('.chart-hide-outliers-x input').prop('checked')){requestAnimationFrame(function(){$('.loading_spinner-general .loading_message').text("âœï¸ Removing outliers on X axis...");$('.loading_spinner-general .loading_message').show();$('.loading_spinner-general').addClass('show');});var newData=[];var values=data.concat();var newValues=[];for(var i=0;i<values.length;i++){if(values[i]['x']==0)continue;newValues.push(values[i]);}
values=newValues;values.sort(function(a,b){return a.x-b.x;});var q1=values[Math.floor((values.length/4))]['x'];var q3=values[Math.ceil((values.length*(3/4)))]['x'];var iqr=(q3-q1);consoleLog('outliers values',values);var maxValue=q3+iqr*outlierSize;var minValue=q1-iqr*outlierSize;for(var i=0;i<values.length;i++){value=values[i]['x'];if((value<=maxValue)&&(value>=minValue)){newData.push(values[i]);}
else{consoleLog('Removing outlier for X outside '+minValue+' and '+maxValue,values[i]);}}
data=newData.concat();}
if($('.chart-hide-outliers-y input').prop('checked')){requestAnimationFrame(function(){$('.loading_spinner-general .loading_message').text("âœï¸ Removing outliers on Y axis...");$('.loading_spinner-general .loading_message').show();$('.loading_spinner-general').addClass('show');});var newData=[];var values=data.concat();var newValues=[];for(var i=0;i<values.length;i++){if(values[i]['x']==0)continue;newValues.push(values[i]);}
values=newValues;values.sort(function(a,b){return a.y-b.y;});var q1=values[Math.floor((values.length/4))]['y'];var q3=values[Math.ceil((values.length*(3/4)))]['y'];var iqr=q3-q1;var maxValue=q3+iqr*outlierSize;var minValue=q1-iqr*outlierSize;for(var i=0;i<values.length;i++){value=values[i]['y'];if((value<=maxValue)&&(value>=minValue)){newData.push(values[i]);}
else{}}
data=newData.concat();}
var dataX=[];var dataY=[];for(var i=0;i<data.length;i++){x=data[i]['x'];y=data[i]['y'];dataX.push(x);dataY.push(y);}
var scaleTypeX='linear';var scaleTypeY='linear';var minRotationX=0;var minRotationY=0;if($('.chart-logarithmic-x input').prop('checked')){scaleTypeX='logarithmic';minRotationX=30;}
if($('.chart-logarithmic-y input').prop('checked')){scaleTypeY='logarithmic';minRotationY=30;}
var minDataY=min(dataY);var maxDataY=max(dataY);var minDataX=min(dataX);var maxDataX=max(dataX);var XIsBinary;var YIsBinary;if(minDataX==0&&maxDataX==1){consoleLog('x is binary value');XIsBinary=true;minDataX=minDataX-0.25;maxDataX=maxDataX+0.25;}
if(minDataY==0&&maxDataY==1){consoleLog('y is binary value');minDataY=minDataY-0.25;maxDataY=maxDataY+0.25;YIsBinary=true;}
var pearsonCorrelationCoefficient=findPearsonCorrelation(dataX,dataY);var probs=stats_rtop(pearsonCorrelationCoefficient,dataX.length);var pValue;var pValueDisplay;var degreesOfFreedom;var trueCorrelation;if(!empty(probs)){var pValue=probs['ttp'];if(pValue<=0.001){pValueDisplay='â‰¤ 0.001';}
else if(pValue<=0.01){pValueDisplay='â‰¤ 0.01';}
else if(pValue<=0.05){pValueDisplay='â‰¤ 0.05';}
else{pValueDisplay='= '+number_format(pValue,2);}
var degreesOfFreedom=probs['t'];var trueCorrelation=probs['t'];}
var statsInLegendData=[];if(pValue<=0.05){var fittedDataExponential=[];if(scaleTypeX!='logarithmic'&&scaleTypeY!='logarithmic'){consoleLog("Finding exponential fit...");requestAnimationFrame(function(){$('.loading_spinner-general .loading_message').text("ðŸ“ Finding exponential fit...");$('.loading_spinner-general .loading_message').show();$('.loading_spinner-general').addClass('show');});var array=expRegression(dataX,dataY);var base=array[0];var coefficient=array[1];var fitX=[];var fitY=[];var x=min(dataX);if(!is_numeric(coefficient)||!is_numeric(base)){var fittedDataExponential=[];}
else{if(max(dataX)>10000000){incrementer=100000;}
else if(max(dataX)>1000000){incrementer=10000;}
else if(max(dataX)>100000){incrementer=1000;}
else if(max(dataX)>10000){incrementer=100;}
else if(max(dataX)>1000){incrementer=10;}
else if(max(dataX)<10){incrementer=0.1;}
else{incrementer=1;}
while(x<=(max(dataX)*2)){y=coefficient*Math.pow(base,x);fittedDataExponential.push({'x':x,'y':y});x=x+incrementer;}
var fittedFormulaExponential='y = '+number_format(coefficient,4)+' * '+number_format(base)+'^x';}
if(empty(fittedDataExponential)){consoleLog("Did not find an exponential fit");}
else{consoleLog("Found an exponential fit! "+fittedFormulaExponential);}}
if(empty(fittedDataExponential)){consoleLog("Finding linear fit...");requestAnimationFrame(function(){$('.loading_spinner-general .loading_message').text("ðŸ“ Finding linear fit...");$('.loading_spinner-general .loading_message').show();$('.loading_spinner-general').addClass('show');});var array=linear_regression_pairs(dataX,dataY)
var fitX=array[0];var fitY=array[1];var fitFormulaM=array[2];var fitFormulaB=array[3];if(!is_numeric(fitFormulaM)||!is_numeric(fitFormulaB)){var fittedDataLinear=[];}
else if(fitFormulaM<0.01&&fitFormulaM>-0.01&&fitFormulaB<0.01&&fitFormulaB>-0.01){var fittedDataLinear=[];}
else{var fittedDataLinear=[];fittedDataIncrementer=maxDataX/10;if(fittedDataIncrementer<1)fittedDataIncrementer=1;consoleLog('fittedDataIncrementer',fittedDataIncrementer);for(var fX=min(dataX);fX<max(dataX)*10;fX=fX+fittedDataIncrementer){if(scaleTypeX=='logarithmic'&&scaleTypeY=='logarithmic'){fittedDataLinear.push({'x':fX,'y':fX*fitFormulaM});}
else{fittedDataLinear.push({'x':fX,'y':fX*fitFormulaM+fitFormulaB});}}
consoleLog('fittedDataLinear',fittedDataLinear);var fittedFormulaLinear='y = x * '+number_format(fitFormulaM,4)+' + '+number_format(fitFormulaB);}
if(empty(fittedDataLinear)){consoleLog("Did not find a linear fit either, not showing fit line");}
else{consoleLog("Found a linear fit! "+fittedFormulaLinear);}}
consoleLog('fittedDataLinear',fittedDataLinear);var diffLinear=0;var diffExponential=0;for(var i=0;i<data.length;i++){x=data[i]['x'];y=data[i]['y'];yCalc=x*fitFormulaM+fitFormulaB;diffYAndYCalc=Math.abs(yCalc-y);diffLinear=diffLinear+Math.pow(diffYAndYCalc,2);}
chartBorderColor=getComputedStyle(document.documentElement).getPropertyValue('--input-border-color');statsInLegendData.push({pointRadius:0,type:'line',borderWidth:2,borderDash:[5,5],fill:false,borderColor:chartBorderColor,label:'Significant correlation:',z:2,order:2});if(!empty(fittedDataLinear)){statsInLegendData.push({pointRadius:0,type:'line',fill:false,borderWidth:2,borderDash:[5,5],borderColor:chartBorderColor,label:'  '+fittedFormulaLinear,data:fittedDataLinear,z:2,order:2});}
if(!empty(fittedDataExponential)){statsInLegendData.push({pointRadius:0,type:'line',borderWidth:2,fill:false,borderDash:[5,5],borderColor:chartBorderColor,label:'  '+fittedFormulaExponential,data:fittedDataExponential,z:2,order:2});}
if(!empty(pearsonCorrelationCoefficient)){statsInLegendData.push({pointRadius:0,type:'line',borderWidth:2,borderDash:[5,5],fill:false,borderColor:chartBorderColor,label:'  '+'ð‘Ÿ = '+number_format(pearsonCorrelationCoefficient,2),z:2,order:2});}
if(!empty(pValue)){statsInLegendData.push({pointRadius:0,type:'line',borderWidth:2,borderDash:[5,5],fill:false,borderColor:chartBorderColor,label:'  '+'p-value '+pValueDisplay,z:2,order:2});statsInLegendData.push({pointRadius:0,borderWidth:2,borderDash:[5,5],type:'line',fill:false,borderColor:chartBorderColor,label:'  '+'ð‘› = '+number_format(dataX.length),z:2,order:2});}}
else{}
labels=[];colors=[];regionLabels=[];dataPerRegion=[];for(var i=0;i<data.length;i++){colors.push(data[i]['color']);labels.push(data[i]['label']);short_labels.push(data[i]['short_labels']);regionLabels.push(data[i]['region']);region=data[i]['region'];if(typeof dataPerRegion[region]==='undefined')dataPerRegion[region]=[];if(XIsBinary&&minDataY==maxDataY){data[i]['x']=data[i]['x']-0.1+Math.random()*0.2;data[i]['y']=data[i]['y']-0.1+Math.random()*0.2;}
else if(YIsBinary&&minDataX==maxDataX){data[i]['x']=data[i]['x']-0.1+Math.random()*0.2;data[i]['y']=data[i]['y']-0.1+Math.random()*0.2;}
else if(XIsBinary&&YIsBinary){data[i]['x']=data[i]['x']-0.1+Math.random()*0.2;data[i]['y']=data[i]['y']-0.1+Math.random()*0.2;}
else if(XIsBinary){data[i]['x']=data[i]['x']-0.1+Math.random()*0.2;}
else if(YIsBinary){data[i]['y']=data[i]['y']-0.1+Math.random()*0.2;}
dataPerRegion[region].push(data[i]);}
consoleLog('dataPerRegion',dataPerRegion);var datasets=[];for(key in dataPerRegion){var labels=[];for(var i=0;i<dataPerRegion[key].length;i++){labels.push(dataPerRegion[key][i]['label']);}
datasets.push({backgroundColor:dataPerRegion[key][0]['color'],label:key,data:dataPerRegion[key],labels:labels,short_labels:short_labels,borderWidth:0,borderColor:dataPerRegion[key][0]['color'],z:1,order:1});}
datasets=datasets.concat(statsInLegendData);var labelX='';var labelY='';var prefixX='';var prefixY='';var postfixX='';var postfixY='';labelX=$('.sort-by.sort-by-chart-x select').find(':selected').text();labelY=$('.sort-by:not(.sort-by-chart-x) select').find(':selected').text();if(!empty($('.sort-by.sort-by-chart-x select').find(':selected').data('prefix'))){labelX=labelX+' '+$('.sort-by.sort-by-chart-x select').find(':selected').data('prefix').trim()+'';prefixX=$('.sort-by.sort-by-chart-x select').find(':selected').data('prefix');}
if(!empty($('.sort-by.sort-by-chart-x select').find(':selected').data('postfix'))){labelX=labelX+' ('+$('.sort-by.sort-by-chart-x select').find(':selected').data('postfix').trim()+')';postfixX=' ('+$('.sort-by.sort-by-chart-x select').find(':selected').data('postfix')+')';}
if(!empty($('.sort-by:not(.sort-by-chart-x) select').find(':selected').data('prefix'))){labelY=labelY+' ('+$('.sort-by:not(.sort-by-chart-x) select').find(':selected').data('prefix').trim()+')';prefixY=$('.sort-by:not(.sort-by-chart-x) select').find(':selected').data('prefix');}
if(!empty($('.sort-by:not(.sort-by-chart-x) select').find(':selected').data('postfix'))){labelY=labelY+' ('+$('.sort-by:not(.sort-by-chart-x) select').find(':selected').data('postfix').trim()+')';postfixY=' ('+$('.sort-by:not(.sort-by-chart-x) select').find(':selected').data('postfix')+')';}
if(XIsBinary){labelX=labelX+' (0 is false, 1 is true; noise was added to give 0/1 values space)';}
if(YIsBinary){labelY=labelY+' (0 is false, 1 is true; noise was added to give 0/1 values space)';}
consoleLog('labelX',labelX);consoleLog('labelY',labelY);if(windowSize().width<1400){legendPosition='bottom';}
else{legendPosition='right';}
$('.loading_spinner-general .loading_message').text("ðŸ“ˆ Drawing chart...");$('.loading_spinner-general .loading_message').show();$('.loading_spinner-general').addClass('show');consoleLog('minDataX',minDataX);consoleLog('minDataY',minDataY);consoleLog('maxDataX',maxDataX);consoleLog('maxDataY',maxDataY);maxDataX=maxDataX+(0.2*Math.abs(minDataX-maxDataX));maxDataY=maxDataY+(0.2*Math.abs(minDataY-maxDataY));if(minDataX<0){minDataX=minDataX-(0.2*Math.abs(minDataX-maxDataX));}
if(scaleTypeX=='logarithmic')maxDataX=maxDataX*3;if(scaleTypeY=='logarithmic')maxDataY=maxDataY*3;consoleLog('scaleTypeX',scaleTypeX);consoleLog('scaleTypeY',scaleTypeY);chart_config={type:'bubble',data:{datasets:datasets},options:{hover:{onHover:function(e){var point=this.getElementAtEvent(e);if(point.length)e.target.style.cursor='pointer';else e.target.style.cursor='default';}},plugins:{datalabels:{anchor:function(context){var value=context.dataset.data[context.dataIndex];if(value['r']>30&&bubbleHasDynamicSize&&value['short_label'].length<11){return 'center';}
else{return 'end';}},align:function(context){var value=context.dataset.data[context.dataIndex];if(value['r']>30&&bubbleHasDynamicSize&&value['short_label'].length<11){return 'center';}
else{return 'end';}},offset:function(context){var value=context.dataset.data[context.dataIndex];if(value['r']>30&&bubbleHasDynamicSize&&value['short_label'].length<11){return '';}
else{return 10;}},color:function(context){var value=context.dataset.data[context.dataIndex];if(value['r']>30&&bubbleHasDynamicSize&&value['short_label'].length<11){return 'rgba(255,255,255,'+(opacity+0.15)+')';}
else{return context.dataset.backgroundColor;}},font:{'family':'Nunito'},formatter:function(value){if(!showLabels)return '';if(typeof value['short_label']=='string'){return value['short_label'];}
else{return '';}},offset:2,padding:0}},'backgroundColor':'#fff',legend:{labels:{fontFamily:"Nunito",fontColor:'#6f6f6f',fontSize:15},onClick:function(event,legendItem){},display:true,position:legendPosition},maintainAspectRatio:false,animation:false,responsive:true,tooltips:{mode:'nearest',callbacks:{label:function(tooltipItem,data){var label=data['datasets'][tooltipItem.datasetIndex]['data'][tooltipItem.index]['label'];return[label,labelX+': '+number_format(tooltipItem.xLabel,2),labelY+': '+number_format(tooltipItem.yLabel,2)];}}},scales:{xAxes:[{type:scaleTypeX,autoSkip:true,categoryPercentage:1.0,barPercentage:1.0,id:"x1",position:"bottom",gridLines:{display:true,drawBorder:false,color:getComputedStyle(document.documentElement).getPropertyValue('--input-border-color'),zeroLineColor:getComputedStyle(document.documentElement).getPropertyValue('--input-border-color')},scaleLabel:{fontSize:15,padding:4,fontFamily:"Nunito",fontColor:'#6f6f6f',fontStyle:800,display:true,labelString:labelX},ticks:{padding:0,fontFamily:"Nunito",fontColor:'#6f6f6f',fontSize:15,min:minDataX,max:maxDataX,labelOffset:18,callback:function(t){if(t>=1000000000){t=prefixX+number_format(Math.floor(t/1000000000))+'B';}
else if(t>=1000000){t=prefixX+number_format(Math.floor(t/1000000))+'M';}
else if(t>=1000){t=prefixX+number_format(Math.floor(t/1000))+'k';}
else if(t<=5){t=prefixX+number_format(t,2);}
else{t=prefixX+number_format(Math.floor(t));}
return t;}},afterBuildTicks:function(chart){if(scaleTypeX=='logarithmic'){chart.ticks=[];var tick=0.01;chart.ticks.push(0);while(tick<=maxDataX){if(tick>=minDataX){chart.ticks.push(tick);}
tick=tick*10;}}}}],yAxes:[{type:scaleTypeY,label:'Y axis',gridLines:{display:true,drawBorder:false,color:getComputedStyle(document.documentElement).getPropertyValue('--input-border-color'),zeroLineColor:getComputedStyle(document.documentElement).getPropertyValue('--input-border-color')},id:"y1",position:"left",scaleLabel:{fontSize:15,padding:4,fontStyle:800,fontFamily:"Nunito",fontColor:'#6f6f6f',display:true,labelString:labelY},ticks:{min:minDataY,max:maxDataY,autoSkip:true,padding:0,fontFamily:"Nunito",fontColor:'#6f6f6f',fontSize:15,callback:function(t){if(t>=1000000000){t=prefixY+number_format(Math.floor(t/1000000000))+'B';}
else if(t>=1000000){t=prefixY+number_format(Math.floor(t/1000000))+'M';}
else if(t>=1000){t=prefixY+number_format(Math.floor(t/1000))+'k';}
else if(t<=5){t=prefixY+number_format(t,2);}
else{t=prefixY+number_format(Math.floor(t));}
return t;}},afterBuildTicks:function(chart){if(scaleTypeY=='logarithmic'){chart.ticks=[];chart.ticks.push(0);var tick=0.01;while(tick<=maxDataY){if(tick>=minDataY){chart.ticks.push(tick);}
tick=tick*10;}}}}]}}};chart=new Chart(ctx,chart_config);consoleLog(datasets);requestAnimationFrame(function(){hideLoading();$('.loading_spinner-general .loading_message').text('').hide();$('.view').css('opacity',1);});updateSlug();}
function linear_regression_pairs(values_x,values_y){var sum_x=0;var sum_y=0;var sum_xy=0;var sum_xx=0;var count=0;var x=0;var y=0;var values_length=values_x.length;if(values_length!=values_y.length){throw new Error('The parameters values_x and values_y need to have same size!');}
if(values_length===0){return[[],[]];}
for(var v=0;v<values_length;v++){x=parseFloat(values_x[v]);if(isNaN(x)){}
if(isNaN(y)){}
y=parseFloat(values_y[v]);sum_x=sum_x+x;sum_y=sum_y+y;sum_xx=sum_xx+x*x;sum_xy=sum_xy+x*y;count++;}
var m=(count*sum_xy-sum_x*sum_y)/(count*sum_xx-sum_x*sum_x);var b=(sum_y/count)-(m*sum_x)/count;var result_values_x=[];var result_values_y=[];for(var v=0;v<values_length;v++){x=values_x[v];y=x*m+b;result_values_x.push(x);result_values_y.push(y);}
return[result_values_x,result_values_y,m,b];}
function min(){var ar
var retVal
var i=0
var n=0
var argv=arguments
var argc=argv.length
var _obj2Array=function(obj){if(Object.prototype.toString.call(obj)==='[object Array]'){return obj}
var ar=[]
for(var i in obj){if(obj.hasOwnProperty(i)){ar.push(obj[i])}}
return ar}
var _compare=function(current,next){var i=0
var n=0
var tmp=0
var nl=0
var cl=0
if(current===next){return 0}else if(typeof current==='object'){if(typeof next==='object'){current=_obj2Array(current)
next=_obj2Array(next)
cl=current.length
nl=next.length
if(nl>cl){return 1}else if(nl<cl){return-1}
for(i=0,n=cl;i<n;++i){tmp=_compare(current[i],next[i])
if(tmp===1){return 1}else if(tmp===-1){return-1}}
return 0}
return-1}else if(typeof next==='object'){return 1}else if(isNaN(next)&&!isNaN(current)){if(current===0){return 0}
return(current<0?1:-1)}else if(isNaN(current)&&!isNaN(next)){if(next===0){return 0}
return(next>0?1:-1)}
if(next===current){return 0}
return(next>current?1:-1)}
if(argc===0){throw new Error('At least one value should be passed to min()')}else if(argc===1){if(typeof argv[0]==='object'){ar=_obj2Array(argv[0])}else{throw new Error('Wrong parameter count for min()')}
if(ar.length===0){throw new Error('Array must contain at least one element for min()')}}else{ar=argv}
retVal=ar[0]
for(i=1,n=ar.length;i<n;++i){if(_compare(retVal,ar[i])===-1){retVal=ar[i]}}
return retVal}
function max(){var ar
var retVal
var i=0
var n=0
var argv=arguments
var argc=argv.length
var _obj2Array=function(obj){if(Object.prototype.toString.call(obj)==='[object Array]'){return obj}else{var ar=[]
for(var i in obj){if(obj.hasOwnProperty(i)){ar.push(obj[i])}}
return ar}}
var _compare=function(current,next){var i=0
var n=0
var tmp=0
var nl=0
var cl=0
if(current===next){return 0}else if(typeof current==='object'){if(typeof next==='object'){current=_obj2Array(current)
next=_obj2Array(next)
cl=current.length
nl=next.length
if(nl>cl){return 1}else if(nl<cl){return-1}
for(i=0,n=cl;i<n;++i){tmp=_compare(current[i],next[i])
if(tmp===1){return 1}else if(tmp===-1){return-1}}
return 0}
return-1}else if(typeof next==='object'){return 1}else if(isNaN(next)&&!isNaN(current)){if(current===0){return 0}
return(current<0?1:-1)}else if(isNaN(current)&&!isNaN(next)){if(next===0){return 0}
return(next>0?1:-1)}
if(next===current){return 0}
return(next>current?1:-1)}
if(argc===0){throw new Error('At least one value should be passed to max()')}else if(argc===1){if(typeof argv[0]==='object'){ar=_obj2Array(argv[0])}else{throw new Error('Wrong parameter count for max()')}
if(ar.length===0){throw new Error('Array must contain at least one element for max()')}}else{ar=argv}
retVal=ar[0]
for(i=1,n=ar.length;i<n;++i){if(_compare(retVal,ar[i])===1){retVal=ar[i]}}
return retVal}
function regression(x,y,typ){var type=(typ==null)?'linear':typ;var N=x.length;var slope;var intercept;var SX=0;var SY=0;var SXX=0;var SXY=0;var SYY=0;var Y=[];var X=[];if(type=='linear'){X=x;Y=y;}
else if(type=='exp'||type=='exponential'){for(var i=0;i<y.length;i++){if(y[i]<=0){N--;}
else{X.push(x[i]);Y.push(Math.log(y[i]));}}}
for(var i=0;i<N;i++){SX=SX+X[i];SY=SY+Y[i];SXY=SXY+X[i]*Y[i];SXX=SXX+X[i]*X[i];SYY=SYY+Y[i]*Y[i];}
slope=(N*SXY-SX*SY)/(N*SXX-SX*SX);intercept=(SY-slope*SX)/N;return[slope,intercept];}
function linearRegression(X,Y){var ret;ret=regression(X,Y,'linear');return[ret[0],ret[1]];}
function expRegression(X,Y){var ret;var x=X;var y=Y;ret=regression(x,y,'exp');var base=Math.exp(ret[0]);var coeff=Math.exp(ret[1]);return[base,coeff];}
function fitData(data,typ){var type=(typ==null)?'linear':typ;var ret;var res;var x=[];var y=[];var ypred=[];for(i=0;i<data.length;i++){if(data[i]!=null&&data[i][0]!=null&&data[i][1]!=null){x.push(data[i][0]);y.push(data[i][1]);}}
if(type=='linear'){ret=linearRegression(x,y);for(var i=0;i<x.length;i++){res=ret[0]*x[i]+ret[1];ypred.push([x[i],res]);}}
else if(type=='exp'||type=='exponential'){ret=expRegression(x,y);for(var i=0;i<x.length;i++){res=ret[1]*Math.pow(ret[0],x[i]);ypred.push([x[i],res]);}}
return{data:ypred,slope:ret[0],intercept:ret[1]};}
function findPearsonCorrelation(dataX,dataY){var si=[];for(var i=0;i<dataX.length;i++){if(dataY[i])si.push(i);}
var n=si.length;if(n==0)return 0;var sum1=0;for(var i=0;i<si.length;i++)sum1+=dataX[si[i]];var sum2=0;for(var i=0;i<si.length;i++)sum2+=dataY[si[i]];var sum1Sq=0;for(var i=0;i<si.length;i++){sum1Sq+=Math.pow(dataX[si[i]],2);}
var sum2Sq=0;for(var i=0;i<si.length;i++){sum2Sq+=Math.pow(dataY[si[i]],2);}
var pSum=0;for(var i=0;i<si.length;i++){pSum+=dataX[si[i]]*dataY[si[i]];}
var num=pSum-(sum1*sum2/n);var den=Math.sqrt((sum1Sq-Math.pow(sum1,2)/n)*(sum2Sq-Math.pow(sum2,2)/n));if(den==0)return 0;return num/den;}
function stats_rtop(r,n){if(parseFloat(r)>=1)
{return false;}
else if(parseFloat(n)<6)
{return false;}
else
{$('#err').html('');$('#er').html('');var t=0,d=0,df=0,sq=0;d=Math.sqrt((1-(r*r))/(n-2));t=r/d;df=parseFloat(n-2);var df1=df;var tva=t;var ttp=stats_TtoP(tva,df1);var otp=ttp/2;return{'t':t,'df':df,'otp':otp,'ttp':ttp,};}}
function stats_TtoP(t,df)
{with(Math)
{var abst=abs(t),tsq=t*t,p;if(df==1)
{p=1-2*atan(abst)/PI;}
else if(df==2)
{p=1-abst/sqrt(tsq+2);}
else if(df==3)
{p=1-2*(atan(abst/sqrt(3))+abst*sqrt(3)/(tsq+3))/PI;}
else if(df==4)
{p=1-abst*(1+2/(tsq+4))/sqrt(tsq+4);}
else
{var z=stats_TtoZ(abst,df);if(df>4)
{p=stats_Norm_p(z);}
else
{p=stats_Norm_p(z);}}}
return p;}
function stats_TtoZ(t,df)
{var A9=df-0.5;var B9=48*A9*A9;var T9=t*t/df,Z8,P7,B7,z;with(Math)
{if(T9>=0.04)
{Z8=A9*log(1+T9);}
else
{Z8=A9*(((1-T9*0.75)*T9/3-0.5)*T9+1)*T9;}
P7=((0.4*Z8+3.3)*Z8+24)*Z8+85.5;B7=0.8*pow(Z8,2)+100+B9;z=(1+(-P7/B7+Z8+3)/B9)*sqrt(Z8);return z;}}
function stats_Norm_p(z)
{var absz=Math.abs(z);var a1=0.0000053830;var a2=0.0000488906;var a3=0.0000380036;var a4=0.0032776263;var a5=0.0211410061;var a6=0.0498673470;var p=(((((a1*absz+a2)*absz+a3)*absz+a4)*absz+a5)*absz+a6)*absz+1;p=Math.pow(p,-16);return p;}
function blendColors(c0,c1,p){var f=parseInt(c0.slice(1),16),t=parseInt(c1.slice(1),16),R1=f>>16,G1=f>>8&0x00FF,B1=f&0x0000FF,R2=t>>16,G2=t>>8&0x00FF,B2=t&0x0000FF;return "#"+(0x1000000+(Math.round((R2-R1)*p)+R1)*0x10000+(Math.round((G2-G1)*p)+G1)*0x100+(Math.round((B2-B1)*p)+B1)).toString(16).slice(1);}
function lightenColor(color,percent){color=color.substr(1);var num=parseInt(color,16),amt=Math.round(2.55*percent*100),R=(num>>16)+amt,B=(num>>8&0x00FF)+amt,G=(num&0x0000FF)+amt;return '#'+(0x1000000+(R<255?R<1?0:R:255)*0x10000+(B<255?B<1?0:B:255)*0x100+(G<255?G<1?0:G:255)).toString(16).slice(1);}