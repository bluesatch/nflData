const data = [
    {
        id: 1,
        team: 'cardinals',
        location: 'arizona',
        city: 'phoenix',
        state: 'arizona',
        conference: 'nfc',
        division: 'west',
        superBowlWins: 0,
        notablePlayers: {
            past: 'aeneas williams',
            present: 'kyler murray'
        },
        toggle: false
    },
    {
        id: 2,
        team: 'falcons',
        location: 'atlanta',
        city: 'atlanta',
        state: 'georgia',
        conference: 'nfc',
        division: 'south',
        superBowlWins: 0,
        notablePlayers: {
            past: 'michael vick',
            present: 'kirk cousins'
        },
        toggle: false
    },
    {
        id: 3,
        team: 'ravens',
        location: 'baltimore',
        city: 'baltimore',
        state: 'maryland',
        conference: 'afc',
        division: 'north',
        superBowlWins: 2,
        notablePlayers: {
            past: 'ray lewis',
            present: 'lamar jackson'
        },
        toggle: false
    },
    {
        id: 4,
        team: 'bills',
        location: 'buffalo',
        city: 'buffalo',
        state: 'new york',
        conference: 'afc',
        division: 'east',
        superBowlWins: 0,
        notablePlayers: {
            past: 'bruce smith',
            present: 'josh allen'
        },
        toggle: false
    },
    {
        id: 5,
        team: 'panthers',
        location: 'carolina',
        city: 'charlotte',
        state: 'north carolina',
        conference: 'nfc',
        division: 'south',
        superBowlWins: 0,
        notablePlayers: {
            past: 'steve smith',
            present: 'bryce young'
        },
        toggle: false
    },
    {
        id: 6,
        team: 'bears',
        location: 'chicago',
        city: 'chicago',
        state: 'illinois',
        conference: 'nfc',
        division: 'north',
        superBowlWins: 1,
        notablePlayers: {
            past: 'walter payton',
            present: 'caleb williams'
        },
        toggle: false
    },
    {
        id: 7,
        team: 'bengals',
        location: 'cincinnatti',
        city: 'cincinnatti',
        state: 'ohio',
        conference: 'afc',
        division: 'north',
        superBowlWins: 0,
        notablePlayers: {
            past: 'anthony munoz',
            present: 'joe burrow'
        },
        toggle: false
    },
    {
        id: 8,
        team: 'browns',
        location: 'cleveland',
        city: 'cleveland',
        state: 'ohio',
        conference: 'afc',
        division: 'north',
        superBowlWins: 0,
        notablePlayers: {
            past: 'jim brown',
            present: 'myles garrett'
        },
        toggle: false
    },
    {
        id: 9,
        team: 'cowboys',
        location: 'dallas',
        city: 'dallas',
        state: 'texas',
        conference: 'nfc',
        division: 'east',
        superBowlWins: 5,
        notablePlayers: {
            past: 'emmitt smith',
            present: 'dak prescott'
        },
        toggle: false
    },
    {
        id: 10,
        team: 'broncos',
        location: 'denver',
        city: 'denver',
        state: 'colorado',
        conference: 'afc',
        division: 'west',
        superBowlWins: 3,
        notablePlayers: {
            past: 'john elway',
            present: 'bo nix'
        },
        toggle: false
    },
    {
        id: 11,
        team: 'lions',
        location: 'detroit',
        city: 'detroit',
        state: 'michigan',
        conference: 'nfc',
        division: 'north',
        superBowlWins: 0,
        notablePlayers: {
            past: 'barry sanders',
            present: 'amon-ra st. brown'
        },
        toggle: false
    },
    {
        id: 12,
        team: 'packers',
        location: 'green bay',
        city: 'green bay',
        state: 'wisconsin',
        conference: 'nfc',
        division: 'north',
        superBowlWins: 4,
        notablePlayers: {
            past: 'reggie white',
            present: 'jordan love'
        },
        toggle: false
    },
    {
        id: 13,
        team: 'texans',
        location: 'houston',
        city: 'houston',
        state: 'texas',
        conference: 'afc',
        division: 'south',
        superBowlWins: 0,
        notablePlayers: {
            past: 'jj watt',
            present: 'cj stroud'
        },
        toggle: false
    },
    {
        id: 14,
        team: 'colts',
        location: 'indianopolis',
        city: 'indianopolis',
        state: 'indiana',
        conference: 'afc',
        division: 'south',
        superBowlWins: 3,
        notablePlayers: {
            past: 'peyton manning',
            present: 'johnathan taylor'
        },
        toggle: false
    },
    {
        id: 15,
        team: 'jaguars',
        location: 'jacksonville',
        city: 'jacksonville',
        state: 'florida',
        conference: 'afc',
        division: 'south',
        superBowlWins: 0,
        notablePlayers: {
            past: 'maurice jones-drew',
            present: 'trevor lawrence'
        },
        toggle: false
    },
    {
        id: 16,
        team: 'chiefs',
        location: 'kansas city',
        city: 'kansas city',
        state: 'missouri',
        conference: 'afc',
        division: 'west',
        superBowlWins: 4,
        notablePlayers: {
            past: 'priest holmes',
            present: 'patrick mahomes'
        },
        toggle: false
    },
    {
        id: 17,
        team: 'raiders',
        location: 'las vegas',
        city: 'las vegas',
        state: 'nevada',
        conference: 'afc',
        division: 'west',
        superBowlWins: 3,
        notablePlayers: {
            past: 'marcus allen',
            present: 'brock bowers'
        },
        toggle: false
    },
    {
        id: 18,
        team: 'chargers',
        location: 'los angeles',
        city: 'los angeles',
        state: 'california',
        conference: 'afc',
        division: 'west',
        superBowlWins: 0,
        notablePlayers: {
            past: 'junior seau',
            present: 'justin herbert'
        },
        toggle: false
    },
    {
        id: 19,
        team: 'rams',
        location: 'los angeles',
        city: 'los angeles',
        state: 'california',
        conference: 'nfc',
        division: 'west',
        superBowlWins: 2,
        notablePlayers: {
            past: 'jackie slater',
            present: 'matthew stafford'
        },
        toggle: false
    },
    {
        id: 20,
        team: 'dolphins',
        location: 'miami',
        city: 'miami',
        state: 'florida',
        conference: 'afc',
        division: 'east',
        superBowlWins: 2,
        notablePlayers: {
            past: 'dan marino',
            present: 'tyreek hill'
        },
        toggle: false
    },
    {
        id: 21,
        team: 'vikings',
        location: 'minnesota',
        city: 'minneapolis',
        state: 'minnesota',
        conference: 'nfc',
        division: 'north',
        superBowlWins: 0,
        notablePlayers: {
            past: 'randy moss',
            present: 'justin jefferson'
        },
        toggle: false
    },
    {
        id: 22,
        team: 'patriots',
        location: 'new england',
        city: 'foxboro',
        state: 'massachusetts',
        conference: 'afc',
        division: 'east',
        superBowlWins: 6,
        notablePlayers: {
            past: 'tom brady',
            present: 'drake maye'
        },
        toggle: false
    },
    {
        id: 23,
        team: 'saints',
        location: 'new orleans',
        city: 'new orleans',
        state: 'louisiana',
        conference: 'nfc',
        division: 'south',
        superBowlWins: 1,
        notablePlayers: {
            past: 'drew brees',
            present: 'demario davis'
        },
        toggle: false
    },
    {
        id: 24,
        team: 'giants',
        location: 'new york',
        city: 'new york city',
        state: 'new york',
        conference: 'nfc',
        division: 'east',
        superBowlWins: 4,
        notablePlayers: {
            past: 'lawrence taylor',
            present: 'malik nabors'
        },
        toggle: false
    },
    {
        id: 25,
        team: 'jets',
        location: 'new york',
        city: 'new york city',
        state: 'new york',
        conference: 'afc',
        division: 'east',
        superBowlWins: 1,
        notablePlayers: {
            past: 'joe namath',
            present: 'quinnen williams'
        },
        toggle: false
    },
    {
        id: 26,
        team: 'eagles',
        location: 'philadelphia',
        city: 'philadelphia',
        state: 'pennsylvania',
        conference: 'nfc',
        division: 'east',
        superBowlWins: 2,
        notablePlayers: {
            past: 'randall cunningham',
            present: 'jalen hurts'
        },
        toggle: false
    },
    {
        id: 27,
        team: 'steelers',
        location: 'pittsburgh',
        city: 'pittsburgh',
        state: 'pennsylvania',
        conference: 'afc',
        division: 'north',
        superBowlWins: 6,
        notablePlayers: {
            past: 'joe greene',
            present: 'russell wilson'
        },
        toggle: false
    },
    {
        id: 28,
        team: '49ers',
        location: 'san francisco',
        city: 'san francisco',
        state: 'california',
        conference: 'nfc',
        division: 'west',
        superBowlWins: 5,
        notablePlayers: {
            past: 'jerry rice',
            present: 'christian mccaffery'
        },
        toggle: false
    },
    {
        id: 29,
        team: 'seahawks',
        location: 'seattle',
        city: 'seattle',
        state: 'washington',
        conference: 'nfc',
        division: 'west',
        superBowlWins: 1,
        notablePlayers: {
            past: 'russell wilson',
            present: 'dk metcalf'
        },
        toggle: false
    },
    {
        id: 30,
        team: 'buccaneers',
        location: 'tampa bay',
        city: 'tampa',
        state: 'florida',
        conference: 'nfc',
        division: 'south',
        superBowlWins: 2,
        notablePlayers: {
            past: 'warren sapp',
            present: 'mike evans'
        },
        toggle: false
    },
    {
        id: 31,
        team: 'titans',
        location: 'tennessee',
        city: 'nashville',
        state: 'tennessee',
        conference: 'afc',
        division: 'south',
        superBowlWins: 0,
        notablePlayers: {
            past: 'steve mcnair',
            present: 'jeffrey simmons'
        },
        toggle: false
    },
    {
        id: 32,
        team: 'commanders',
        location: 'washington',
        city: 'landover',
        state: 'maryland',
        conference: 'nfc',
        division: 'east',
        superBowlWins: 3,
        notablePlayers: {
            past: 'darrell green',
            present: 'jayden daniels'
        },
        toggle: false
    }
]

