import React, {Component} from 'react'
import ReactDOM from 'react-dom'


function AboutOrg() {
    return(
        <div className='changingAll'>
        <Changing />
        </div>
    )
}


class Changing extends Component {
    constructor() {
        super();
        this.state ={
            organizations: [
                {name: 'Fundacjom',
                com: <ChangingFund />,
                i:1},
                {name: 'Organizacjom pozarządowym',
                com: <ChangingOrg />,
                i:2},
                {name: 'Lokalnym zbiórkom',
                com: <ChangingRaising />,
                i:3}
            ],
            currentPage: 1,
            orgPerPage: 1
        }
    }    

    handleClick = (e, i) => {
        this.setState({
            currentPage: i
        })
    }

    render() {
        const {organizations, currentPage, orgPerPage} = this.state;
        const indexOfLast = currentPage * orgPerPage;
        const indexOfFirst = indexOfLast - orgPerPage;
        const currentOrganization = organizations.slice(indexOfFirst, indexOfLast);
        const pageNumbers = [];

        let elem = organizations.map((n,e)=>(
        <li key={n.i} onClick={e=>this.handleClick(e,n.i)}>
            {n.name}
        </li>));
        pageNumbers.push(elem);

        return (
            <>
            <h2>Komu pomagamy?</h2>
            <div className='decor'/>
            <ul className='org'>
                {pageNumbers}
            </ul>

            <ul className='organizations'>
                {currentOrganization.map((n)=>(n.com))}
            </ul>
            </>
        )
    }
}

class ChangingRaising extends Component {
    constructor() {
        super();
        this.state ={
            rai: [
                {name: 'Lorem ipsum 1',
                aim: 'Vestibulum facilisis nibh ut tortor elementum tempor.',
                needed: 'Mauris tempor metus at mollis sodales.' },
            
                {name: 'Lorem ipsum 2',
                aim: 'Vestibulum facilisis nibh ut tortor elementum tempor.',
                needed: 'Mauris tempor metus at mollis sodales.' },
            
                {name: 'Lorem ipsum 3',
                aim: 'Vestibulum facilisis nibh ut tortor elementum tempor.',
                needed: 'Mauris tempor metus at mollis sodales.' },
            ],
            currentPage: 1,
            raiPerPage: 3,
        }
    }

    handleClick = (event, i) => {
        this.setState({
            currentPage: i
        });
    }

    render() {
        const {rai, currentPage, raiPerPage} = this.state;
        const indexOfLast = currentPage * raiPerPage;
        const indexOfFirst = indexOfLast - raiPerPage;
        const currentRai = rai.slice(indexOfFirst, indexOfLast);
        const pageNumbers = [];
        let elem = '';

        for (let i = 1; i <= Math.ceil(rai.length/raiPerPage); i++) {
            if (rai.length <= raiPerPage) {
                elem = null;
            } else {
            elem = <li key={i} onClick={e=>this.handleClick(e,i)} className={this.state.currentPage == i ? "active" : ""}>{i}</li>
            pageNumbers.push(elem);
            }
        }

        return (
            <div className='fund'>
            <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
            <ul className='raising'>
                {currentRai.map((n)=>(<li key={n.i}>
                     <h3>Zbiórka {n.name}</h3>
                     <p>Cel i misja: {n.aim}</p>
                     <p>{n.needed}</p>
                </li>))}
            </ul>

            <ul className='pages'>
                {pageNumbers}
            </ul>
        </div>
        )
    }

}


class ChangingOrg extends Component {
    constructor() {
        super();
        this.state = {
            org: [
                {name: 'Lorem ipsum 1',
                aim: 'Vestibulum facilisis nibh ut tortor elementum tempor.',
                needed: 'Mauris tempor metus at mollis sodales.' },
            
                {name: 'Lorem ipsum 2',
                aim: 'Vestibulum facilisis nibh ut tortor elementum tempor.',
                needed: 'Mauris tempor metus at mollis sodales.' },
            
                {name: 'Lorem ipsum 3',
                aim: 'Vestibulum facilisis nibh ut tortor elementum tempor.',
                needed: 'Mauris tempor metus at mollis sodales.' },
            
                {name: 'Lorem ipsum 4',
                aim: 'Vestibulum facilisis nibh ut tortor elementum tempor.',
                needed: 'Mauris tempor metus at mollis sodales.' },
            
                {name: 'Lorem ipsum 5',
                aim: 'Vestibulum facilisis nibh ut tortor elementum tempor.',
                needed: 'Mauris tempor metus at mollis sodales.' },
            
                {name: 'Lorem ipsum 6',
                aim: 'Vestibulum facilisis nibh ut tortor elementum tempor.',
                needed: 'Mauris tempor metus at mollis sodales.' },
            ],
            currentPage: 1,
            orgPerPage: 3,
        }
    }

