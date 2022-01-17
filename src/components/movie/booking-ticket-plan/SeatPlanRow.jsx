import React, { Component } from 'react'
import TheaterService from '../../../services/TheaterService';
import ScheduleItem from './ScheduleItem';

export default class SeatPlanRow extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showtime: this.props.showtime,
            theater: {}
        };

        console.log(this.props.showtime[0]);
    }

    componentDidMount() {
        if (this.props.showtime) {
            console.log(this.props.showtime);
            TheaterService.getTheaterById(this.props.showtime[0]).then((res) => {
                this.setState({ theater: res.data });
                console.log(this.state);
            })
        }
    }

    mappingScheduleData = () => {
        if (this.props.showtime && this.props.showtime[1]) {
            let schedules = this.props.showtime[1].map((item, i) => {
              console.log(item);
              return <ScheduleItem key={i} showtime={item}></ScheduleItem>;
            });
      
            return schedules;
          }
    }

    render() {
        return (
            <li className="active">
                <div className="movie-name">
                    <div className="icons">
                        <i className="far fa-heart" />
                        <i className="fas fa-heart" />
                    </div>

                    <a href="#0" className="name">
                        {this.props.showtime[1][0].theater.name}
                      
                    </a>
                    <div className="location-icon">
                        <i className="fas fa-map-marker-alt" />
                    </div>
                    <div>
                        {this.props.showtime[1][0].theater.locationName}
                    </div>
                </div>

                <div className="movie-schedule">
                    {this.mappingScheduleData()}
                    {/* <div className="item">09:40</div>
                    <div className="item active">13:45</div>
                    <div className="item">15:45</div>
                    <div className="item">19:50</div> */}
                </div>
            </li>
        )
    }
}
