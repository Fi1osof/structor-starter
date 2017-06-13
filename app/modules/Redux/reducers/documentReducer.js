import * as env from '../actions/documentActions';

const initialState = {
  document: false,
  document_initialization_requested: false,
  document_view: 'Index',
  informerMessage: '',
  requested_url: '',
  item_drawer_opened: false,
};

/*
 * */

export default function (state = initialState, action) {

  var st = Object.assign({},state);

  switch (action.type) {

    case env.INITIALIZATION_REQUESTED:

      st.document_initialization_requested = true;
      st.document_initialized = false;
      st.document_initialization_failed = false;
      break;

    case env.INFORMER_MESSAGE_ADDED:

      st.informerMessage = action.message;
      break;

    case env.INFORMER_MESSAGE_SHOWED:

      st.informerMessage = "";
      break;

    case env.LOAD_DOCUMENT_REQUESTED:

      st.requested_url = action.url;
      break;

    case env.DOCUMENT_LOADED:

      st.document = action.document;
      break;

    case env.ITEM_DRAWER_CLOSED:

      st.add_location = false;
      st.item_drawer_opened = false;

      break;

    case env.ADD_LOCATION_CLICKED:

      st.add_location = true;
      st.item_drawer_opened = true;

      break;

    case env.ADD_LOCATION_CLOSED:

      st.add_location = false;
      st.item_drawer_opened = false;

      break;


    default:
      ;
  }
  return st
}
