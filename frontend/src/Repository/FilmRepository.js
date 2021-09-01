class FilmRepository{
#list; 
#incritos;
constructor()
{
    this.#list =[];
    this.#incritos =[];
}
inscrever(func)
{
    this.#incritos = [...this.#incritos,func]
}
desinscrever(func)
{
    this.#incritos.splice(this.#incritos.findIndex(func),1);
}
notificar()
{
    this.#incritos.forEach(insc => {insc(this.#list)});
}
create(film)
{
    this.#list = [...this.#list, film];
    console.log(this.#list);
    this.notificar();
}
listar()
{
    return this.#list;
}
}
export default FilmRepository;