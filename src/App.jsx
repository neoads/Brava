import Header from './components/Header';
import conspiraPizzaImage from './assets/conspira_pizza.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="container mx-auto p-4">
        <section className="my-8 text-center">
          <img src={conspiraPizzaImage} alt="Brava Marketing LTDA" className="mx-auto mb-4 w-48 h-48" />
          <h1 className="text-4xl font-bold">Brava Marketing LTDA</h1>
          <h2 className="text-2xl mb-8">60.852.337/0001-59</h2>
          <h2 className="text-3xl font-bold mb-4">NOSSA MISSÃO:</h2>
          <p className="text-lg italic max-w-3xl mx-auto">
            "Oferecer soluções de marketing inovadoras e eficazes, transformando marcas e negócios através de estratégias personalizadas e criativas. Com foco na excelência e resultados, buscamos superar as expectativas dos nossos clientes através de um atendimento especializado, campanhas impactantes e design inspirador, sempre com transparência e comprometimento. Nossa missão é ajudar empresas a crescer e se destacar no mercado, criando conexões autênticas com seus públicos-alvo."
          </p>
        </section>

        <section className="my-8 text-center">
          <h2 className="text-3xl font-bold mb-4">CONTATO:</h2>
          <p className="text-lg">Telefone: (31) 973198749</p>
          <p className="text-lg">E-mail: contate@corssar.com</p>
        </section>

        <section className="my-8 text-center">
          <h2 className="text-3xl font-bold mb-4">QUEM SOMOS?</h2>
          <p className="text-lg max-w-3xl mx-auto text-justify">
            A <strong className="font-bold">Brava Marketing LTDA</strong>, registrada sob o CNPJ <strong className="font-bold">60.852.337/0001-59</strong>, foi fundada em <strong className="font-bold">15 de maio de 2025</strong>, na cidade de <strong className="font-bold">São Paulo, São Paulo</strong>. Como uma empresa nova e dinâmica no mercado, atuamos no segmento de <strong className="font-bold">marketing digital e estratégico</strong>, oferecendo soluções que unem <strong className="font-bold">criatividade, estratégia e resultados</strong> para transformar negócios em marcas de sucesso.
          </p>
          <p className="text-lg max-w-3xl mx-auto text-justify mt-4">
            Nossa atividade principal abrange <strong className="font-bold">serviços de marketing, publicidade e comunicação</strong>, desde campanhas digitais até estratégias de branding que complementam e personalizam cada projeto. Mesmo sendo uma empresa recente, com <strong className="font-bold">4 meses e 15 dias de operação</strong>, nos destacamos pela <strong className="font-bold">inovação, agilidade e atendimento personalizado</strong>, sempre buscando atender às necessidades específicas de cada cliente.
          </p>
          <p className="text-lg max-w-3xl mx-auto text-justify mt-4">
            Localizada na <strong className="font-bold">Avenida Eng Luiz Carlos Berrini, 1681, Conj Sala 111 e 112 Anexo 2197, Cidade Moncoes, São Paulo-SP (CEP 04571-011)</strong>, nossa agência está estrategicamente posicionada em uma das principais regiões empresariais de São Paulo. Valorizamos a <strong className="font-bold">transparência, a criatividade e a satisfação do cliente</strong>, garantindo que cada projeto seja executado com excelência e foco em resultados.
          </p>
          <p className="text-lg max-w-3xl mx-auto text-justify mt-4">
            Na <strong className="font-bold">Brava Marketing LTDA</strong>, acreditamos que <strong className="font-bold">uma boa estratégia de marketing reflete a paixão e o conhecimento de quem a desenvolve</strong>. Por isso, nosso compromisso vai além da prestação de serviços: queremos ajudar você a criar <strong className="font-bold">conexões autênticas, campanhas impactantes e resultados mensuráveis</strong>, seja para pequenas empresas ou grandes corporações.
          </p>
        </section>

        <section className="my-8 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Produtos e Serviços Disponíveis:</h3>
          <ul className="list-disc list-inside text-lg text-left">
            <li><strong className="font-bold">Marketing Digital</strong> – Estratégias que combinam <strong className="font-bold">inovação, criatividade e resultados</strong>.</li>
            <li><strong className="font-bold">Branding e Identidade Visual</strong> – Criação e fortalecimento de marcas impactantes.</li>
            <li><strong className="font-bold">Campanhas Publicitárias</strong> – Desenvolvimento de campanhas eficazes para diversos canais.</li>
            <li><strong className="font-bold">Consultoria Estratégica</strong> – Orientação especializada para crescimento de negócios.</li>
            <li><strong className="font-bold">Atendimento Personalizado</strong> – Soluções sob medida para cada cliente e projeto.</li>
          </ul>
        </section>

        <section className="my-8 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Informações da Empresa:</h3>
          <ul className="list-disc list-inside text-lg text-left">
            <li><strong className="font-bold">Razão Social:</strong> Brava Marketing LTDA</li>
            <li><strong className="font-bold">Nome Fantasia:</strong> Brava</li>
            <li><strong className="font-bold">CNPJ:</strong> 60.852.337/0001-59</li>
            <li><strong className="font-bold">Data de Abertura:</strong> 15/05/2025 (há 4 meses 15 dias)</li>
            <li><strong className="font-bold">Porte:</strong> Micro Empresa</li>
            <li><strong className="font-bold">Natureza Jurídica:</strong> Sociedade Empresária Limitada</li>
            <li><strong className="font-bold">Opção pelo MEI:</strong> Não</li>
            <li><strong className="font-bold">Opção pelo Simples:</strong> Sim</li>
            <li><strong className="font-bold">Data opção Simples:</strong> 15/05/2025</li>
            <li><strong className="font-bold">Situação Cadastral:</strong> Ativa</li>
            <li><strong className="font-bold">Data Situação Cadastral:</strong> 15/05/2025</li>
            <li><strong className="font-bold">Tipo:</strong> Matriz</li>
            <li><strong className="font-bold">Capital Social:</strong> R$ 10.000,00</li>
          </ul>
        </section>

        <section className="my-8 max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Localização e Contato:</h3>
          <p className="text-lg">📍 <strong className="font-bold">Endereço:</strong> Avenida Eng Luiz Carlos Berrini, 1681, Conj Sala 111 e 112 Anexo 2197, Cidade Moncoes, São Paulo-SP, <strong className="font-bold">CEP 04571-011</strong></p>
          <p className="text-lg">📞 <strong className="font-bold">Telefone/WhatsApp:</strong> <a href="https://wa.me/5531973198749" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">(31) 973198749</a></p>
          <p className="text-lg">📧 <strong className="font-bold">E-mail:</strong> <a href="mailto:contate@corssar.com" className="text-blue-500 hover:underline">contate@corssar.com</a></p>
          <p className="text-lg mt-4">Na <strong className="font-bold">Brava Marketing LTDA</strong>, estamos prontos para ajudar você a <strong className="font-bold">transformar sua marca e alcançar resultados extraordinários</strong>. Entre em contato e descubra como <strong className="font-bold">uma estratégia bem desenvolvida pode revolucionar seu negócio!</strong> 🚀✨</p>
        </section>

        <section className="my-8 max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Endereço para Correspondência:</h3>
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-lg font-semibold">Brava Marketing LTDA</p>
            <p className="text-lg">Avenida Eng Luiz Carlos Berrini 1681</p>
            <p className="text-lg">Conj Sala 111 e 112 Anexo 2197</p>
            <p className="text-lg">Cidade Moncoes</p>
            <p className="text-lg">São Paulo SP</p>
            <p className="text-lg">04571-011</p>
          </div>
        </section>

        <section className="my-8 text-center">
          <a href="https://wa.me/5531973198749" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline"><h2 className="text-3xl font-bold mb-4">Fale conosco:</h2></a>
          {/* Formulário de contato ou link para WhatsApp */}
        </section>
      </main>

      <footer className="bg-gray-800 text-white p-8 mt-8">
        <div className="container mx-auto max-w-3xl">
          <h3 className="text-xl font-bold mb-4">RODAPÉ & POLÍTICA DE PRIVACIDADE</h3>
          <h4 className="text-lg font-bold mb-2">Brava Marketing LTDA</h4>
          <p className="text-sm"><strong>CNPJ:</strong> 60.852.337/0001-59</p>
          <p className="text-sm"><strong>Razão Social:</strong> BRAVA MARKETING LTDA</p>
          <p className="text-sm"><strong>Nome Fantasia:</strong> Brava</p>
          <p className="text-sm"><strong>Data de Abertura:</strong> 15/05/2025</p>
          <p className="text-sm"><strong>Porte:</strong> Micro Empresa</p>
          <p className="text-sm"><strong>Natureza Jurídica:</strong> Sociedade Empresária Limitada</p>
          <p className="text-sm"><strong>Situação Cadastral:</strong> Ativa</p>
          <p className="text-sm"><strong>Tipo:</strong> Matriz</p>
          <p className="text-sm"><strong>Capital Social:</strong> R$ 10.000,00</p>
          <p className="text-sm"><strong>Endereço:</strong> Avenida Eng Luiz Carlos Berrini, 1681, Conj Sala 111 e 112 Anexo 2197, Cidade Moncoes, São Paulo-SP</p>
          <p className="text-sm"><strong>CEP:</strong> 04571-011</p>
          <p className="text-sm"><strong>E-mail:</strong> contate@corssar.com</p>
          <p className="text-sm"><strong>Telefone/WhatsApp:</strong> (31) 973198749</p>
          <p className="text-sm italic mt-4">Transformando marcas e negócios desde 2025</p>

          <h4 className="text-lg font-bold mt-8 mb-2">POLÍTICA DE PRIVACIDADE</h4>
          <p className="text-sm"><strong>Brava Marketing LTDA</strong></p>
          <p className="text-sm"><strong>CNPJ:</strong> 60.852.337/0001-59</p>
          <p className="text-sm"><strong>Endereço:</strong> Avenida Eng Luiz Carlos Berrini, 1681, Conj Sala 111 e 112 Anexo 2197, Cidade Moncoes, São Paulo-SP, CEP 04571-011</p>

          <h5 className="text-md font-bold mt-4 mb-2">1. Finalidade</h5>
          <p className="text-sm">Esta política descreve como coletamos, utilizamos e protegemos os dados pessoais dos clientes que interagem conosco por meio de WhatsApp, e-mail, telefone, redes sociais ou durante reuniões presenciais em nossa agência.</p>

          <h5 className="text-md font-bold mt-4 mb-2">2. Dados Coletados</h5>
          <ul className="list-disc list-inside text-sm ml-4">
            <li><strong className="font-bold">Informações fornecidas voluntariamente:</strong>
              <ul className="list-disc list-inside text-sm ml-4">
                <li>Nome, telefone, e-mail, endereço da empresa (para orçamentos e propostas).</li>
                <li>Informações sobre o negócio e necessidades de marketing.</li>
              </ul>
            </li>
            <li><strong className="font-bold">Dados automáticos:</strong>
              <ul className="list-disc list-inside text-sm ml-4">
                <li>Registro de interações para atendimento e melhoria de serviços.</li>
                <li>Dados de navegação (se aplicável a site ou redes sociais).</li>
              </ul>
            </li>
          </ul>

          <h5 className="text-md font-bold mt-4 mb-2">3. Uso de WhatsApp, Telefone e E-mail</h5>
          <ul className="list-disc list-inside text-sm ml-4">
            <li><strong className="font-bold">Finalidades:</strong>
              <ul className="list-disc list-inside text-sm ml-4">
                <li>Atendimento ao cliente, orçamentos, agendamento de reuniões e acompanhamento de projetos.</li>
                <li>Não enviamos mensagens promocionais não solicitadas sem consentimento.</li>
              </ul>
            </li>
            <li><strong className="font-bold">Armazenamento:</strong>
              <ul className="list-disc list-inside text-sm ml-4">
                <li>Dados de contato e interações são armazenados por <strong className="font-bold">12 meses</strong>, exceto quando exigido por lei.</li>
              </ul>
            </li>
          </ul>

          <h5 className="text-md font-bold mt-4 mb-2">4. Compartilhamento de Dados</h5>
          <ul className="list-disc list-inside text-sm ml-4">
            <li>Não comercializamos ou compartilhamos dados com terceiros para fins publicitários.</li>
            <li><strong className="font-bold">Exceções:</strong>
              <ul className="list-disc list-inside text-sm ml-4">
                <li>Parceiros de serviços (apenas informações necessárias para execução de projetos).</li>
                <li>Autoridades legais, mediante requisição formal.</li>
              </ul>
            </li>
          </ul>

          <h5 className="text-md font-bold mt-4 mb-2">5. Direitos do Usuário (LGPD)</h5>
          <p className="text-sm">Você pode solicitar:</p>
          <ul className="list-disc list-inside text-sm ml-4">
            <li>Acesso ou correção dos seus dados.</li>
            <li>Exclusão (exceto quando a lei exigir retenção).</li>
            <li>Revogação de consentimento (via e-mail ou telefone).</li>
          </ul>

          <h5 className="text-md font-bold mt-4 mb-2">6. Segurança</h5>
          <ul className="list-disc list-inside text-sm ml-4">
            <li>Dados protegidos com acesso restrito à equipe autorizada.</li>
            <li>Não solicitamos informações sensíveis (como CPF ou dados bancários) por mensagens não criptografadas.</li>
          </ul>

          <h5 className="text-md font-bold mt-4 mb-2">7. Alterações nesta Política</h5>
          <p className="text-sm">Atualizações serão comunicadas em nossos canais oficiais.</p>

          <h5 className="text-md font-bold mt-4 mb-2">8. Contato</h5>
          <p className="text-sm">Dúvidas ou solicitações sobre seus dados?</p>
          <ul className="list-disc list-inside text-sm ml-4">
            <li><strong className="font-bold">WhatsApp:</strong> (31) 973198749</li>
            <li><strong className="font-bold">E-mail:</strong> contate@corssar.com</li>
          </ul>
          <p className="text-sm mt-4">© 2025 Brava Marketing LTDA. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
