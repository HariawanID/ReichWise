import React from 'react';
import { FormGroup, Label, Input, Button, Row, Col } from 'reactstrap';
import { useForm, useFieldArray, Controller } from "react-hook-form";


function Step1(props) {
  const { register, control, getValues, handleSubmit } = useForm({
    defaultValues: {
      pemasukan: [
        { fieldName: "Gaji Bulanan", fieldInput: ""},
        { fieldName: "Bisnis Usaha", fieldInput: ""}
    ],
    },
  });

  const { fields, remove, append } = useFieldArray({
    control,
    name: "pemasukan",
  });

  if (props.currentStep !== 1) {
    return null;
  }
  

  return (
    <div id='step1'>
      <h2>Dalam sebulan, berapa Pemasukanmu?</h2>
        <ul>
          <Row>
          <Col md={4}>
            {fields.map((item, index) => {
              return (
                <li key={item.id}>
                  <Input
                    placeholder="Kategori Pemasukan"
                    defaultValue={getValues(`pemasukan.${index}.fieldName`)}
                    {...register(`pemasukan.${index}.fieldName`)}
                  />

                  <Controller
                  
                    render={({ field }) => <Input 
                    type="number" placeholder="Jumlah" 
                    value={props.pemasukan}
                    onChange={props.handleChange}
                    {...field} 
                     
                    />}
                    control={control}
                    name={`pemasukan.${index}.fieldInput`}
                    defaultValue={getValues(`pemasukan.${index}.fieldInput`)}
                    
                  />

                  <Button className='mt-1 mb-3' color="danger" size="sm" type="Button" onClick={() => remove(index)}>
                    Delete
                  </Button>
                </li>
              );
            })}
          </Col>
          </Row>
        </ul>

      <section>
        <Button
          name="field"
          type="Button"
          onClick={() =>
            append()
          }
        >
          Tambahkan field
        </Button>
      </section>
    </div>
  );
}

export default Step1;
