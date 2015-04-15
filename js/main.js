var activities = [
      { value: 'Email Activity', data: 'email_activity' },
      { value: 'Person', data: 'person' }
    ];
var email_activity = [
      { value: 'Date', data: 'date'},
      { value: 'Interaction', data: 'interaction'},
      { value: 'Person', data: 'person'},
      { value: 'Time', data: 'time' },
      { value: 'Email', data: 'email' },
      { value: 'Email Address', data: 'email_address' },
      { value: 'Email Activity Type', data: 'email_activity_type' },
	{ value: 'Email Activity Detail', data: 'email_activity_detail' }
    ];
	var interaction =[
      { value: 'Interaction ID', data: 'interaction_id'},
      { value: 'Consolidated Interaction ID', data: 'consolidated_interaction_id'},
      { value: 'Interaction Group', data: 'interaction_group'},
      { value: 'Interaction Type', data: 'interaction_type'},
      { value: 'Interaction Type Group', data: 'interaction_type_group'},
      { value: 'Channel', data: 'channel'},
      { value: 'Vendor', data: 'vendor'},
      { value: 'Interaction Name', data: 'interaction_name'},
      { value: 'Interaction Description', data: 'interaction_description'},
      { value: 'Is Active', data: 'is_active'},
      { value: 'Medium', data: 'medium'},
      { value: 'Tags', data: 'Tags'},
      { value: 'Franchise', data: 'Franchise'},
      { value: 'Portfolio', data: 'portfolio'},
      { value: 'Start Date', data: 'start_date'},
	  { value: 'End Date', data: 'end_date'}
	];
	var email =[
      { value: 'Email ID', data: 'email_id'},
      { value: 'Email Subject', data: 'email_subject'},
	  { value: 'Email Description', data: 'email_description'}
	];
	var email_address =[
      { value: 'Email Address ID', data: 'email_address_id'},
		{ value: 'Address', data: 'address'}
	];
	var email_activity_detail =[
      { value: 'Email Activity Detail ID', data: 'email_activity_detail_id'},
      { value: 'Url', data: 'url'},
		
	]
	var email_activity_type= [
      { value: 'Email Activity Type', data: 'email_activity_type'},
		{ value: 'Email Activity Type Description', data: 'email_activity_type_description'}
	];
	
var date =[
      { value: 'Date ID', data: 'date_id'},
      { value: 'Date', data: 'date'},
      { value: 'Day', data: 'day'},
      { value: 'Day Suffix', data: 'day_suffix'},
      { value: 'Day of the Week', data: 'day_of_week'},
      { value: 'Day of the Year', data: 'day_of_year'},
      { value: 'Week of the Year', data: 'week_of_year'},
      { value: 'Week of the Month', data: 'week_of_month'},
      { value: 'Month', data: 'month'},
      { value: 'Name of the Month', data: 'month_name'},
      { value: 'Quarter', data: 'quarter'},
      { value: 'Quarter Name', data: 'quarter_name'},
	{ value: 'Year', data: 'Year'}
    ];    
var interaction =[
      { value: 'Interaction ID', data: 'interaction_id'},
      { value: 'Consolidated Interaction ID', data: 'consolidated_interaction_id'},
      { value: 'Interaction Group', data: 'interaction_group'},
      { value: 'Interaction Type', data: 'interaction_type'},
      { value: 'Interaction Group', data: 'interaction_type_group'},
      { value: 'Channel', data: 'channel'},
      { value: 'Vendor', data: 'vendor'},
      { value: 'Interaction Name', data: 'interaction_name'},
      { value: 'Interaction Description', data: 'interaction_description'},
      { value: 'Is Active', data: 'is_active'},
      { value: 'Medium', data: 'medium'},
      { value: 'Tags', data: 'tags'},
      { value: 'franchise', data: 'franchise'},
      { value: 'Portfolio', data: 'portfolio'},
      { value: 'Start Date', data: 'start_date'},
	  { value: 'End Date', data: 'end_date'}
    ];
