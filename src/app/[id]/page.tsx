// URL type is always a string

type propsType = {
  params: { id: string };
};

// propType is shorthand for doing { params }:{params:{id: string}}
export default function DynamicRoutePage({ params }: propsType) {
  console.log(params);
  return (
    <div>
      <h2>Dynamic Route</h2>
      <p>This route is for every route besides home</p>
      <p> Current params are {params.id}</p>
    </div>
  );
}
