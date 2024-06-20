import React from 'react';
import { FormGroup, Label, Input, Button, Row, Col } from 'reactstrap';
import { useForm, useFieldArray, Controller } from "react-hook-form";

function Step2(props) {
  const { register, control, getValues, handleSubmit } = useForm({
    defaultValues: {
      PengeluaranPremier: [
        { fieldName: "Tagihan", fieldInput: ""},
        { fieldName: "Transportasi", fieldInput: ""}
    ],
    PengeluaranSekunder: [
      { fieldName: "Pengeluaran belanja", fieldInput: ""},
      { fieldName: "Pengeluaran hiburan", fieldInput: ""}
   ],
    },
  });

  const { fields, remove, append } = useFieldArray({
    control,
    name: "PengeluaranPremier",
    namez: "PengeluaranSekunder",
  });

  const onSubmit = (data) => console.log("data", data);

  if (props.currentStep !== 2) {
    return null;
  }
  return (
    <div id='step2'>
      <h2>Dalam sebulan, berapa Pengeluaran?</h2>
            <hr></hr>
        <ul>
          <Row>
          <Col md={4}>
            {fields.map((item, index) => {
              return (
                <li key={item.id}>
                  <Input
                    placeholder="Kategori Pengeluaran"
                    defaultValue={getValues(`PengeluaranPremier.${index}.fieldName`)}
                    {...register(`PengeluaranPremier.${index}.fieldName`)}
                  />

                  <Controller
                    render={({ field }) => <Input type="number" placeholder="Jumlah" {...field} />}
                    control={control}
                    name={`PengeluaranPremier.${index}.fieldInput`} 
                    defaultValue={getValues(`PengeluaranPremier.${index}.fieldInput`)}
                  />

                  <Button className='mt-1 mb-3' color="danger" size="sm" type="Button" onClick={() => remove(PengeluaranSekunder.index)}>
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

export default Step2;
