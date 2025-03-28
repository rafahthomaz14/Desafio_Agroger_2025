import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import Home from './index'
import api from '../../Services/api'
import React from 'react'

jest.mock('../../Services/api')

test('Faz requisição ao clicar no botão', async () => {

    //resposta da api
    api.get.mockResolvedValueOnce({
        data: { id: 1, receita: "Teste", tipo: "teste" }
    })

    // Renderizando o componente
    render(<Home />)

    // Simulando o clique no botão
    fireEvent.click(screen.getByText('Nova sessão de prova'))

    // Espera pela atualização do estado
    await waitFor(() => {
        // Verificando se a API foi chamada corretamente
        expect(api.get).toHaveBeenCalledWith("/receitas/1")
    });

})
