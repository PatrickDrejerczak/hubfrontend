import { toast } from "react-toastify";
import * as types from "../constants/ticket.constant";
import api from "../../apiService";

const getTickets = (pageNum, limit, isDone) => async (dispatch) => {
    dispatch({ type: types.GET_TICKETS_REQUEST, payload: null });
    try {
        let url = ``;
        if (isDone) {
            url = url + `?isDone=${isDone}`;
        }
        const data = await api.get(url);
        dispatch({
            type: types.GET_TICKETS_SUCCESS,
            payload: data.data.requests,
        });
    } catch (error) {
        toast.error(error.message);
        dispatch({ type: types.GET_TICKETS_FAILURE, payload: error });
    }
};

const getTicketDetail = (ticketId) => async (dispatch) => {
    dispatch({ type: types.GET_TICKET_DETAIL_REQUEST, payload: null });
    try {
        let url = ``;
        const data = await api.get(url);

        dispatch({
            type: types.GET_TICKET_DETAIL_SUCCESS,
            payload: data.data.data,
        });
    } catch (error) {
        toast.error(error.message);
        dispatch({ type: types.GET_TICKET_DETAIL_FAILURE, payload: error });
    }
};

const createTicket = (ticket) => async (dispatch) => {
    dispatch({ type: types.CREATE_TICKET_REQUEST, payload: null });
    try {
        let url = ``;

        const data = await api.create(url, request);
        console.log("hahaha", data);
        dispatch({ type: types.CREATE_TICKET_SUCCESS, payload: data.data.tickets });
    } catch (error) {
        toast.error(error.message);
        dispatch({ type: types.CREATE_TICKET_FAILURE, payload: error });
    }
};

const ticketActions = { getTickets, getTicketDetail, createTicket };
export default ticketActions;
