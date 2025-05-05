'use client';

import { useState } from 'react';

const ChecklistPage = () => {
  const [formData, setFormData] = useState({
    responsavel: '',
    forno: '',
    biomassa: '',
    registro: '',
    resfriamento: '',
    armazenamento: '',
    transporte: '',
    seguranca: '',
    observacoes: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Checklist enviado:', formData);
    alert('Checklist enviado com sucesso!');
  };

  return (
    <div style={{ maxWidth: 800, margin: 'auto', padding: 20 }}>
      <h1>Checklist de Pré-Auditoria – Artisan C-Sink</h1>
      <form onSubmit={handleSubmit}>
        <label>Responsável:</label>
        <input type="text" name="responsavel" value={formData.responsavel} onChange={handleChange} required />

        <label>1. O forno é do tipo aceito pela metodologia?</label>
        <input type="text" name="forno" value={formData.forno} onChange={handleChange} />

        <label>2. A biomassa usada é 100% renovável e de origem rastreável?</label>
        <input type="text" name="biomassa" value={formData.biomassa} onChange={handleChange} />

        <label>3. Há registro das carbonizações com data, volume e tipo de biomassa?</label>
        <input type="text" name="registro" value={formData.registro} onChange={handleChange} />

        <label>4. O biochar é resfriado com água limpa ou abafamento seguro?</label>
        <input type="text" name="resfriamento" value={formData.resfriamento} onChange={handleChange} />

        <label>5. O armazenamento é protegido de umidade e contaminação?</label>
        <input type="text" name="armazenamento" value={formData.armazenamento} onChange={handleChange} />

        <label>6. Há registros do transporte e rastreabilidade do biochar?</label>
        <input type="text" name="transporte" value={formData.transporte} onChange={handleChange} />

        <label>7. Os operadores receberam treinamento e EPI?</label>
        <input type="text" name="seguranca" value={formData.seguranca} onChange={handleChange} />

        <label>Observações:</label>
        <textarea name="observacoes" value={formData.observacoes} onChange={handleChange} rows={4} />

        <br />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default ChecklistPage;
