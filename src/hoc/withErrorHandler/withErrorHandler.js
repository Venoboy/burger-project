import React, {Component} from 'react';

import Modal from "../../components/UI/Modal/Modal";
import Auxil from "../Auxil/Auxil";

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null
    };
    UNSAFE_componentWillMount() {
      this.reqInterceptor = axios.interceptors.request.use(req => {
        this.setState({error: null});
        return req;
      });
      this.resInterceptor = axios.interceptors.response.use(res => res, error => {
        this.setState({error: error})
      })
    };

    componentWillUnmount() {
      axios.interceptors.request.eject(this.reqInetrceptor);
      axios.interceptors.response.eject(this.resInetrceptor);
    }

    errorConfirmedHandler = () => {
      this.setState({error: null})
    };

    render() {
      return (
        <Auxil>
          <Modal
            show={this.state.error}
            modalClosed={this.errorConfirmedHandler}
          >
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props}/>
        </Auxil>
      )
    }
  };
};

export default withErrorHandler;
