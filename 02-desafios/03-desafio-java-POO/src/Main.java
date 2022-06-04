import br.com.dio.desafio.dominio.*;

import java.time.LocalDate;

public class Main {
    public static void main(String[]args) {
        Curso curso1 = new Curso();
        curso1.setTitulo("curso java");
        curso1.setDescricao("descricao curso java");
        curso1.setCargaHoraria(8);

        Curso curso2 = new Curso();
        curso2.setTitulo("curso js");
        curso2.setDescricao("descricao curso js");
        curso2.setCargaHoraria(4);

        Mentoria mentoria = new Mentoria();
        mentoria.setTitulo("mentoria de java");
        mentoria.setDescricao("descricao mentoria java");
        mentoria.setData(LocalDate.now());

        /*System.out.println(curso1);
        System.out.println(curso2);
        System.out.println(mentoria);*/

        Bootcamp bootcamp = new Bootcamp();
        bootcamp.setNome("Bootcamp Java Developer");
        bootcamp.setDescricao("Descrição Bootcamp Java Developer");
        bootcamp.getConteudos().add(curso1);
        bootcamp.getConteudos().add(curso2);
        bootcamp.getConteudos().add(mentoria);

        Dev devJuliana = new Dev();
        devJuliana.setNome("Juliana");
        devJuliana.inscreverBootcamp(bootcamp);
        System.out.println("Conteudos Inscritos Juliana" + devJuliana.getConteudosInscritos());
        devJuliana.progredir();
        devJuliana.progredir();
        System.out.println(".");
        System.out.println("Conteudos Inscritos Juliana" + devJuliana.getConteudosInscritos());
        System.out.println("Conteudos Concluidos Juliana" + devJuliana.getConteudosConcluidos());
        System.out.println("XP: " + devJuliana.calcularTotalXp());

        System.out.println("..........");

        Dev devAnderson = new Dev();
        devAnderson.setNome("Anderson");
        devAnderson.inscreverBootcamp(bootcamp);
        System.out.println("Conteudos Inscritos Anderson" + devAnderson.getConteudosInscritos());
        devAnderson.progredir();
        devAnderson.progredir();
        devAnderson.progredir();
        System.out.println(".");
        System.out.println("Conteudos Inscritos Anderson" + devAnderson.getConteudosInscritos());
        System.out.println("Conteudos Concluidos Anderson" + devAnderson.getConteudosConcluidos());
        System.out.println("XP: " + devAnderson.calcularTotalXp());
    }
}
