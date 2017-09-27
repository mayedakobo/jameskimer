function resizecode() {
    $(".herotext").width($(".herosubtitle").width());
    var $el = $('#comparestatedata');
    $el.height(($('#mapareawrap .container').height()+15)+'px');
    var $el = $('#statedata');
    $el.height(($('#mapareawrap .container').height()+15)+'px');

}
function dynamicAddEvent_New(id){
    var obj = $('#map_points_'+id);

    if(map_config[id]['enable'] == true){
        if (isTouchEnabled()) {
            obj.on('touchstart', function(e){
                var touch = e.originalEvent.touches[0];
                var x=touch.pageX+10, y=touch.pageY+15;
                var tipw=$('#map-tip-us').outerWidth(), tiph=$('#map-tip-us').outerHeight(),
                x=(x+tipw>$(document).scrollLeft()+$(window).width())? x-tipw-(20*2) : x
                y=(y+tiph>$(document).scrollTop()+$(window).height())? $(document).scrollTop()+$(window).height()-tiph-10 : y
                $('#'+id).css({'fill':map_config[id]['downColor']});
                $('#map-tip-us').show().html(map_config[id]['hover']);
                $('#map-tip-us').css({left:x, top:y})
            })
            obj.on('touchend', function(){
               if(id !=undefined){
                    if(map_config[id]['enable'] == true){
                        showstate(map_config[id]['iso'].replace("iso_",""));
                    }
                }
            })
        }
        obj.attr({'cursor':'pointer'});
        obj.hover(function(){
             $('#map-tip-us').show().html(map_config[id]['hover']);
             $('#'+id).css({'fill':map_config[id]['overColor']})
        },function(){
            $('#map-tip-us').hide();
            $('#'+id).css({'fill':map_config[id]['upColor']});
        })
        //clicking effect
        obj.mousedown(function(){
            $('#'+id).css({'fill':map_config[id]['downColor']});
        })
        obj.mouseup(function(){
            if(id !=undefined){
               if(map_config[id]['enable'] == true){
                    showstate(map_config[id]['iso'].replace("iso_",""));
                }
            }

        })
        obj.mousemove(function(e){
                var x=e.pageX+10, y=e.pageY+15;
                var tipw=$('#map-tip-us').outerWidth(), tiph=$('#map-tip-us').outerHeight(),
                x=(x+tipw>$(document).scrollLeft()+$(window).width())? x-tipw-(20*2) : x
                y=(y+tiph>$(document).scrollTop()+$(window).height())? $(document).scrollTop()+$(window).height()-tiph-10 : y
                $('#map-tip-us').css({left:x, top:y})
        })
    }
}


 function resetissue() {
    $(".maplegend").hide();
    $("#map_points").find("circle").remove();
    $("#map_points").find("rect").remove();
    $el = $("#mobile-data");
    $el.empty();

    for (var key in map_config_copy) {
        if(key!="default")
        {
            $("#"+key).css({ fill: map_config_copy[key]["upColor"] });
            map_config[key]["upColor"]=map_config_copy[key]["upColor"];
            map_config[key]["overColor"]=map_config_copy[key]["overColor"];
        }
    }
    $(".issue_name_display").text('');
 }
 function createstatedropdown(which,excludedstate) {
    $el = $(which);
    $el.empty();
    $.each(states, function(statecode, state) {
        if(statecode!=excludedstate)
        $el.append('<li><a class="state_selected" href="#" data-state="'+statecode+'">'+state.name+'</a></li>');
    });
 }
 function comparestate(state, category, callback) {
    if (state && state != "false" && states[state]) {
    var $el = $('#comparestatedata');
        $el.height(($('#mapareawrap .container').height()+15)+'px');
        if (parseInt($el.css("width"))) {
            $el.fadeOut( "fast", function() {
              updatestatedata($el, state)
              $el.fadeIn( "fast", function() {
                //anything to do after opening
              });
            });
        }
        if (typeof(callback) == "function") callback();
    } else {
        closecomparestate();
    }
}

 function closestate(callback) {
        if ($('#comparestatedata').width()) {
          closecomparestate(function() {
            $( "#statedata" ).fadeOut( "fast", function() {
                showcomparedropdown(false);
            });
          });
        } else {
          $( "#statedata" ).fadeOut( "fast", function() {
            showcomparedropdown(false);
          });

        }
        if (typeof(callback) == "function") callback();
      }

