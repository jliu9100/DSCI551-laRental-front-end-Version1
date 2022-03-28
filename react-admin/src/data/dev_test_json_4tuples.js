const testData = [
    {   
        "uid" : 1,
        "addrline1": "17946 Valley Vista Blvd",
        "addrline2": "Encino, CA 91316",
        "amenities": [
            "Air Conditioning",
            "Driveway Parking",
            "Dryer",
            "Flooring: Hardwood",
            "Laundry: Hookups",
            "Laundry: In Unit",
            "Recreation Room",
            "Washer",
            "Washer/Dryer Hookups"
        ],
        "highlights": [
            "Listed 13 days ago",
            "Updated 1 day ago",
            "Small Dogs Allowed",
            "Laundry: In Unit, Washer/Dryer Hookups",
            "A/C"
        ],
        "house_info": [
            "3 beds",
            "2 baths",
            "1,564 sqft"
        ],
        "href": "https://hotpads.com/17946-valley-vista-blvd-encino-ca-91316-1m3j1gg/pad",
        "pets_policy": [
            "Dogs allowed"
        ],
        "rental_price": 700,
        "tags": ""
    },
    {   
        "uid" : 2,
        "addrline1": "8335 Gladbeck Ave",
        "addrline2": "Northridge, CA 91324",
        "amenities": [
            "Air Conditioning",
            "Building Deposit Fee Maximum: 12000",
            "Building Deposit Fee Minimum: 12000",
            "Dryer",
            "Fireplace",
            "Flooring: Hardwood",
            "Laundry: In Unit",
            "Off Street Parking",
            "Patio Balcony",
            "Washer"
        ],
        "highlights": [
            "Listed 3 days ago",
            "Updated 1 day ago",
            "No Pets Allowed",
            "Laundry: In Unit",
            "Off Street",
            "A/C"
        ],
        "house_info": [
            "3 beds",
            "2 baths",
            "1,700 sqft"
        ],
        "href": "https://hotpads.com/8335-gladbeck-ave-northridge-ca-91324-1m3k0ya/pad",
        "pets_policy": [
            "No cats allowed",
            "No dogs allowed"
        ],
        "rental_price": 6800,
        "tags": ""
    },
    {
        "uid" : 3,
        "addrline1": "1118 W M St",
        "addrline2": "Wilmington, CA 90744",
        "amenities": [
            "Building Deposit Fee Maximum: 2950",
            "Building Deposit Fee Minimum: 2950",
            "Ceiling Fan",
            "Flooring: Vinyl",
            "Garage",
            "Laundry: Hookups",
            "Microwave Oven",
            "Range",
            "Washer/Dryer Hookups",
            "Yard -"
        ],
        "highlights": [
            "Listed 1 day ago",
            "Updated 1 day ago",
            "Cats and Small Dogs Allowed",
            "Laundry: Washer/Dryer Hookups",
            "Garage",
            "Microwave Oven"
        ],
        "house_info": [
            "3 beds",
            "1 bath",
            "940 sqft"
        ],
        "href": "https://hotpads.com/1118-w-m-st-wilmington-ca-90744-1n24sf2/pad",
        "pets_policy": [
            "Cats allowed",
            "Dogs allowed"
        ],
        "rental_price": 2950,
        "tags": ""
    },
    {   
        "uid" : 4,
        "addrline1": "1447 E 25th St",
        "addrline2": "Los Angeles, CA 90011",
        "amenities": [
            "Building Deposit Fee Maximum: 550",
            "Building Deposit Fee Minimum: 550",
            "Fitness Center",
            "Furnished",
            "Laundry: Shared",
            "Utilities included in rent",
            "recording studio"
        ],
        "highlights": [
            "Listed 10 days ago",
            "Updated 2 days ago",
            "No Pets Allowed",
            "Laundry: Shared",
            "Gym: On-site"
        ],
        "house_info": [
            "studio",
            "1 bath",
            "1,408 sqft"
        ],
        "href": "https://hotpads.com/1447-e-25th-st-los-angeles-ca-90011-1ty5upn/pad",
        "pets_policy": [
            "No cats allowed",
            "No dogs allowed"
        ],
        "rental_price": 550,
        "tags": "Furnished"
    }, 
    {
        "uid" : 5,
        "addrline1": "611 Baylor St",
        "addrline2": "Pacific Palisades, CA 90272",
        "amenities": [
            "Air Conditioning",
            "Building Deposit Fee Maximum: 11250",
            "Building Deposit Fee Minimum: 11250",
            "Dryer",
            "Flooring: Hardwood",
            "Garage",
            "Laundry: In Unit",
            "Off Street Parking",
            "Patio Balcony",
            "Washer"
        ],
        "highlights": [
            "Listed 3 days ago",
            "Updated 1 day ago",
            "Dogs Allowed",
            "Laundry: In Unit",
            "Garage, Off Street",
            "A/C"
        ],
        "house_info": [
            "3 beds",
            "2 baths",
            "1,435 sqft"
        ],
        "href": "https://hotpads.com/611-baylor-st-pacific-palisades-ca-90272-1m2xb6k/pad",
        "pets_policy": [
            "Dogs allowed"
        ],
        "rental_price": 7500,
        "tags": ""
    },
    {   
        "uid" : 1,
        "addrline1": "17946 Valley Vista Blvd",
        "addrline2": "Encino, CA 91316",
        "amenities": [
            "Air Conditioning",
            "Driveway Parking",
            "Dryer",
            "Flooring: Hardwood",
            "Laundry: Hookups",
            "Laundry: In Unit",
            "Recreation Room",
            "Washer",
            "Washer/Dryer Hookups"
        ],
        "highlights": [
            "Listed 13 days ago",
            "Updated 1 day ago",
            "Small Dogs Allowed",
            "Laundry: In Unit, Washer/Dryer Hookups",
            "A/C"
        ],
        "house_info": [
            "3 beds",
            "2 baths",
            "1,564 sqft"
        ],
        "href": "https://hotpads.com/17946-valley-vista-blvd-encino-ca-91316-1m3j1gg/pad",
        "pets_policy": [
            "Dogs allowed"
        ],
        "rental_price": 7000,
        "tags": ""
    },
    {   
        "uid" : 2,
        "addrline1": "8335 Gladbeck Ave",
        "addrline2": "Northridge, CA 91324",
        "amenities": [
            "Air Conditioning",
            "Building Deposit Fee Maximum: 12000",
            "Building Deposit Fee Minimum: 12000",
            "Dryer",
            "Fireplace",
            "Flooring: Hardwood",
            "Laundry: In Unit",
            "Off Street Parking",
            "Patio Balcony",
            "Washer"
        ],
        "highlights": [
            "Listed 3 days ago",
            "Updated 1 day ago",
            "No Pets Allowed",
            "Laundry: In Unit",
            "Off Street",
            "A/C"
        ],
        "house_info": [
            "3 beds",
            "2 baths",
            "1,700 sqft"
        ],
        "href": "https://hotpads.com/8335-gladbeck-ave-northridge-ca-91324-1m3k0ya/pad",
        "pets_policy": [
            "No cats allowed",
            "No dogs allowed"
        ],
        "rental_price": 6800,
        "tags": ""
    },
    {
        "uid" : 3,
        "addrline1": "1118 W M St",
        "addrline2": "Wilmington, CA 90744",
        "amenities": [
            "Building Deposit Fee Maximum: 2950",
            "Building Deposit Fee Minimum: 2950",
            "Ceiling Fan",
            "Flooring: Vinyl",
            "Garage",
            "Laundry: Hookups",
            "Microwave Oven",
            "Range",
            "Washer/Dryer Hookups",
            "Yard -"
        ],
        "highlights": [
            "Listed 1 day ago",
            "Updated 1 day ago",
            "Cats and Small Dogs Allowed",
            "Laundry: Washer/Dryer Hookups",
            "Garage",
            "Microwave Oven"
        ],
        "house_info": [
            "3 beds",
            "1 bath",
            "940 sqft"
        ],
        "href": "https://hotpads.com/1118-w-m-st-wilmington-ca-90744-1n24sf2/pad",
        "pets_policy": [
            "Cats allowed",
            "Dogs allowed"
        ],
        "rental_price": 2950,
        "tags": ""
    },
    {   
        "uid" : 4,
        "addrline1": "1447 E 25th St",
        "addrline2": "Los Angeles, CA 90011",
        "amenities": [
            "Building Deposit Fee Maximum: 550",
            "Building Deposit Fee Minimum: 550",
            "Fitness Center",
            "Furnished",
            "Laundry: Shared",
            "Utilities included in rent",
            "recording studio"
        ],
        "highlights": [
            "Listed 10 days ago",
            "Updated 2 days ago",
            "No Pets Allowed",
            "Laundry: Shared",
            "Gym: On-site"
        ],
        "house_info": [
            "studio",
            "1 bath",
            "1,408 sqft"
        ],
        "href": "https://hotpads.com/1447-e-25th-st-los-angeles-ca-90011-1ty5upn/pad",
        "pets_policy": [
            "No cats allowed",
            "No dogs allowed"
        ],
        "rental_price": 550,
        "tags": "Furnished"
    },
    {
        "uid" : 5,
        "addrline1": "611 Baylor St",
        "addrline2": "Pacific Palisades, CA 90272",
        "amenities": [
            "Air Conditioning",
            "Building Deposit Fee Maximum: 11250",
            "Building Deposit Fee Minimum: 11250",
            "Dryer",
            "Flooring: Hardwood",
            "Garage",
            "Laundry: In Unit",
            "Off Street Parking",
            "Patio Balcony",
            "Washer"
        ],
        "highlights": [
            "Listed 3 days ago",
            "Updated 1 day ago",
            "Dogs Allowed",
            "Laundry: In Unit",
            "Garage, Off Street",
            "A/C"
        ],
        "house_info": [
            "3 beds",
            "2 baths",
            "1,435 sqft"
        ],
        "href": "https://hotpads.com/611-baylor-st-pacific-palisades-ca-90272-1m2xb6k/pad",
        "pets_policy": [
            "Dogs allowed"
        ],
        "rental_price": 7500,
        "tags": ""
    },{   
        "uid" : 1,
        "addrline1": "17946 Valley Vista Blvd",
        "addrline2": "Encino, CA 91316",
        "amenities": [
            "Air Conditioning",
            "Driveway Parking",
            "Dryer",
            "Flooring: Hardwood",
            "Laundry: Hookups",
            "Laundry: In Unit",
            "Recreation Room",
            "Washer",
            "Washer/Dryer Hookups"
        ],
        "highlights": [
            "Listed 13 days ago",
            "Updated 1 day ago",
            "Small Dogs Allowed",
            "Laundry: In Unit, Washer/Dryer Hookups",
            "A/C"
        ],
        "house_info": [
            "3 beds",
            "2 baths",
            "1,564 sqft"
        ],
        "href": "https://hotpads.com/17946-valley-vista-blvd-encino-ca-91316-1m3j1gg/pad",
        "pets_policy": [
            "Dogs allowed"
        ],
        "rental_price": 7000,
        "tags": ""
    },
    {   
        "uid" : 2,
        "addrline1": "8335 Gladbeck Ave",
        "addrline2": "Northridge, CA 91324",
        "amenities": [
            "Air Conditioning",
            "Building Deposit Fee Maximum: 12000",
            "Building Deposit Fee Minimum: 12000",
            "Dryer",
            "Fireplace",
            "Flooring: Hardwood",
            "Laundry: In Unit",
            "Off Street Parking",
            "Patio Balcony",
            "Washer"
        ],
        "highlights": [
            "Listed 3 days ago",
            "Updated 1 day ago",
            "No Pets Allowed",
            "Laundry: In Unit",
            "Off Street",
            "A/C"
        ],
        "house_info": [
            "3 beds",
            "2 baths",
            "1,700 sqft"
        ],
        "href": "https://hotpads.com/8335-gladbeck-ave-northridge-ca-91324-1m3k0ya/pad",
        "pets_policy": [
            "No cats allowed",
            "No dogs allowed"
        ],
        "rental_price": 6800,
        "tags": ""
    },
    {
        "uid" : 3,
        "addrline1": "1118 W M St",
        "addrline2": "Wilmington, CA 90744",
        "amenities": [
            "Building Deposit Fee Maximum: 2950",
            "Building Deposit Fee Minimum: 2950",
            "Ceiling Fan",
            "Flooring: Vinyl",
            "Garage",
            "Laundry: Hookups",
            "Microwave Oven",
            "Range",
            "Washer/Dryer Hookups",
            "Yard -"
        ],
        "highlights": [
            "Listed 1 day ago",
            "Updated 1 day ago",
            "Cats and Small Dogs Allowed",
            "Laundry: Washer/Dryer Hookups",
            "Garage",
            "Microwave Oven"
        ],
        "house_info": [
            "3 beds",
            "1 bath",
            "940 sqft"
        ],
        "href": "https://hotpads.com/1118-w-m-st-wilmington-ca-90744-1n24sf2/pad",
        "pets_policy": [
            "Cats allowed",
            "Dogs allowed"
        ],
        "rental_price": 2950,
        "tags": ""
    },
    {   
        "uid" : 4,
        "addrline1": "1447 E 25th St",
        "addrline2": "Los Angeles, CA 90011",
        "amenities": [
            "Building Deposit Fee Maximum: 550",
            "Building Deposit Fee Minimum: 550",
            "Fitness Center",
            "Furnished",
            "Laundry: Shared",
            "Utilities included in rent",
            "recording studio"
        ],
        "highlights": [
            "Listed 10 days ago",
            "Updated 2 days ago",
            "No Pets Allowed",
            "Laundry: Shared",
            "Gym: On-site"
        ],
        "house_info": [
            "studio",
            "1 bath",
            "1,408 sqft"
        ],
        "href": "https://hotpads.com/1447-e-25th-st-los-angeles-ca-90011-1ty5upn/pad",
        "pets_policy": [
            "No cats allowed",
            "No dogs allowed"
        ],
        "rental_price": 550,
        "tags": "Furnished"
    },
    {
        "uid" : 5,
        "addrline1": "611 Baylor St",
        "addrline2": "Pacific Palisades, CA 90272",
        "amenities": [
            "Air Conditioning",
            "Building Deposit Fee Maximum: 11250",
            "Building Deposit Fee Minimum: 11250",
            "Dryer",
            "Flooring: Hardwood",
            "Garage",
            "Laundry: In Unit",
            "Off Street Parking",
            "Patio Balcony",
            "Washer"
        ],
        "highlights": [
            "Listed 3 days ago",
            "Updated 1 day ago",
            "Dogs Allowed",
            "Laundry: In Unit",
            "Garage, Off Street",
            "A/C"
        ],
        "house_info": [
            "3 beds",
            "2 baths",
            "1,435 sqft"
        ],
        "href": "https://hotpads.com/611-baylor-st-pacific-palisades-ca-90272-1m2xb6k/pad",
        "pets_policy": [
            "Dogs allowed"
        ],
        "rental_price": 7500,
        "tags": ""
    }
]


export default testData