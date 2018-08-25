import React from 'react';
// import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import s from './Tags.css';

class Tags extends React.Component {
  // static propTypes = {
  //   title: PropTypes.string.isRequired,
  // };
  state = {
    form: {
      tagName: {
        verify: [
          {
            rule() {
              return false;
            },
            message: '不对',
          },
        ],
        check() {
          return 'fdsa';
        },
      },
    },
  };

  // onFormChage(e) {
  //   // console.log(e, this);
  //   // const inp = e.target;
  //   // if (inp) {
  //   //   this
  //   // }
  // }
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <Paper className={s.form_paper}>
            <TextField
              hintText="请输入标签名称"
              errorText={this.state.form.tagName.check()}
              floatingLabelText="标签名称"
              onChange={e => this.onFormChage(e)}
            />
            <Divider />
            <TextField hintText="请输入描述" floatingLabelText="描述" />
            <Divider />
          </Paper>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Tags);