var person = [
      { value: 'Person Id', data: 'person_id' },
      { value: 'Consolidated Person Id', data: 'consolidated_person_id' },
      { value: 'Smith and Nephew GUID', data: 'smith_and_nephew_guid' },
      { value: 'NPI Number', data: 'npi_number' },
      { value: 'ME Number', data: 'me_number' },
      { value: 'Dea Number', data: 'dea_number' },
      { value: 'IMS Number', data: 'ims_number' },
      { value: 'Person Type', data: 'person_type' },
      { value: 'Salutation', data: 'Salutation' },
      { value: 'First Name', data: 'first_name' },
      { value: 'Middle Name', data: 'middle_name' },
      { value: 'Last Name', data: 'last_name' },
      { value: 'Suffix', data: 'suffix' },    
      { value: 'Person Status', data: 'person_status' },
      { value: 'HCP Employment', data: 'hcp_employment' },
      { value: 'State of Licensure', data: 'state_of_licensure' },
      { value: 'Primary HCP Speciality', data: 'primary_hcp_speciality' },
      { value: 'Secondary HCP Speciality', data: 'secondary_hcp_speciality' },
      { value: 'HCP Professional Affiliation', data: 'hcp_professional_affiliation' },
      { value: 'Primary Address line1', data: 'primary_address_line1' },
      { value: 'Primary Address line2', data: 'primary_address_line2' },
      { value: 'Primary City', data: 'primary_city' },
      { value: 'Primary State Abbreviation', data: 'primary_state_abbreviation' },
      { value: 'Primary Zip Code', data: 'primary_zip_code' },
      { value: 'Primary Zip Code 4', data: 'primary_zip_code4' },
      { value: 'Source Channel', data: 'source_channel' },
      { value: 'Source Vendor', data: 'source_vendor' },
      { value: 'Person Tags', data: 'person_tags' },
      { value: 'Office Contact Number', data: 'office_contact_number' },
      { value: 'Office Extension', data: 'office_extenion' },
      { value: 'Home Contact Number', data: 'home_contact_number' },
      { value: 'Home Extension', data: 'home_extension' },
      { value: 'Mobile Contact Number', data: 'mobile_contact_number' }, 
      { value: 'Mobile Extension', data: 'mobile_extension' },
      { value: 'Fax Contact Number', data: 'fax_contact_number' },
	{ value: 'Fax Extension', data: 'fax_extension' }
    ];

