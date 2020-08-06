import React from 'react';
import iconWhatsapp from '../../assets/images/icons/whatsapp.svg';
import './styles.css';
function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars1.githubusercontent.com/u/39604311?s=460&u=b8d2ffdf0a24065bcb1654b07fdcd04320a935e7&v=4" alt="João Pedro Theodoro Gaino" />
                <div>
                    <strong>João Pedro Theodoro Gaino</strong>
                    <span>Física</span>
                </div>
            </header>
            <p>
                Amante da física e da técnologia.
                    </p>
            <footer>
                <p>
                    Preço/hora
                            <strong>R$35.00</strong>
                </p>
                <button type="button">
                    <img src={iconWhatsapp} alt="Whatsapp" />
                            Entrar em contato.
                        </button>
            </footer>
        </article>
    )
}

export default TeacherItem;