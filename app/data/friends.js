// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// ===============================================================================

var friendsArray = [
    {
        name: 'John',
        photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/John_Travolta_Deauville_2013_2.jpg/220px-John_Travolta_Deauville_2013_2.jpg',
        scores: [
            '5',
            '2',
            '4',
            '3',
            '1',
            '2',
            '3',
            '1',
            '5',
            '1',
        ]
    },
    {
        name: 'Rachel',
        photo: 'https://dhis.net/wp-content/uploads/bb-plugin/cache/Rachel-Winokur-circle.jpg',
        scores: [
            '2',
            '1',
            '5',
            '3',
            '3',
            '2',
            '1',
            '2',
            '3',
            '1',
        ]
    },
    {
        name: 'Paul',
        photo: 'https://tqft.net/web/img/people/PaulWedrich.jpg',
        scores: [
            '3',
            '2',
            '4',
            '2',
            '3',
            '2',
            '1',
            '1',
            '2',
            '3',
        ]
    }
    
    

];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;
