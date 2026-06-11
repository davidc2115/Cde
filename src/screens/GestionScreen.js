import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';

export default function GestionScreen() {
  const [stats, setStats] = useState({
    totalItems: 0,
    storageUsed: '0 MB',
  });

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    try {
      setStats({
        totalItems: 5,
        storageUsed: '2.5 MB',
      });
    } catch (error) {
      console.error('Erreur chargement statistiques:', error);
    }
  };

  const handleAction = (action) => {
    Alert.alert('Action', `${action} - Fonctionnalité en développement`);
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#6366f1', paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }}>
      <ScrollView style={{ flex: 1, backgroundColor: '#f8f9fa' }}>
        <View style={{ padding: 20, paddingTop: 15, backgroundColor: '#6366f1' }}>
          <Text style={{ fontSize: 32, fontWeight: 'bold', color: '#fff' }}>⚙️ Gestion</Text>
          <Text style={{ fontSize: 14, color: '#e0e7ff', marginTop: 5 }}>
            Application CDE
          </Text>
        </View>

        {/* Statistiques */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>📊 Statistiques</Text>
          <View style={styles.statsGrid}>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>{stats.totalItems}</Text>
              <Text style={styles.statLabel}>Éléments</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>{stats.storageUsed}</Text>
              <Text style={styles.statLabel}>Stockage</Text>
            </View>
          </View>
        </View>

        {/* Actions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>🔧 Actions</Text>
          
          <TouchableOpacity style={styles.actionButton} onPress={() => handleAction('Exporter')}>
            <Text style={styles.actionIcon}>📤</Text>
            <Text style={styles.actionText}>Exporter</Text>
            <Text style={styles.actionArrow}>→</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton} onPress={() => handleAction('Importer')}>
            <Text style={styles.actionIcon}>📥</Text>
            <Text style={styles.actionText}>Importer</Text>
            <Text style={styles.actionArrow}>→</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton} onPress={() => handleAction('Vider cache')}>
            <Text style={styles.actionIcon}>🧹</Text>
            <Text style={styles.actionText}>Vider le cache</Text>
            <Text style={styles.actionArrow}>→</Text>
          </TouchableOpacity>
        </View>

        {/* Informations */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>ℹ️ Informations</Text>
          <View style={styles.infoBox}>
            <Text style={styles.infoText}>Version: 1.0.0</Text>
            <Text style={styles.infoText}>Application CDE</Text>
            <Text style={styles.infoText}>Menu Gestion uniquement</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    backgroundColor: '#fff',
    margin: 15,
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 15,
  },
  statsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statCard: {
    width: '48%',
    backgroundColor: '#f3f4f6',
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6366f1',
  },
  statLabel: {
    fontSize: 12,
    color: '#6b7280',
    marginTop: 5,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9fafb',
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  actionIcon: {
    fontSize: 24,
    marginRight: 15,
  },
  actionText: {
    flex: 1,
    fontSize: 16,
    color: '#1f2937',
  },
  actionArrow: {
    fontSize: 20,
    color: '#9ca3af',
  },
  infoBox: {
    backgroundColor: '#f9fafb',
    borderRadius: 8,
    padding: 15,
  },
  infoText: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 8,
  },
});
