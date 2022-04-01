
pipeline{
    agent any
    
    stages {
        
        stage("build client"){
            when{ expression {
                    def changeLogSets = currentBuild.changeSets
                    for (int i = 0; i < changeLogSets.size(); i++) {
                        def entries = changeLogSets[i].items
                        for (int j = 0; j < entries.length; j++) {
                            def entry = entries[j]
                            def files = new ArrayList(entry.affectedFiles)
                            for (int k = 0; k < files.size(); k++) {
                                def file = files[k]
                                if(file.path.contains("client")){
                                   return true
                                }
                            }
                            return false
                        }
                    }
                } 
            }
            steps{
                dir("SoccerStats"){
                    sh 'echo "Hubo cambios en cliente"'
                }
            }
        }
        stage("build equipo"){
            when{ expression {
                    def changeLogSets = currentBuild.changeSets
                    for (int i = 0; i < changeLogSets.size(); i++) {
                        def entries = changeLogSets[i].items
                        for (int j = 0; j < entries.length; j++) {
                            def entry = entries[j]
                            def files = new ArrayList(entry.affectedFiles)
                            for (int k = 0; k < files.size(); k++) {
                                def file = files[k]
                                if(file.path.contains("client")){
                                   return true
                                }
                            }
                            return false
                        }
                    }
                } 
            }
            steps{
                dir("SoccerStats"){
                    sh 'echo "Hubo cambios en equipo"'
                }
            }
        }
        stage("build partido"){
            when{ expression {
                    def changeLogSets = currentBuild.changeSets
                    for (int i = 0; i < changeLogSets.size(); i++) {
                        def entries = changeLogSets[i].items
                        for (int j = 0; j < entries.length; j++) {
                            def entry = entries[j]
                            def files = new ArrayList(entry.affectedFiles)
                            for (int k = 0; k < files.size(); k++) {
                                def file = files[k]
                                if(file.path.contains("client")){
                                   return true
                                }
                            }
                            return false
                        }
                    }
                } 
            }
            steps{
                dir("SoccerStats"){
                    sh 'echo "Hubo cambios en partido"'
                }
            }
        }
        stage("build competencia"){
            when{ expression {
                    def changeLogSets = currentBuild.changeSets
                    for (int i = 0; i < changeLogSets.size(); i++) {
                        def entries = changeLogSets[i].items
                        for (int j = 0; j < entries.length; j++) {
                            def entry = entries[j]
                            def files = new ArrayList(entry.affectedFiles)
                            for (int k = 0; k < files.size(); k++) {
                                def file = files[k]
                                if(file.path.contains("client")){
                                   return true
                                }
                            }
                            return false
                        }
                    }
                } 
            }
            steps{
                dir("SoccerStats"){
                    sh 'echo "Hubo cambios en competencia"'
                }
            }
        }
        stage("build estadio"){
            when{ expression {
                    def changeLogSets = currentBuild.changeSets
                    for (int i = 0; i < changeLogSets.size(); i++) {
                        def entries = changeLogSets[i].items
                        for (int j = 0; j < entries.length; j++) {
                            def entry = entries[j]
                            def files = new ArrayList(entry.affectedFiles)
                            for (int k = 0; k < files.size(); k++) {
                                def file = files[k]
                                if(file.path.contains("client")){
                                   return true
                                }
                            }
                            return false
                        }
                    }
                } 
            }
            steps{
                dir("SoccerStats"){
                    sh 'echo "Hubo cambios en estadio"'
                }
            }
        }
        stage("build director"){
            when{ expression {
                    def changeLogSets = currentBuild.changeSets
                    for (int i = 0; i < changeLogSets.size(); i++) {
                        def entries = changeLogSets[i].items
                        for (int j = 0; j < entries.length; j++) {
                            def entry = entries[j]
                            def files = new ArrayList(entry.affectedFiles)
                            for (int k = 0; k < files.size(); k++) {
                                def file = files[k]
                                if(file.path.contains("client")){
                                   return true
                                }
                            }
                            return false
                        }
                    }
                } 
            }
            steps{
                dir("SoccerStats"){
                    sh 'echo "Hubo cambios en director"'
                }
            }
        }
        stage("build jugador"){
            when{ expression {
                    def changeLogSets = currentBuild.changeSets
                    for (int i = 0; i < changeLogSets.size(); i++) {
                        def entries = changeLogSets[i].items
                        for (int j = 0; j < entries.length; j++) {
                            def entry = entries[j]
                            def files = new ArrayList(entry.affectedFiles)
                            for (int k = 0; k < files.size(); k++) {
                                def file = files[k]
                                if(file.path.contains("client")){
                                   return true
                                }
                            }
                            return false
                        }
                    }
                } 
            }
            steps{
                dir("SoccerStats"){
                    sh 'echo "Hubo cambios en jugador"'
                }
            }
        }
        stage("build noticia"){
            when{ expression {
                    def changeLogSets = currentBuild.changeSets
                    for (int i = 0; i < changeLogSets.size(); i++) {
                        def entries = changeLogSets[i].items
                        for (int j = 0; j < entries.length; j++) {
                            def entry = entries[j]
                            def files = new ArrayList(entry.affectedFiles)
                            for (int k = 0; k < files.size(); k++) {
                                def file = files[k]
                                if(file.path.contains("client")){
                                   return true
                                }
                            }
                            return false
                        }
                    }
                } 
            }
            steps{
                dir("SoccerStats"){
                    sh 'echo "Hubo cambios en noticia"'
                }
            }
        }
        stage("build prediccion"){
            when{ expression {
                    def changeLogSets = currentBuild.changeSets
                    for (int i = 0; i < changeLogSets.size(); i++) {
                        def entries = changeLogSets[i].items
                        for (int j = 0; j < entries.length; j++) {
                            def entry = entries[j]
                            def files = new ArrayList(entry.affectedFiles)
                            for (int k = 0; k < files.size(); k++) {
                                def file = files[k]
                                if(file.path.contains("client")){
                                   return true
                                }
                            }
                            return false
                        }
                    }
                } 
            }
            steps{
                dir("SoccerStats"){
                    sh 'echo "Hubo cambios en prediccion"'
                }
            }
        }
        stage("build autenticacion"){
            when{ expression {
                    def changeLogSets = currentBuild.changeSets
                    for (int i = 0; i < changeLogSets.size(); i++) {
                        def entries = changeLogSets[i].items
                        for (int j = 0; j < entries.length; j++) {
                            def entry = entries[j]
                            def files = new ArrayList(entry.affectedFiles)
                            for (int k = 0; k < files.size(); k++) {
                                def file = files[k]
                                if(file.path.contains("client")){
                                   return true
                                }
                            }
                            return false
                        }
                    }
                } 
            }
            steps{
                dir("SoccerStats"){
                    sh 'echo "Hubo cambios en autenticacion"'
                }
            }
        }
        stage("build administrador"){
            when{ expression {
                    def changeLogSets = currentBuild.changeSets
                    for (int i = 0; i < changeLogSets.size(); i++) {
                        def entries = changeLogSets[i].items
                        for (int j = 0; j < entries.length; j++) {
                            def entry = entries[j]
                            def files = new ArrayList(entry.affectedFiles)
                            for (int k = 0; k < files.size(); k++) {
                                def file = files[k]
                                if(file.path.contains("client")){
                                   return true
                                }
                            }
                            return false
                        }
                    }
                } 
            }
            steps{
                dir("SoccerStats"){
                    sh 'echo "Hubo cambios en administrador"'
                }
            }
        }
        stage("build empleado"){
            when{ expression {
                    def changeLogSets = currentBuild.changeSets
                    for (int i = 0; i < changeLogSets.size(); i++) {
                        def entries = changeLogSets[i].items
                        for (int j = 0; j < entries.length; j++) {
                            def entry = entries[j]
                            def files = new ArrayList(entry.affectedFiles)
                            for (int k = 0; k < files.size(); k++) {
                                def file = files[k]
                                if(file.path.contains("client")){
                                   return true
                                }
                            }
                            return false
                        }
                    }
                } 
            }
            steps{
                dir("SoccerStats"){
                    sh 'echo "Hubo cambios en empleado"'
                }
            }
        }
        stage("build pais"){
            when{ expression {
                    def changeLogSets = currentBuild.changeSets
                    for (int i = 0; i < changeLogSets.size(); i++) {
                        def entries = changeLogSets[i].items
                        for (int j = 0; j < entries.length; j++) {
                            def entry = entries[j]
                            def files = new ArrayList(entry.affectedFiles)
                            for (int k = 0; k < files.size(); k++) {
                                def file = files[k]
                                if(file.path.contains("client")){
                                   return true
                                }
                            }
                            return false
                        }
                    }
                } 
            }
            steps{
                dir("SoccerStats"){
                    sh 'echo "Hubo cambios en pais"'
                }
            }
        }

    }
}
