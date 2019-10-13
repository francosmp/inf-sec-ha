import React from 'react';

import '../css/tablas.css';
import '../css/botones.css';
import '../css/extra.css';
import '../css/input.css';

import axios from 'axios';

class Body extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      index: '',
      codigo: ''
    };

    this.postCreate = this.postCreate.bind(this);
    this.postRead = this.postRead.bind(this);
    this.postUpdate = this.postUpdate.bind(this);
    this.postDelete = this.postDelete.bind(this);

    this.extra = this.extra.bind(this);

    this.handleIndex = this.handleIndex.bind(this);
    this.handleCodigo = this.handleCodigo.bind(this);
  }

  componentDidMount() {
    console.log("componentDidMount");
    this.postRead();
  }

  postCreate() {
    if (this.state.codigo === '') {
      alert("Codigo Vacio");
    } else {
      axios.post('http://localhost/inf-sec-php-ser/servicios-php.php', { "crud": "create", "index": "0", "codigo": this.state.codigo })
        .then(res => {
          this.setState({ index: '', codigo: '' }, function () { this.postRead(); }.bind(this));
        })
    }
  }

  postRead() {
    axios.post('http://localhost/inf-sec-php-ser/servicios-php.php', { "crud": "read", "index": "0", "codigo": "0" })
      .then(res => {
        this.setState({ data: Object.values(res.data) }, function () {
          //console.log(res);
          this.extra();
        }.bind(this));
      })
  }

  postUpdate() {
    if (this.state.codigo === '' || this.state.index === '') {
      alert("Codigo o Index Vacio");
    } else {
      axios.post('http://localhost/inf-sec-php-ser/servicios-php.php', { "crud": "update", "index": this.state.index, "codigo": this.state.codigo })
        .then(res => {
          this.setState({ index: '', codigo: '' }, function () { this.postRead(); }.bind(this));
        })
    }
  }

  postDelete() {
    axios.post('http://localhost/inf-sec-php-ser/servicios-php.php', { "crud": "delete", "index": "0", "codigo": "0" })
      .then(res => {
        this.postRead();
      });
  }

  extra() {

  }

  handleIndex(e) {
    this.setState({ index: e.target.value.replace(/\D+/, '') }, function () { console.log(this.state.index); }.bind(this));
  }

  handleCodigo(e) {
    this.setState({ codigo: e.target.value }, function () { console.log(this.state.codigo); }.bind(this));
  }

  render() {
    return (
      <div className="App-body">
        <div>
          <table>
            <thead>
              <tr>
                <th>iD</th>
                <th>Codigo</th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.data.map((value, index) => {
                  return <tr key={index}><th>{value.id}</th><th>{value.codigo}</th></tr>
                })
              }
            </tbody>
          </table>
        </div>
        <div className="extra">

        </div>
        <div>
          <input className="inputB" type="text" placeholder="Index" value={this.state.index} onChange={this.handleIndex.bind(this)} />
          <input className="inputB" type="text" placeholder="Codigo" value={this.state.codigo} onChange={this.handleCodigo.bind(this)} />
        </div>
        <div className="extra">

        </div>
        <div>
          <button className="button button1" onClick={this.postCreate}>Create</button>
          <button className="button button1" onClick={this.postRead}>Read</button>
          <button className="button button1" onClick={this.postUpdate}>Update</button>
          <button className="button button1" onClick={this.postDelete}>Delete</button>
        </div>
      </div>
    );
  }
}

export default Body;