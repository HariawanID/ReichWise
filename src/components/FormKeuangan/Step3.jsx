import React from 'react';
import { FormGroup, Label, Input, Button, Row, Col } from 'reactstrap';
import { useForm, useFieldArray, Controller } from "react-hook-form";

function Step2(props) {
  const { register, control, getValues, handleSubmit } = useForm({
    defaultValues: {
      Investasi: [
        { fieldName: "Emas", fieldInput: ""},
        { fieldName: "Saham", fieldInput: ""}
    ],
    },
  });

  const { fields, remove, append } = useFieldArray({
    control,
    name: "Investasi",
  });

  const onSubmit = (data) => console.log("data", data);

  if (props.currentStep !== 3) {
    return null;
  }
  return (
    <div id='step3'>
      <h2>Asset Investasi</h2>
            <hr></hr>
        <ul>
          <Row>
          <Col md={4}>
            {fields.map((item, index) => {
              return (
                <li key={item.id}>
                  <Input
                    placeholder="Kategori Investasi"
                    defaultValue={getValues(`Investasi.${index}.fieldName`)}
                    {...register(`Investasi.${index}.fieldName`)}
                  />

                  <Controller
                    render={({ field }) => <Input type="number" placeholder="Jumlah dalam rupiah" {...field} />}
                    control={control}
                    name={`Investasi.${index}.fieldInput`} 
                    defaultValue={getValues(`Investasi.${index}.fieldInput`)}
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
