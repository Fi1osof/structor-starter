

import './styles/styles.less';

import React from "react";

import PropTypes from 'prop-types';

import cookie from 'js-cookie';

// import {DataStore, Dispatcher} from 'react-cms-data-view';
import {request} from 'react-cms-data-view/src/Utils';

import { App as TemplatesApp, Auth, Informer } from "modules/Templates";


import {browserHistory} from 'react-router';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as proxyActions from 'modules/Redux/actions/proxyActions';
import * as userActions from 'modules/Redux/actions/userActions';
import * as documentActions from 'modules/Redux/actions/documentActions';


class MainApp extends React.Component {

  constructor(props){

    super(props);

    let {document, user} = props;

    let {
      notifications_store,
    } = document;

    let state = {
      notifications_store,
    };

    this.state = state;
  }

 
  request = (context, allowMultiRequest, connector_path, params, options) => {

    context = context || 'request';

    if(allowMultiRequest === undefined){
      allowMultiRequest = false;
    }

    if(this.state[context] === undefined){
      this.state[context] = {};
    }

    if(!allowMultiRequest && this.state[context].inRequest === true){
      return;
    }


    let {
      connector_url,
      user,
    } = this.props;

    params = params || {}

    Object.assign(params, {
    });
    
    var newState = {};

    newState[context] = this.state[context];

    newState[context].inRequest = true;

    this.setState(newState);

    options = options || {};

    let callback2 = options.callback;

    let callback = (data, errors) => {

      // let errors = {};

      var newState = {};

      newState[context] = this.state[context];

      newState[context].inRequest = false;
      newState[context].errors = errors; 

      this.setState(newState, () => {

        callback2 && callback2(data, errors);
      });

    }
    
    options.callback = callback;

    request.call(this, connector_url, connector_path, params, options);
  }

 

  /*
    Эти данные должны загрузиться изначально, и если пользователь авторизовался
  */
  loadAllData = () => { 
  }

  componentDidMount(){

    let {
      user,
      router,
      userActions, 
      documentActions
    } = this.props;

    this.loadAllData();


    if(!user.user && user.token){
      userActions.GetOwnData();
    }
  }



  //   return true;
  // }

  componentWillReceiveProps(nextProps){

    

    return true;
  }

  loadUserData = () => {
  }


  componentDidUpdate(prevProps, prevState){

  }
    


  prepareChild(Clone){
    let {
      // children, 
      route,
      user, 
      classes, 
      document,
      userActions: _userActions,
      documentActions: _documentActions,
      connector_url,
      assets_url,
      ...other
    } = this.props;

    let {
      ...cloneProps
    } = this.props.children.props;

    let {
    } = document;
 
    return <Clone
      user={user}
      document={document}
      userActions={_userActions}
      documentActions={_documentActions}
      connector_url={connector_url}
      assets_url={assets_url}
      request={this.request}
      loadData={this.loadData}
      loadMore={this.loadMore}
      onLoad={this.onLoad}
      saveItem={this.saveItem}
      classes={classes || {}}
      {...cloneProps}
    />
  }

  render() {

    let {
      user,
      document,
      documentActions,
      userActions,
      assets_url,
      connector_url,
      ...other
    } = this.props;

    let {
    } = document;

    let {
      notifications_store,
    } = this.state;

    let child;
 
    if(this.props.children){

      let Clone = (this.props.children && this.props.children.type);

      if(Clone){

        child = this.prepareChild(Clone);

      }
    }

 
    let authOpen = user && user.loginModalOpened || false;

    return (
      <TemplatesApp {...this.other}>

        {child}
  

        <Auth 
          open={authOpen}
        />


        <Informer
          store={notifications_store}
        />  

      </TemplatesApp>
    );
  }
}

MainApp.propTypes = {
  connector_url: PropTypes.string.isRequired,
  documentActions: PropTypes.object.isRequired,
}

MainApp.defaultProps = {
  connector_url: "/assets/components/modxsite/connectors/connector.php",
}

function mapDispatchToProps(dispatch) {
  return {
    proxyActions: bindActionCreators(proxyActions, dispatch),
    userActions: bindActionCreators(userActions, dispatch),
    documentActions: bindActionCreators(documentActions, dispatch),
  }
}

function mapStateToProps(state) {

  var currentState = {};

  Object.assign(currentState, state.document);

  currentState.user = state.user;
  currentState.document = state.document;

  return currentState;
}

export default connect(mapStateToProps, mapDispatchToProps)(MainApp);