import * as types from "../constants/ticket.constant";

const initialState = {
    tickets: [],
    loading: false,
    selectedTicket: null,
};

const ticketReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case types.GET_TICKETS_REQUEST:
            return { ...state, loading: true };
        case types.GET_TICKETS_SUCCESS:
            return { ...state, TICKETS: payload, loading: false };
        case types.GET_TICKETS_FAILURE:
            return { ...state, loading: false };

        case types.GET_TICKET_DETAIL_REQUEST:
            return { ...state, loading: true };
        case types.GET_TICKET_DETAIL_SUCCESS:
            return { ...state, selectedTicket: payload, loading: false };
        case types.GET_TICKET_DETAIL_FAILURE:
            return { ...state, loading: false };

        case types.CREATE_TICKET_REQUEST:
            return { ...state, loading: true };
        case types.CREATE_TICKET_SUCCESS:
            return { ...state, TICKETS: payload, loading: false };
        case types.CREATE_TICKET_FAILURE:
            return { ...state, loading: false };

        default:
            return state;
    }
};

export default ticketReducer;
