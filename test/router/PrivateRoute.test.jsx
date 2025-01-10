/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../src/auth/context/AuthContext';
import { PrivateRoute } from '../../src/router/PrivateRoute';


describe('Pruebas en el <PrivateRoute />', () => {

    test('debe de mostrar el children si está autenticado', () => {

        Storage.prototype.setItem = jest.fn();

        
        const contextValue = {
            authState: {
              logged: true,
              user: {
                name: "Strider",
                id: "ABC123",
              },
            },
          };

        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/search?q=batman']}>
                    <PrivateRoute>
                        <h1>Ruta privada</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect( screen.getByText('Ruta privada') ).toBeTruthy();
        expect( localStorage.setItem ).toHaveBeenCalledWith('lastPath', '/search?q=batman');

    });


    
});