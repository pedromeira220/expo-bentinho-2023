import { Footer } from '@/components/Footer'
import { Heading } from '@/components/Heading'
import { Paragraph } from '@/components/Paragraph'
import { WhiteSpace } from '@/components/WhiteSpace'

export default function BlogPost() {
  return (
    <div>
      <main className="w-full mb-24">
        <div className="grid grid-cols-2 h-screen">
          <div className="flex flex-col gap-6 justify-center pl-28 pr-16 h-full">
            <h1 className="text-gray-900 font-semibold text-5xl">
              Single Application e arquitetura orientada a serviços
            </h1>
            <Paragraph className="text-gray-600 text-xl">
              Explorando e apresentando as diferentes abordagens para o
              desenvolvimento de um software
            </Paragraph>
          </div>
          <div className="w-full h-full justify-stretch">
            <img
              alt="Cover image"
              src="https://wallpapercave.com/wp/wp4932286.jpg"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        <div className="max-w-[45rem] mx-auto mt-24">
          <div className="mb-5">
            <Heading>Introdução</Heading>
            <WhiteSpace size={16} />
          </div>

          <Paragraph>
            No desenvolvimento de software é muito comum utilizar diferentes
            abordagens para criar uma solução a um problema. Nem sempre vai
            existir a melhor maneira, aquela que vai resolver todos os
            problemas. Justamente pela diversidade formas distintas de fazer
            algo, cada uma delas possui suas particularidades e são aplicadas em
            diferentes contextos. É importante escolher a solução que atenda as
            necessidades e requerimentos do projeto, além da capacitação técnica
            do time, prazo, custo entre outros fatores.
          </Paragraph>

          <Paragraph>
            Neste artigo, iremos apresentar duas abordagens distintas no
            desenvolvimento de software: a construção de uma Single Application
            (aplicação única) e arquitetura orientada a serviços. Para cada,
            será destacados os conceitos, diferenças, vantagens e desvantagens,
            casos de usos, exemplos de implementação dentre outros tópicos.
          </Paragraph>

          <WhiteSpace size={32} />
          <Heading>O que é Front-end e Back-end</Heading>
          <WhiteSpace size={16} />

          <Paragraph>
            Antes de começar a realmente falar sobre as abordagens citadas,
            primeiro é necessário entender dois conceitos fundamentais no
            desenvolvimento de software. São eles, Back-end e Front-end. O nome
            já auto-sugere o que significam: Back-end (a ponta de traz) e
            Front-end (o lado da frente). Isso ajuda a entender as suas
            diferenças.
          </Paragraph>
          <Paragraph>
            O Front-end é tudo aquilo em que o usuário interage e modifica. Como
            já dito, é a parte da frente, a parte visual de um software. Ele é a
            interface gráfica, como menus de navegação, elementos de design,
            botões, imagens e gráficos, é o sistema o qual o usuário tem acesso.
            O Front-end pode lidar com interações (ou solicitações) básicas do
            usuário, como exibir um calendário ou verificar se uma pessoa
            inseriu um endereço de e-mail válido.
          </Paragraph>
          <Paragraph>
            Já o Back-end é o lado do servidor, ou seja, a ponta de traz, o
            sistema onde realmente fica armazenado as regras de negócio do
            aplicativo. É a ponta que cuida dos bastidores, do funcionamento
            estrutural de um software. Ou seja, gerencia o processamento e o
            envio de dados ao servidor, conexão com o banco de dados, envios de
            e-mail, cadastros de usuário, sistemas de métricas dentre outras
            responsabilidades.
          </Paragraph>

          <WhiteSpace size={48} />
          <img
            src="https://flyaps.com/blog/content/images/2020/05/Frame-37-1.png"
            className="rounded-xl"
          />
          <WhiteSpace size={48} />

          <Paragraph>
            Front-end e Back-end tratam-se de conceitos, e nem sempre vão ser
            aplicações diferentes para cada um. As vezes o mesmo time pode mexer
            nos dois sistemas, ou até mesmo o desenvolvedor. Eles tratam de
            ideias, e a maneira o qual separa as camadas da aplicação e podem
            estar juntos na mesma base de código ou não.
          </Paragraph>

          <WhiteSpace size={32} />
          <Heading>O que é Single Application</Heading>
          <WhiteSpace size={16} />

          <Paragraph>
            Uma single application (aplicação única) é um modelo de aplicação o
            qual o Back-end e o Front-end são integrados no mesmo sistema. Nele,
            a aplicação é tratada em uma única codebase, sem a distinção das
            camadas (apesar disso poder ser feito pela arquitetura imposta pelos
            devs).
          </Paragraph>
          <Paragraph>
            Uma Single Application combina o Front-end e o Back-end em um único
            código base. Isso pode simplificar o desenvolvimento, tornando-o
            mais direto e fácil de gerenciar. Ela permite também uma maior
            agilidade no desenvolvimento, visto que, todas as camadas são
            integradas na mesma codebase, o que permite que os programadores
            construam o sistema sem se preocupar com a comunicação entre pontas.
            Isso pode simplificar a construção do projeto, tornando-o mais
            direto e fácil de gerenciar.
          </Paragraph>
          <Paragraph>
            Por outro lado, à medida que a aplicação cresce, pode se tornar mais
            difícil de escalar a Single Application, pois todo o sistema está
            integrado em um único monólito. Outra desvantagem é que todo o
            sistema fica acoplado entre si, não podendo separa o Front-end do
            Back-end, e não ser conectado com outro cliente (como uma aplicação
            mobile). Conforme a aplicação cresce, a manutenção pode se tornar
            mais complexa, com mudanças em um ponto potencialmente afetando
            outros aspectos da aplicação. Isso também pode acarretar em
            dificuldade de colaboração, já que se torna mais difícil para
            equipes colaborarem na construção de uma Single Application, devido
            à complexidade e tamanho do código.
          </Paragraph>

          <WhiteSpace size={32} />
          <Heading>O que é uma arquitetura orientada a serviços</Heading>
          <WhiteSpace size={16} />

          <Paragraph>
            Uma aplicação que segue uma arquitetura orientada a serviços,
            utiliza um modelo de separação de responsabilidades, em que cada
            parte do sistema está desacoplado das outras e funciona de modo
            independente, mas podendo também se conectarem para o funcionamento
            completo do software.
          </Paragraph>

          <WhiteSpace size={48} />
          <img
            src="https://www.astera.com/wp-content/uploads/2020/01/rest.png"
            className="rounded-xl"
          />
          <WhiteSpace size={48} />

          <Paragraph>
            Diferentemente da Single Application, esta abordagem traz uma série
            de benefícios, principalmente pelo fato do Front-end e o Back-end
            serem isolados, o que acarreta em poder reutilizar o servidor em
            diferentes clientes (como uma aplicação web e mobile). Além disso,
            como é mais fácil adicionar, remover ou atualizar serviços de forma
            independente, torna a aplicação mais flexível e escalável. A
            modularidade dos serviços permite que a aplicação seja mais
            resistente a falhas, pois um problema em um serviço não afeta
            necessariamente todo o sistema.
          </Paragraph>
          <Paragraph>
            Porém, implementar uma arquitetura orientada a serviços pode ser
            mais complexo no início, pois requer o design e a gestão da
            aplicação mais estruturado. Também, a implementação e a manutenção
            de uma arquitetura orientada a serviços podem ser mais custosas,
            especialmente se não for cuidadosamente planejada e gerenciada.
          </Paragraph>

          <WhiteSpace size={32} />
          <Heading>Diferenças, vantagens e desvantagens</Heading>
          <WhiteSpace size={16} />

          <Paragraph>
            Durante o artigo, fica evidente que tanto a Single Application
            quanto a arquitetura orientada a serviços têm suas particularidades.
          </Paragraph>
          <Paragraph>
            A Single Application combina Front-end e Back-end em uma única
            codebase, proporcionando simplicidade e agilidade no
            desenvolvimento. Isso significa menos complexidade inicial e
            comunicação direta entre as partes. Entretanto, a medida que o
            projeto cresce, surgem desafios de escalabilidade e manutenção. A
            dificuldade de separar front-end e back-end pode limitar a
            reutilização e colaboração da equipe.
          </Paragraph>
          <Paragraph>
            Arquitetura Orientada a Serviços, por outro lado, promove a
            modularidade e independência entre componentes, facilitando a
            reutilização e a escalabilidade. Ela permite a integração com
            diferentes clientes e sistemas, tornando-a flexível e resistente a
            falhas. No entanto, essa abordagem inicialmente complexa requer
            planejamento cuidadoso e pode envolver custos mais elevados.
          </Paragraph>
          <Paragraph>
            Quando usar cada abordagem depende das necessidades do projeto. A
            Single Application é uma escolha viável para projetos menores e bem
            definidos, onde a simplicidade e a rapidez de desenvolvimento são
            importantes. Por outro lado, a arquitetura orientada a serviços é
            mais recomendada em cenários complexos, onde a escalabilidade, a
            reutilização e a integração com sistemas externos são fundamentais.
          </Paragraph>
          <Paragraph>
            Em última análise, não existe uma resposta única para qual é a
            melhor abordagem?. A escolha entre Single Application e AOS é uma
            questão de avaliar as necessidades específicas de cada projeto e
            considerar as vantagens e desvantagens de ambas as abordagens.
          </Paragraph>

          <WhiteSpace size={48} />
          <div className="bg-gray-50 p-8 rounded-2xl">
            <Heading size="h2">Conclusão</Heading>
            <WhiteSpace size={20} />
            <Paragraph>
              Durante este artigo é evidente que o desenvolvimento de software é
              um campo repleto de opções, onde não há uma abordagem única que
              sirva para todos os propósitos. Cada abordagem possui
              características específicas que as tornam especiais para serem
              usadas em diferentes sistemas.
            </Paragraph>
            <Paragraph>
              Ao escolher entre a construção de uma Single Application ou a
              adoção da arquitetura orientada a serviços, é essencial considerar
              as características do projeto. Cada abordagem possui suas
              vantagens e desvantagens, e a decisão final deve levar em conta
              requisitos, orçamento, equipe e outros fatores.
            </Paragraph>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
