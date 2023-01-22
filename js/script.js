function carregaDicionario() {
  var biografias = {
    bio01: {
      nome: "Marielle Franco",

      imagem: "https://th.bing.com/th/id/OIP.TWD9b6wWCKOn3LiTkkMmCgHaHa?pid=ImgDet&rs=1",

      descricao:
        "Marielle Francisco da Silva, conhecida como Marielle Franco, foi uma socióloga, feminista, militante dos direitos humanos e política brasileira. Filiada ao Partido Socialismo e Liberdade (PSOL), elegeu-se vereadora do Rio de Janeiro para a Legislatura 2017-2020, durante a eleição municipal de 2016, com a quinta maior votação. Crítica da intervenção federal no Rio de Janeiro e da Polícia Militar, denunciava constantemente abusos de autoridade por parte de policiais contra moradores de comunidades carentes. Em 14 de março de 2018, foi assassinada a tiros",

      citacao:
        "Quantos mais vão precisar morrer para que essa guerra aos pobres acabe?",
    },

    bio02: {
      nome: "Lélia Gonzalez",

      imagem: "https://i.postimg.cc/2q1f3GTG/lelia-gonzalez.png",

      descricao:
        "Lélia Gonzalez foi uma intelectual, política, professora e antropóloga brasileira. Ajudou a fundar instituições como o Movimento Negro Unificado (MNU), o Instituto de Pesquisas das Culturas Negras (IPCN), o Coletivo de Mulheres Negras N'Zinga e o Olodum. Sua militância em defesa da mulher negra levou-a ao Conselho Nacional dos Direitos da Mulher (CNDM), no qual atuou de 1985 a 1989. Foi candidata a deputada federal pelo PT, elegendo-se primeira suplente. Nas eleições seguintes, em 1986, candidatou-se a deputada estadual pelo PDT, novamente elegendo-se suplente.",

      citacao:
        "A gente não nasce negro, a gente se torna negro. É uma conquista dura, cruel e que se desenvolve pela vida da gente afora.",
    },

    bio03: {
      nome: "Angela Davis",

      imagem: "https://i.postimg.cc/LJ6SF21r/angela-davis.png",

      descricao:
        "Angela Yvonne Davis é uma professora e filósofa socialista estado-unidense que alcançou notoriedade mundial na década de 1970 como integrante do Partido Comunista dos Estados Unidos, dos Panteras Negras, por sua militância pelos direitos das mulheres e contra a discriminação social e racial nos Estados Unidos e por ser personagem de um dos mais polêmicos e famosos julgamentos criminais da recente história dos Estados Unidos.",

      citacao:
        "Não aceito mais as coisas que não posso mudar, estou mudando as coisas que não posso aceitar.",
    },

    bio04: {
      nome: "Conceição Evaristo",

      imagem: "https://i.postimg.cc/Z9XzNNMS/conceicao-evaristo.png",

      descricao:
        "Maria da Conceição Evaristo de Brito nasceu em Belo Horizonte, em 1946. De origem humilde, migrou para o Rio de Janeiro na década de 1970. Graduada em Letras pela UFRJ, trabalhou como professora da rede pública de ensino da capital fluminense. É Mestre em Literatura Brasileira pela PUC do Rio de Janeiro, com a dissertação Literatura Negra: uma poética de nossa afro-brasilidade (1996), e Doutora em Literatura Comparada na Universidade Federal Fluminense, com a tese Poemas malungos, cânticos irmãos (2011), na qual estuda as obras poéticas dos afro-brasileiros Nei Lopes e Edimilson de Almeida Pereira em confronto com a do angolano Agostinho Neto.",

      citacao:
        "O importante não é ser o primeiro ou primeira, o importante é abrir caminhos.",
    },

    bio05: {
      nome: "Carolina de Jesus",

      imagem: "https://i.postimg.cc/Fdc5VKMJ/carolina-de-jesus.png",

      descricao:
        "Carolina Maria de Jesus foi uma escritora brasileira, conhecida por seu livro Quarto de Despejo: Diário de uma Favelada publicado em 1960. Considerada uma das primeiras e mais importantes escritoras negras do Brasil. A autora viveu boa parte de sua vida na favela do Canindé, na zona norte de São Paulo, sustentando a si mesma e seus três filhos como catadora de papéis. Em 1958 tem seu diário publicado sob o nome Quarto de Despejo, com auxílio do jornalista Audálio Dantas. O livro fez um enorme sucesso e chegou a ser traduzido para quatorze línguas.",

      citacao:
        "Ah, comigo o mundo vai modificar-se. Não gosto do mundo como ele é.",
    },

    bio06: {
      nome: "Rosa Parks",

      imagem: "https://i.postimg.cc/K1q2Zw74/rosa-parks.png",

      descricao:
        "Rosa Louise McCauley, mais conhecida por Rosa Parks, foi uma costureira negra norte-americana, símbolo do movimento dos direitos civis dos negros nos Estados Unidos. Ficou famosa, em 1º de dezembro de 1955, por ter-se recusado frontalmente a ceder o seu lugar no ônibus a um branco, tornando-se o estopim do movimento que foi denominado boicote aos ônibus de Montgomery e posteriormente viria a marcar o início da luta antissegregacionista.",

      citacao:
        "⁠Você nunca deve ter medo do que está fazendo quando está certo.",
    },
    bio07: {
      nome: "Madam C. J. Walker",

      imagem:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Madam_CJ_Walker_face_circa_1914.jpg/300px-Madam_CJ_Walker_face_circa_1914.jpg",

      descricao:
        "Madam C. J. Walker foi uma empreendedora americana, filantropa e ativista política e social. Ela é registrada como a primeira mulher que se tornou milionária nos Estados Unidos no Guinness Book of World Records.",

      citacao:
        "⁠empreendedora norte-americana conhecida por ser a primeira milionária self made negra dos EUA.",
    },

    bio08: {
      nome: "Michelle Obama",

      imagem:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0iEtAvuqjn5O57RCcPDJsQ9svQqKhBRFY9Q&usqp=CAU",

      descricao:
        "uma advogada e autora americana que atuou como primeira-dama dos Estados Unidos de 2009 a 2017. Ela foi a primeira mulher afro-americana a ocupar esse cargo. Ela é casada com o ex-presidente Barack Obama .",

      citacao:
        "trabalhou como defensora da conscientização sobre a pobreza, educação, nutrição, atividade física e alimentação saudável. Ela apoiou designers americanos e foi considerada um ícone da moda.",
    },

    bio09: {
      nome: "Alice Walker",

      imagem:
        "https://static.significados.com.br/foto/walker-3-pulitzer-prize-winning-author-alice-walker.jpg",

      descricao:
        "A escritora, ativista e feminista Alice Walker ficou conhecida pela publicação do livro A cor púrpura, que conta a história de um abuso sexual, motivado pelo machismo e pela discriminação racial da sociedade americana. O livro recebeu os prêmios National Book Award e Pulitzer e a história foi adaptada para o cinema.",

      citacao:
        "Alice foi casada com Melvyn Leventhal, um advogado que atuava na área de direitos civis. Eles viveram no Mississipi e ficaram conhecidos por serem o primeiro casal inter-racial do estado.",
    },
  };

  var content = document.getElementById("content");

  for (var bio in biografias) {

    content.innerHTML +=

      '<div class="card">' +

      '<img src="' +

      biografias[bio].imagem +

      '"/>' +

      "<details>" +

      "<summary>" +

      biografias[bio].nome +

      "</summary>" +

      "<p>" +

      biografias[bio].descricao +

      "</p>" +

      "<blockquote><q>" +

      biografias[bio].citacao +

      "</q></blockquote>" +

      "</details></div>";

  }
}

carregaDicionario();