function closecomparestate(callback) {
    $( "#comparestatedata" ).fadeOut( "fast", function() {

    });
    if (typeof(callback) == "function") callback();
}
function showstate(state, category, callback) {
        var $el = $('#statedata');
        $el.height(($('#mapareawrap .container').height()+15)+'px');
        if (parseInt($el.css("width"))) {

            $el.fadeOut( "fast", function() {
              updatestatedata($el, state)
              $el.fadeIn( "fast", function() {
                //anything to do after opening
                createstatedropdown("#compare_state_list",state);
              });
            });
        }
        if (typeof(callback) == "function") callback();
}


function showcomparedropdown(showhide, callback) {
    var $el = $('#comparestatebutton');
    var $el1 = $('#compare_expand');
    if(showhide==true) {
       $el.show();
       $el1.show();
       $('.comparestate').addClass('open');
    }
    else {
       $el.hide();
       $el1.hide();
       $('.comparestate').removeClass('open');
    }

    if (typeof(callback) == "function") callback();
}


function updatestatedata(which, state) {

    //reset data first

    $('.name', which).text("");
    $('.state_chapter_pdf', which).attr("href","#");
    $('.infographic_pdf', which).attr("href","#");
    $('.no_of_schools .data', which).text("");
    $('.school_names .data', which).text("");
    $('.total_enrollmemt .data', which).text("");
    $('.charter_operator .data', which).text("");
    $('.total_revenues .data', which).text("");
    $('.related_institutions .data', which).text("");
    $('.key_people .data', which).text("");
    $('.h1_b .data', which).text("");



  //reset end

if (state && state != "false" && states[state]) {
    // createstatedropdown("#compare_state_list",state);
    $('.name', which).html("<span></span>"+states[state]['name']);
    $('.name > span', which).removeClass();
    $('.name > span', which).addClass("stateface stateface-"+state);

    if(states[state]['state_chapter_pdf'] && states[state]['state_chapter_pdf'] != "false" && states[state]['state_chapter_pdf'] != ""){
        $('.state_chapter_pdf', which).show();
        $('.state_chapter_pdf', which).attr("href",states[state]['state_chapter_pdf']);
    }
    else {
        $('.state_chapter_pdf', which).hide();
    }

    if(states[state]['infographic_pdf'] && states[state]['infographic_pdf'] != "false" && states[state]['infographic_pdf'] != ""){
        $('.infographic_pdf', which).show();
        $('.infographic_pdf', which).attr("href",states[state]['infographic_pdf']);
    }
    else {
        $('.infographic_pdf', which).hide();
    }
    if(states[state]['no_of_schools'] && states[state]['no_of_schools'] != "false" && states[state]['no_of_schools'] != ""){
        $('.no_of_schools', which).show();
        $('.no_of_schools .data', which).text(states[state]['no_of_schools']);
    }
    else {
        $('.no_of_schools', which).hide();
    }


if(states[state]['school_names'] && states[state]['school_names'] != "false" && states[state]['school_names'] != ""){
        $('.school_names', which).show();
        $('.school_names .data', which).text(states[state]['school_names']);
    }
    else {
        $('.school_names', which).hide();
    }


if(states[state]['total_enrollmemt'] && states[state]['total_enrollmemt'] != "false" && states[state]['total_enrollmemt'] != ""){
        $('.total_enrollmemt', which).show();
        $('.total_enrollmemt .data', which).text(states[state]['total_enrollmemt']);
    }
    else {
        $('.total_enrollmemt', which).hide();
    }


if(states[state]['charter_operator'] && states[state]['charter_operator'] != "false" && states[state]['charter_operator'] != ""){
        $('.charter_operator', which).show();
        $('.charter_operator .data', which).text(states[state]['charter_operator']);
    }
    else {
        $('.charter_operator', which).hide();
    }


if(states[state]['total_revenues'] && states[state]['total_revenues'] != "false" && states[state]['total_revenues'] != ""){
        $('.total_revenues', which).show();
        $('.total_revenues .data', which).text(states[state]['total_revenues']);
    }
    else {
        $('.total_revenues', which).hide();
    }


if(states[state]['related_institutions'] && states[state]['related_institutions'] != "false" && states[state]['related_institutions'] != ""){
        $('.related_institutions', which).show();
        $('.related_institutions .data', which).text(states[state]['related_institutions']);
    }
    else {
        $('.related_institutions', which).hide();
    }


if(states[state]['key_people'] && states[state]['key_people'] != "false" && states[state]['key_people'] != ""){
        $('.key_people', which).show();
        $('.key_people .data', which).text(states[state]['key_people']);
    }
    else {
        $('.key_people', which).hide();
    }


if(states[state]['h1_b'] && states[state]['h1_b'] != "false" && states[state]['h1_b'] != ""){
        $('.h1_b', which).show();
        $('.h1_b .data', which).text(states[state]['h1_b']);
    }
    else {
        $('.h1_b', which).hide();
    }

}

}


