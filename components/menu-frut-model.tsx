import classNames from 'classnames';

export function MenuFrutModel({ frutPage, frutaModeloSelected, onSelect }) {
  return <div className="menu-frut">
    {frutPage.fields.frutasModelo.map((frutaModelo) => <div
      key={frutaModelo.sys.id}
      className={classNames('item-menu-frut', {
        'selected': frutaModelo.sys.id === frutaModeloSelected.sys.id,
      })}
      onClick={() => onSelect(frutaModelo)}
    >
      <div className="cover" style={{
        backgroundImage: `url("${frutaModelo.fields.cover.fields.file.url}")`
      }}></div>
      <div className="title">{frutaModelo.fields.titulo}</div>
    </div>)}
  </div>;
}
