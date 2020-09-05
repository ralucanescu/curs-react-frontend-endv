import React, { Component } from 'react'
import BootcampComponent from '../bootcamp/bootcamp';
import SearchBarCompoent from '../searchBar/searchBar';
import ButtonComponent from '../button/Button';
import './bootcampsList.css';

class BootcampListComponent extends Component {
    constructor() {
        super();

        this.state = {
            searchField: '',
            sortingDir: 'ASC',
            bootcamps: [
            {   id: 1,
                name: "Frontend Bootcamp",
                description: "Frontend Bootcamp",
                date: new Date("2020-08-22"),
            },
            {
                id: 2,
                name: "Backend Bootcamp",
                description: "Backend Bootcamp",
                date: new Date("2020-05-12"),

            },
            {
                id: 3,
                name: "ML Bootcamp",
                description: "ML Bootcamp",
                date: new Date("2020-02-18"),

            }
            ]
        }

        this.initialBootcamps = this.state.bootcamps;

        this.handleDeleteItem = (id) => {
            const {bootcamps} = this.state;
            
            return this.setState({bootcamps: bootcamps.filter((item) => item.id !== id)});
        }

        this.toggleSorting = () => {
            return this.setState({
                sortingDir: this.state.sortingDir === 'ASC' ? 'DESC' : 'ASC'
            })
        }

        this.handleSort = (list, sortDir) => {
            return sortDir === 'ASC'
                ? list.sort((a, b) => a.date - b.date)
                : list.sort((a, b) => b.date - a.date)
        }
    }
    render() {
        const {bootcamps, searchField, sortingDir} = this.state;
        const sortedBootcamps = this.handleSort(bootcamps, sortingDir);
        const filteredBootcamps = sortedBootcamps.filter(bootcamp => bootcamp.name.toLowerCase().includes(searchField.toLocaleLowerCase()));
        const sortDirection = this.state.sortingDir == 'ASC' ? 'descending' : 'ascending';

        return (
            <div className="container">
                <SearchBarCompoent placeholder="Search bootcamps" handleChange={e => this.setState({searchField: e.target.value})}></SearchBarCompoent>
                <ButtonComponent
                    className="sort"
                    buttonTitle={`Sort bootcamps list ${sortDirection}`}
                    handleClick={() => this.toggleSorting()}
                />
                <div className="card-list">
                {filteredBootcamps.map(bootcamp => <BootcampComponent
                    key={bootcamp.id}
                    bootcamp={bootcamp}
                    handleDelete={() => this.handleDeleteItem(bootcamp.id)} />
                )}
            </div>
                <ButtonComponent
                    className="restore"
                    buttonTitle="Restore Bootcamps List"
                    handleClick={() => this.setState({...this.state, bootcamps: this.initialBootcamps})}
                />
            </div>
        
        )
    }
}

export default BootcampListComponent;
