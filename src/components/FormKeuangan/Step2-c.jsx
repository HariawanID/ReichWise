import React from 'react';
import { FormGroup, Label, Input, Button } from 'reactstrap';

function Step2(props) {
  if (props.currentStep !== 2) {
    return null;
  }

  return (
    <>
      <h2>Dalam sebulan, berapa biaya pengeluaranmu?</h2>
      <FormGroup>
        <hr></hr>
        <h4>Pengeluaran Pokok</h4>
        <hr></hr>
        <Label for="tagihan">
            Tagihan
        </Label>
        <Input
          type="text"
          name="pengeluaranPokok"
          id="pengeluaranPokok"
          placeholder="Biaya listrik, air, dan gas"
          value={props.pengeluaranPokok} // Prop: The username input data
          onChange={props.handleChange} // Prop: Puts data into the state
        />
        <Label for="tagihan">
        Transportasi
        </Label>
        <Input
          type="text"
          name="pengeluaranPokok"
          id="pengeluaranPokok"
          placeholder="Bensin atau biaya transportasi umum          "
          value={props.pengeluaranPokok} // Prop: The username input data
          onChange={props.handleChange} // Prop: Puts data into the state
        />
        <Label for="tagihan">
        Komunikasi
        </Label>
        <Input
          type="text"
          name="pengeluaranPokok"
          id="pengeluaranPokok"
          placeholder="Tagihan telepon dan internet        "
          value={props.pengeluaranPokok} // Prop: The username input data
          onChange={props.handleChange} // Prop: Puts data into the state
        />
        
      </FormGroup>
      <FormGroup>
        <Label for="pengeluaranPokok"><h5>Pengeluaran Gaya Hidup (Lifestyle)</h5> </Label>
        <div class="input-group mb-3">
        <Input
          type="text"
          name="pengeluaranPokok"
          id="pengeluaranPokok"
          placeholder="Pengeluaran Lifestyle"
          value={props.pengeluaranPokok} // Prop: The username input data
          onChange={props.handleChange} // Prop: Puts data into the state
        />
        <div class="input-group-append">
            <span class="input-group-text" id="basic-addon2"><a href="#">delete</a></span>
        </div>
        </div>

        <br></br>
<Button name='field'> Tambahkan field</Button>
      </FormGroup>
    </>
  );
}

export default Step2;
