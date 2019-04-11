
export function PresentationFrutModel({ frutaModeloSelected }) {
  return <div className="box-presentation-frut-model">
    <div className="presentation-frut-model">
      <div className="cover" style={{
        backgroundImage: `url("${frutaModeloSelected.fields.cover.fields.file.url}")`,
      }}></div>
      <div className="title">{frutaModeloSelected.fields.titulo}</div>
      <div className="description">{frutaModeloSelected.fields.descripcion}</div>
    </div>
  </div>;
}
