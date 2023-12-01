"use client"

import style from "./pagamento.module.css"
import Image from "next/image"
import BarraMenuPagamento from "./cabecaPagamento"
import { RefObject, useRef } from "react"

export default function Pagemento(){

    let etapa2: RefObject<HTMLDivElement> = useRef(null)
    let etapa1: RefObject<HTMLDivElement> = useRef(null)

    return(
        <div>
            <BarraMenuPagamento/>
            <div className={style.infos}>
                <div className={style.informacoes}>
                    <div className={style.organizarEtapas}>
                        
                        <div>
                            <p className={style.etapa}>Etapa 1</p>
                            <div ref={etapa1} className={style.confirmado}>
                                <Image src="/Image/sinalDeConfirmado.svg" height={15} width={15} alt="" />
                            </div>
                        </div>

                        <div>
                            <p className={style.etapa1}>Etapa 2</p>
                            <div ref={etapa1} className={style.confirmado1}>
                                <Image src="/Image/sinalDeNaoConfirmado.svg" height={15} width={15} alt="" />
                            </div>
                        </div>

                        <div className={style.barraProgresso}></div>
                
                        <div>
                            <p className={style.etapa}>Etapa 3</p>
                            <div ref={etapa2} className={style.naoConfirmado}>
                                <Image src="/Image/sinalDeNaoConfirmado.svg" height={15} width={15} alt="" />
                            </div>
                        </div>

                    </div>
                    <div className={style.organizar}>
                        <input className={style.campoInput} placeholder="Digite seu email pessoal"/>
                        <input className={style.campoInput} placeholder="Nome completo"/>
                        <input className={style.campoInput} placeholder="Digite seu email pessoal"/>
                        <input className={style.campoInput} placeholder="Nome completo"/>
                        <input className={style.campoInput} placeholder="Digite seu email pessoal"/>
                        <input className={style.campoInput} placeholder="Nome completo"/>
                        <input className={style.botaoAvancar} type="button" value="Avançar"/>
                    </div>

                </div>
                <div className={style.produtoInformacoes}>
                    <div style={{display:"flex", alignItems:"center", marginTop: "25px", flexDirection:"column"}}>
                        <div className={style.imagemProdInfo}>
                            <Image src="/Image/" height={15} width={15} alt="" />
                        </div>
                        <p className={style.nomeProdInfo}>Trator de Brinquedo</p>
                    </div>

                    <p className={style.arrumarNome}>Informações Pessoais</p>
                    <div>
                        <p></p>
                        <p></p>
                        <p></p>
                        <p></p>
                    </div>
                    <p className={style.arrumarNome}>Endereço de Entrega</p>
                    <div>
                        <p></p>
                    </div>
                    <p className={style.arrumarNome}>Informações de Pagamento</p>
                    <div>
                        <p></p>
                        <p></p>
                    </div>
                    <p className={style.valorProdInfo}>R$ 78,99</p>
                </div>
            </div>
        </div>
    )    
}