$('#builder').on('afterAddRule.queryBuilder', function(e, rule) {
console.log(rule);
var $rule = rule;
var $rule_container = $rule.$el.find(".rule-filter-container");
var activity_input = $('<input class="activity form-control" type="text"/>');
var activity_text = $('<p>By:</p>') ;

var act_input = activity_input.autocomplete({
            lookup: activities,
			onSelect:function(suggestion){
		console.log(suggestion);
		}
    });
    dimesnion_input.autocomplete().setOptions({"lookup": activities} )


var dimension_input = $('<input class="dimension form-control" type="text"/>');

dimension_input.autocomplete({
					lookup:eval(ac),
					onSelect:function(suggestion){
						dim = suggestion.data;
			})

      console.log(act_input);
      	activity_input.appendTo($rule_container);
	activity_text.appendTo($rule_container);
});

/*
$('#builder').on('afterCreateRuleFilters.queryBuilder', function(e, rule) {

	var $rule = rule;
	var $rule_container = $rule.$el.find(".rule-filter-container");
	var $rule_operator_container = $rule.$el.find(".rule-operator-container");
	var $rule_value_container = $rule.$el.find(".rule-value-container");

	var $rule_select = $rule.$el.find(".rule-filter-container select");
	
	var activity_input = $('<input class="activity form-control" type="text"/>');
	var activity_text = $('<p>By:</p>')
	var dimension_input = $('<input class="dimension form-control" type="text"/>');
	var attribute_container = $('<div class="attribute_container"><p>With a/an: </p></div>');
	var attribute_input = $('<input class="attribute form-control" type="text"/>');
	var ac;
	var dim;
	var attr;
	
	var dim_active = false;
	var attr_active = false;

	var act_text = "";
	activity_input.on("focus", function(){
	act_text = $(this).val().toLowerCase();

	});

	activity_input.autocomplete({
		lookup:activities,
		onSelect:function(suggestion){
			ac = (suggestion.data);
			ac_title = (suggestion.title);
			console.log(act_text, ac)
			if(ac ){
				if(ac_title != act_text){

					console.log("THERE WAS A CHANGE");
					$rule_operator_container.html("");
					$rule_value_container.html("");
					attribute_input.val("").remove();
					dimension_input.val("").remove();
					//$('.person').removeClass("person");
					attr_active = false;
				}else{
				  console.log("there is no change");
				}
				
				attr_active = true;
				
			    //$rule_container.after(attribute_container);
				$rule_container.addClass("person");
				attribute_input.appendTo($rule_container);
				attribute_input.autocomplete({
					lookup:eval(ac),
					onSelect:function(suggestion){
						attr = suggestion.data;
						var id_string = ac + "&" + attr;
			            $rule_select.val(id_string);
			            $rule_select.trigger("change");
					}
				});
			}else{
				if(attr_active || dim_active){
					console.log("remove things");
					$rule_operator_container.html("");
					$rule_value_container.html("").css("display","none");
					attribute_container.remove();
						$('.person').removeClass("person");
						$('input.attribute').remove();
					//attribute_input.val("").remove();
					//dimension_input.val("").remove();
					attr_active = false;
				}
						attr_active = true;
				dimension_input.appendTo($rule_container);
				dimension_input.autocomplete({
					lookup:eval(ac),
					onSelect:function(suggestion){
						dim = suggestion.data;
						console.log(dim);
						dim_active = true;
						console.log(ac + "_" + dim);
						var id_string = ac + "_" + dim ;
			            //$rule_select.val(id_string);
			            //$rule_select.trigger("change");	
						$rule_container.after(attribute_container);
						attribute_input.appendTo(attribute_container);
						attribute_input.autocomplete({
							lookup:eval(dim),
							onSelect:function(suggestion){
								attr = suggestion.data;
								console.log(ac + "&" + dim + "&" + attr) ;
							    var id_string = ac + "&" + dim + "&" + attr;
					            $rule_select.val(id_string);
					            $rule_select.trigger("change");	
							}
						});
					}
				});
			}
		}
	});
	
	activity_input.appendTo($rule_container);
	activity_text.appendTo($rule_container);
	
	
	
});
	
	*/
    
    function no_dimension(rule){
      console.log(rule);
    }


$('#builder').queryBuilder({
	plugins: [
	    'sortable'],
	filters:[ 
	  { label: 'Person Id',id: 'person&person_id',type:"string" ,type:"string" },
      { label: 'Consolidated Person Id', id: 'person&consolidated_person_id' ,type:"string" },
      { label: 'Smith and Nephew GUID', id: 'person&smith_and_nephew_guid' ,type:"string" },
      { label: 'NPI Number', id: 'person&npi_number' ,type:"string" },
      { label: 'ME Number', id: 'person&me_number' ,type:"string" },
      { label: 'Dea Number', id: 'person&dea_number' ,type:"string" },
      { label: 'IMS Number', id: 'person&ims_number' ,type:"string" },
      { label: 'Person Type', id: 'person&person_type' ,type:"string" },
      { label: 'Salutation', id: 'person&Salutation' ,type:"string" },
      { label: 'First Name', id: 'person&first_name' ,type:"string", valueSetter: function(rule, value) {
       console.log(rule);
 
         var val = rule.__.filter.id.split('&');
         var operator = rule.__.operator.type;
         console.log(val);

         rule.$el.find('.rule-filter-container input[type="text"]').val(val[0]).trigger("change");
         rule.$el.find('.rule-filter-container select').val(rule.__.filter.id).trigger("change");

         rule.$el.find('.rule-filter-container input.attribute').val(rule.__.filter.label).trigger("change");


         rule.$el.find('.rule-operator-container select').val(operator).trigger("change");
         rule.$el.find('.rule-value-container input[type="text"]').val(value).trigger("change");
     
      }

     
      },
      { label: 'Middle Name', id: 'person&middle_name' ,type:"string" },
      { label: 'Last Name', id: 'person&last_name' ,type:"string" },
      { label: 'Suffix', id: 'person&suffix' ,type:"string" },    
      { label: 'Person Status', id: 'person&person_status' ,type:"string" },
      { label: 'HCP Employment', id: 'person&hcp_employment' ,type:"string" },
      { label: 'State of Licensure', id: 'person&state_of_licensure' ,type:"string" },
      { label: 'Primary HCP Speciality', id: 'person&primary_hcp_speciality' ,type: 'integer',
    input: 'select',
    values: {
	1:"Allergy",
	2:"Anesthesiology",
	3:"Cardiology",
	4:"Critical Care",
	5:"Dermatology",
	6:"Emergency Medicine",
	7:"Endocrinology",
	8:"Family Practice",
	9:"Gastroenterology",
	10:"General Practice",
	11:"Geriatrics",
	12:"Gynecology",
	13:"Hematology",
	14:"Immunology",
	15:"Internal Medicine",
	33:"Nephrology",
	32:"Neurology",
	16:"Not Applicable",
	17:"Obstetrics",
	18:"Oncology",
	19:"Orthopedics",
	20:"Other",
	21:"Otolaryngology",
	35:"Pain Management",
	37:"Pathology",
	22:"Pediatrics",
	23:"Perinatology",
	24:"Physical Medicine/Rehabilitation",
	34:"Podiatry",
	36:"Primary Care",
	25:"Proctology",
	26:"Psychiatry",
	27:"Pulmonology",
	28:"Radiology",
	29:"Rheumatology",
	30:"Surgery",
	31:"Urology"
      
    },
    operators: ['equal', 'not_equal']
  

},
      { label: 'Secondary HCP Speciality', id: 'person&secondary_hcp_speciality' ,type:"string" },
      { label: 'HCP Professional Affiliation', id: 'person&hcp_professional_affiliation' ,type:"string" },
      { label: 'Primary Address line1', id: 'person&primary_address_line1' ,type:"string" },
      { label: 'Primary Address line2', id: 'person&primary_address_line2' ,type:"string" },
      { label: 'Primary City', id: 'person&primary_city' ,type:"string" },
      { label: 'Primary State Abbreviation', id: 'person&primary_state_abbreviation' ,type:"string" },
      { label: 'Primary Zip Code', id: 'person&primary_zip_code' ,type:"string" },
      { label: 'Primary Zip Code 4', id: 'person&primary_zip_code4' ,type:"string" },
      { label: 'Source Channel', id: 'person&source_channel' ,type:"string" },
      { label: 'Source Vendor', id: 'person&source_vendor' ,type:"string" },
      { label: 'Person Tags', id: 'person&person_tags' ,type:"string" },
      { label: 'Office Contact Number', id: 'person&office_contact_number' ,type:"string" },
      { label: 'Office Extension', id: 'person&office_extenion' ,type:"string" },
      { label: 'Home Contact Number', id: 'person&home_contact_number' ,type:"string" },
      { label: 'Home Extension', id: 'person&home_extension' ,type:"string" },
      { label: 'Mobile Contact Number', id: 'person&mobile_contact_number' ,type:"string" }, 
      { label: 'Mobile Extension', id: 'person&mobile_extension' ,type:"string" },
      { label: 'Fax Contact Number', id: 'person&fax_contact_number' ,type:"string" },
	  { label: 'Fax Extension', id: 'person&fax_extension', type:"string" },

      { label: 'Interaction ID', id: 'email_activity&interaction&interaction_id',type:'string' },
      { label: 'Consolidated Interaction ID', id: 'email_activity&interaction&consolidated_interaction_id',type:'string' },
      { label: 'Interaction Group', id: 'email_activity&interaction&interaction_group',type:'string' },
      { label: 'Interaction Type', id: 'email_activity&interaction&interaction_type',type:'string' },
      { label: 'Interaction Type Group', id: 'email_activity&interaction&interaction_type_group',type:'string' },
      { label: 'Channel', id: 'email_activity&interaction&channel',type:'string' },
      { label: 'Vendor', id: 'email_activity&interaction&vendor',type:'string' },
      { label: 'Interaction Name', id: 'email_activity&interaction&interaction_name',type:'string' },
      { label: 'Interaction Description', id: 'email_activity&interaction&interaction_description',type:'string' },
      { label: 'Is Active', id: 'email_activity&interaction&is_active', type: 'integer',
          input: 'radio',
          values: {
            1: 'Yes',
            0: 'No'
          },
          operators: ['equal']
      },
      { label: 'Medium', id: 'email_activity&interaction&medium',type:'string' },
      { label: 'Tags', id: 'email_activity&interaction&tags',type:'string' },
      { label: 'Franchise', id: 'email_activity&interaction&franchise',type:'string' },
      { label: 'Portfolio', id: 'email_activity&interaction&portfolio',type:'string' },
      { label: 'Start Date', id: 'email_activity&interaction&start_date',type: 'date',  validation: {
        format: 'YYYY/MM/DD'
        },plugin: 'datepicker',
          plugin_config: {
            format: 'yyyy/mm/dd',
            todayBtn: 'linked',
            todayHighlight: true,
            autoclose: true
         }  },
	  { label: 'End Date', id: 'email_activity&interaction&end_date', type: 'date',  validation: {
        format: 'YYYY/MM/DD'
        },plugin: 'datepicker',
          plugin_config: {
            format: 'yyyy/mm/dd',
            todayBtn: 'linked',
            todayHighlight: true,
            autoclose: true
         } },
      { label: 'Date ID', id: 'email_activity&date&date_id', type:"string" },
      { label: 'Date', id: 'email_activity&date&date', type: 'date',  validation: {
        format: 'YYYY/MM/DD'
        },plugin: 'datepicker',
          plugin_config: {
            format: 'yyyy/mm/dd',
            todayBtn: 'linked',
            todayHighlight: true,
            autoclose: true
         },valueSetter:function(rule, value){

          var val = rule.__.filter.id.split('&');
         var ac = val[0].split('_');
         var activity =  ac[0].charAt(0).toUpperCase() + ac[0].slice(1) + " " + ac[1].charAt(0).toUpperCase() + ac[1].slice(1);
         var operator = rule.__.operator.type;
         console.log(rule);
         rule.$el.find('.rule-filter-container input[type="text"]').val(activity).trigger("change");
         rule.$el.find('.rule-filter-container select').val(rule.__.filter.id).trigger("change");

         rule.$el.find('.rule-filter-container input.dimension').val(val[1]).trigger("change");

         rule.$el.find('.attribute_container input.attribute').val(val[2]).trigger("change");


         rule.$el.find('.rule-operator-container select').val(operator).trigger("change");
         rule.$el.find('.rule-value-container input[type="text"]').val(value).trigger("change")
         } 
      },
      { label: 'Day', id: 'email_activity&date&day', type:"string" },
      { label: 'Day Suffix', id: 'email_activity&date&day_suffix', type:"string" },
      { label: 'Day of the Week', id: 'email_activity&date&day_of_week', type:"string" },
      { label: 'Day of the Year', id: 'email_activity&date&day_of_year', type:"string" },
      { label: 'Week of the Year', id: 'email_activity&date&week_of_year', type:"string" },
      { label: 'Week of the Month', id: 'email_activity&date&week_of_month', type:"string" },
      { label: 'Month', id: 'email_activity&date&month', type:"string" },
      { label: 'Name of the Month', id: 'email_activity&date&month_name', type:"string" },
      { label: 'Quarter', id: 'email_activity&date&quarter', type:"string" },
      { label: 'Quarter Name', id: 'email_activity&date&quarter_name', type:"string" },
      { label: 'Year', id: 'email_activity&date&Year',  type:"string" },
	
    { label: 'Person Id', id: 'email_activity&person&person_id', type:"string" },
    { label: 'Consolidated Person Id', id: 'email_activity&person&consolidated_person_id', type:"string" },
    { label: 'Smith and Nephew GUID', id: 'email_activity&person&smith_and_nephew_guid', type:"string" },
    { label: 'NPI Number', id: 'email_activity&person&npi_number', type:"string" },
    { label: 'ME Number', id: 'email_activity&person&me_number', type:"string" },
    { label: 'Dea Number', id: 'email_activity&person&dea_number', type:"string" },
    { label: 'IMS Number', id: 'email_activity&person&ims_number', type:"string" },
    { label: 'Person Type', id: 'email_activity&person&person_type', type:"string" },
    { label: 'Salutation', id: 'email_activity&person&Salutation', type:"string" },
    { label: 'First Name', id: 'email_activity&person&first_name', type:"string" },
    { label: 'Middle Name', id: 'email_activity&person&middle_name', type:"string" },
    { label: 'Last Name', id: 'email_activity&person&last_name', type:"string" },
    { label: 'Suffix', id: 'email_activity&person&suffix', type:"string" },    
    { label: 'Person Status', id: 'email_activity&person&person_status', type:"string" },
    { label: 'HCP Employment', id: 'email_activity&person&hcp_employment', type:"string" },
    { label: 'State of Licensure', id: 'email_activity&person&state_of_licensure', type:"string" },
    { label: 'Primary HCP Speciality', id: 'email_activity&person&primary_hcp_speciality', type: 'integer',
    input: 'select',
    values: {
	1:"Allergy",
	2:"Anesthesiology",
	3:"Cardiology",
	4:"Critical Care",
	5:"Dermatology",
	6:"Emergency Medicine",
	7:"Endocrinology",
	8:"Family Practice",
	9:"Gastroenterology",
	10:"General Practice",
	11:"Geriatrics",
	12:"Gynecology",
	13:"Hematology",
	14:"Immunology",
	15:"Internal Medicine",
	33:"Nephrology",
	32:"Neurology",
	16:"Not Applicable",
	17:"Obstetrics",
	18:"Oncology",
	19:"Orthopedics",
	20:"Other",
	21:"Otolaryngology",
	35:"Pain Management",
	37:"Pathology",
	22:"Pediatrics",
	23:"Perinatology",
	24:"Physical Medicine/Rehabilitation",
	34:"Podiatry",
	36:"Primary Care",
	25:"Proctology",
	26:"Psychiatry",
	27:"Pulmonology",
	28:"Radiology",
	29:"Rheumatology",
	30:"Surgery",
	31:"Urology"
      
    },
    operators: ['equal', 'not_equal']
   },
    { label: 'Secondary HCP Speciality', id: 'email_activity&person&secondary_hcp_speciality', type:"string" },
    { label: 'HCP Professional Affiliation', id: 'email_activity&person&hcp_professional_affiliation', type:"string" },
    { label: 'Primary Address line1', id: 'email_activity&person&primary_address_line1', type:"string" },
    { label: 'Primary Address line2', id: 'email_activity&person&primary_address_line2', type:"string" },
    { label: 'Primary City', id: 'email_activity&person&primary_city', type:"string" },
    { label: 'Primary State Abbreviation', id: 'email_activity&person&primary_state_abbreviation', type:"string" },
    { label: 'Primary Zip Code', id: 'email_activity&person&primary_zip_code', type:"string" },
    { label: 'Primary Zip Code 4', id: 'email_activity&person&primary_zip_code4', type:"string" },
    { label: 'Source Channel', id: 'email_activity&person&source_channel', type:"string" },
    { label: 'Source Vendor', id: 'email_activity&person&source_vendor', type:"string" },
    { label: 'Person Tags', id: 'email_activity&person&person_tags', type:"string" },
    { label: 'Office Contact Number', id: 'email_activity&person&office_contact_number', type:"string" },
    { label: 'Office Extension', id: 'email_activity&person&office_extenion', type:"string" },
    { label: 'Home Contact Number', id: 'email_activity&person&home_contact_number', type:"string" },
    { label: 'Home Extension', id: 'email_activity&person&home_extension', type:"string" },
    { label: 'Mobile Contact Number', id: 'email_activity&person&mobile_contact_number', type:"string" }, 
    { label: 'Mobile Extension', id: 'email_activity&person&mobile_extension', type:"string" },
    { label: 'Fax Contact Number', id: 'email_activity&person&fax_contact_number', type:"string" },
    { label: 'Fax Extension', id: 'email_activity&person&fax_extension', type:"string" },
    { label: 'Email Activity Detail ID', id: 'email_activity&email_activity_detail&email_activity_detail_id', type:"string"},
    { label: 'Url', id: 'email_activity&email_activity_detail&url', type:"string"},
	{ label: 'Email ID', id: 'email_activity&email&email_id', type:"string"},
	{ label: 'Email Subject', id: 'email_activity&email&email_subject',type:"string"},
	{ label: 'Email Description', id: 'email_activity&email&email_description', type:"string"},
    { label: 'Email Address ID', id: 'email_activity&email_address&email_address_id', type:"string"},
  	{ label: 'Address', id: 'email_activity&email_address&address', type:"string"},
  { label: 'Email Activity Detail ID', id: 'email_activity&detail_email_activity&detail_id', type:'string'},
    { label: 'Email Activity Type', id: 'email_activity&email_acivity_type&email_activity_type', type:"string"},
  	{ label: 'Email Activity Type Description', id: 'email_activity&email_acivity_type&email_activity_type_description', type:"string"}
	  
  ]
});

var new_rules = {
  "condition": "AND",
  "rules": [
    {
      "id": "person&first_name",
      "field": "person&first_name",
      "type": "string",
      "input": "text",
      "operator": "not_contains",
      "value": "asdfasdf"
    },
    {
      "id": "email_activity&date&date",
      "field": "email_activity_date_date",
      "type": "date",
      "input": "text",
      "operator": "greater_or_equal",
      "value": "2015/04/02"
    }
  ]
};

$('#load_saved_query').on('click', function() {
  $('#builder').queryBuilder('setRules', new_rules);
});





// reset builder
$('#reset_query').on('click', function() {
  $('#builder').queryBuilder('reset');
  $('#result').addClass('hide').find('pre').empty();
});

// get rules
$('#submit_query').on('click', function() {
  $('#result').find('pre').html(JSON.stringify(
      $('#builder').queryBuilder('getRules'),
      undefined, 2
    ));
});

$('.parse-sql').on('click', function() {
  var res = $('#builder').queryBuilder('getSQL', $(this).data('stmt'), false);
  $('#result').removeClass('hide')
    .find('pre').html(
      res.sql + (res.params ? '\n\n' + JSON.stringify(res.params, undefined, 2) : '')
    );
});


     

    

/*

,{
    id: 'email_activity_date',
    label: 'Datepicker',
    type: 'date',
    validation: {
      format: 'YYYY/MM/DD'
    },
    plugin: 'datepicker',
    plugin_config: {
      format: 'yyyy/mm/dd',
      todayBtn: 'linked',
      todayHighlight: true,
      autoclose: true
    }
  }


 var dimension_input = $('<input class="dimension form-control" type="text"/>').autocomplete({
			      lookup: eval(ac),
			      onSelect: function(suggestion){
			        dm = suggestion.data;
					//$rule_container.val(suggestion.data);
				    var attribute_input = $('<input class="attribute form-control" type="text"/>').autocomplete({
					      lookup: eval(dm),
					      onSelect: function(suggestion){
					        attr = suggestion.data;
					
				            var id_string = ac + "_" + dm + "_" + attr;
				            alert(id_string);
				            //$rule_select.val(id_string);
				            //$rule_select.trigger("change");
							    //$rule_select.trigger("change");
						}
					});
					attribute_input.appendTo($rule_container);
					
				}
			});
			dimension_input.appendTo($rule_container);
			
		}*/