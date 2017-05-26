// function Application(props) {
//     // return (
//     //     <div>
//     //         <h1>Hello from React</h1>
//     //         <p>I was rendered from the Application component!</p>
//     //     </div>
//     // )
//
//     return (
//         <div>
//            <h1>{props.title}</h1>
//         </div>
//     )
// }
//
//
// ReactDOM.render(<Application />, document.getElementById('container'));
//


class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h2 className="clockStyles">Time: {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

ReactDOM.render(
    <Clock />,
    document.getElementById('container')
);










// var NameInfo = React.createClass({
//     getInitialState: function(){
//         return {
//             'firstName': '',
//             'lastName': ''
//         }
//     },
//     getData: function(){
//         $.ajax({
//             url: 'http://localhost:3000/test',
//             dataType: 'jsonp',
//             success: function(parsed_json){
//                 this.setState({firstName: parsed_json['firstName']});
//                 this.setState({lastName: parsed_json['lastName']});
//             }.bind(this)
//         });
//     },
//     handleSubmit: function(e) {
//         e.preventDefaults();
//     },
//     render: function(){
//         return(
//             <div>
//                 <div>
//                     <h3> {this.state.firstName} </h3>
//                 </div>
//
//                 <div>
//                     <h3> {this.state.lastName} </h3>
//                 </div>
//             </div>
//         );
//     }
// });
// React.render(
//     <NameInfo />,
//     document.getElementById('nameInfo')
// );