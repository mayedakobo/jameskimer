<?php
    //states data points
    if( ! $xml = simplexml_load_file('xml/statedata.xml') )
    {
        echo 'Unable to load XML file';
    }
    else
    {
        $json = json_encode($xml);
        $array = json_decode($json,TRUE);
        echo '<script>var statesjson = '.json_encode($array).';</script>';
    }

    //issue 1 - states-with-active-networks
    if( ! $xml = simplexml_load_file('xml/states_with_active_networks.xml') )
    {
        echo 'Unable to load XML file';
    }
    else
    {
        $json = json_encode($xml);
        $array = json_decode($json,TRUE);
        echo '<script>var states_with_active_networks_json = '.json_encode($array).';</script>';
    }

    //issue 2 - h-1b-hiring-by-state
    if( ! $xml = simplexml_load_file('xml/h_1b_hiring_by_state.xml') )
    {
        echo 'Unable to load XML file';
    }
    else
    {
        $json = json_encode($xml);
        $array = json_decode($json,TRUE);
        echo '<script>var h_1b_hiring_by_state_json = '.json_encode($array).';</script>';
    }

    //issue 3 - states_with_suspect_property_deals
    if( ! $xml = simplexml_load_file('xml/states_with_suspect_property_deals.xml') )
    {
        echo 'Unable to load XML file';
    }
    else
    {
        $json = json_encode($xml);
        $array = json_decode($json,TRUE);
        echo '<script>var states_with_suspect_property_deals_json = '.json_encode($array).';</script>';
    }

    //issue 4 - charter_school_bonds_procured_by_the_gulen_organization
    if( ! $xml = simplexml_load_file('xml/charter_school_bonds_procured_by_the_gulen_organization.xml') )
    {
        echo 'Unable to load XML file';
    }
    else
    {
        $json = json_encode($xml);
        $array = json_decode($json,TRUE);
        echo '<script>var charter_school_bonds_procured_by_the_gulen_organization_json = '.json_encode($array).';</script>';
    }

    //issue 5 - regional_hub_and_member_states_identified
    if( ! $xml = simplexml_load_file('xml/regional_hub_and_member_states_identified.xml') )
    {
        echo 'Unable to load XML file';
    }
    else
    {
        $json = json_encode($xml);
        $array = json_decode($json,TRUE);
        echo '<script>var regional_hub_and_member_states_identified_json = '.json_encode($array).';</script>';
    }

?>
    <script type="text/javascript" >

var statecode, name, no_of_schools,school_names,total_enrollmemt,charter_operator,total_revenues,related_institutions,key_people,h1_b,state_chapter_pdf,infographic_pdf;
var states = {};
var mapping=[];
for (var key in map_config) {
    if (!map_config.hasOwnProperty(key)) continue;
    var obj = map_config[key];
    if(key!="default") mapping[obj['iso'].replace("iso_","")]=key;
}
statesjson.state.sort(function(a, b){
    var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
    if (nameA < nameB) //sort string ascending
        return -1
    if (nameA > nameB)
        return 1
    return 0 //default return value (no sorting)
});
for (i = 0; i < statesjson.state.length; i++) {
    // console.log(statesjson.state[i].statecode);
    if(mapping[statesjson.state[i].statecode]) {
    map_config[mapping[statesjson.state[i].statecode]]['enable'] = true;
    statecode = statesjson.state[i].statecode;
    name = statesjson.state[i].name;
    no_of_schools = statesjson.state[i].no_of_schools;
    school_names = statesjson.state[i].school_names;
    total_enrollmemt = statesjson.state[i].total_enrollmemt;
    charter_operator = statesjson.state[i].charter_operator;
    total_revenues = statesjson.state[i].total_revenues;
    related_institutions = statesjson.state[i].related_institutions;
    key_people = statesjson.state[i].key_people;
    h1_b = statesjson.state[i].h1_b;
    state_chapter_pdf = statesjson.state[i].state_chapter_pdf;
    infographic_pdf = statesjson.state[i].infographic_pdf;
    if(statecode!=undefined){
      states[statecode] = {
        "name": name,
        "no_of_schools": no_of_schools,
        "school_names": school_names,
        "total_enrollmemt": total_enrollmemt,
        "charter_operator": charter_operator,
        "total_revenues": total_revenues,
        "related_institutions": related_institutions,
        "key_people": key_people,
        "h1_b": h1_b,
        "state_chapter_pdf": state_chapter_pdf,
        "infographic_pdf": infographic_pdf
    };
    }
}
}
// console.log(states);

    </script>
