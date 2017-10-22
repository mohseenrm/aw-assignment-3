const fs = require('fs');

const data = `
<!DOCTYPE html>
<html class="client-nojs" lang="en" dir="ltr">
<head>
<meta charset="UTF-8"/>
<title>Java Programming - Wikibooks, open books for an open world</title>
<script>document.documentElement.className = document.documentElement.className.replace( /(^|\s)client-nojs(\s|$)/, "$1client-js$2" );</script>
<script>(window.RLQ=window.RLQ||[]).push(function(){mw.config.set({"wgCanonicalNamespace":"Category","wgCanonicalSpecialPageName":false,"wgNamespaceNumber":14,"wgPageName":"Category:Book:Java_Programming","wgTitle":"Book:Java Programming","wgCurRevisionId":3241601,"wgRevisionId":3241601,"wgArticleId":57954,"wgIsArticle":true,"wgIsRedirect":false,"wgAction":"view","wgUserName":null,"wgUserGroups":["*"],"wgCategories":["Pages with template loops","Book categories","Subject:Java programming language"],"wgBreakFrames":false,"wgPageContentLanguage":"en","wgPageContentModel":"wikitext","wgSeparatorTransformTable":["",""],"wgDigitTransformTable":["",""],"wgDefaultDateFormat":"dmy","wgMonthNames":["","January","February","March","April","May","June","July","August","September","October","November","December"],"wgMonthNamesShort":["","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"wgRelevantPageName":"Category:Book:Java_Programming","wgRelevantArticleId":57954,"wgRequestId":"WesE6ApAIDUAAGTL@0UAAABP","wgIsProbablyEditable":true,"wgRelevantPageIsProbablyEditable":true,"wgRestrictionEdit":[],"wgRestrictionMove":[],"wgFlaggedRevsParams":{"tags":{"value":{"levels":3,"quality":2,"pristine":3}}},"wgStableRevisionId":null,"wgWikiEditorEnabledModules":{"toolbar":true,"preview":false,"publish":false},"wgBetaFeaturesFeatures":[],"wgMediaViewerOnClick":true,"wgMediaViewerEnabledByDefault":false,"wgVisualEditor":{"pageLanguageCode":"en","pageLanguageDir":"ltr","pageVariantFallbacks":"en","usePageImages":false,"usePageDescriptions":true},"wgPreferredVariant":"en","wgMFExpandAllSectionsUserOption":false,"wgMFDisplayWikibaseDescriptions":{"search":true,"nearby":true,"watchlist":true,"tagline":false},"wgULSCurrentAutonym":"English","wgNoticeProject":"wikibooks","wgCentralNoticeCookiesToDelete":[],"wgCentralNoticeCategoriesUsingLegacy":["Fundraising","fundraising"],"wgCategoryTreePageCategoryOptions":"{\"mode\":0,\"hideprefix\":20,\"showcount\":true,\"namespaces\":false}","wgCentralAuthMobileDomain":false,"wgCodeMirrorEnabled":false,"wgVisualEditorToolbarScrollOffset":0,"wgVisualEditorUnsupportedEditParams":["undo","undoafter","veswitched"],"wgEditSubmitButtonLabelPublish":true});mw.loader.state({"ext.globalCssJs.user.styles":"ready","ext.globalCssJs.site.styles":"ready","site.styles":"ready","noscript":"ready","user.styles":"ready","user":"ready","user.options":"ready","user.tokens":"loading","ext.inputBox.styles":"ready","mediawiki.ui.input":"ready","mediawiki.ui.checkbox":"ready","mediawiki.action.view.categoryPage.styles":"ready","ext.categoryTree.css":"ready","mediawiki.helplink":"ready","wikibase.client.init":"ready","ext.visualEditor.desktopArticleTarget.noscript":"ready","ext.uls.interlanguage":"ready","ext.wikimediaBadges":"ready","ext.tmh.thumbnail.styles":"ready","skins.vector.styles.experimental.print":"ready","mediawiki.legacy.shared":"ready","mediawiki.legacy.commonPrint":"ready","mediawiki.sectionAnchor":"ready","mediawiki.skinning.interface":"ready","skins.vector.styles":"ready","ext.globalCssJs.user":"ready","ext.globalCssJs.site":"ready"});mw.loader.implement("user.tokens@1dqfd7l",function ( $, jQuery, require, module ) {
mw.user.tokens.set({"editToken":"+\\","patrolToken":"+\\","watchToken":"+\\","csrfToken":"+\\"});/*@nomin*/

});mw.loader.load(["ext.categoryTree","site","mediawiki.page.startup","mediawiki.user","mediawiki.hidpi","mediawiki.page.ready","mediawiki.searchSuggest","ext.gadget.wikidialog","ext.gadget.commons-file","ext.centralauth.centralautologin","ext.visualEditor.desktopArticleTarget.init","ext.visualEditor.targetLoader","ext.eventLogging.subscriber","ext.wikimediaEvents","ext.navigationTiming","ext.uls.eventlogger","ext.uls.init","ext.uls.compactlinks","ext.uls.interface","ext.centralNotice.geoIP","ext.centralNotice.startUp","mw.MediaWikiPlayer.loader","mw.PopUpMediaTransform","skins.vector.js"]);});</script>
<link rel="stylesheet" href="/w/load.php?debug=false&amp;lang=en&amp;modules=ext.categoryTree.css%7Cext.inputBox.styles%7Cext.tmh.thumbnail.styles%7Cext.uls.interlanguage%7Cext.visualEditor.desktopArticleTarget.noscript%7Cext.wikimediaBadges%7Cmediawiki.action.view.categoryPage.styles%7Cmediawiki.helplink%2CsectionAnchor%7Cmediawiki.legacy.commonPrint%2Cshared%7Cmediawiki.skinning.interface%7Cmediawiki.ui.checkbox%2Cinput%7Cskins.vector.styles%7Cskins.vector.styles.experimental.print%7Cwikibase.client.init&amp;only=styles&amp;skin=vector"/>
<script async="" src="/w/load.php?debug=false&amp;lang=en&amp;modules=startup&amp;only=scripts&amp;skin=vector"></script>
<meta name="ResourceLoaderDynamicStyles" content=""/>
<link rel="stylesheet" href="/w/load.php?debug=false&amp;lang=en&amp;modules=site.styles&amp;only=styles&amp;skin=vector"/>
<meta name="generator" content="MediaWiki 1.31.0-wmf.4"/>
<meta name="referrer" content="origin-when-cross-origin"/>
<link rel="alternate" type="application/x-wiki" title="Edit" href="/w/index.php?title=Category:Book:Java_Programming&amp;action=edit"/>
<link rel="edit" title="Edit" href="/w/index.php?title=Category:Book:Java_Programming&amp;action=edit"/>
<link rel="shortcut icon" href="/static/favicon/wikibooks.ico"/>
<link rel="search" type="application/opensearchdescription+xml" href="/w/opensearch_desc.php" title="Wikibooks (en)"/>
<link rel="EditURI" type="application/rsd+xml" href="//en.wikibooks.org/w/api.php?action=rsd"/>
<link rel="license" href="//creativecommons.org/licenses/by-sa/3.0/"/>
<link rel="alternate" type="application/atom+xml" title="Wikibooks Atom feed" href="/w/index.php?title=Special:RecentChanges&amp;feed=atom"/>
<link rel="canonical" href="https://en.wikibooks.org/wiki/Category:Book:Java_Programming"/>
<link rel="dns-prefetch" href="//login.wikimedia.org"/>
<link rel="dns-prefetch" href="//meta.wikimedia.org" />
<!--[if lt IE 9]><script src="/w/load.php?debug=false&amp;lang=en&amp;modules=html5shiv&amp;only=scripts&amp;skin=vector&amp;sync=1"></script><![endif]-->
</head>
<body class="mediawiki ltr sitedir-ltr mw-hide-empty-elt ns-14 ns-subject page-Category_Book_Java_Programming rootpage-Category_Book_Java_Programming vector-experimental-print-styles vector-nav-directionality skin-vector action-view">		<div id="mw-page-base" class="noprint"></div>
		<div id="mw-head-base" class="noprint"></div>
		<div id="content" class="mw-body" role="main">
			<a id="top"></a>

							<div id="siteNotice" class="mw-body-content"><!-- CentralNotice --></div>
						<div class="mw-indicators mw-body-content">
<div id="mw-indicator-mw-helplink" class="mw-indicator"><a href="//www.mediawiki.org/wiki/Special:MyLanguage/Help:Categories" target="_blank" class="mw-helplink">Help</a></div>
</div>
			<h1 id="firstHeading" class="firstHeading" lang="en"><span style="display:block;text-align:center;font-size:300%;font-style:italic;line-height:1em;">Java Programming</span></h1>
									<div id="bodyContent" class="mw-body-content">
									<div id="siteSub" class="noprint">From Wikibooks, open books for an open world</div>
								<div id="contentSub"></div>
												<div id="jump-to-nav" class="mw-jump">
					Jump to:					<a href="#mw-head">navigation</a>, 					<a href="#p-search">search</a>
				</div>
				<div id="mw-content-text" lang="en" dir="ltr" class="mw-content-ltr"><div class="mw-parser-output"><p>This category contains pages that are part of the <i><b><a href="/wiki/Java_Programming" title="Java Programming">Java Programming</a></b></i> book. If a page of the book isn't showing here, please add text <code>{{bookcat}}</code> to the end of the page concerned. You can view a list of all subpages under the book main page (not including the book main page itself), regardless of whether they're categorized, <a href="/wiki/Special:PrefixIndex/Java_Programming/" title="Special:PrefixIndex/Java Programming/">here</a>.</p>


<!-- 
NewPP limit report
Parsed by mw1262
Cached time: 20171020202613
Cache expiry: 86400
Dynamic content: true
CPU time usage: 0.148 seconds
Real time usage: 0.190 seconds
Preprocessor visited node count: 3828/1000000
Preprocessor generated node count: 0/1500000
Post‐expand include size: 71081/2097152 bytes
Template argument size: 6611/2097152 bytes
Highest expansion depth: 27/40
Expensive parser function count: 7/500
Lua time usage: 0.045/10.000 seconds
Lua memory usage: 1.41 MB/50 MB
-->
<!--
Transclusion expansion time report (%,ms,calls,template)
100.00%  186.649      1 -total
 87.61%  163.523      6 Template:Evalx
 80.93%  151.060     13 Template:BookCat
 77.35%  144.375      1 Template:BookCat/category
 76.47%  142.730      1 Template:BookCat/category/subjects
 65.54%  122.324      1 Java_Programming
 24.49%   45.717      5 Template:ROOTBOOKNAME
 23.71%   44.248      3 Template:ROOTBOOKNAME/core
 22.50%   41.989      1 Java_Programming/Topics
 21.45%   40.035      1 Template:Book_category_header
-->
</div>
<!-- Saved in parser cache with key enwikibooks:pcache:idhash:57954-0!canonical and timestamp 20171020202613 and revision id 3241601
 -->
<div class="mw-category-generated" lang="en" dir="ltr"><div id="mw-subcategories">
<h2>Related categories</h2>
<p>The following 7 related categories may be of interest, out of 7 total.
</p><div lang="en" dir="ltr" class="mw-content-ltr"><div class="mw-category"><div class="mw-category-group"><h3>A</h3>
<ul><li><div class="CategoryTreeSection"><div class="CategoryTreeItem"><span class="CategoryTreeEmptyBullet">► </span> <a class="CategoryTreeLabel  CategoryTreeLabelNs14 CategoryTreeLabelCategory" href="/wiki/Category:Book:Java_Programming/Annotations">Book:Java Programming/Annotations</a>‎ <span title="Contains 0 subcategories, 4 pages, and 0 files" dir="ltr">(4 pages)</span></div>
		<div class="CategoryTreeChildren" style="display:none"></div></div>
		</li>
<li><div class="CategoryTreeSection"><div class="CategoryTreeItem"><span class="CategoryTreeEmptyBullet">► </span> <a class="CategoryTreeLabel  CategoryTreeLabelNs14 CategoryTreeLabelCategory" href="/wiki/Category:Book:Java_Programming/API">Book:Java Programming/API</a>‎ <span title="Contains 0 subcategories, 5 pages, and 0 files" dir="ltr">(5 pages)</span></div>
		<div class="CategoryTreeChildren" style="display:none"></div></div>
		</li>
<li><div class="CategoryTreeSection"><div class="CategoryTreeItem"><span class="CategoryTreeEmptyBullet">► </span> <a class="CategoryTreeLabel  CategoryTreeLabelNs14 CategoryTreeLabelCategory" href="/wiki/Category:Book:Java_Programming/Applets">Book:Java Programming/Applets</a>‎ <span title="Contains 0 subcategories, 4 pages, and 0 files" dir="ltr">(4 pages)</span></div>
		<div class="CategoryTreeChildren" style="display:none"></div></div>
		</li></ul></div><div class="mw-category-group"><h3>G</h3>
<ul><li><div class="CategoryTreeSection"><div class="CategoryTreeItem"><span class="CategoryTreeEmptyBullet">► </span> <a class="CategoryTreeLabel  CategoryTreeLabelNs14 CategoryTreeLabelCategory" href="/wiki/Category:Book:Java_Programming/Graphics">Book:Java Programming/Graphics</a>‎ <span title="Contains 0 subcategories, 3 pages, and 0 files" dir="ltr">(3 pages)</span></div>
		<div class="CategoryTreeChildren" style="display:none"></div></div>
		</li></ul></div><div class="mw-category-group"><h3>K</h3>
<ul><li><div class="CategoryTreeSection"><div class="CategoryTreeItem"><span class="CategoryTreeEmptyBullet">► </span> <a class="CategoryTreeLabel  CategoryTreeLabelNs14 CategoryTreeLabelCategory" href="/wiki/Category:Book:Java_Programming/Keywords">Book:Java Programming/Keywords</a>‎ <span title="Contains 0 subcategories, 52 pages, and 0 files" dir="ltr">(52 pages)</span></div>
		<div class="CategoryTreeChildren" style="display:none"></div></div>
		</li></ul></div><div class="mw-category-group"><h3>T</h3>
<ul><li><div class="CategoryTreeSection"><div class="CategoryTreeItem"><span class="CategoryTreeEmptyBullet">► </span> <a class="CategoryTreeLabel  CategoryTreeLabelNs14 CategoryTreeLabelCategory" href="/wiki/Category:Book:Java_Programming/Templates">Book:Java Programming/Templates</a>‎ <span title="Contains 0 subcategories, 106 pages, and 0 files" dir="ltr">(106 pages)</span></div>
		<div class="CategoryTreeChildren" style="display:none"></div></div>
		</li>
<li><div class="CategoryTreeSection"><div class="CategoryTreeItem"><span class="CategoryTreeEmptyBullet">► </span> <a class="CategoryTreeLabel  CategoryTreeLabelNs14 CategoryTreeLabelCategory" href="/wiki/Category:Book:Java_Programming/Tutorials">Book:Java Programming/Tutorials</a>‎ <span title="Contains 0 subcategories, 1 page, and 0 files" dir="ltr">(1 page)</span></div>
		<div class="CategoryTreeChildren" style="display:none"></div></div>
		</li></ul></div></div></div>
</div><div id="mw-pages">
<h2><table class="wikitable" style="float: right; clear: both; margin: 0 0 .5em 1em;">
<tr>
<th> More recent additions </th>
<th> More recent modifications
</th></tr>
<tr>
<td style="font-size:0.9em;"> <ol>
<li><a href="/wiki/Java_Programming/TOC" title="Java Programming/TOC">Java Programming/TOC</a></li> 
<li><a href="/wiki/Java_Programming/Print_version2" title="Java Programming/Print version2">Java Programming/Print version2</a></li> 
<li><a href="/wiki/Java_Programming/Graphics/Understanding_gradients" title="Java Programming/Graphics/Understanding gradients">Java Programming/Graphics/Understanding gradients</a></li> 
<li><a href="/wiki/Java_Programming/Inheritance" title="Java Programming/Inheritance">Java Programming/Inheritance</a></li> 
<li><a href="/wiki/Java_Programming/Coding_conventions" title="Java Programming/Coding conventions">Java Programming/Coding conventions</a></li> 
<li><a href="/wiki/Java_Programming/Map" title="Java Programming/Map">Java Programming/Map</a></li> 
<li><a href="/wiki/Java_Programming/Invoking_C" title="Java Programming/Invoking C">Java Programming/Invoking C</a></li> 
<li><a href="/wiki/Java_Programming/Java_Native_Interface" title="Java Programming/Java Native Interface">Java Programming/Java Native Interface</a></li> 
<li><a href="/wiki/Java_Programming/ArrayList" title="Java Programming/ArrayList">Java Programming/ArrayList</a></li> 
<li><a href="/wiki/Java_Programming/Installation" title="Java Programming/Installation">Java Programming/Installation</a></li></ol>
</td>
<td style="font-size:0.9em;"> <ol>
<li><a href="/wiki/Java_Programming/Print_version" title="Java Programming/Print version">Java Programming/Print version</a></li> 
<li><a href="/wiki/Java_Programming/Compilation" title="Java Programming/Compilation">Java Programming/Compilation</a></li> 
<li><a href="/wiki/Java_Programming/Q%26A" title="Java Programming/Q&amp;A">Java Programming/Q&amp;A</a></li> 
<li><a href="/wiki/Java_Programming" title="Java Programming">Java Programming</a></li> 
<li><a href="/wiki/Java_Programming/Print_version2" title="Java Programming/Print version2">Java Programming/Print version2</a></li> 
<li><a href="/wiki/Java_Programming/Database_Programming" title="Java Programming/Database Programming">Java Programming/Database Programming</a></li> 
<li><a href="/wiki/Java_Programming/Scope" title="Java Programming/Scope">Java Programming/Scope</a></li> 
<li><a href="/wiki/Java_Programming/Annotations/Introduction" title="Java Programming/Annotations/Introduction">Java Programming/Annotations/Introduction</a></li> 
<li><a href="/wiki/Java_Programming/Invoking_C" title="Java Programming/Invoking C">Java Programming/Invoking C</a></li> 
<li><a href="/wiki/Java_Programming/Java_IDEs" title="Java Programming/Java IDEs">Java Programming/Java IDEs</a></li></ol>
</td></tr></table>
</h2>
<p>The following 118 pages are in this category, out of 118 total.
</p><div lang="en" dir="ltr" class="mw-content-ltr"><div class="mw-category"><div class="mw-category-group"><h3>&#160;</h3>
<ul><li><a href="/wiki/Java_Programming" title="Java Programming">Java Programming</a></li></ul></div><div class="mw-category-group"><h3>3</h3>
<ul><li><a href="/wiki/Java_Programming/3D_Programming" title="Java Programming/3D Programming">Java Programming/3D Programming</a></li></ul></div><div class="mw-category-group"><h3>A</h3>
<ul><li><a href="/wiki/Java_Programming/About_This_Book" title="Java Programming/About This Book">Java Programming/About This Book</a></li>
<li><a href="/wiki/Java_Programming/Aggregate" title="Java Programming/Aggregate">Java Programming/Aggregate</a></li>
<li><a href="/wiki/Java_Programming/Annotations" title="Java Programming/Annotations">Java Programming/Annotations</a></li>
<li><a href="/wiki/Java_Programming/Annotations/Compiler_and_Annotations" title="Java Programming/Annotations/Compiler and Annotations">Java Programming/Annotations/Compiler and Annotations</a></li>
<li><a href="/wiki/Java_Programming/Annotations/Custom_Annotations" title="Java Programming/Annotations/Custom Annotations">Java Programming/Annotations/Custom Annotations</a></li>
<li><a href="/wiki/Java_Programming/Annotations/Introduction" title="Java Programming/Annotations/Introduction">Java Programming/Annotations/Introduction</a></li>
<li><a href="/wiki/Java_Programming/Annotations/Meta-Annotations" title="Java Programming/Annotations/Meta-Annotations">Java Programming/Annotations/Meta-Annotations</a></li>
<li><a href="/wiki/Java_Programming/API/java.lang.String" title="Java Programming/API/java.lang.String">Java Programming/API/java.lang.String</a></li>
<li><a href="/wiki/Java_Programming/Applets" title="Java Programming/Applets">Java Programming/Applets</a></li>
<li><a href="/wiki/Java_Programming/Applets/Event_Listeners" title="Java Programming/Applets/Event Listeners">Java Programming/Applets/Event Listeners</a></li>
<li><a href="/wiki/Java_Programming/Applets/Graphics_and_Media" title="Java Programming/Applets/Graphics and Media">Java Programming/Applets/Graphics and Media</a></li>
<li><a href="/wiki/Java_Programming/Applets/Overview" title="Java Programming/Applets/Overview">Java Programming/Applets/Overview</a></li>
<li><a href="/wiki/Java_Programming/Applets/User_Interface" title="Java Programming/Applets/User Interface">Java Programming/Applets/User Interface</a></li>
<li><a href="/wiki/Java_Programming/Arithmetic_expressions" title="Java Programming/Arithmetic expressions">Java Programming/Arithmetic expressions</a></li>
<li><a href="/wiki/Java_Programming/ArrayList" title="Java Programming/ArrayList">Java Programming/ArrayList</a></li>
<li><a href="/wiki/Java_Programming/Arrays" title="Java Programming/Arrays">Java Programming/Arrays</a></li></ul></div><div class="mw-category-group"><h3>B</h3>
<ul><li><a href="/wiki/Java_Programming/Basic_IO" title="Java Programming/Basic IO">Java Programming/Basic IO</a></li>
<li><a href="/wiki/Java_Programming/Basic_Synchronization" title="Java Programming/Basic Synchronization">Java Programming/Basic Synchronization</a></li>
<li><a href="/wiki/Java_Programming/Boolean_expressions" title="Java Programming/Boolean expressions">Java Programming/Boolean expressions</a></li>
<li><a href="/wiki/Java_Programming/Byte_Code" title="Java Programming/Byte Code">Java Programming/Byte Code</a></li></ul></div><div class="mw-category-group"><h3>C</h3>
<ul><li><a href="/wiki/Java_Programming/Canvas" title="Java Programming/Canvas">Java Programming/Canvas</a></li>
<li><a href="/wiki/Java_Programming/Checked_Exceptions" title="Java Programming/Checked Exceptions">Java Programming/Checked Exceptions</a></li>
<li><a href="/wiki/Java_Programming/Classes_and_Objects" title="Java Programming/Classes and Objects">Java Programming/Classes and Objects</a></li>
<li><a href="/wiki/Java_Programming/Classes,_Objects_and_Types" title="Java Programming/Classes, Objects and Types">Java Programming/Classes, Objects and Types</a></li>
<li><a href="/wiki/Java_Programming/Client_Server" title="Java Programming/Client Server">Java Programming/Client Server</a></li>
<li><a href="/wiki/Java_Programming/Coding_conventions" title="Java Programming/Coding conventions">Java Programming/Coding conventions</a></li>
<li><a href="/wiki/Java_Programming/Collection" title="Java Programming/Collection">Java Programming/Collection</a></li>
<li><a href="/wiki/Java_Programming/Comments" title="Java Programming/Comments">Java Programming/Comments</a></li>
<li><a href="/wiki/Java_Programming/Comparing_Objects" title="Java Programming/Comparing Objects">Java Programming/Comparing Objects</a></li>
<li><a href="/wiki/Java_Programming/Compilation" title="Java Programming/Compilation">Java Programming/Compilation</a></li>
<li><a href="/wiki/Java_Programming/Concurrent_Programming" title="Java Programming/Concurrent Programming">Java Programming/Concurrent Programming</a></li>
<li><a href="/wiki/Java_Programming/Conditional_blocks" title="Java Programming/Conditional blocks">Java Programming/Conditional blocks</a></li>
<li><a href="/wiki/Java_Programming/Contributors" title="Java Programming/Contributors">Java Programming/Contributors</a></li>
<li><a href="/wiki/Java_Programming/Conventions" title="Java Programming/Conventions">Java Programming/Conventions</a></li></ul></div><div class="mw-category-group"><h3>D</h3>
<ul><li><a href="/wiki/Java_Programming/Database_Programming" title="Java Programming/Database Programming">Java Programming/Database Programming</a></li>
<li><a href="/wiki/Java_Programming/Defining_Classes" title="Java Programming/Defining Classes">Java Programming/Defining Classes</a></li>
<li><a href="/wiki/Java_Programming/Design_Patterns" title="Java Programming/Design Patterns">Java Programming/Design Patterns</a></li></ul></div><div class="mw-category-group"><h3>E</h3>
<ul><li><a href="/wiki/Java_Programming/EJB" title="Java Programming/EJB">Java Programming/EJB</a></li>
<li><a href="/wiki/Java_Programming/Event_Handling" title="Java Programming/Event Handling">Java Programming/Event Handling</a></li>
<li><a href="/wiki/Java_Programming/Exceptions" title="Java Programming/Exceptions">Java Programming/Exceptions</a></li>
<li><a href="/wiki/Java_Programming/Execution" title="Java Programming/Execution">Java Programming/Execution</a></li></ul></div><div class="mw-category-group"><h3>G</h3>
<ul><li><a href="/wiki/Java_Programming/Generics" title="Java Programming/Generics">Java Programming/Generics</a></li>
<li><a href="/wiki/Java_Programming/Getting_started" title="Java Programming/Getting started">Java Programming/Getting started</a></li>
<li><span class="redirect-in-category"><a href="/wiki/Java_Programming/Getting_Started" class="mw-redirect" title="Java Programming/Getting Started">Java Programming/Getting Started</a></span></li>
<li><a href="/wiki/Java_Programming/Glossary" title="Java Programming/Glossary">Java Programming/Glossary</a></li>
<li><a href="/wiki/Java_Programming/Graphics" title="Java Programming/Graphics">Java Programming/Graphics</a></li>
<li><a href="/wiki/Java_Programming/Graphics/Drawing_complex_shapes" title="Java Programming/Graphics/Drawing complex shapes">Java Programming/Graphics/Drawing complex shapes</a></li>
<li><a href="/wiki/Java_Programming/Graphics/Drawing_shapes" title="Java Programming/Graphics/Drawing shapes">Java Programming/Graphics/Drawing shapes</a></li>
<li><a href="/wiki/Java_Programming/Graphics/Drawing_text" title="Java Programming/Graphics/Drawing text">Java Programming/Graphics/Drawing text</a></li>
<li><a href="/wiki/Java_Programming/Graphics/Understanding_gradients" title="Java Programming/Graphics/Understanding gradients">Java Programming/Graphics/Understanding gradients</a></li></ul></div><div class="mw-category-group"><h3>H</h3>
<ul><li><a href="/wiki/Java_Programming/History" title="Java Programming/History">Java Programming/History</a></li></ul></div><div class="mw-category-group"><h3>I</h3>
<ul><li><a href="/wiki/Java_Programming/Index" title="Java Programming/Index">Java Programming/Index</a></li>
<li><a href="/wiki/Java_Programming/Inheritance" title="Java Programming/Inheritance">Java Programming/Inheritance</a></li>
<li><a href="/wiki/Java_Programming/Installation" title="Java Programming/Installation">Java Programming/Installation</a></li>
<li><a href="/wiki/Java_Programming/Interfaces" title="Java Programming/Interfaces">Java Programming/Interfaces</a></li>
<li><a href="/wiki/Java_Programming/Invoking_C" title="Java Programming/Invoking C">Java Programming/Invoking C</a></li></ul></div><div class="mw-category-group"><h3>J</h3>
<ul><li><a href="/wiki/Java_Programming/Java_IDEs" title="Java Programming/Java IDEs">Java Programming/Java IDEs</a></li>
<li><a href="/wiki/Java_Programming/Java_Native_Interface" title="Java Programming/Java Native Interface">Java Programming/Java Native Interface</a></li>
<li><a href="/wiki/Java_Programming/Java_Overview" title="Java Programming/Java Overview">Java Programming/Java Overview</a></li>
<li><a href="/wiki/Java_Programming/Java_Security" title="Java Programming/Java Security">Java Programming/Java Security</a></li>
<li><a href="/wiki/Java_Programming/JavaBeans" title="Java Programming/JavaBeans">Java Programming/JavaBeans</a></li>
<li><a href="/wiki/Java_Programming/Javadoc" title="Java Programming/Javadoc">Java Programming/Javadoc</a></li>
<li><a href="/wiki/Java_Programming/JavaSpaces" title="Java Programming/JavaSpaces">Java Programming/JavaSpaces</a></li></ul></div><div class="mw-category-group"><h3>K</h3>
<ul><li><a href="/wiki/Java_Programming/Keywords" title="Java Programming/Keywords">Java Programming/Keywords</a></li></ul></div><div class="mw-category-group"><h3>L</h3>
<ul><li><a href="/wiki/Java_Programming/Language_Fundamentals" title="Java Programming/Language Fundamentals">Java Programming/Language Fundamentals</a></li>
<li><a href="/wiki/Java_Programming/Large_numbers" title="Java Programming/Large numbers">Java Programming/Large numbers</a></li>
<li><a href="/wiki/Java_Programming/Libraries,_extensions_and_frameworks" title="Java Programming/Libraries, extensions and frameworks">Java Programming/Libraries, extensions and frameworks</a></li>
<li><a href="/wiki/Java_Programming/Links" title="Java Programming/Links">Java Programming/Links</a></li>
<li><a href="/wiki/Java_Programming/Literals" title="Java Programming/Literals">Java Programming/Literals</a></li>
<li><a href="/wiki/Java_Programming/Literals/Boolean_Literals/false" title="Java Programming/Literals/Boolean Literals/false">Java Programming/Literals/Boolean Literals/false</a></li>
<li><a href="/wiki/Java_Programming/Literals/Boolean_Literals/true" title="Java Programming/Literals/Boolean Literals/true">Java Programming/Literals/Boolean Literals/true</a></li>
<li><a href="/wiki/Java_Programming/Loop_blocks" title="Java Programming/Loop blocks">Java Programming/Loop blocks</a></li></ul></div><div class="mw-category-group"><h3>M</h3>
<ul><li><a href="/wiki/Java_Programming/Map" title="Java Programming/Map">Java Programming/Map</a></li>
<li><a href="/wiki/Java_Programming/Mathematical_functions" title="Java Programming/Mathematical functions">Java Programming/Mathematical functions</a></li>
<li><a href="/wiki/Java_Programming/Methods" title="Java Programming/Methods">Java Programming/Methods</a></li></ul></div><div class="mw-category-group"><h3>N</h3>
<ul><li><a href="/wiki/Java_Programming/Nested_Classes" title="Java Programming/Nested Classes">Java Programming/Nested Classes</a></li>
<li><a href="/wiki/Java_Programming/Nesting_Exceptions" title="Java Programming/Nesting Exceptions">Java Programming/Nesting Exceptions</a></li>
<li><a href="/wiki/Java_Programming/Networking" title="Java Programming/Networking">Java Programming/Networking</a></li>
<li><a href="/wiki/Java_Programming/Networking/Basics" title="Java Programming/Networking/Basics">Java Programming/Networking/Basics</a></li></ul></div><div class="mw-category-group"><h3>O</h3>
<ul><li><a href="/wiki/Java_Programming/Object_Lifecycle" title="Java Programming/Object Lifecycle">Java Programming/Object Lifecycle</a></li>
<li><a href="/wiki/Java_Programming/Overloading_Methods_and_Constructors" title="Java Programming/Overloading Methods and Constructors">Java Programming/Overloading Methods and Constructors</a></li></ul></div><div class="mw-category-group"><h3>P</h3>
<ul><li><a href="/wiki/Java_Programming/Packages" title="Java Programming/Packages">Java Programming/Packages</a></li>
<li><a href="/wiki/Java_Programming/Preface" title="Java Programming/Preface">Java Programming/Preface</a></li>
<li><a href="/wiki/Java_Programming/Preventing_NullPointerException" title="Java Programming/Preventing NullPointerException">Java Programming/Preventing NullPointerException</a></li>
<li><a href="/wiki/Java_Programming/Primitive_Types" title="Java Programming/Primitive Types">Java Programming/Primitive Types</a></li>
<li><a href="/wiki/Java_Programming/Print_version" title="Java Programming/Print version">Java Programming/Print version</a></li>
<li><a href="/wiki/Java_Programming/Print_version2" title="Java Programming/Print version2">Java Programming/Print version2</a></li></ul></div><div class="mw-category-group"><h3>Q</h3>
<ul><li><a href="/wiki/Java_Programming/Q%26A" title="Java Programming/Q&amp;A">Java Programming/Q&amp;A</a></li></ul></div><div class="mw-category-group"><h3>R</h3>
<ul><li><a href="/wiki/Java_Programming/Random_numbers" title="Java Programming/Random numbers">Java Programming/Random numbers</a></li>
<li><a href="/wiki/Java_Programming/Reflection" title="Java Programming/Reflection">Java Programming/Reflection</a></li>
<li><a href="/wiki/Java_Programming/Reflection/Accessing_Private_Features_with_Reflection" title="Java Programming/Reflection/Accessing Private Features with Reflection">Java Programming/Reflection/Accessing Private Features with Reflection</a></li>
<li><a href="/wiki/Java_Programming/Reflection/Dynamic_Class_Loading" title="Java Programming/Reflection/Dynamic Class Loading">Java Programming/Reflection/Dynamic Class Loading</a></li>
<li><a href="/wiki/Java_Programming/Reflection/Dynamic_Invocation" title="Java Programming/Reflection/Dynamic Invocation">Java Programming/Reflection/Dynamic Invocation</a></li>
<li><a href="/wiki/Java_Programming/Reflection/Overview" title="Java Programming/Reflection/Overview">Java Programming/Reflection/Overview</a></li>
<li><a href="/wiki/Java_Programming/Regular_Expressions" title="Java Programming/Regular Expressions">Java Programming/Regular Expressions</a></li>
<li><a href="/wiki/Java_Programming/Remote_Method_Invocation" title="Java Programming/Remote Method Invocation">Java Programming/Remote Method Invocation</a></li>
<li><a href="/wiki/Java_Programming/RMI-IIOP" title="Java Programming/RMI-IIOP">Java Programming/RMI-IIOP</a></li></ul></div><div class="mw-category-group"><h3>S</h3>
<ul><li><a href="/wiki/Java_Programming/Scope" title="Java Programming/Scope">Java Programming/Scope</a></li>
<li><a href="/wiki/Java_Programming/Spring_framework" title="Java Programming/Spring framework">Java Programming/Spring framework</a></li>
<li><a href="/wiki/Java_Programming/Stack_trace" title="Java Programming/Stack trace">Java Programming/Stack trace</a></li>
<li><a href="/wiki/Java_Programming/Statements" title="Java Programming/Statements">Java Programming/Statements</a></li>
<li><a href="/wiki/Java_Programming/Statements/if" title="Java Programming/Statements/if">Java Programming/Statements/if</a></li>
<li><a href="/wiki/Java_Programming/Streams" title="Java Programming/Streams">Java Programming/Streams</a></li>
<li><a href="/wiki/Java_Programming/Struts" title="Java Programming/Struts">Java Programming/Struts</a></li>
<li><a href="/wiki/Java_Programming/Struts/Struts_Tag_Library" title="Java Programming/Struts/Struts Tag Library">Java Programming/Struts/Struts Tag Library</a></li></ul></div><div class="mw-category-group"><h3>T</h3>
<ul><li><a href="/wiki/Java_Programming/The_Java_Platform" title="Java Programming/The Java Platform">Java Programming/The Java Platform</a></li>
<li><a href="/wiki/Java_Programming/Threads_and_Runnables" title="Java Programming/Threads and Runnables">Java Programming/Threads and Runnables</a></li>
<li><a href="/wiki/Java_Programming/Throwing_and_Catching_Exceptions" title="Java Programming/Throwing and Catching Exceptions">Java Programming/Throwing and Catching Exceptions</a></li>
<li><a href="/wiki/Java_Programming/TOC" title="Java Programming/TOC">Java Programming/TOC</a></li>
<li><a href="/wiki/Java_Programming/Todo" title="Java Programming/Todo">Java Programming/Todo</a></li>
<li><a href="/wiki/Java_Programming/Tutorials" title="Java Programming/Tutorials">Java Programming/Tutorials</a></li>
<li><a href="/wiki/Java_Programming/Types/boolean" title="Java Programming/Types/boolean">Java Programming/Types/boolean</a></li></ul></div><div class="mw-category-group"><h3>U</h3>
<ul><li><a href="/wiki/Java_Programming/Unchecked_Exceptions" title="Java Programming/Unchecked Exceptions">Java Programming/Unchecked Exceptions</a></li>
<li><a href="/wiki/Java_Programming/Understanding_a_Java_Program" title="Java Programming/Understanding a Java Program">Java Programming/Understanding a Java Program</a></li>
<li><a href="/wiki/Java_Programming/Unicode" title="Java Programming/Unicode">Java Programming/Unicode</a></li></ul></div><div class="mw-category-group"><h3>V</h3>
<ul><li><a href="/wiki/Java_Programming/Variables" title="Java Programming/Variables">Java Programming/Variables</a></li></ul></div></div></div>
</div></div><noscript><img src="//en.wikibooks.org/wiki/Special:CentralAutoLogin/start?type=1x1" alt="" title="" width="1" height="1" style="border: none; position: absolute;" /></noscript></div>					<div class="printfooter">
						Retrieved from "<a dir="ltr" href="https://en.wikibooks.org/w/index.php?title=Category:Book:Java_Programming&amp;oldid=3241601">https://en.wikibooks.org/w/index.php?title=Category:Book:Java_Programming&amp;oldid=3241601</a>"					</div>
				<div id="catlinks" class="catlinks" data-mw="interface"><div id="mw-normal-catlinks" class="mw-normal-catlinks"><a href="/wiki/Special:Categories" title="Special:Categories">Category</a>: <ul><li><a href="/wiki/Category:Subject:Java_programming_language" title="Category:Subject:Java programming language">Subject:Java programming language</a></li></ul></div><div id="mw-hidden-catlinks" class="mw-hidden-catlinks mw-hidden-cats-ns-shown">Hidden categories: <ul><li><a href="/wiki/Category:Pages_with_template_loops" title="Category:Pages with template loops">Pages with template loops</a></li><li><a href="/wiki/Category:Book_categories" title="Category:Book categories">Book categories</a></li></ul></div></div>				<div class="visualClear"></div>
							</div>
		</div>
		<div id="mw-navigation">
			<h2>Navigation menu</h2>

			<div id="mw-head">
									<div id="p-personal" role="navigation" class="" aria-labelledby="p-personal-label">
						<h3 id="p-personal-label">Personal tools</h3>
						<ul>
							<li id="pt-anonuserpage">Not logged in</li><li id="pt-anontalk"><a href="/wiki/Special:MyTalk" title="Discussion about edits from this IP address [n]" accesskey="n">Discussion for this IP address</a></li><li id="pt-anoncontribs"><a href="/wiki/Special:MyContributions" title="A list of edits made from this IP address [y]" accesskey="y">Contributions</a></li><li id="pt-createaccount"><a href="/w/index.php?title=Special:CreateAccount&amp;returnto=Category%3ABook%3AJava+Programming" title="You are encouraged to create an account and log in; however, it is not mandatory">Create account</a></li><li id="pt-login"><a href="/w/index.php?title=Special:UserLogin&amp;returnto=Category%3ABook%3AJava+Programming" title="You are encouraged to log in; however, it is not mandatory [o]" accesskey="o">Log in</a></li>						</ul>
					</div>
									<div id="left-navigation">
										<div id="p-namespaces" role="navigation" class="vectorTabs" aria-labelledby="p-namespaces-label">
						<h3 id="p-namespaces-label">Namespaces</h3>
						<ul>
														<li id="ca-nstab-category" class="selected"><span><a href="/wiki/Category:Book:Java_Programming" title="View the category page [c]" accesskey="c">Category</a></span></li>
							<li id="ca-talk" class="new"><span><a href="/w/index.php?title=Category_talk:Book:Java_Programming&amp;action=edit&amp;redlink=1" rel="discussion" title="Discussion about the content page [t]" accesskey="t">Discussion</a></span></li>
						</ul>
					</div>
										<div id="p-variants" role="navigation" class="vectorMenu emptyPortlet" aria-labelledby="p-variants-label">
												<h3 id="p-variants-label">
							<span>Variants</span>
						</h3>

						<div class="menu">
							<ul>
															</ul>
						</div>
					</div>
									</div>
				<div id="right-navigation">
										<div id="p-views" role="navigation" class="vectorTabs" aria-labelledby="p-views-label">
						<h3 id="p-views-label">Views</h3>
						<ul>
														<li id="ca-view" class="collapsible selected"><span><a href="/wiki/Category:Book:Java_Programming">Read</a></span></li>
							<li id="ca-edit" class="collapsible"><span><a href="/w/index.php?title=Category:Book:Java_Programming&amp;action=edit" title="Edit this page [e]" accesskey="e">Edit</a></span></li>
							<li id="ca-history" class="collapsible"><span><a href="/w/index.php?title=Category:Book:Java_Programming&amp;action=history" title="Past revisions of this page [h]" accesskey="h">View history</a></span></li>
						</ul>
					</div>
										<div id="p-cactions" role="navigation" class="vectorMenu emptyPortlet" aria-labelledby="p-cactions-label">
						<h3 id="p-cactions-label"><span>More</span></h3>

						<div class="menu">
							<ul>
															</ul>
						</div>
					</div>
										<div id="p-search" role="search">
						<h3>
							<label for="searchInput">Search</label>
						</h3>

						<form action="/w/index.php" id="searchform">
							<div id="simpleSearch">
							<input type="search" name="search" placeholder="Search Wikibooks" title="Search Wikibooks [f]" accesskey="f" id="searchInput"/><input type="hidden" value="Special:Search" name="title"/><input type="submit" name="fulltext" value="Search" title="Search the pages for this text" id="mw-searchButton" class="searchButton mw-fallbackSearchButton"/><input type="submit" name="go" value="Go" title="Go to a page with this exact name if it exists" id="searchButton" class="searchButton"/>							</div>
						</form>
					</div>
									</div>
			</div>
			<div id="mw-panel">
				<div id="p-logo" role="banner"><a class="mw-wiki-logo" href="/wiki/Main_Page"  title="Visit the main page"></a></div>
						<div class="portal" role="navigation" id='p-Navigation' aria-labelledby='p-Navigation-label'>
			<h3 id='p-Navigation-label'>Navigation</h3>

			<div class="body">
									<ul>
						<li id="n-mainpage"><a href="/wiki/Main_Page" title="Visit the main page [z]" accesskey="z">Main Page</a></li><li id="n-help"><a href="/wiki/Help:Contents" title="Find help on how to use and edit Wikibooks">Help</a></li><li id="n-Browse"><a href="/wiki/Wikibooks:Card_Catalog_Office" title="Check out what Wikibooks has to offer">Browse</a></li><li id="n-Cookbook"><a href="/wiki/Cookbook:Table_of_Contents" title="Learn recipes from around the world">Cookbook</a></li><li id="n-Wikijunior"><a href="/wiki/Wikijunior" title="Books for children">Wikijunior</a></li><li id="n-Featured-books"><a href="/wiki/Wikibooks:Featured_books" title="The best of Wikibooks">Featured books</a></li><li id="n-recentchanges"><a href="/wiki/Special:RecentChanges" title="A list of recent changes in the wiki [r]" accesskey="r">Recent changes</a></li><li id="n-sitesupport"><a href="//donate.wikimedia.org/wiki/Special:FundraiserRedirector?utm_source=donate&amp;utm_medium=sidebar&amp;utm_campaign=C13_en.wikibooks.org&amp;uselang=en" title="Support Wikibooks">Donations</a></li><li id="n-randomrootpage"><a href="/wiki/Special:RandomRootpage">Random book</a></li><li id="n-Using-Wikibooks"><a href="/wiki/Using_Wikibooks">Using Wikibooks</a></li>					</ul>
							</div>
		</div>
			<div class="portal" role="navigation" id='p-Community' aria-labelledby='p-Community-label'>
			<h3 id='p-Community-label'>Community</h3>

			<div class="body">
									<ul>
						<li id="n-Reading-room"><a href="/wiki/Wikibooks:Reading_room" title="Discuss Wikibooks-related questions and concerns with others">Reading room</a></li><li id="n-portal"><a href="/wiki/Wikibooks:Community_Portal" title="Find your way around the Wikibooks community">Community portal</a></li><li id="n-currentevents"><a href="/wiki/Wikibooks:Reading_room/Bulletin_Board" title="Important community news">Bulletin Board</a></li><li id="n-maintenance"><a href="/wiki/Wikibooks:Maintenance" title="Frequent tasks that you can help with">Help out!</a></li><li id="n-Policies-and-guidelines"><a href="/wiki/Wikibooks:Policies_and_guidelines" title="Pages detailing important rules and procedures">Policies and guidelines</a></li><li id="n-contact"><a href="/wiki/Wikibooks:Contact_us" title="Alternative methods of communication">Contact us</a></li>					</ul>
							</div>
		</div>
			<div class="portal" role="navigation" id='p-tb' aria-labelledby='p-tb-label'>
			<h3 id='p-tb-label'>Tools</h3>

			<div class="body">
									<ul>
						<li id="t-whatlinkshere"><a href="/wiki/Special:WhatLinksHere/Category:Book:Java_Programming" title="A list of all wiki pages that link here [j]" accesskey="j">What links here</a></li><li id="t-recentchangeslinked"><a href="/wiki/Special:RecentChangesLinked/Category:Book:Java_Programming" rel="nofollow" title="Recent changes in pages linked from this page [k]" accesskey="k">Related changes</a></li><li id="t-upload"><a href="//commons.wikimedia.org/wiki/Special:UploadWizard?uselang=en" title="Upload files [u]" accesskey="u">Upload file</a></li><li id="t-specialpages"><a href="/wiki/Special:SpecialPages" title="A list of all special pages [q]" accesskey="q">Special pages</a></li><li id="t-permalink"><a href="/w/index.php?title=Category:Book:Java_Programming&amp;oldid=3241601" title="Permanent link to this revision of the page">Permanent link</a></li><li id="t-info"><a href="/w/index.php?title=Category:Book:Java_Programming&amp;action=info" title="More information about this page">Page information</a></li>					</ul>
							</div>
		</div>
			<div class="portal" role="navigation" id='p-lang' aria-labelledby='p-lang-label'>
			<h3 id='p-lang-label'>In other languages</h3>

			<div class="body">
									<ul>
											</ul>
				<div class="after-portlet after-portlet-lang"><span class="wb-langlinks-add wb-langlinks-link"><a href="https://www.wikidata.org/wiki/Special:NewItem?site=enwikibooks&amp;page=Category%3ABook%3AJava+Programming" title="Add interlanguage links" class="wbc-editpage">Add links</a></span></div>			</div>
		</div>
			<div class="portal" role="navigation" id='p-Sister_projects' aria-labelledby='p-Sister_projects-label'>
			<h3 id='p-Sister_projects-label'>Sister projects</h3>

			<div class="body">
									<ul>
						<li id="n-Wikipedia"><a href="https://en.wikipedia.org/wiki/Main_Page">Wikipedia</a></li><li id="n-Wikiversity"><a href="https://en.wikiversity.org/wiki/Wikiversity:Main_Page">Wikiversity</a></li><li id="n-Wiktionary"><a href="https://en.wiktionary.org/wiki/Wiktionary:Main_Page">Wiktionary</a></li><li id="n-Wikiquote"><a href="https://en.wikiquote.org/wiki/Main_Page">Wikiquote</a></li><li id="n-Wikisource"><a href="https://en.wikisource.org/wiki/Main_Page">Wikisource</a></li><li id="n-Wikinews"><a href="https://en.wikinews.org/wiki/Main_Page">Wikinews</a></li><li id="n-Wikivoyage"><a href="https://en.wikivoyage.org/wiki/Main_Page">Wikivoyage</a></li><li id="n-Commons"><a href="https://commons.wikimedia.org/wiki/Main_Page">Commons</a></li><li id="n-Wikidata"><a href="https://www.wikidata.org/wiki/Wikidata:Main_Page">Wikidata</a></li>					</ul>
							</div>
		</div>
			<div class="portal" role="navigation" id='p-coll-print_export' aria-labelledby='p-coll-print_export-label'>
			<h3 id='p-coll-print_export-label'>Print/export</h3>

			<div class="body">
									<ul>
						<li id="coll-create_a_book"><a href="/w/index.php?title=Special:Book&amp;bookcmd=book_creator&amp;referer=Category%3ABook%3AJava+Programming">Create a collection</a></li><li id="coll-download-as-rdf2latex"><a href="/w/index.php?title=Special:ElectronPdf&amp;page=Category%3ABook%3AJava+Programming&amp;action=show-download-screen">Download as PDF</a></li><li id="t-print"><a href="/w/index.php?title=Category:Book:Java_Programming&amp;printable=yes" title="Printable version of this page [p]" accesskey="p">Printable version</a></li>					</ul>
							</div>
		</div>
				</div>
		</div>
		<div id="footer" role="contentinfo">
							<ul id="footer-info">
											<li id="footer-info-lastmod"> This page was last edited on 4 July 2017, at 20:08.</li>
											<li id="footer-info-copyright">Text is available under the <a href="//creativecommons.org/licenses/by-sa/3.0/">Creative Commons Attribution-ShareAlike License.</a>; additional terms may apply.  By using this site, you agree to the <a href="//wikimediafoundation.org/wiki/Terms_of_Use">Terms of Use</a> and <a href="//wikimediafoundation.org/wiki/Privacy_policy">Privacy Policy.</a></li>
									</ul>
							<ul id="footer-places">
											<li id="footer-places-privacy"><a href="https://wikimediafoundation.org/wiki/Privacy_policy" class="extiw" title="wmf:Privacy policy">Privacy policy</a></li>
											<li id="footer-places-about"><a href="/wiki/Wikibooks:Welcome" title="Wikibooks:Welcome">About Wikibooks</a></li>
											<li id="footer-places-disclaimer"><a href="/wiki/Wikibooks:General_disclaimer" title="Wikibooks:General disclaimer">Disclaimers</a></li>
											<li id="footer-places-developers"><a href="https://www.mediawiki.org/wiki/Special:MyLanguage/How_to_contribute">Developers</a></li>
											<li id="footer-places-cookiestatement"><a href="https://wikimediafoundation.org/wiki/Cookie_statement">Cookie statement</a></li>
											<li id="footer-places-mobileview"><a href="//en.m.wikibooks.org/w/index.php?title=Category:Book:Java_Programming&amp;mobileaction=toggle_view_mobile" class="noprint stopMobileRedirectToggle">Mobile view</a></li>
									</ul>
										<ul id="footer-icons" class="noprint">
											<li id="footer-copyrightico">
							<a href="https://wikimediafoundation.org/"><img src="/static/images/wikimedia-button.png" srcset="/static/images/wikimedia-button-1.5x.png 1.5x, /static/images/wikimedia-button-2x.png 2x" width="88" height="31" alt="Wikimedia Foundation"/></a>						</li>
											<li id="footer-poweredbyico">
							<a href="//www.mediawiki.org/"><img src="/static/images/poweredby_mediawiki_88x31.png" alt="Powered by MediaWiki" srcset="/static/images/poweredby_mediawiki_132x47.png 1.5x, /static/images/poweredby_mediawiki_176x62.png 2x" width="88" height="31"/></a>						</li>
									</ul>
						<div style="clear:both"></div>
		</div>
		<script>(window.RLQ=window.RLQ||[]).push(function(){mw.config.set({"wgPageParseReport":{"limitreport":{"cputime":"0.148","walltime":"0.190","ppvisitednodes":{"value":3828,"limit":1000000},"ppgeneratednodes":{"value":0,"limit":1500000},"postexpandincludesize":{"value":71081,"limit":2097152},"templateargumentsize":{"value":6611,"limit":2097152},"expansiondepth":{"value":27,"limit":40},"expensivefunctioncount":{"value":7,"limit":500},"entityaccesscount":{"value":0,"limit":400},"timingprofile":["100.00%  186.649      1 -total"," 87.61%  163.523      6 Template:Evalx"," 80.93%  151.060     13 Template:BookCat"," 77.35%  144.375      1 Template:BookCat/category"," 76.47%  142.730      1 Template:BookCat/category/subjects"," 65.54%  122.324      1 Java_Programming"," 24.49%   45.717      5 Template:ROOTBOOKNAME"," 23.71%   44.248      3 Template:ROOTBOOKNAME/core"," 22.50%   41.989      1 Java_Programming/Topics"," 21.45%   40.035      1 Template:Book_category_header"]},"scribunto":{"limitreport-timeusage":{"value":"0.045","limit":"10.000"},"limitreport-memusage":{"value":1479095,"limit":52428800}},"cachereport":{"origin":"mw1262","timestamp":"20171020202613","ttl":86400,"transientcontent":true}}});});</script><script>(window.RLQ=window.RLQ||[]).push(function(){mw.config.set({"wgBackendResponseTime":103,"wgHostname":"mw1183"});});</script>
	</body>
</html>
`;

const regex = /href="(\/wiki[a-zA-Z/:_]+)"/g;

const loi = data.match(regex);
const floi = loi.map(link => link.replace("href=", ""))
								.map(link => link.replace('"', ''))
								.map(link => link.replace('"', ''));

const stringExport = JSON.stringify(
	{
		links_of_interest: floi
	},
	null,
	2
);
console.info('Writing to file...');

const run = () => {
	return fs.writeFile('wikibooks.json', stringExport, (err) => {
		if(err) { console.warn('Could not write file\n', err); }
		console.info('Data exported!');
	});
};

run();
