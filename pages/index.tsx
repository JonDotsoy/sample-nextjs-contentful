import { frutPagePromise, PaginaEntry } from "../utils/usePageBestFruts";
import Head from 'next/head';
import './index.scss';
import { PresentationFrutModel } from "../components/presentation-frut-model";
import { MenuFrutModel } from "../components/menu-frut-model";
import { useFrutModelSelected } from "../utils/use-frut-model-selected";
import { FormSubscribe } from "../components/form-subscribe";

export const IndexPage = ({ frutPage }: { frutPage: PaginaEntry }) => {
  const { selected: frutaModeloSelected, select: selectFrutaModelo } = useFrutModelSelected(frutPage.fields.frutasModelo);

  return <div>
    <Head>
      <title>{frutPage.fields.titulo}</title>
      <meta name="keywords" content={frutPage.fields.palabrasClaves.join(', ')} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={frutPage.fields.descripcion} />
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />
    </Head>

    <header className="page-header">
      <div>
        <h1 className="title">{frutPage.fields.titulo}</h1>
        <div className="line-decorator"></div>
      </div>
    </header>

    <section className="frut-model-section">
      <div className="box">
        <div className="left-menu">
          <MenuFrutModel
            frutPage={frutPage}
            frutaModeloSelected={frutaModeloSelected}
            onSelect={selectFrutaModelo}
          />
        </div>
        <div className="right-presentation">
          <PresentationFrutModel
            frutaModeloSelected={frutaModeloSelected}
          />
        </div>
      </div>
    </section>

    <section className="form-subscribe-section">
      <FormSubscribe />
    </section>

  </div>;
}

IndexPage.getInitialProps = async () => ({
  frutPage: (await frutPagePromise).toPlainObject(),
});

export default IndexPage;
