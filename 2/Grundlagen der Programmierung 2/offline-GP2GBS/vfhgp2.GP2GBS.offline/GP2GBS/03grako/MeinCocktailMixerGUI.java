package LE08_grafischeBO;

import java.awt.Dimension;
import java.awt.Image;

import javax.swing.ImageIcon;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;

/**
 * Grafische Benutzeroberflaeche f�r das Cocktailmixer Programm.
 * 
 * @author skalt
 * @version 1.0, 07/2010
 */
public class MeinCocktailMixerGUI {

    /**
     * Main-Methode.
     * @param args Uebergabeparameter
     */
    public static void main(String[] args) {
        MeinCocktailMixerGUI cMixer = new MeinCocktailMixerGUI();
        // Benutzeroberflaeche initialisieren
        cMixer.initGUI();
    }
    
    /**
     * Methode zum Initialisieren der Benutzeroberflaeche (GUI).
     */
    private void initGUI() {
        JFrame cMixerFenster = new JFrame();
        // Fenstergroesse festlegen
        cMixerFenster.setSize(new Dimension(600, 400));
        // Fenstertitel setzen
        cMixerFenster.setTitle("Mein CocktailMixer");
        // Fensterposition auf die Mitte des Bildschirm festlegen
        cMixerFenster.setLocationRelativeTo(null);
        // Fenster sichtbar machen
        cMixerFenster.setVisible(true);
    }
}