    handleClick = (event, i) => {
        this.setState({
            currentPage: i
        });
    }

        render() {
            const {org, currentPage, orgPerPage} = this.state;
            const indexOfLast = currentPage * orgPerPage;
            const indexOfFirst = indexOfLast - orgPerPage;
            const currentOrg = org.slice(indexOfFirst, indexOfLast);
            const pageNumbers = [];

            for (let i = 1; i <= Math.ceil(org.length/orgPerPage); i++) {
                const elem = <li key={i} onClick={e=>this.handleClick(e,i)} className={this.state.currentPage == i ? "active" : ""}>{i}</li>
                pageNumbers.push(elem);
            }

            return (
                <div className='fund'>
                <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                <ul className='organizations'>
                    {currentOrg.map((n)=>(<li key={n.i}>
                         <h3>Organizacja {n.name}</h3>
                         <p>Cel i misja: {n.aim}</p>
                         <p>{n.needed}</p>
                    </li>))}
                </ul>

                <ul className='pages'>
                    {pageNumbers}
                </ul>
            </div>
            )
        }
    
}

class ChangingFund extends Component {
    constructor() {
        super();
        this.state = {
            fund: [
            {name: '“Dbam o Zdrowie”',
            aim: 'Pomoc osobom znajdującym się w trudnej sytuacji życiowej.',
            needed: 'ubrania, jedzenie, sprzęt AGD, meble, zabawki' },
        
            {name: '“Dla dzieci”',
            aim: 'Pomoc dzieciom z ubogich rodzin.',
            needed: 'ubrania, meble, zabawki' },
        
            {name: '“Bez domu”',
            aim: 'Pomoc dla osób nie posiadających miejsca zamieszkania.',
            needed: 'ubrania, jedzenie, ciepłe koce' },
        
            {name: 'Lorem ipsum 1',
            aim: 'Vestibulum facilisis nibh ut tortor elementum tempor.',
            needed: 'Mauris tempor metus at mollis sodales.' },
        
            {name: 'Lorem ipsum 2',
            aim: 'Vestibulum facilisis nibh ut tortor elementum tempor.',
            needed: 'Mauris tempor metus at mollis sodales.' },
        
            {name: 'Lorem ipsum 3',
            aim: 'Vestibulum facilisis nibh ut tortor elementum tempor.',
            needed: 'Mauris tempor metus at mollis sodales.' },
        
            {name: 'Lorem ipsum 4',
            aim: 'Vestibulum facilisis nibh ut tortor elementum tempor.',
            needed: 'Mauris tempor metus at mollis sodales.' },
        
            {name: 'Lorem ipsum 5',
            aim: 'Vestibulum facilisis nibh ut tortor elementum tempor.',
            needed: 'Mauris tempor metus at mollis sodales.' },
        
            {name: 'Lorem ipsum 6',
            aim: 'Vestibulum facilisis nibh ut tortor elementum tempor.',
            needed: 'Mauris tempor metus at mollis sodales.' },
            ],
            currentPage: 1,
            fundsPerPage: 3,
        }
    }

    handleClick = (event, i) => {
        this.setState({
            currentPage: i
        })
    }

    render() {
        const {fund, currentPage, fundsPerPage} = this.state;   
        const indexOfLast = currentPage * fundsPerPage;
        const indexOfFirst = indexOfLast - fundsPerPage;
        const currentFunds = fund.slice(indexOfFirst, indexOfLast);
        const pageNumbers = [];

        for (let i = 1; i <= Math.ceil(fund.length/fundsPerPage); i++) {
            const elem = <li key={i} onClick={e=>this.handleClick(e,i)} className={this.state.currentPage == i ? "active" : ""}>{i}</li>
            pageNumbers.push(elem);
        }
        
        return (
            <div className='fund'>
            <p className='description'>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
                <ul className='fundations'>
                    {currentFunds.map((n)=>(<li key={n.i}>
                        <div className='fundAndAim'>
                         <h3>Fundacja {n.name}</h3>
                         <p>Cel i misja: {n.aim}</p>
                         </div>
                         <p>{n.needed}</p>
                    </li>))}
                </ul>

                <ul className='pages'>
                    {pageNumbers}
                </ul>
            </div>
        )
    }
}



export default AboutOrg