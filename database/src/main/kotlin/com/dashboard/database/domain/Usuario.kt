package com.dashboard.database.domain

import jakarta.persistence.Entity
import jakarta.persistence.Id
import jakarta.persistence.Table

@Entity
@Table(name="tb_usuario")
abstract class Usuario {
    @Id
    val id: Long? = null

    val login: String? = null

    val password: String? = null
}
