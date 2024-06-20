import React from 'react';
import { FormGroup, Label, Input, Button, Row, Col } from 'reactstrap';
import { useForm, useFieldArray, Controller } from "react-hook-form";

function Step2(props) {
  const { register, control, getValues } = useForm({
    defaultValues: {
      Hutang: [
        { fieldName: "KPR", fieldInput: ""},
        { fieldName: "Mobil", fieldInput: ""}
    ],
    },
  });

  const { fields, remove, append } = useFieldArray({
    control,
    name: "Hutang",
  });

  if (props.currentStep !== 4) {
    return null;
  }
  return (
    <div id='step4'>
      <h2>Asset Hutang</h2>
            <hr></hr>
        <ul>
          <Row>
          <Col md={4}>
            {fields.map((item, index) => {
              return (
                <li key={item.id}>
                  <Input
                    placeholder="Kategori Hutang"
                    defaultValue={getValues(`Hutang.${index}.fieldName`)}
                    {...register(`Hutang.${index}.fieldName`)}
                  />

                  <Controller
                    render={({ field }) => <Input type="number" placeholder="Jumlah dalam rupiah" {...field} />}
                    control={control}
                    name={`Hutang.${index}.fieldInput`} 
                    defaultValue={getValues(`Hutang.${index}.fieldInput`)}
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
