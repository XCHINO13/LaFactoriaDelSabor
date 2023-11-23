export interface IReserva {
    id_rol?: number;
    id_usuario?: number;
    id_reserva?: any;
    nombre?: string;
    telefono?: string;
    cantPersonas?: string;
    fechaReserva?: string;
    horaReserva?: string;
    lugarReserva?: string;

    fechaSolicitud?: string;
    horaSolicitud?: string;
  }