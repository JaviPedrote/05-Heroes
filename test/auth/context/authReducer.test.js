
import { test, describe, expect } from '@jest/globals';
import { authReducer } from '../../../src/auth/context/authReducer';
import { types } from '../../../src/auth/types/types';

describe('authReducer', () => {

    test('debe retornar el estado por defecto', () => {
        const state = authReducer({ logged: false }, {});
        expect(state).toEqual({ logged: false });
    });

    test('debe autenticar y colocar el name del usuario', () => {
        const action = {
            type: types.login,
            payload: {
                name: 'Javier',
                id: '123'
            }
        };

        const state = authReducer({ logged: false }, action);
        console.log(state);
        expect(state).toEqual({ logged: true, user: action.payload });
    });

    test('debe borrar el nombre al hacer logout y poner el logeed = false',()=>{


        const state ={
            logged:true,
            user:{id: '123' , name:'Javier'}
        }

        const action = {
            type: types.logout,
        };

        const newState = authReducer(state,action)
        console.log(state)
        console.log(newState)
        expect(newState).toEqual({logged:false})
    })

});