/**
 * 1. write a function that takes a conference as an argument and will filter through the objects and return all teams in the conference
 * 
 *  func(conf) => [ teams ]
 * 
 */

const getTeamsByConf =(conf)=> {

    // Declarative
    // let confTeams = []

    // for (let i = 0; i < data.length; i++) {
    //     if (data[i].conference == conf) {
    //         confTeams = [...confTeams, data[i]]
    //     }
    // }
    
    // Imperative
    let confTeams = data.filter(team => team.conference == conf)

    console.log(confTeams)
}

/**
 * 2. write a function that takes a state as an argument and will filter through the objects and return all teams in that state
 */

const getTeamsByState =(state)=> {
    let stateTeams = data.filter(team => team.state == state)

    // console.log(stateTeams)
}

getTeamsByState('florida')

/**
 * 3. write a function that will map through the data and return an array of all teams by location and team. ex ['arizona cardinals', 'atlanta falcons', etc]
 */

const nflTeams =(arr)=> {

    let nflTeams = arr.map(team => `${team.location} ${team.team}`)

    // let nflTeams = []

    // for (let team of arr) {
    //     nflTeams = [...nflTeams, `${team.location} ${team.team}`]
    // }

    // console.log(nflTeams)
}

nflTeams(data)

/**
 * 4. write a function that takes a conference and division as an argument and will filter through the data and return all teams from that conference and division *hint each one should have four teams*
 * 
 * func(conf, div) => [team1, team2, team3, team4]
 */

