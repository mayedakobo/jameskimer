<?php
$domain='http'.(empty($_SERVER['HTTPS'])?'':'s').'://'.$_SERVER['SERVER_NAME'].$_SERVER['REQUEST_URI'];
?>
<!doctype html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang=""> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8" lang=""> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9" lang=""> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en"> <!--<![endif]-->
    <head>
        <script>
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

        ga('create', 'UA-1511989-14', 'auto');
        ga('send', 'pageview');

        </script>
        <meta charset="utf-8">
        <!-- <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"> -->
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Empire of Deceit: An Investigation of the Gülen School Network</title>

        <!--FB Open Graph Tags-->
        <meta property="og:title" content="Empire of Deceit: An Investigation of the Gülen School Network" />
        <meta property="og:url" content="<?php echo $domain?>" />
        <meta property="og:image" content="<?php echo $domain?>img/logo-fb.jpg" />
        <meta property="og:description" content="Amsterdam & Partners LLP was retained by the Republic of Turkey to pursue a global investigation into the suspicious activities of Fethullah Gülen, a secretive multi-billionaire cleric who has been accused of seeking to destabilize Turkey and overthrow a democratically-elected government." />
        <meta property="og:site_name" content="Empire of Deceit" />
        <!--End FB Open Graph Tags-->

        <!-- twitter-->
            <meta name="twitter:card" content="summary_large_image">
            <meta name="twitter:site" content="">
            <meta name="twitter:creator" content="">
            <meta name="twitter:title" content="Empire of Deceit: An Investigation of the Gülen School Network">
            <meta name="twitter:description" content="Amsterdam & Partners LLP was retained by the Republic of Turkey to pursue a global investigation into the suspicious activities of Fethullah Gülen, a secretive multi-billionaire cleric who has been accused of seeking to destabilize Turkey and overthrow a democratically-elected government.">
            <meta name="twitter:image" content="<?php echo $domain?>img/logo-twitter.jpg">
            <meta name="tw-line" content="Empire of Deceit: An Investigation of the Gülen School Network"/>
        <!-- twitter end -->



        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="apple-touch-icon" href="apple-touch-icon.png">

        <link rel="stylesheet"  href="css/map-style.css" />
        <link rel="stylesheet" href="css/normalize.min.css">
        <link rel="stylesheet" href="css/main.css">
        <link rel="stylesheet" href="css/style.css">
        <link rel="stylesheet" href="css/stateface.css">

        <script src="js/vendor/modernizr-2.8.3-respond-1.4.2.min.js"></script>
        <?php include "includes/states.php";?>
        <script type="text/javascript" src="//platform-api.sharethis.com/js/sharethis.js#property=59b11f60226ccf001265af79&product=sticky-share-buttons"></script>

    </head>
    <body>
    <span id="map-tip-us"></span>
        <!--[if lt IE 8]>
            <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->
    <?php include "includes/header.php"; ?>

        <div id="mapareawrap">
            <h2 class="maphdng">GüLEN’s Footprint inside of the United States<span>Search by state or issue below.</span></h2>

        <div class="container">
        <div id="state_dropdown" class="dropdown">
            <div id="state_label">Search by state</div>
                <ul id="state_list" class="dropdown-menu">
                </ul>
        </div>
        <div id="issue_dropdown" class="dropdown">
            <div id="issue_label">Search by issue</div>
                <ul id="issue_list" class="dropdown-menu">
                    <li><a class="issue_selected" href="#" data-issue="states_with_active_networks">States with Active Networks</a></li>
                    <li><a class="issue_selected" href="#" data-issue="h_1b_hiring_by_state">H-1B hiring by State</a></li>
                    <li><a class="issue_selected" href="#" data-issue="states_with_suspect_property_deals">States with Suspect Property Deals</a></li>
                    <li><a class="issue_selected" href="#" data-issue="charter_school_bonds_procured_by_the_gulen_organization">Charter School Bonds Procured by the Gulen Organization</a></li>
                    <li><a class="issue_selected" href="#" data-issue="regional_hub_and_member_states_identified">Regional hub and member states identified</a></li>
                </ul>
        </div>

        <div class="issue_name_display"></div>

        <div id="statedata" class="statedata">
            <a href="#" class="comparestate"><img alt="compare button" src="img/btn_compare.png" style="border: 0;" /></a>
            <div id="comparestatebutton">

            <div id="compare_expand">
                <div id="compare_state_dropdown" class="dropdown">
                    <div id="compare_state_label">Search by state</div>
                        <ul id="compare_state_list" class="dropdown-menu">
                        <?php
                          // foreach ($states_abbr as $key => $value) {
                          //   echo '<li><a class="compare_state_selected" href="#" data-compare-state="'.$key.'">'.$value.'</a></li>';
                          // }
                        ?>
                        </ul>
                </div>
            </div>
            </div>
            <div class="actualdata">
            <h1 class="name"><span></span>&nbsp;</h1>
            <a href="#" class="closestate">Close</a>
            <a target="_blank" class="state_chapter_pdf">Download State Chapter</a>
            <a target="_blank" class="infographic_pdf">Download Infographic</a>
            <div class="infowrap">
                <div class="no_of_schools">
                    <span class="lbl">Number of Schools</span>
                    <span class="data"></span>
                </div>
                <div class="school_names">
                    <span class="lbl">School Names</span>
                    <span class="data"></span>
                </div>
                <div class="total_enrollmemt">
                    <span class="lbl">Total Enrollmemt</span>
                    <span class="data"></span>
                </div>
                <div class="charter_operator">
                    <span class="lbl">Charter Operator</span>
                    <span class="data"></span>
                </div>
                <div class="total_revenues">
                    <span class="lbl">Total Revenues</span>
                    <span class="data"></span>
                </div>
                <div class="related_institutions">
                    <span class="lbl">Related Institutions</span>
                    <span class="data"></span>
                </div>
                <div class="key_people">
                    <span class="lbl">Key People</span>
                    <span class="data"></span>
                </div>
                <div class="h1_b">
                    <span class="lbl">H-1B Employees</span>
                    <span class="data"></span>
                </div>
            </div>
            </div>
        </div>

        <div id="comparestatedata" class="statedata">
            <div class="actualdata">
            <h1 class="name"><span></span>&nbsp;</h1>
            <a href="#" class="closestate">Close</a>
            <a target="_blank" class="state_chapter_pdf">Download State Chapter</a>
            <a target="_blank" class="infographic_pdf">Download Infographic</a>
            <div class="infowrap">
                    <div class="no_of_schools">
                        <span class="lbl">Number of Schools</span>
                        <span class="data"></span>
                    </div>
                    <div class="school_names">
                        <span class="lbl">School Names</span>
                        <span class="data"></span>
                    </div>
                    <div class="total_enrollmemt">
                        <span class="lbl">Total Enrollmemt</span>
                        <span class="data"></span>
                    </div>
                    <div class="charter_operator">
                        <span class="lbl">Charter Operator</span>
                        <span class="data"></span>
                    </div>
                    <div class="total_revenues">
                        <span class="lbl">Total Revenues</span>
                        <span class="data"></span>
                    </div>
                    <div class="related_institutions">
                        <span class="lbl">Related Institutions</span>
                        <span class="data"></span>
                    </div>
                    <div class="key_people">
                        <span class="lbl">Key People</span>
                        <span class="data"></span>
                    </div>
                    <div class="h1_b">
                        <span class="lbl">H-1B Employees</span>
                        <span class="data"></span>
                    </div>
            </div>
            </div>
        </div>

        <?php include "includes/map.php";?>
        <div id="mobile-wrapper">
            <ul id="mobile-data">
            </ul>
        </div>
        </div>
    </div>
    <?php include "includes/footer.php";?>




        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.11.2.min.js"><\/script>')</script>
        <!-- <script src="js/jquery.min.js" type="text/javascript"></script> -->
        <script src="js/vendor/jquery.validate.min.js" type="text/javascript" defer ></script>
        <script src="js/map-config.js" type="text/javascript"></script>
        <script src="js/pins-config.js" type="text/javascript" defer></script>
        <!--code for enable and disable based on xml-->
        <?php include "includes/xmltojs.php";?>
        <script src="js/map-interact.js" type="text/javascript" defer></script>
        <script src="js/main.js" defer></script>




    </body>
</html>
