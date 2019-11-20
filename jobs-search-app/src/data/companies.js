const companiesData = [
    {
        "id": 1,
        "company_name": "Company A",
        "requirements": ["property insurance"],
        "optional_requirements": [["apartment", "house"]],
        "optional": false
    },

    {
        "id": 2,
        "company_name": "Company B",
        "requirements": ["driver's license", "car insurance"],
        "optional_requirements": [["5 door car", "4 door car"]],
        "optional": false
    },

    {
        "id": 3,
        "company_name": "Company C",
        "requirements": ["social security", "work permit"],
        "optional_requirements": [[]],
        "optional": false
    },

    {
        "id": 4,
        "company_name": "Company D",
        "requirements": [],
        "optional_requirements": [["apartment", "flat", "house"]],
        "optional": false
    },

    {
        "id": 5,
        "company_name": "Company E",
        "requirements": ["driver's license"],
        "optional_requirements": [["2 door car", "3 door car", "4 door car", "5 door car"]],
        "optional": false
    },

    {
        "id": 6,
        "company_name": "Company F",
        "requirements": ["motorcycle", "driver's license", "motorcycle insurance"],
        "optional_requirements": [["scooter", "bike"]],
        "optional": true
    },

    {
        "id": 7,
        "company_name": "Company G",
        "requirements": ["massage qualification certificate", "liability insurance"],
        "optional_requirements": [[]],
        "optional": false
    },

    {
        "id": 8,
        "company_name": "Company H",
        "requirements": [],
        "optional_requirements": [["storage place", "garage"]],
        "optional": false
    },

    {
        "id": 9,
        "company_name": "Company J",
        "requirements": [],
        "optional_requirements": [[]],
        "optional": false
    },

    {
        "id": 10,
        "company_name": "Company K",
        "requirements": ["paypal account"],
        "optional_requirements": [[]],
        "optional": false
    },
];

export default companiesData;