const getDivTeams =(conf, div)=> {
    let division = data.filter(team => team.conference == conf && team.division == div)

    // Declarative
    // let teams = []

    // for (let obj of division) {
    //     teams = [...teams, obj.team]
    // }

    //Imperative
    let teams = division.map(team => team.team)

    // console.log(teams)
}

getDivTeams('afc', 'south')

/**
 * 5. write a function that will sort through the teams and place them in 
 * either one of two arrays: hasWonASuperBowl or hasNotWonASuperBowl
 */

let hasWonASuperBowl = []
let hasNotWonASuperBowl = []

const sortTeams = ()=> {
    
    // Declarative
    // for (let i = 0; i < data.length; i++) {
    //     if (data[i].superBowlWins == 0) {
    //         hasNotWonASuperBowl.push(data[i].team)
    //     } else {
    //         hasWonASuperBowl.push(data[i].team)
    //     }
    // }

    // Imperative
    // let hasWon = data.filter(team => team.superBowlWins > 0)
    let hasNotWon = data.filter(team => team.superBowlWins == 0)

    // hasWonASuperBowl = hasWon.map(team => team.team)
    hasNotWonASuperBowl = hasNotWon.map(team => team.team)

    // chaining methods
    hasWonASuperBowl = data.filter(team => team.superBowlWins > 0).map(team => team.team)
}