$( document ).ready(function() {

    $(".herotext").width($(".herosubtitle").width());







    createstatedropdown("#state_list");
    $(document).click(function () { // you don't need the else part to fadeout
      $("#state_dropdown").removeClass('open');
      $("#issue_dropdown").removeClass('open');
      $("#compare_state_dropdown").removeClass('open');
   });


    $( "#state_dropdown" ).click(function( event ) {
        event.preventDefault();
        $(this).toggleClass('open');
        return false;
    });

    $( "#issue_dropdown" ).click(function( event ) {
        event.preventDefault();
        $(this).toggleClass('open');
        return false;
    });

    $( "#compare_state_dropdown" ).click(function( event ) {
        event.preventDefault();
        $(this).toggleClass('open');
        return false;
    });

    $( "#statedata .closestate" ).click(function( event ) {
        event.preventDefault();
        closestate();
        return false;
    });

    $( "#comparestatedata .closestate" ).click(function( event ) {
        event.preventDefault();
        closecomparestate();
        return false;
    });

    $('.comparestate').click(function (event) {
        event.preventDefault();
        if($(".comparestate").hasClass("open")){
            showcomparedropdown(false);
        }
        else{
            showcomparedropdown(true);
        }
        return false;

    });

    $('#compare_state_list').on("click",".state_selected", function(event) {
        event.preventDefault();
        var state = $(this).data('state');
        comparestate(state);
        // showcomparedropdown(false);
        $("#compare_state_dropdown").removeClass("open");
        return false;
    });

    $('#state_list').on("click",".state_selected", function(event) {
        event.preventDefault();
        if($(window).width()<768)resetissue();

        var myid=$(this).data('state');
        if(myid !=undefined){
            if(map_config[mapping[myid]]['enable'] == true){
                showstate(myid);

            }
        }
        $("#state_dropdown").removeClass("open");
        return false;
    });

    $('.issue_selected').click(function (event) {
        event.preventDefault();
        closestate();
        var issue = $(this).data('issue');
        resetissue();
        // $(".maplegend").hide();
        // $("#map_points").find("circle").remove();
        // $("#map_points").find("rect").remove();

        // $el = $("#mobile-data");
        // $el.empty();



        switch (issue) {
        case "states_with_active_networks":
            for (i = 0; i < states_with_active_networks_json.state.length; i++) {
                statecode = "#"+mapping[states_with_active_networks_json.state[i].statecode];
                color = states_with_active_networks_json.state[i].color;
                hovercolor = states_with_active_networks_json.state[i].hovercolor;
                map_config[statecode.replace("#","")]['upColor']=color;
                map_config[statecode.replace("#","")]['overColor']=hovercolor;
                $(statecode).css({ fill: color });

                //mobile-code
                statename=states_abbr[states_with_active_networks_json.state[i].statecode]['state_name'];
                $el.append('<li>'+statename+'</li>');

            }
        break;
        case "h_1b_hiring_by_state":
        for (i = 0; i < h_1b_hiring_by_state_json.state.length; i++) {
                statecode = "#"+mapping[h_1b_hiring_by_state_json.state[i].statecode];
                color = h_1b_hiring_by_state_json.state[i].color;
                hovercolor = h_1b_hiring_by_state_json.state[i].hovercolor;
                map_config[statecode.replace("#","")]['upColor']=color;
                map_config[statecode.replace("#","")]['overColor']=hovercolor;
                $(statecode).css({ fill: color });

                //mobile-code
                statename=states_abbr[h_1b_hiring_by_state_json.state[i].statecode]['state_name'];
                $el.append('<li>'+statename+'</li>');
        }
        break;

        case "states_with_suspect_property_deals":
        for (i = 0; i < states_with_suspect_property_deals_json.state.length; i++) {
                statecode = "#"+mapping[states_with_suspect_property_deals_json.state[i].statecode];
                color = states_with_suspect_property_deals_json.state[i].color;
                hovercolor = states_with_suspect_property_deals_json.state[i].hovercolor;
                map_config[statecode.replace("#","")]['upColor']=color;
                map_config[statecode.replace("#","")]['overColor']=hovercolor;
                $(statecode).css({ fill: color });

                //mobile-code
                statename=states_abbr[states_with_suspect_property_deals_json.state[i].statecode]['state_name'];
                $el.append('<li>'+statename+'</li>');
        }
        break;
        case "charter_school_bonds_procured_by_the_gulen_organization":
        for (i = 0; i < charter_school_bonds_procured_by_the_gulen_organization_json.state.length; i++) {
                statecode = "#"+mapping[charter_school_bonds_procured_by_the_gulen_organization_json.state[i].statecode];
                color = charter_school_bonds_procured_by_the_gulen_organization_json.state[i].color;
                hovercolor = charter_school_bonds_procured_by_the_gulen_organization_json.state[i].hovercolor;
                map_config[statecode.replace("#","")]['upColor']=color;
                map_config[statecode.replace("#","")]['overColor']=hovercolor;
                $(statecode).css({ fill: color });

                //mobile-code
                statename=states_abbr[charter_school_bonds_procured_by_the_gulen_organization_json.state[i].statecode]['state_name'];
                $el.append('<li>'+statename+'</li>');
        }
        break;
        case "regional_hub_and_member_states_identified":
        var xmlns = "http://www.w3.org/2000/svg";
        var tsvg_obj = document.getElementById("map_points");
        var svg_circle,svg_rect;
        var circle_diameter=12;
        var square_width=11;
        var square_height=11;
        var point_fillcolor="#ffffff";
        var point_outline="#000000";
        var point_thickness=0.5;


        var groupBy = function(xs, key) {
            return xs.reduce(function(rv, x) {
            (rv[x[key]] = rv[x[key]] || []).push(x);
            return rv;
        }, {});
        };
        // console.log(groupBy(regional_hub_and_member_states_identified_json.state,"region"));
        //mobile-code
        var grouped_states=groupBy(regional_hub_and_member_states_identified_json.state,"region");

        // console.log(grouped_states);
        for (var key in grouped_states) {
          if (grouped_states.hasOwnProperty(key)) {
                var state_type_state="";
                var state_type_hub="";
                // console.log(key + " -> " + grouped_states[key]);
                $el.append('<li><h4>'+key+'</h4></li>');
                for (i = 0; i < grouped_states[key].length; i++) {
                    console.log(grouped_states[key][i]);
                    statename=states_abbr[grouped_states[key][i].statecode]['state_name'];
                    if(grouped_states[key][i].state_type=="state"){
                        state_type_state = state_type_state+'<li>'+statename+'</li>';
                    } else if(grouped_states[key][i].state_type=="hub"){
                        state_type_hub=state_type_hub+'<li>'+statename+'</li>';
                    }

                }

                if(state_type_state) {
                    $el.append('<li><h5>Member States</h4></li>');
                    $el.append(state_type_state);
                }

                if(state_type_hub){
                    $el.append('<li><h5>Regional Hub</h4></li>');
                    $el.append(state_type_hub);
                }


          }

        }



        for (i = 0; i < regional_hub_and_member_states_identified_json.state.length; i++) {
                statecode = "#"+mapping[regional_hub_and_member_states_identified_json.state[i].statecode];
                color = regional_hub_and_member_states_identified_json.state[i].color;
                hovercolor = regional_hub_and_member_states_identified_json.state[i].hovercolor;
                map_config[statecode.replace("#","")]['upColor']=color;
                map_config[statecode.replace("#","")]['overColor']=hovercolor;
                $(statecode).css({ fill: color });



                //circle and square code
                state_type = regional_hub_and_member_states_identified_json.state[i].state_type;
                pos_X = regional_hub_and_member_states_identified_json.state[i].pos_X;
                pos_Y = regional_hub_and_member_states_identified_json.state[i].pos_Y;
                if(state_type !=undefined && pos_X!=undefined && pos_Y!=undefined) {

                    if(state_type=="hub") {//circle for hub
                        svg_circle = document.createElementNS(xmlns, "circle");
                        svg_circle.setAttributeNS(null, "cx", pos_X);
                        svg_circle.setAttributeNS(null, "cy", pos_Y);
                        svg_circle.setAttributeNS(null, "r", circle_diameter/2);
                        svg_circle.setAttributeNS(null, "fill", point_fillcolor);
                        svg_circle.setAttributeNS(null, "stroke",point_outline);
                        svg_circle.setAttributeNS(null, "stroke-width",point_thickness);
                        svg_circle.setAttributeNS(null, "id",'map_points_'+statecode.replace("#",""));
                        // svg_circle.style.pointer-events= "visible";
                        tsvg_obj.appendChild(svg_circle);
                        dynamicAddEvent_New(statecode.replace("#",""));


                    } else if(state_type=="state") {

                        svg_rect = document.createElementNS(xmlns, "rect");

                        // svg_rect.setAttributeNS(null, "x", pos_X - square_width/2);
                        // svg_rect.setAttributeNS(null, "y", pos_Y- square_height/2);

                        svg_rect.setAttributeNS(null, "x", pos_X);
                        svg_rect.setAttributeNS(null, "y", pos_Y);
                        svg_rect.setAttributeNS(null, "width", square_width);
                        svg_rect.setAttributeNS(null, "height", square_height);
                        svg_rect.setAttributeNS(null, "fill", point_fillcolor);
                        svg_rect.setAttributeNS(null, "stroke",point_outline);
                        svg_rect.setAttributeNS(null, "stroke-width",point_thickness);
                        svg_rect.setAttributeNS(null, "id",'map_points_'+statecode.replace("#",""));
                        tsvg_obj.appendChild(svg_rect);
                        dynamicAddEvent_New(statecode.replace("#",""));
                    }


                }




        }
        $(".maplegend").show();
        break;

    }
        $(".issue_name_display").text($(this).text());
        $("#issue_dropdown").removeClass("open");
        return false;
    });

    $('path').click(function () {
        var myid=$(this).attr('id')
        if(myid !=undefined){
            if(map_config[myid]['enable'] == true){
                showstate(map_config[myid]['iso'].replace("iso_",""));

            }
        }
        });

    $('text').click(function () {
        var myid=$(this).attr('id').replace("iso_","")
        if(myid !=undefined){
            if(map_config[mapping[myid]]['enable'] == true){
                showstate(myid);

            }
        }
        });

//mailchimp
// jQuery Validation
var container = $('#signup-error');
$("#signup").validate({
    errorLabelContainer: container,
   // if valid, post data via AJAX
   submitHandler: function(form) {
   $.post("includes/subscribe.php", { email: $("#email").val() }, function(data) {
        $('#response').html(data);
    });
    },
    // all fields are required
    rules: {
        email: {
            required: true,
            email: true
        }
    }
});






});

function onWindowResize() {
      checking=false;
      if (checking) {
       return;
      }
     checking = true;
    window.setTimeout(function() {
    checking=false;
    resizecode();
    },100 );
  }

$(window).on('resize orientationchange',onWindowResize);
