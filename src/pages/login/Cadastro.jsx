import React, {useState } from 'react';
import HelpBlock  from 'react-bootstrap/lib/HelpBlock'
import Glyphicon  from 'react-bootstrap/lib/Glyphicon'
import InputGroup  from 'react-bootstrap/lib/InputGroup'
import Form  from 'react-bootstrap/lib/Form'
import Col  from 'react-bootstrap/lib/Col'
import Checkbox  from 'react-bootstrap/lib/Checkbox'
import Radio  from 'react-bootstrap/lib/Radio'
import Header from "../../components/header/Header"

const Cadastro = () => {   
  
  const alertando= () => {
    alert("Cadastro finalizado com sucesso!");
  }
  
  return (
    <>
      <form>
        <FormGroup controlId="formValidationSuccess1">
          <ControlLabel>seu nome e sobrenome</ControlLabel>
          <FormControl type="text" />
        </FormGroup>

        <FormGroup controlId="formValidationSucess2">
          <ControlLabel>Telefone</ControlLabel>
          <FormControl type="text" />
        </FormGroup>

        <FormGroup controlId="formValidationSucess3">
          <ControlLabel>E-mail</ControlLabel>
          <FormControl type="text" />
        </FormGroup>

        <FormGroup controlId="formValidationSucess3">
          <ControlLabel>CPF</ControlLabel>
          <FormControl type="text" />
        </FormGroup>

        <FormGroup controlId="formValidationSucess3">
          <ControlLabel>Data de Nascimento</ControlLabel>
          <FormControl type="text" />
        </FormGroup>

        <FormGroup controlId="formValidationSucess3">
          <ControlLabel>Senha</ControlLabel>
          <FormControl type="text" />
        </FormGroup>
    
        <FormGroup>
          <Col smOffset={-1} sm={5}>
            <Button onClick={alertando}>Enviar</Button>
          </Col>
        </FormGroup>
      </form>
    </>
  )
}

export default Cadastro;