sortTeams()

// console.log(hasNotWonASuperBowl)
// console.log(hasWonASuperBowl)

/**
 * 6. Make a card for each team and display it on the browser. 
 * 
 * The card should display:
 *      team
 *      location
 *      city    
 *      state
 *      conference
 *      division
 *      super bowl wins
 * 
 * When a card is clicked or hovered, change display to notable players
 */

const cardRow = document.getElementById('cardRow')

const buildBody =(obj, bool)=> {

    let body
    if (bool) {
        body = `
            <h3 class="card-heading">Notable Players</h3>
            <p class="card-text">Past: ${obj.notablePlayers.past.toUpperCase()}</p>
            <p class="card-text">Past: ${obj.notablePlayers.present.toUpperCase()}</p>
        `
    } else {
        body = `
            <p class="card-text text-capitalize">${obj.city} ${obj.state}</p>
            <p class="card-text text-uppercase">${obj.conference} ${obj.division}</p> 
        `
    }

    return body
}

data.forEach(team => {
    const column = document.createElement('div')
    column.classList.add('col')

    const card = document.createElement('div')
    card.classList.add('card', 'h-100', 'team-cards')
    card.setAttribute('id', team.id)

    const cardHeader = document.createElement('header')
    cardHeader.classList.add('card-header')

    const teamName = document.createElement('h2')
    teamName.classList.add('text-uppercase')
    teamName.innerText = `${team.location} ${team.team}`

    const cardBody = document.createElement('main')
    cardBody.classList.add('card-body')
    cardBody.setAttribute('id', team.team)


    team.conference == 'nfc' ? card.classList.add('border-primary') : card.classList.add('border-danger')

    const cardFooter = document.createElement('footer')
    cardFooter.classList.add('card-footer')

    const superBowlWins = document.createElement('p')
    superBowlWins.classList.add('card-text', 'text-capitalize')
    superBowlWins.innerText = `Super Bowl wins: ${team.superBowlWins}`

    cardHeader.appendChild(teamName)
    // cardBody get return from buildBody()
    cardBody.innerHTML = buildBody(team, team.toggle)

    // cardBody.appendChild(teamLocation)
    // cardBody.appendChild(confAndDiv)
    cardFooter.appendChild(superBowlWins)

    card.appendChild(cardHeader)
    card.appendChild(cardBody)
    card.appendChild(cardFooter)

    column.appendChild(card)

    cardRow.appendChild(column)
    
})

/*event listener on cards  */
const teamCards = document.querySelectorAll('.team-cards')

teamCards.forEach(teamCard => {
    teamCard.addEventListener('click', ()=> {
        // console.log('mouseover');
        for (let team of data) {
            if (team.id == teamCard.id) {
                // console.log(team.team)
                const cardBody = document.getElementById(team.team)
                team.toggle = !team.toggle
                console.log(team.toggle)

                // change display based on team.toggle
                cardBody.innerHTML = buildBody(team, team.toggle)
            }
        }
    })
})
